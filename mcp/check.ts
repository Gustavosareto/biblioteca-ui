// Self-check do servidor MCP: npm run mcp:check
import assert from "node:assert/strict";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const client = new Client({ name: "ui-motion-check", version: "0" });
await client.connect(new StdioClientTransport({ command: process.execPath, args: [join(import.meta.dirname, "server.ts")] }));

const call = async (name: string, args: Record<string, unknown> = {}) => {
  const res = await client.callTool({ name, arguments: args });
  return { text: (res.content as { text: string }[])[0].text, isError: res.isError };
};

const { tools } = await client.listTools();
assert.deepEqual(tools.map((t) => t.name).sort(), ["get_animation", "list_categories", "search_animations"]);

assert.match((await call("list_categories")).text, /carregamentos — Carregamentos/);
assert.match((await call("search_animations", { query: "botao" })).text, /ripple-button/); // sem acento acha "botão"
assert.doesNotMatch((await call("search_animations", { query: "fade", category: "transicoes" })).text, /fade-in-up/);

const both = await call("get_animation", { slug: "fade-in-up" });
assert.match(both.text, /@keyframes fade-in-up/);
assert.match(both.text, /export default function FadeInUp/);
assert.doesNotMatch((await call("get_animation", { slug: "fade-in-up", format: "css" })).text, /export default/);
assert.equal((await call("get_animation", { slug: "../package" })).isError, true);

await client.close();
console.log("mcp ok");
