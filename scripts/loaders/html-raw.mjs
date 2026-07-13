/* Node ESM loader hook: `import x from "./file.html?raw"` — Vite'ning `?raw`
 * importiga o'xshab, HTML faylini xom satr sifatida beradi. Faqat `npm run check`
 * kabi Node ostidagi skriptlar uchun kerak (brauzerda buni Vite bajaradi).
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export function resolve(specifier, context, nextResolve) {
  if (specifier.endsWith(".html?raw") || specifier.endsWith(".html")) {
    return {
      url: new URL(specifier, context.parentURL).href,
      format: "html-raw",
      shortCircuit: true,
    };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (context.format === "html-raw") {
    const source = await readFile(fileURLToPath(url.split("?")[0]), "utf8");
    return { format: "module", shortCircuit: true, source: `export default ${JSON.stringify(source)};` };
  }
  return nextLoad(url, context);
}
