import Image from "next/image";
import { JsonLd } from "@/components/seo/json-ld";
import { Koru } from "@/components/site/koru";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { SignupAside } from "@/components/site/signup-aside";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
    title: "Behandelvisie: persoonsgerichte psychotherapie",
    description:
        "Persoonsgericht werken waarbij de ontwikkeling van de persoon als geheel centraal staat. Echt contact aangaan, niet veroordelend, betrokken en empathisch.",
    path: "/behandelvisie",
    markdown: true,
});

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
                eyebrow="Behandelvisie"
                title="Behandelvisie"
                intro="Ik werk persoonsgericht, waarbij de ontwikkeling van de persoon als geheel centraal staat."
                photo={photos.knoppen}
            />

            <PageBody aside={<SignupAside />}>
                <p>
                    De persoonsgerichte benadering past bij mij: echt contact aangaan, niet
                    (ver)oordelend, betrokken en empathisch. In therapie gaan is vaak een grote
                    stap; het betekent dat u bereid bent, samen met mij naar uzelf te kijken en
                    hierin aspecten van uzelf, eventueel in relatie tot de ander, te gaan
                    veranderen. Om dit proces aan te gaan is het belangrijk dat u zich bij mij op uw
                    gemak en vertrouwd voelt. Als u zich veilig voelt kunt u zich openstellen en
                    komt er ruimte voor groei en verandering.
                </p>
                <p>
                    Ik zie elke behandeling als maatwerk; ieder mens is immers uniek, vanuit een
                    basis gevormd door ervaringen. Daarom vind ik het belangrijk om veel aandacht
                    voor uw narratief te hebben en samen met u naar de betekenis van uw klachten te
                    zoeken. Afhankelijk van uw hulpvraag en klachten zullen we meer klachtgericht of
                    onderzoekend te werk gaan.
                </p>
                <p>
                    Als psycholoog vind ik het belangrijk om mijzelf te blijven ontwikkelen en
                    verdiepen. Dat betekent dat ik me regelmatig blijf bijscholen en dat ik deel
                    uitmaak van diverse collegiale intervisiegroepen.
                </p>
                <p>
                    Ik heb mij verdiept in verschillende stromingen en behandelmethoden, en de
                    behandelingen kunnen bij mij vanuit meerdere referentiekaders en methodieken
                    geboden worden: persoonsgerichte therapie, cognitieve gedragstherapie,
                    schematherapie, Emotion Focused Therapy (EFT), EMDR en Narratieve Exposure
                    Therapie (NET).
                </p>
            </PageBody>

            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-[2rem] bg-accent-dark text-[#d5e2da] md:grid-cols-2">
                    <div className="relative min-h-64">
                        <Image
                            src={photos.bergenEnWater.src}
                            alt={photos.bergenEnWater.alt}
                            fill
                            sizes="(min-width: 768px) 544px, 94vw"
                            placeholder="blur"
                            className="object-cover"
                            style={{ objectPosition: photos.bergenEnWater.position }}
                        />
                    </div>
                    <div className="p-8 sm:p-12">
                        <Koru
                            size={64}
                            className="text-white"
                            style={{ "--koru-cutout": "var(--accent-dark)" } as React.CSSProperties}
                        />
                        <h2 className="mt-6 text-3xl text-white">De koru</h2>
                        <p className="mt-4 font-serif text-lg leading-[1.8]">
                            Persoonlijke groei en ontwikkeling wordt gesymboliseerd door de koru,
                            het Maori-symbool dat een opgerolde varen verbeeldt. Daarom heb ik
                            gekozen voor een koru als beeldmerk van Praktijk voor Psychotherapie
                            GedachtenGoed.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
