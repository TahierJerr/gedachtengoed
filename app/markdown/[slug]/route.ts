import { getMarkdownPage, markdownPages, renderMarkdownPage } from "@/lib/markdown-pages";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
    return markdownPages.map((page) => ({ slug: page.slug }));
}

/**
 * Markdown-versie van een pagina. Bereikbaar als `/<slug>.md` (zie de rewrite in
 * next.config.ts). Niet indexeren: de gewone pagina is het canonieke adres.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getMarkdownPage(slug);

    if (!page) {
        return new Response("Niet gevonden", { status: 404 });
    }

    const canonical = `${siteConfig.url}${page.path === "/" ? "" : page.path}`;

    return new Response(renderMarkdownPage(page), {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "X-Robots-Tag": "noindex",
            Link: `<${canonical}>; rel="canonical"`,
        },
    });
}
