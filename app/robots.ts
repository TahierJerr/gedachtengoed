import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Zoekmachines en AI-assistenten mogen alle pagina's lezen; alleen de
 * formulier-API is uitgesloten. De wegwijzer voor AI-assistenten staat op /llms.txt.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
