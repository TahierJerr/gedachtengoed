import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Behandelaanbod",
    description:
        "Psychotherapiepraktijk GedachtenGoed biedt integratieve psychotherapie: cliëntgerichte therapie, EFT, cognitieve gedragstherapie, schematherapie, EMDR en NET.",
    alternates: { canonical: "/behandelaanbod" },
};

const therapies = [
    {
        title: "Cliëntgerichte Psychotherapie",
        href: "https://www.vpep.nl/therapie/over-pep",
        description:
            "Persoonsgerichte benadering die uitgaat van uw eigen ervaringen, gevoelens en groeikracht.",
    },
    {
        title: "EFT — Emotion-Focused Therapy",
        href: "https://www.eftin.nl/over-eft/",
        description:
            "Emotie-gerichte therapie die helpt om emoties te verkennen, te begrijpen en te verwerken.",
    },
    {
        title: "Cognitieve Gedragstherapie",
        href: "https://www.vgct.nl/wat-is-cognitieve-gedragstherapie/",
        description:
            "Werkt aan disfunctionele gedachten en gedragspatronen, met praktische technieken voor verandering.",
    },
    {
        title: "Schematherapie",
        href: "https://www.schematherapie.nl/schematherapie/",
        description:
            "Behandelt diepere patronen die in de kindertijd zijn ontstaan en uw leven nu in de weg staan.",
    },
    {
        title: "EMDR — Eye Movement Desensitization and Reprocessing",
        href: "https://www.emdr.nl/wat-is-emdr/",
        description:
            "Bewezen effectieve methode voor de verwerking van traumatische ervaringen.",
    },
    {
        title: "Narratieve Exposure Therapie (NET)",
        href: "https://www.traumabehandeling.net/nl/net/",
        description:
            "Trauma-behandeling gericht op het ordenen van levensgebeurtenissen tot een samenhangend verhaal.",
    },
];

export default function BehandelaanbodPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Behandelaanbod", path: "/behandelaanbod" },
                ])}
            />
            <PageHero
                eyebrow="Behandelmethoden"
                title="Behandelaanbod"
                intro="Psychotherapie helpt zicht te krijgen op uzelf en uw problemen, en biedt handvatten om anders met klachten om te gaan, pijnlijke gevoelens te verwerken en meer in contact te komen met uzelf."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <h2>Wat is psychotherapie?</h2>
                <p>
                    Psychotherapie is een behandelmethode die wordt toegepast bij psychische
                    klachten en stoornissen. Het helpt zicht te krijgen op uzelf en/of op uw
                    problemen. Psychotherapie kan u handvatten bieden om anders met uw
                    problemen om te gaan, pijnlijke gevoelens te verwerken en meer in contact
                    te komen met uzelf. De problemen waarvoor mensen in psychotherapie gaan
                    zijn heel verschillend. Het doel is uw psychische klachten op te heffen,
                    of zoveel te verminderen dat u er minder last van heeft.
                </p>

                <h2>Integratieve psychotherapie</h2>
                <p>
                    Psychotherapiepraktijk GedachtenGoed biedt op een integratieve wijze{" "}
                    <Link
                        href="https://www.psychotherapie.nl/217055270/Wat-is-psychotherapie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        psychotherapie
                    </Link>
                    . Dat wil zeggen dat de therapie op u, uw hulpvraag en het klachtenbeeld
                    wordt afgestemd. Hierbij wordt gebruik gemaakt van een combinatie van
                    verschillende interventies en methoden uit verschillende
                    therapiestromingen die aansluiten bij uw klachten en hulpvraag.
                </p>

                <h2>Beschikbare behandelvormen</h2>
            </article>

            <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid sm:grid-cols-2 gap-4">
                    {therapies.map((t) => (
                        <a
                            key={t.title}
                            href={t.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 bg-white border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-serif text-lg text-[var(--accent-dark)] leading-tight">
                                    {t.title}
                                </h3>
                                <ExternalLink className="h-4 w-4 text-[var(--muted)] shrink-0 mt-1 group-hover:text-[var(--accent-dark)] transition-colors" />
                            </div>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                {t.description}
                            </p>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
