import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #e3ebe5 0%, #faf8f4 50%, #f0ece4 100%)",
                    fontFamily: "Georgia, serif",
                }}
            >
                {/* Top: Koru + brand */}
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 50 12 C 70 12, 85 28, 85 50 C 85 70, 70 85, 50 85 C 35 85, 22 73, 22 58 C 22 45, 32 35, 45 35 C 55 35, 63 43, 63 53 C 63 60, 57 66, 50 66 C 45 66, 41 62, 41 57 C 41 54, 43 52, 46 52"
                            fill="none"
                            stroke="#3f574a"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div
                        style={{
                            fontSize: 28,
                            color: "#3f574a",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                        }}
                    >
                        GedachtenGoed
                    </div>
                </div>

                {/* Middle: title */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div
                        style={{
                            fontSize: 72,
                            color: "#3f574a",
                            lineHeight: 1.1,
                            maxWidth: "900px",
                        }}
                    >
                        Praktijk voor Psychotherapie GedachtenGoed
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#6b716e",
                            fontFamily:
                                "system-ui, -apple-system, sans-serif",
                            maxWidth: "900px",
                        }}
                    >
                        Professionele psychotherapie op maat — Veldhoven
                    </div>
                </div>

                {/* Bottom: details */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        fontSize: 22,
                        color: "#5b7a6a",
                        fontFamily:
                            "system-ui, -apple-system, sans-serif",
                    }}
                >
                    <div>Siepie Zonderland · GZ-Psycholoog & Psychotherapeut</div>
                    <div style={{ color: "#6b716e" }}>BIG-geregistreerd</div>
                </div>
            </div>
        ),
        { ...size }
    );
}
