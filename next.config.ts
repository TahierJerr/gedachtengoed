import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    // Zonder includeSubDomains: mail. en webmail. draaien bij de mailhost, niet op Vercel.
    { key: "Strict-Transport-Security", value: "max-age=63072000" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
];

const nextConfig: NextConfig = {
    poweredByHeader: false,
    images: {
        formats: ["image/avif", "image/webp"],
    },
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }];
    },
    // www stuurt door naar het adres zonder www, zodat er één adres in zoekmachines staat.
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.gedachtengoedpsychotherapie.nl" }],
                destination: "https://gedachtengoedpsychotherapie.nl/:path*",
                permanent: true,
            },
        ];
    },
};

export default withBundleAnalyzer(nextConfig);
