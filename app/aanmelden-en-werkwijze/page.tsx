import Link from "next/link";
import { Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Callout } from "@/components/site/callout";
import { CrisisCallout } from "@/components/site/crisis-callout";
import { FaqList } from "@/components/site/faq-list";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { SignupAside } from "@/components/site/signup-aside";
import { signupFaq } from "@/lib/faq";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
    title: "Aanmelden en werkwijze: wachttijd, intake en verwijsbrief",
    description:
        "Aanmelden bij Praktijk voor Psychotherapie GedachtenGoed in Veldhoven. Actuele wachttijd, verwijsbrief, intake, behandelovereenkomst en informatie over crisis en waarneming.",
    path: "/aanmelden-en-werkwijze",
    markdown: true,
});

export default function AanmeldenPage() {
    const { waitingTime } = siteConfig;

    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Aanmelden en werkwijze", path: "/aanmelden-en-werkwijze" },
                ])}
            />
            <JsonLd data={faqSchema(signupFaq)} />
            <PageHero
                eyebrow="Aanmelden en werkwijze"
                title="Aanmelden en werkwijze"
                intro="U kunt zich via het contactformulier aanmelden. Ik neem dan vrijblijvend telefonisch contact met u op voor een eerste kennismaking."
                photo={photos.cipressenlaan}
            />

            <PageBody aside={<SignupAside />}>
                <h2>Aanmelden</h2>
                <p>
                    U kunt zich via het <Link href="/contact">contactformulier</Link> aanmelden. Ik
                    zal dan vrijblijvend telefonisch contact met u opnemen. In dat gesprek zullen we
                    kort stilstaan bij uw klachten en hulpvraag. We kunnen dan nagaan of verdere
                    (intake)gesprekken bij mij zinvol zijn. Als dat zo is, plannen we een afspraak
                    in voor een eerste intakegesprek.
                </p>
                <p>
                    U heeft dan een verwijsbrief nodig van uw huisarts. Als u in aanmerking wilt
                    komen voor vergoeding van de behandeling vanuit de zorgverzekeraar moet in de
                    verwijsbrief in ieder geval het volgende staan:
                </p>
                <ul>
                    <li>Datum verwijzing</li>
                    <li>Naam, adres, functie, AGB-code en stempel van de verwijzer/arts</li>
                    <li>Uw gegevens (naam, adres, BSN-nummer en geboortedatum)</li>
                    <li>De reden van verwijzing</li>
                    <li>Generalistische of specialistische GGZ</li>
                    <li>
                        Bij Basis Generalistische GGZ: om welke prestatie het gaat (kort, middel,
                        intensief of chronisch)
                    </li>
                    <li>De vermoedelijke diagnose (of een vermoeden van een DSM-V-diagnose)</li>
                </ul>

                <Callout tone="info" title="Actuele wachttijd" icon={Clock}>
                    <p>
                        Momenteel is de wachttijd voor nieuwe aanmeldingen circa{" "}
                        <strong>{waitingTime.weeks} weken</strong>.
                    </p>
                    <p className="text-[0.975rem]">Bijgewerkt op {waitingTime.updated}.</p>
                </Callout>

                <p>
                    De wachttijd is onafhankelijk van de diagnosegroep, soort behandeling (GBGGZ of
                    SGGZ) of zorgverzekeraar. Een vermelde wachttijd is een inschatting; dit is
                    sterk afhankelijk van de overeenstemming die wij kunnen vinden over de dag en
                    tijd waarop afspraken mogelijk zijn. De wachttijden zijn dan ook slechts een
                    indicatie waar geen rechten aan worden ontleend. Alvorens u op de wachtlijst
                    wordt geplaatst, vindt eerst een telefonische kennismaking plaats.
                </p>
                <p>
                    Wanneer u de wachttijd te lang vindt, kunt u altijd contact opnemen met uw
                    zorgverzekeraar en vragen om wachtlijstbemiddeling. Uw zorgverzekeraar kan u
                    ondersteunen, zodat u binnen 4 weken vanaf uw eerste contact met een
                    zorgaanbieder een intakegesprek krijgt, en dat de behandeling binnen 10 weken
                    vanaf de intake is gestart. Dit zijn de maximaal aanvaardbare wachttijden die
                    door zorgaanbieders en zorgverzekeraars gezamenlijk zijn overeengekomen (de
                    treeknormen), conform de eisen die door de Nederlandse Zorgautoriteit (NZa) zijn
                    gesteld.
                </p>

                <h2>Werkwijze</h2>
                <h3>Intake</h3>
                <p>
                    De intakefase bestaat uit 2 tot 3 gesprekken. We brengen in kaart welke klachten
                    er spelen, wat uw verwachtingen en hulpvraag zijn, wat uw verhaal en
                    levensgeschiedenis is waarbinnen deze klachten zijn ontstaan en welke hulp nodig
                    is. Ook kunnen vragenlijsten worden afgenomen om een beter beeld te krijgen van
                    de problematiek en de ernst ervan. Daarna volgt een adviesgesprek waarin kan
                    worden besloten tot psychotherapie of tot doorverwijzing. Als ik denk dat u
                    elders beter geholpen kunt worden, zal ik dat met u bespreken en mij inzetten om
                    u zo goed mogelijk door te verwijzen.
                </p>

                <h3>Behandelovereenkomst</h3>
                <p>
                    Als u instemt met het advies wordt een behandelovereenkomst opgesteld waarin
                    wordt beschreven wat uw hulpvraag en probleem is, welke behandeldoelen
                    nagestreefd zullen worden en via welke behandelmethode. Tevens wordt de
                    frequentie en, als mogelijk, de verwachte duur van de behandeling vastgesteld.
                    De behandelovereenkomst wordt door ons beiden ondertekend. Als u hiervoor
                    toestemming geeft, wordt uw verwijzer middels een brief op de hoogte gesteld van
                    de gemaakte afspraken. Gedurende het behandelproces zal er op verschillende
                    momenten worden geëvalueerd door middel van vragenlijsten en gesprekken. De
                    afronding van de behandeling is in overleg en we werken daar samen naartoe.
                </p>

                <CrisisCallout />

                <h3>Waarneming</h3>
                <p>
                    Bij afwezigheid wegens vakantie of ziekte wordt mijn praktijk waargenomen door
                    een collega. Deze waarneming wordt indien van toepassing met u besproken.
                </p>

                <h2>Veelgestelde vragen</h2>
                <FaqList items={signupFaq} />
            </PageBody>
        </>
    );
}
