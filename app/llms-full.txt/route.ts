import { markdownPages, renderMarkdownPage } from "@/lib/markdown-pages";

export const dynamic = "force-static";

/** /llms-full.txt: alle markdown-pagina's achter elkaar, voor wie alles in één keer wil lezen. */
export function GET() {
    const body = markdownPages.map(renderMarkdownPage).join("\n\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex",
        },
    });
}
