// Gera registry/index.json (lido pelo site e pelo MCP) e registry/components.generated.ts.
// Rodar: npm run registry (roda sozinho antes de dev/build)
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { categories } from "../registry/categories.ts";

const root = join(import.meta.dirname, "..", "registry");
const dir = join(root, "animations");
const validCategories = new Set(categories.map((c) => c.slug));

const slugs = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const index = slugs.map((slug) => {
  const fail = (msg: string) => {
    throw new Error(`registry/animations/${slug}: ${msg}`);
  };
  for (const f of ["meta.json", "animation.css", "Animation.tsx"]) {
    if (!existsSync(join(dir, slug, f))) fail(`falta ${f}`);
  }
  const meta = JSON.parse(readFileSync(join(dir, slug, "meta.json"), "utf8"));
  if (typeof meta.name !== "string" || typeof meta.description !== "string") fail("meta.json precisa de name e description");
  if (!Array.isArray(meta.tags)) fail("meta.json precisa de tags (array)");
  if (!validCategories.has(meta.category)) fail(`categoria inválida "${meta.category}"`);
  // shortcut: sem "added" no meta.json, usa a data de criação do arquivo (muda num clone novo); fixe "added" no meta se precisar de ordem estável
  const added = meta.added ?? statSync(join(dir, slug, "meta.json")).birthtime.toISOString();
  return { slug, ...meta, added };
});

writeFileSync(join(root, "index.json"), JSON.stringify(index, null, 2) + "\n");

const id = (slug: string) => "A_" + slug.replace(/-/g, "_");
writeFileSync(
  join(root, "components.generated.ts"),
  `// gerado por scripts/build-registry.ts — não editar
import type { ComponentType } from "react";
${slugs.map((s) => `import ${id(s)} from "./animations/${s}/Animation";`).join("\n")}

// cada animação tem props próprias; o site só passa children (demo) quando meta.demo existe
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: Record<string, ComponentType<any>> = {
${slugs.map((s) => `  "${s}": ${id(s)},`).join("\n")}
};
`,
);

console.log(`registry: ${index.length} animações`);
