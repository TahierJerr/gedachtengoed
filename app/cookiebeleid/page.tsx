import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Cookiebeleid",
    description:
        "Cookiebeleid van Praktijk voor Psychotherapie GedachtenGoed. Deze website plaatst geen tracking cookies.",
    alternates: { canonical: "/cookiebeleid" },
};

export default function CookiebeleidPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Cookiebeleid", path: "/cookiebeleid" },
                ])}
            />
            <PageHero
                eyebrow="Cookies"
                title="Cookiebeleid"
                intro="Praktijk voor Psychotherapie GedachtenGoed respecteert uw privacy. Deze website plaatst geen tracking cookies."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <h2>Welke cookies plaatst deze website?</h2>
                <p>
                    Deze website plaatst <strong>geen analytische, marketing- of
                    tracking-cookies</strong>. Er wordt geen gebruik gemaakt van diensten
                    als Google Analytics, Facebook Pixel of vergelijkbare trackers. Er is
                    daarom geen cookiebanner nodig om uw toestemming te vragen.
                </p>

                <h2>Functionele cookies</h2>
                <p>
                    De website kan in beperkte gevallen functionele cookies plaatsen die
                    strikt noodzakelijk zijn voor de werking van de website (bijvoorbeeld
                    voor het onthouden van uw voorkeuren). Voor deze cookies is op grond
                    van de Telecommunicatiewet geen voorafgaande toestemming vereist.
                </p>

                <h2>Externe inhoud</h2>
                <p>
                    Op de contactpagina is een Google Maps-kaart ingebed. Wanneer u deze
                    kaart bekijkt, kunnen door Google cookies geplaatst worden volgens
                    het privacybeleid van Google. U kunt ervoor kiezen de contactpagina
                    niet te openen, of de instellingen in uw browser aan te passen.
                </p>

                <h2>Meer informatie</h2>
                <p>
                    Voor meer informatie over hoe ik met persoonsgegevens omga, zie de{" "}
                    <a href="/privacyverklaring">privacyverklaring</a>.
                </p>
            </article>
        </>
    );
}
