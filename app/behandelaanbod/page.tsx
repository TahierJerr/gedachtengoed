import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { SignupAside } from "@/components/site/signup-aside";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { therapies } from "@/lib/therapies";

export const metadata: Metadata = {
    title: "Behandelaanbod: schematherapie, EMDR, CGT en EFT",
    description:
        "Praktijk GedachtenGoed in Veldhoven biedt integratieve psychotherapie: cliëntgerichte therapie, EFT, cognitieve gedragstherapie, schematherapie, EMDR en NET.",
    alternates: { canonical: "/behandelaanbod" },
};

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
                eyebrow="Behandelaanbod"
                title="Behandelaanbod"
                intro="Psychotherapie helpt zicht te krijgen op uzelf en uw problemen, en biedt handvatten om anders met klachten om te gaan, pijnlijke gevoelens te verwerken en meer in contact te komen met uzelf."
                photo={photos.beukenblad}
            />

            <PageBody aside={<SignupAside />}>
                <h2>Wat is psychotherapie?</h2>
                <p>
                    Psychotherapie is een behandelmethode die wordt toegepast bij psychische
                    klachten en stoornissen. Het helpt zicht te krijgen op uzelf en/of op uw
                    problemen. Psychotherapie kan u handvatten bieden om anders met uw problemen om
                    te gaan, pijnlijke gevoelens te verwerken en meer in contact te komen met uzelf.
                    De problemen waarvoor mensen in psychotherapie gaan zijn heel verschillend. Het
                    doel is uw psychische klachten op te heffen, of zoveel te verminderen dat u er
                    minder last van heeft.
                </p>

                <h2>Integratieve psychotherapie</h2>
                <p>
                    Psychotherapiepraktijk GedachtenGoed biedt op een integratieve wijze{" "}
                    <a
                        href="https://www.psychotherapie.nl/217055270/Wat-is-psychotherapie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        psychotherapie
                    </a>
                    . Dat wil zeggen dat de therapie op u, uw hulpvraag en het klachtenbeeld wordt
                    afgestemd. Hierbij wordt gebruikgemaakt van een combinatie van verschillende
                    interventies en methoden uit verschillende therapiestromingen die aansluiten bij
                    uw klachten en hulpvraag.
                </p>

                <h2>Behandelvormen</h2>
                <div className="font-sans">
                    {therapies.map((therapy) => (
                        <section
                            key={therapy.title}
                            className="border-t border-border py-6 last:border-b"
                        >
                            <h3 className="!mt-0 !text-2xl">{therapy.title}</h3>
                            <p className="!mb-3 text-[1.0625rem] leading-relaxed">
                                {therapy.description}
                            </p>
                            <a
                                href={therapy.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[0.975rem] font-semibold"
                            >
                                Meer uitleg op {therapy.source}
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                <span className="sr-only">(opent in een nieuw tabblad)</span>
                            </a>
                        </section>
                    ))}
                </div>
            </PageBody>
        </>
    );
}
