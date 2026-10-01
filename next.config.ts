import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

import { deviceSizes, imageSizes } from "./lib/image-widths";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

// Statische export voor Cloudflare: `next build` schrijft de hele site naar out/.
// Wat een server zou doen, staat elders:
//  - headers en markdown-versies (/contact.md): scripts/after-build.ts
//  - www → adres zonder www en het contactformulier: worker/index.ts
//  - foto's in meerdere breedtes: scripts/build-images.ts + lib/image-loader.ts
const nextConfig: NextConfig = {
    output: "export",
    poweredByHeader: false,
    images: {
        loader: "custom",
        loaderFile: "./lib/image-loader.ts",
        deviceSizes,
        imageSizes,
    },
};

export default withBundleAnalyzer(nextConfig);
