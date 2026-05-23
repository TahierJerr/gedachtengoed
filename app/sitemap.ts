import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

type RouteConfig = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/voor-wie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/psychotherapeut", priority: 0.9, changeFrequency: "monthly" },
    { path: "/behandelvisie", priority: 0.8, changeFrequency: "monthly" },
    { path: "/behandelaanbod", priority: 0.9, changeFrequency: "monthly" },
    { path: "/aanmelden-en-werkwijze", priority: 0.95, changeFrequency: "weekly" }, // wachttijd updates
    { path: "/voorwaarden", priority: 0.7, changeFrequency: "yearly" },
    { path: "/praktijkinfo", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
    { path: "/patientenportaal", priority: 0.85, changeFrequency: "yearly" },
    { path: "/privacyverklaring", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookiebeleid", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return routes.map((r) => ({
        url: `${siteConfig.url}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));
}
