import type { Metadata } from "next";
import Link from "next/link";
import { Clock, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Aanmelden & werkwijze",
    description:
        "Aanmelden bij Praktijk voor Psychotherapie GedachtenGoed. Actuele wachttijd, intakeproces, behandelovereenkomst en informatie over crisis en waarneming.",
    alternates: { canonical: "/aanmelden-en-werkwijze" },
};

export default function AanmeldenPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Aanmelden & werkwijze", path: "/aanmelden-en-werkwijze" },
                ])}
            />
            <JsonLd
                data={faqSchema([
                    {
                        question: "Hoe meld ik mij aan bij de praktijk?",
                        answer:
                            "U kunt zich via het contactformulier op deze website aanmelden. Daarna neem ik vrijblijvend telefonisch contact met u op voor een eerste kennismakingsgesprek. Als verdere intake zinvol is, plannen we een afspraak in.",
                    },
                    {
                        question: "Wat is de actuele wachttijd?",
                        answer:
                            "De wachttijd voor nieuwe aanmeldingen is momenteel circa 12 weken. De wachttijd is onafhankelijk van diagnosegroep, behandelsoort en zorgverzekeraar.",
                    },
                    {
                        question: "Heb ik een verwijzing van de huisarts nodig?",
                        answer:
                            "Ja, voor vergoeding via de zorgverzekering is een verwijsbrief van de huisarts nodig. Deze brief moet onder andere de datum, gegevens van de verwijzer, uw gegevens, de reden van verwijzing en de vermoedelijke DSM-V-diagnose bevatten.",
                    },
                    {
                        question: "Waaruit bestaat de intakefase?",
                        answer:
                            "De intakefase bestaat uit 2 tot 3 gesprekken waarin uw klachten, hulpvraag en levensgeschiedenis in kaart worden gebracht. Vragenlijsten kunnen worden afgenomen. Daarna volgt een adviesgesprek waarin tot psychotherapie of doorverwijzing wordt besloten.",
                    },
                    {
                        question: "Wat als ik in crisis ben?",
                        answer:
                            "De praktijk heeft geen faciliteiten voor crisisopvang. Bij crisis buiten kantoortijden neemt u contact op met uw huisarts of de huisartsenpost. Voor directe ondersteuning kunt u bellen of chatten met 113.nl via 0800-0113 (24/7 bereikbaar).",
                    },
                ])}
            />
            <PageHero
                eyebrow="Aanmelden"
                title="Aanmelden & werkwijze"
                intro="U kunt zich via het contactformulier aanmelden. Ik neem dan vrijblijvend telefonisch contact met u op voor een eerste kennismaking."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <h2>Aanmelden</h2>
                <p>
                    U kunt zich via het{" "}
                    <Link href="/contact">contactformulier</Link> aanmelden. Ik zal dan
                    vrijblijvend telefonisch contact met u opnemen. In dat gesprek zullen we
                    kort stil staan bij uw klachten en hulpvraag. We kunnen dan nagaan of
                    verdere (intake)gesprekken bij mij zinvol zijn. Als dat zo is, plannen we
                    een afspraak in voor een eerste intakegesprek.
                </p>
                <p>
                    U heeft dan een verwijsbrief nodig van uw huisarts. Als u in aanmerking
                    wilt komen voor vergoeding van de behandeling vanuit de zorgverzekeraar
                    moet in de verwijsbrief in ieder geval het volgende staan:
                </p>
                <ul>
                    <li>Datum verwijzing</li>
                    <li>
                        Naam, adres, functie, AGB-code en stempel van de verwijzer/arts
                    </li>
                    <li>Uw gegevens (naam, adres, BSN-nummer en geboortedatum)</li>
                    <li>De reden van verwijzing</li>
                    <li>Generalistische of specialistische GGZ</li>
                    <li>
                        Bij Basis Generalistische GGZ: om welke prestatie het gaat (kort,
                        middel, intensief of chronisch)
                    </li>
                    <li>De vermoedelijke diagnose (of een vermoeden van een DSM-V diagnose)</li>
                </ul>

                <div className="my-12 p-6 bg-[var(--accent-soft)] border border-[var(--accent)] rounded-lg">
                    <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-[var(--accent-dark)] shrink-0 mt-0.5" />
                        <div>
                            <h3 className="!mt-0 !mb-2 text-xl">Actuele wachttijden</h3>
                            <p className="!mb-2">
                                Momenteel is de wachttijd voor nieuwe aanmeldingen circa{" "}
                                <strong>12 weken</strong>.
                            </p>
                            <p className="!mb-0 text-sm text-[var(--muted)]">
                                Bijgewerkt op 21 februari 2026.
                            </p>
                        </div>
                    </div>
                </div>

                <p>
                    De wachttijd is onafhankelijk van de diagnosegroep, soort behandeling
                    (GBGGZ of SGGZ) of zorgverzekeraar. Een vermelde wachttijd is een
                    inschatting; dit is sterk afhankelijk van de overeenstemming die wij
                    kunnen vinden over de dag/tijd waarop afspraken mogelijk zijn. De
                    wachttijden zijn dan ook slechts een indicatie waar geen rechten aan
                    worden ontleend. Alvorens u op de wachtlijst wordt geplaatst, vindt
                    eerst een telefonische kennismaking plaats.
                </p>
                <p>
                    Wanneer u de wachttijd te lang vindt, kunt u altijd contact opnemen met
                    uw zorgverzekeraar en vragen om wachtlijstbemiddeling. Uw
                    zorgverzekeraar kan u ondersteunen, zodat u binnen 4 weken vanaf uw
                    eerste contact met een zorgaanbieder een intakegesprek krijgt, en dat
                    de behandeling binnen 10 weken vanaf de intake is gestart. Dit zijn de
                    maximaal aanvaardbare wachttijden die door zorgaanbieders en
                    zorgverzekeraars gezamenlijk zijn overeengekomen (de treeknormen),
                    conform de eisen die door de Nederlandse Zorgautoriteit (NZa) zijn
                    gesteld.
                </p>

                <h2>Werkwijze</h2>
                <h3>Intake</h3>
                <p>
                    De intakefase bestaat uit 2 tot 3 gesprekken. We brengen in kaart welke
                    klachten er spelen, wat uw verwachtingen en hulpvraag zijn, wat uw
                    verhaal en levensgeschiedenis is waarbinnen deze klachten zijn ontstaan
                    en welke hulp nodig is. Ook kunnen vragenlijsten worden afgenomen om
                    een beter beeld te krijgen van de problematiek en de ernst ervan.
                    Daarna volgt een adviesgesprek waarin kan worden besloten tot
                    psychotherapie of tot doorverwijzing. Als ik denk dat u elders beter
                    geholpen kunt worden, zal ik dat met u bespreken en mij inzetten om u
                    zo goed mogelijk door te verwijzen.
                </p>

                <h3>Behandelovereenkomst</h3>
                <p>
                    Als u instemt met het advies wordt een behandelovereenkomst opgesteld
                    waarin wordt beschreven wat uw hulpvraag en probleem is, welke
                    behandeldoelen nagestreefd zullen worden en via welke behandelmethode.
                    Tevens wordt de frequentie en — als mogelijk — de verwachte duur van
                    de behandeling vastgesteld. De behandelovereenkomst wordt door ons
                    beide ondertekend. Als u hiervoor toestemming geeft, wordt uw verwijzer
                    middels een brief op de hoogte van de gemaakte afspraken gesteld.
                    Gedurende het behandelproces zal er op verschillende momenten worden
                    geëvalueerd door middel van vragenlijsten en gesprekken. De afronding
                    van de behandeling is in overleg en we werken daar samen naartoe.
                </p>

                <div className="my-10 p-6 bg-[var(--error-bg)] border border-[var(--error-border)] rounded-lg">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-[var(--error-fg)] shrink-0 mt-0.5" />
                        <div>
                            <h3 className="!mt-0 !mb-2 text-xl !text-[var(--error-fg)]">
                                Spoed en crisis
                            </h3>
                            <p className="!text-[var(--error-fg)]">
                                De praktijk heeft geen faciliteiten voor opvang bij crisis.
                                Voor cliënten die bij mij in zorg zijn ben ik op mijn
                                werkdagen het eerste aanspreekpunt. Buiten kantoortijden of
                                bij afwezigheid kunt u terecht bij uw huisarts of de
                                dienstdoende huisartsenpost.
                            </p>
                            <p className="!text-[var(--error-fg)] !mb-0">
                                U kunt ook chatten of bellen met{" "}
                                <a
                                    href="https://www.113.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="!text-[var(--error-fg)] underline"
                                >
                                    113.nl
                                </a>{" "}
                                — deze organisatie biedt 24/7 gratis ondersteuning via{" "}
                                <strong>0800-0113</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                <h3>Waarneming</h3>
                <p>
                    Bij afwezigheid wegens vakantie of ziekte wordt mijn praktijk
                    waargenomen door een collega. Deze waarneming wordt indien van
                    toepassing met u besproken.
                </p>
            </article>
        </>
    );
}
