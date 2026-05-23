import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Koru } from "@/components/site/koru";

export const metadata: Metadata = {
    title: "Behandelvisie",
    description:
        "Persoonsgericht werken waarbij de ontwikkeling van de persoon als geheel centraal staat. Echt contact aangaan, niet veroordelend, betrokken en empathisch.",
    alternates: { canonical: "/behandelvisie" },
};

export default function BehandelvisiePage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Behandelvisie", path: "/behandelvisie" },
                ])}
            />
            <PageHero
                eyebrow="Mijn visie"
                title="Behandelvisie"
                intro="Ik werk persoonsgericht, waarbij de ontwikkeling van de persoon als geheel centraal staat."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <p>
                    De persoonsgerichte benadering past bij mij: echt contact aangaan, niet
                    (ver)oordelend, betrokken en empathisch. In therapie gaan is vaak een
                    grote stap; het betekent dat u bereid bent, samen met mij naar uzelf te
                    kijken en hierin aspecten van uzelf, eventueel in relatie tot de ander,
                    te gaan veranderen. Om dit proces aan te gaan is het belangrijk dat u
                    zich bij mij op uw gemak en vertrouwd voelt. Als u zich veilig voelt
                    kunt u zich open stellen en komt er ruimte voor groei en verandering.
                </p>
                <p>
                    Ik zie elke behandeling als maatwerk; ieder mens is immers uniek,
                    vanuit een basis gevormd door ervaringen. Daarom vind ik het belangrijk
                    om veel aandacht voor uw narratief te hebben en samen met u naar de
                    betekenis van uw klachten te zoeken. Afhankelijk van uw hulpvraag en
                    klachten zullen we meer klachtgericht of onderzoekend te werk gaan.
                </p>
                <p>
                    Als psycholoog vind ik het belangrijk om mijzelf te blijven ontwikkelen
                    en verdiepen. Dat betekent dat ik me regelmatig blijf bijscholen en dat
                    ik deel uit maak van diverse collegiale intervisie-groepen.
                </p>
                <p>
                    Ik heb mij verdiept in verschillende stromingen en behandelmethoden, en
                    de behandelingen kunnen bij mij vanuit meerdere referentiekaders en
                    methodieken geboden worden: persoonsgerichte therapie, cognitieve
                    gedragstherapie, schematherapie, Emotion Focused Therapy (EFT), EMDR en
                    Narratieve Exposure Therapie (NET).
                </p>

                <div className="mt-12 p-8 bg-[var(--accent-soft)] rounded-lg flex flex-col sm:flex-row gap-6 items-center">
                    <Koru size={100} className="text-[var(--accent-dark)] shrink-0" />
                    <div>
                        <h3 className="!mt-0 !mb-2 text-xl">De Koru</h3>
                        <p className="!mb-0 text-sm">
                            Persoonlijke groei en ontwikkeling wordt gesymboliseerd door de
                            Koru — het Maori-symbool dat een opgerolde varen verbeeldt.
                            Daarom heb ik gekozen voor een Koru als beeldmerk van Praktijk
                            voor Psychotherapie GedachtenGoed.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}
