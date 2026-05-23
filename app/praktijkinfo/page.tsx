import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Praktijkinfo",
    description:
        "Informatie over praktijkvoering, kwaliteit, beroepscode, rechten, privacy en klachtenprocedure van Praktijk voor Psychotherapie GedachtenGoed.",
    alternates: { canonical: "/praktijkinfo" },
};

export default function PraktijkInfoPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Praktijkinfo", path: "/praktijkinfo" },
                ])}
            />
            <PageHero
                eyebrow="Kwaliteit"
                title="Praktijkinfo"
                intro="Informatie over praktijkvoering, kwaliteit, beroepscode, rechten en privacy."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <h2>Praktijkvoering</h2>
                <p>
                    De praktijk is aangesloten bij de Landelijke Vereniging van
                    Vrijgevestigde Psychologen &amp; Psychotherapeuten (de LVVP) en volgt
                    het door de LVVP opgestelde reglement. De LVVP heeft een folder gemaakt
                    met informatie voor cliënten die in behandeling gaan bij een
                    vrijgevestigd therapeut, te vinden op{" "}
                    <a
                        href="https://lvvp.info/voor-clienten"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        lvvp.info/voor-clienten
                    </a>
                    .
                </p>

                <h2>Kwaliteit</h2>
                <p>
                    Sinds 1 januari 2017 dient iedere praktijk te beschikken over een
                    kwaliteitsstatuut. Praktijk voor Psychotherapie GedachtenGoed beschikt
                    over een goedgekeurd kwaliteitsstatuut. Om de kwaliteit van mijn
                    behandelingen te waarborgen volg ik bij- en nascholing. Daarnaast neem
                    ik deel aan verschillende intervisiegroepen, waar ik met collega&apos;s
                    geanonimiseerd behandelingen bespreek van hen en mijzelf, zodat we met
                    elkaar mee kunnen blijven denken en elkaar scherp houden. Verder ben ik
                    verplicht om het verloop en effect van de behandeling te meten met
                    vragenlijsten.
                </p>

                <h2>Beroepscode</h2>
                <p>
                    Als BIG-geregistreerd psychotherapeut val ik onder de beroepscode voor
                    psychotherapeuten, opgesteld door de Nederlandse Vereniging voor
                    Psychotherapie (NVP).
                </p>

                <h2>Rechten en privacy</h2>
                <p>
                    Als psychotherapeut en GZ-psycholoog ben ik gehouden aan de Wet
                    Geneeskundige Behandelovereenkomst (WGBO). Deze wet regelt de rechten
                    en plichten van patiënten en hulpverleners. In deze wet zijn onder
                    andere opgenomen: het klachtrecht, informatie-plichten/-rechten en het
                    recht op dossierinzage. Het werken middels behandelplannen en
                    evaluaties is hierin tevens vastgelegd. Conform de sinds mei 2018
                    geldende Algemene Verordening Gegevensbescherming (AVG) beschikt de
                    praktijk over een uitgebreide{" "}
                    <a href="/privacyverklaring">privacyverklaring</a>.
                </p>

                <h2>Klachten</h2>
                <p>
                    Ondanks dat ik mijn best doe om optimale dienstverlening te bieden, kan
                    het voorkomen dat zaken niet naar tevredenheid verlopen. Indien u een
                    klacht heeft, hoop ik dat u dit eerst met mij kunt bespreken. Ik zal uw
                    klacht serieus nemen en samen met u zoeken naar een oplossing. Als we
                    er samen niet uit komen, dan kunt u terecht bij een
                    LVVP-klachtenfunctionaris van Klacht&amp;Company, beschikbaar via{" "}
                    <a
                        href="https://lvvp.info/voor-clienten/wat-als-ik-ontevreden-ben-de-behandeling/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        deze link
                    </a>
                    .
                </p>
            </article>
        </>
    );
}
