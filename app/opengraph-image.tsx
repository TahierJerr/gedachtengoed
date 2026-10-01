import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const alt = `${siteConfig.name} in ${siteConfig.contact.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Voorbeeldafbeelding bij het delen van een link: het beeldmerk met de naam van de praktijk. */
export default function OpengraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 72,
                padding: "0 96px",
                background: "#1f3a34",
                color: "#ffffff",
            }}
        >
            <svg width="300" height="300" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#ffffff" />
                <path
                    d="M 79 97 C 99 66, 88 22, 51 21 C 25 21, 13 46, 25 64 C 35 79, 60 77, 64 59 C 67 47, 56 39, 47 44"
                    fill="none"
                    stroke="#1f3a34"
                    strokeWidth="9"
                    strokeLinecap="round"
                />
                <circle cx="46" cy="46" r="7.5" fill="#1f3a34" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 84, lineHeight: 1.05 }}>{siteConfig.shortName}</div>
                <div style={{ marginTop: 20, fontSize: 40, color: "#d5e2da" }}>
                    {siteConfig.tagline}
                </div>
                <div style={{ marginTop: 44, fontSize: 30, color: "#d5e2da" }}>
                    {`${siteConfig.author.name}, ${siteConfig.contact.city}`}
                </div>
            </div>
        </div>,
        size
    );
}
