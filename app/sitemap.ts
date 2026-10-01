import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

type RouteConfig = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/aanmelden-en-werkwijze", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/behandelaanbod", priority: 0.9, changeFrequency: "yearly" },
    { path: "/voor-wie", priority: 0.9, changeFrequency: "yearly" },
    { path: "/psychotherapeut", priority: 0.8, changeFrequency: "yearly" },
    { path: "/behandelvisie", priority: 0.8, changeFrequency: "yearly" },
    { path: "/voorwaarden", priority: 0.7, changeFrequency: "yearly" },
    { path: "/praktijkinfo", priority: 0.6, changeFrequency: "yearly" },
    { path: "/patientenportaal", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacyverklaring", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookiebeleid", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map((route) => ({
        url: `${siteConfig.url}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
