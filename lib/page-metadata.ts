import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetadataInput = {
    title: string;
    description: string;
    /** Pad van de pagina, bv. "/contact". */
    path: string;
    /** True als er een markdown-versie bestaat op `<path>.md` (zie lib/markdown-pages.ts). */
    markdown?: boolean;
};

/**
 * Metadata voor een inhoudspagina: titel, beschrijving, canonieke link en de
 * gegevens voor het delen van de link (Open Graph), zodat die per pagina kloppen.
 */
export function pageMetadata({
    title,
    description,
    path,
    markdown = false,
}: PageMetadataInput): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: path,
            types: markdown ? { "text/markdown": `${path}.md` } : undefined,
        },
        openGraph: {
            type: "website",
            locale: siteConfig.locale,
            siteName: siteConfig.name,
            url: path,
            title: `${title} | ${siteConfig.shortName}`,
            description,
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
        },
    };
}
