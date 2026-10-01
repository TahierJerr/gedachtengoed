// Na `next build`: schrijft in out/ wat een statische export niet zelf kan maken.
//  - /<pagina>.md: de markdown-versie van elke pagina (voor AI-assistenten, zie /llms.txt)
//  - /_headers: beveiligingsheaders en de headers van de markdown-bestanden (Cloudflare leest dit bestand)
import { writeFile } from "node:fs/promises";
import path from "node:path";

import { markdownPages, renderMarkdownPage } from "../lib/markdown-pages";
import { siteConfig } from "../lib/site-config";

const uit = path.join(process.cwd(), "out");

const headers = [
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  X-Frame-Options: DENY",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    // Zonder includeSubDomains: mail. en webmail. draaien bij de mailhost.
    "  Strict-Transport-Security: max-age=63072000",
    "  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "",
    // Bestandsnamen met een hash: mogen een jaar in de cache blijven.
    "/_next/static/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    // Foto's hebben geen hash in de naam: een week, zodat een vervangen foto vanzelf doorkomt.
    "/img/*",
    "  Cache-Control: public, max-age=604800",
    "",
    // De deelafbeelding heeft geen extensie in de bestandsnaam; zonder dit kent Cloudflare het type niet.
    "/opengraph-image",
    "  Content-Type: image/png",
    "",
    "/llms-full.txt",
    "  X-Robots-Tag: noindex",
    "",
];

for (const page of markdownPages) {
    await writeFile(path.join(uit, `${page.slug}.md`), renderMarkdownPage(page));
    const canonical = `${siteConfig.url}${page.path === "/" ? "" : page.path}`;
    headers.push(
        `/${page.slug}.md`,
        "  Content-Type: text/markdown; charset=utf-8",
        "  X-Robots-Tag: noindex",
        `  Link: <${canonical}>; rel="canonical"`,
        ""
    );
}

await writeFile(path.join(uit, "_headers"), headers.join("\n"));
console.log(`na de build: ${markdownPages.length} markdown-pagina's en _headers geschreven`);
