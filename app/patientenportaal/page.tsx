import Link from "next/link";
import { AlertTriangle, Lock, LogIn, UserPlus } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Callout } from "@/components/site/callout";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { intramedConfigured, intramedPortal } from "@/lib/intramed";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { PortalAction } from "./portal-action";

export const metadata = pageMetadata({
    title: "Patiëntenportaal: inschrijven en inloggen",
    description:
        "Toegang tot het patiëntenportaal van Praktijk voor Psychotherapie GedachtenGoed. Inschrijven, inloggen of vragenlijsten invullen via de beveiligde omgeving van Intramed.",
    path: "/patientenportaal",
    markdown: true,
});

export default function PatientenportaalPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Patiëntenportaal", path: "/patientenportaal" },
                ])}
            />
            <PageHero
                eyebrow="Patiëntenportaal"
                title="Patiëntenportaal"
                intro="Via het beveiligde patiëntenportaal van Intramed kunt u zich inschrijven, inloggen, vragenlijsten invullen en uw afspraken beheren, wanneer het u uitkomt."
                photo={photos.lotus}
            />

            <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
                {!intramedConfigured && (
                    <Callout
                        tone="warning"
                        title="Configuratie nog niet voltooid"
                        icon={AlertTriangle}
                        className="mt-0"
                    >
                        <p>
                            De Intramed-koppeling is nog niet ingesteld. Vul{" "}
                            <code>NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER</code> en{" "}
                            <code>NEXT_PUBLIC_INTRAMED_ADM_NUMBER</code> in bij de environment
                            variables. De waarden staan in Mijn Intramed of Bijlage II.
                        </p>
                    </Callout>
                )}
                <div className="grid gap-6 sm:grid-cols-2">
                    <PortalAction
                        href={intramedPortal.inschrijven}
                        icon={UserPlus}
                        title="Inschrijven"
                        description="Nog niet bij de praktijk bekend? Schrijf u in via het portaal en vul uw gegevens veilig in."
                        primary
                    />
                    <PortalAction
                        href={intramedPortal.inloggen}
                        icon={LogIn}
                        title="Inloggen"
                        description="Bestaande cliënten kunnen inloggen om afspraken te bekijken of vragenlijsten in te vullen."
                    />
                </div>
            </section>

            <PageBody>
                <h2>Wat kunt u doen in het portaal?</h2>
                <ul>
                    <li>
                        <strong>Inschrijven</strong> als nieuwe cliënt: uw gegevens komen direct
                        beveiligd in mijn administratie
                    </li>
                    <li>
                        <strong>Vragenlijsten invullen</strong> die u per e-mail toegestuurd krijgt
                        vanuit de praktijk
                    </li>
                    <li>
                        <strong>Afspraken bekijken</strong> en, indien van toepassing, verzetten of
                        annuleren
                    </li>
                    <li>
                        <strong>Persoonlijke gegevens</strong> inzien en bijwerken
                    </li>
                </ul>

                <h2>Vragenlijsten</h2>
                <p>
                    Wanneer ik een vragenlijst voor u klaarzet, ontvangt u een e-mail met een
                    directe link. U hoeft dan niet eerst in te loggen: de link in de e-mail brengt u
                    rechtstreeks naar de juiste vragenlijst.
                </p>

                <h2>Beveiliging en privacy</h2>
                <p>
                    Het patiëntenportaal wordt geleverd door <strong>Intramed</strong>, een
                    gespecialiseerde leverancier voor de Nederlandse zorg. Het portaal voldoet aan
                    de beveiligingseisen voor gezondheidsgegevens (NEN 7510) en de Algemene
                    Verordening Gegevensbescherming (AVG). Alle gegevens worden versleuteld
                    verstuurd en opgeslagen in Nederland.
                </p>
                <p>
                    U verlaat deze website wanneer u op een van de knoppen klikt. U wordt
                    doorgestuurd naar importaal.intramedonline.nl, de beveiligde omgeving van
                    Intramed.
                </p>

                <h2>Hulp nodig?</h2>
                <p>
                    Komt u er niet uit met inloggen of inschrijven? Of heeft u geen e-mail met de
                    link voor uw vragenlijst ontvangen? Neem dan{" "}
                    <Link href="/contact">contact</Link> met mij op via e-mail of het
                    contactformulier.
                </p>

                <Callout
                    tone="info"
                    title="Stuur geen wachtwoorden of medische informatie via e-mail"
                    icon={Lock}
                >
                    <p>
                        Inhoudelijke en gezondheidsgerelateerde gegevens horen uitsluitend in het
                        beveiligde portaal of tijdens een afspraak, niet in een gewone e-mail.
                    </p>
                </Callout>
            </PageBody>
        </>
    );
}
