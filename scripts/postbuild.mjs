// Postbuild: endurece el HTML estático generado en dist/client.
//
// 1. Inserta en cada página una Content-Security-Policy con el hash SHA-256 de
//    sus scripts inline (los que TanStack usa para hidratar). Así no hace falta
//    'unsafe-inline' para scripts y cualquier script inyectado queda bloqueado.
// 2. Comprueba que no se ha colado ningún secreto ni referencia a servicios
//    externos en el build.
//
// Las cabeceras que no se pueden poner con <meta> (frame-ancestors, HSTS…)
// están en public/.htaccess.

import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = new URL("../dist/client/", import.meta.url).pathname;

const BASE_CSP = {
  "default-src": ["'self'"],
  "script-src": ["'self'"],
  // React escribe algunos style="" para animaciones; no ejecutan código.
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "data:"],
  "font-src": ["'self'"],
  "connect-src": ["'self'"],
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "upgrade-insecure-requests": [],
};

const FORBIDDEN = [
  /sb_secret_/,
  /re_[A-Za-z0-9]{8,}_[A-Za-z0-9]{8,}/, // claves de Resend
  /service_role/,
  /LOVABLE_API_KEY/,
  /supabase\.co/,
  /lovable\.(dev|app)/,
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])),
  );
  return files.flat();
}

function inlineScriptHashes(html) {
  const hashes = new Set();
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attrs = m[1] ?? "";
    const body = m[2] ?? "";
    if (/\ssrc=/.test(attrs) || /type="application\/ld\+json"/.test(attrs) || body === "") continue;
    hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
  return [...hashes];
}

// TanStack serializa algunos IDs internos con caracteres NUL en crudo. El
// parser HTML los convierte en U+FFFD, así que el hash del navegador no
// coincidiría (y además el valor llegaría alterado). Se reescriben como el
// escape JS \u0000, que produce exactamente el valor que generó el servidor.
function escapeNulInScripts(html) {
  return html.replace(
    /(<script[^>]*>)([\s\S]*?)(<\/script>)/g,
    (_, open, body, close) => open + body.replaceAll("\u0000", "\\u0000") + close,
  );
}

function buildCsp(hashes) {
  const policy = { ...BASE_CSP, "script-src": [...BASE_CSP["script-src"], ...hashes] };
  return Object.entries(policy)
    .map(([k, v]) => (v.length ? `${k} ${v.join(" ")}` : k))
    .join("; ");
}

const files = await walk(OUT_DIR);
let pages = 0;
const leaks = [];

for (const file of files) {
  if (/\.(html|js|css|xml|txt|json)$/.test(file)) {
    const text = await readFile(file, "utf8");
    for (const re of FORBIDDEN)
      if (re.test(text)) leaks.push(`${file.replace(OUT_DIR, "")}: ${re}`);
  }
  if (!file.endsWith(".html")) continue;

  let html = escapeNulInScripts(await readFile(file, "utf8"));
  html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/, "");
  const meta = `<meta http-equiv="Content-Security-Policy" content="${buildCsp(inlineScriptHashes(html))}"/>`;
  const charset = /<meta charSet="utf-8"\/>/i;
  if (!charset.test(html)) throw new Error(`No se encontró <meta charset> en ${file}`);
  html = html.replace(charset, (m) => m + meta);
  await writeFile(file, html);
  pages++;
}

if (leaks.length) {
  console.error(
    "[postbuild] Posibles secretos o dependencias externas en el build:\n  " + leaks.join("\n  "),
  );
  process.exit(1);
}

console.log(`[postbuild] CSP con hashes aplicada a ${pages} páginas. Sin secretos en el build.`);
