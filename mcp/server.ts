// Servidor MCP (stdio) da UI Motion: expõe o registry/ ao Claude.
// Conectar: claude mcp add ui-motion -s user -- node <caminho>/mcp/server.ts
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { categories } from "../registry/categories.ts";

type Meta = { slug: string; name: string; category: string; description: string; tags: string[] };

const registry = join(import.meta.dirname, "..", "registry");
// relido a cada chamada: animações novas aparecem após `npm run registry`, sem reiniciar o servidor
const load = (): Meta[] => JSON.parse(readFileSync(join(registry, "index.json"), "utf8"));
const norm = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
const line = (a: Meta) => `- ${a.slug} — ${a.name} [${a.category}]: ${a.description} (tags: ${a.tags.join(", ")})`;

const server = new McpServer({ name: "ui-motion", version: "0.1.0" });

server.registerTool(
  "list_categories",
  {
    description: "Lista as categorias da biblioteca de animações UI Motion, com quantas animações cada uma tem.",
    annotations: { readOnlyHint: true },
  },
  () => {
    const all = load();
    return text(
      categories
        .map((c) => `- ${c.slug} — ${c.name}: ${c.description} (${all.filter((a) => a.category === c.slug).length} animações)`)
        .join("\n"),
    );
  },
);

server.registerTool(
  "search_animations",
  {
    description:
      "Busca animações de UI (CSS + React) por palavras no nome, tags e descrição, opcionalmente filtrando por categoria. Sem query, lista todas. Depois use get_animation com o slug para pegar o código.",
    inputSchema: {
      query: z.string().optional().describe("Palavras-chave, ex: 'fade', 'botão', 'loader', 'texto neon'"),
      category: z.enum(categories.map((c) => c.slug) as [string, ...string[]]).optional().describe("Slug da categoria (ver list_categories)"),
    },
    annotations: { readOnlyHint: true },
  },
  ({ query = "", category }) => {
    const terms = norm(query).split(/\s+/).filter(Boolean);
    const hits = load().filter(
      (a) => (!category || a.category === category) && terms.every((t) => norm([a.slug, a.name, a.description, a.category, ...a.tags].join(" ")).includes(t)),
    );
    return text(hits.length ? hits.map(line).join("\n") : "Nenhuma animação encontrada. Tente uma palavra mais curta ou veja list_categories.");
  },
);

server.registerTool(
  "get_animation",
  {
    description:
      "Retorna o código pronto de uma animação: CSS puro (classe + keyframes, com exemplo de HTML no topo) e/ou componente React que importa ./animation.css.",
    inputSchema: {
      slug: z.string().describe("Slug retornado por search_animations, ex: 'fade-in-up'"),
      format: z.enum(["css", "react", "both"]).default("both").describe("css = só CSS/HTML, react = só componente, both = os dois"),
    },
    annotations: { readOnlyHint: true },
  },
  ({ slug, format }) => {
    // o slug só vira caminho depois de existir no índice (bloqueia ../)
    const meta = load().find((a) => a.slug === slug);
    if (!meta) return { ...text(`Animação "${slug}" não existe. Use search_animations para achar o slug.`), isError: true };

    const file = (f: string) => readFileSync(join(registry, "animations", slug, f), "utf8");
    const parts = [`# ${meta.name} (${meta.slug})\n${meta.description}\nCategoria: ${meta.category} · tags: ${meta.tags.join(", ")}`];
    if (format !== "react") parts.push("## animation.css\n```css\n" + file("animation.css") + "```");
    if (format !== "css") parts.push("## Animation.tsx\n```tsx\n" + file("Animation.tsx") + "```");
    parts.push(
      format === "css"
        ? "Uso: cole o CSS no projeto e use o HTML do comentário no topo."
        : "Uso: salve animation.css ao lado do componente (o .tsx faz import \"./animation.css\"). Respeita prefers-reduced-motion.",
    );
    return text(parts.join("\n\n"));
  },
);

await server.connect(new StdioServerTransport());
