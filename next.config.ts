import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
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
};

export default withBundleAnalyzer(nextConfig);
