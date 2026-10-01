import type { Metadata, Viewport } from "next";
import "@fontsource-variable/literata/wght.css";
import "@fontsource-variable/albert-sans/wght.css";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { medicalBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const homeTitle = "Psychotherapie in Veldhoven | Praktijk GedachtenGoed";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: homeTitle,
        template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,
    applicationName: siteConfig.shortName,
    referrer: "origin-when-cross-origin",
    formatDetection: { telephone: false, email: false, address: false },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: "/",
        title: homeTitle,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    category: "healthcare",
};

export const viewport: Viewport = {
    themeColor: "#1f3a34",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="nl">
            <body>
                <a href="#main" className="skip-link">
                    Ga naar inhoud
                </a>
                <SiteHeader />
                <main id="main">{children}</main>
                <SiteFooter />
                <JsonLd data={medicalBusinessSchema()} />
                <JsonLd data={websiteSchema()} />
            </body>
        </html>
    );
}
