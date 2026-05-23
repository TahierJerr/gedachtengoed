import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Privacyverklaring",
    description:
        "Privacyverklaring van Praktijk voor Psychotherapie GedachtenGoed conform de Algemene Verordening Gegevensbescherming (AVG).",
    alternates: { canonical: "/privacyverklaring" },
};

export default function PrivacyverklaringPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Privacyverklaring", path: "/privacyverklaring" },
                ])}
            />
            <PageHero
                eyebrow="AVG"
                title="Privacyverklaring"
                intro="Praktijk voor Psychotherapie GedachtenGoed hecht groot belang aan uw privacy en de bescherming van uw persoonsgegevens. Deze verklaring beschrijft hoe ik daarmee omga."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <p className="text-sm text-[var(--muted)]">
                    Laatst bijgewerkt: februari 2026
                </p>

                <h2>1. Verwerkingsverantwoordelijke</h2>
                <p>
                    Praktijk voor Psychotherapie GedachtenGoed, vertegenwoordigd door
                    Siepie Zonderland (BIG-geregistreerd psychotherapeut en
                    GZ-psycholoog), is verwerkingsverantwoordelijke in de zin van de
                    Algemene Verordening Gegevensbescherming (AVG / GDPR).
                </p>
                <ul>
                    <li>Van Aelstlaan 79, 5503 BC Veldhoven</li>
                    <li>E-mail: GedachtenGoedPsychotherapie@gmail.com</li>
                    <li>KVK: 81310870</li>
                </ul>

                <h2>2. Welke gegevens verwerk ik?</h2>
                <h3>Via het contactformulier</h3>
                <p>
                    Wanneer u contact opneemt via het formulier op deze website verwerk
                    ik de volgende gegevens:
                </p>
                <ul>
                    <li>Naam</li>
                    <li>E-mailadres</li>
                    <li>Telefoonnummer (optioneel)</li>
                    <li>Onderwerp en inhoud van uw bericht</li>
                </ul>
                <p>
                    Uw bericht wordt direct per e-mail aan mij verzonden en wordt{" "}
                    <strong>niet opgeslagen in een database</strong> op de website.
                </p>

                <h3>Binnen de behandeling</h3>
                <p>
                    Indien u bij mij in behandeling komt, verwerk ik daarnaast de
                    gegevens die noodzakelijk zijn voor een verantwoorde uitvoering van
                    de zorg, waaronder NAW-gegevens, geboortedatum, BSN, gegevens van
                    uw verwijzer en zorgverzekeraar, en de inhoudelijke gegevens van uw
                    dossier. Deze verwerking gebeurt buiten deze website om, in een
                    beveiligd elektronisch patiëntendossier (EPD).
                </p>

                <h2>3. Doel en grondslag van de verwerking</h2>
                <p>
                    De gegevens die u via het contactformulier verstrekt verwerk ik
                    uitsluitend om contact met u op te nemen naar aanleiding van uw
                    bericht. De wettelijke grondslag is uw{" "}
                    <strong>toestemming</strong> (artikel 6 lid 1 sub a AVG), die u
                    geeft door het aanvinken van het toestemmingsvakje in het formulier.
                </p>
                <p>
                    Gegevens binnen een behandeling verwerk ik op grond van de{" "}
                    <strong>uitvoering van de behandelovereenkomst</strong> (art. 6 lid
                    1 sub b AVG) en op grond van een{" "}
                    <strong>wettelijke verplichting</strong> (art. 6 lid 1 sub c AVG),
                    in combinatie met de uitzondering voor gezondheidsgegevens van art.
                    9 lid 2 sub h AVG. Aanvullende wetgeving die hier van toepassing
                    is, is onder andere de WGBO, de Wabvpz en de Zorgverzekeringswet.
                </p>

                <h2>4. Bewaartermijnen</h2>
                <ul>
                    <li>
                        <strong>Contactformulier-berichten:</strong> worden bewaard
                        zolang nodig voor het beantwoorden van uw vraag, en in elk geval
                        niet langer dan strikt noodzakelijk. Komt er geen behandeling
                        uit voort, dan worden de gegevens verwijderd.
                    </li>
                    <li>
                        <strong>Behandeldossiers:</strong> worden bewaard conform de
                        wettelijke bewaartermijn van de WGBO (in beginsel 20 jaar na
                        het laatste behandelcontact), tenzij langer of korter bewaren
                        op grond van de wet noodzakelijk of toegestaan is.
                    </li>
                    <li>
                        <strong>Administratieve gegevens (facturatie):</strong> 7 jaar,
                        conform fiscale bewaarplicht.
                    </li>
                </ul>

                <h2>5. Delen van gegevens met derden</h2>
                <p>
                    Ik deel uw gegevens nooit met derden voor commerciële doeleinden.
                    Gegevens worden alleen gedeeld:
                </p>
                <ul>
                    <li>
                        met uw zorgverzekeraar voor zover noodzakelijk voor declaratie
                        (alleen bij behandeling);
                    </li>
                    <li>
                        met uw huisarts of verwijzer, indien u daarvoor toestemming
                        heeft gegeven;
                    </li>
                    <li>
                        met verwerkers die in mijn opdracht gegevens verwerken
                        (bijvoorbeeld de leverancier van het patiëntendossier of de
                        e-maildienst voor het verzenden van contactformulier-berichten),
                        met wie een verwerkersovereenkomst is afgesloten;
                    </li>
                    <li>
                        wanneer een wettelijke verplichting daartoe noopt.
                    </li>
                </ul>

                <h2>6. Beveiliging</h2>
                <p>
                    Ik neem passende technische en organisatorische maatregelen om uw
                    gegevens te beschermen tegen verlies, onbevoegde toegang en
                    misbruik. De website maakt gebruik van een beveiligde
                    HTTPS-verbinding. Voor het uitwisselen van medische of inhoudelijke
                    informatie gebruik ik beveiligde kanalen die voldoen aan de norm
                    NTA 7516 (veilig mailen in de zorg). Gebruik daarom het
                    contactformulier niet voor het delen van medische of gevoelige
                    informatie.
                </p>

                <h2>7. Uw rechten</h2>
                <p>U heeft op grond van de AVG de volgende rechten:</p>
                <ul>
                    <li>
                        <strong>Recht op inzage:</strong> u mag de gegevens die ik van u
                        verwerk inzien.
                    </li>
                    <li>
                        <strong>Recht op rectificatie:</strong> u mag onjuiste of
                        onvolledige gegevens laten corrigeren.
                    </li>
                    <li>
                        <strong>Recht op verwijdering:</strong> u kunt verzoeken om
                        verwijdering van uw gegevens, voor zover dit niet in strijd is
                        met wettelijke bewaartermijnen.
                    </li>
                    <li>
                        <strong>Recht op beperking:</strong> u kunt vragen om de
                        verwerking van uw gegevens (tijdelijk) te beperken.
                    </li>
                    <li>
                        <strong>Recht van bezwaar:</strong> u kunt bezwaar maken tegen
                        de verwerking van uw gegevens.
                    </li>
                    <li>
                        <strong>Recht op dataportabiliteit:</strong> u kunt de gegevens
                        die u zelf heeft aangeleverd in een gangbaar formaat opvragen.
                    </li>
                    <li>
                        <strong>Recht om toestemming in te trekken:</strong> als de
                        verwerking is gebaseerd op uw toestemming, kunt u die op elk
                        moment intrekken. Dit heeft geen terugwerkende kracht.
                    </li>
                </ul>
                <p>
                    Voor het uitoefenen van deze rechten kunt u contact opnemen via{" "}
                    <a href="mailto:GedachtenGoedPsychotherapie@gmail.com">
                        GedachtenGoedPsychotherapie@gmail.com
                    </a>
                    . Ik reageer binnen 4 weken op uw verzoek.
                </p>

                <h2>8. Klacht indienen bij de Autoriteit Persoonsgegevens</h2>
                <p>
                    Als u van mening bent dat uw persoonsgegevens onjuist worden
                    verwerkt, kunt u een klacht indienen bij de Autoriteit
                    Persoonsgegevens (AP) via{" "}
                    <a
                        href="https://autoriteitpersoonsgegevens.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        autoriteitpersoonsgegevens.nl
                    </a>
                    . Ik stel het op prijs als u eerst contact met mij opneemt zodat we
                    samen tot een oplossing kunnen komen.
                </p>

                <h2>9. Cookies en tracking</h2>
                <p>
                    Deze website plaatst{" "}
                    <strong>geen tracking cookies of analytische cookies</strong> en
                    maakt geen gebruik van externe trackers zoals Google Analytics of
                    Facebook Pixel. Zie verder het{" "}
                    <a href="/cookiebeleid">cookiebeleid</a>.
                </p>

                <h2>10. Functionaris voor Gegevensbescherming (FG)</h2>
                <p>
                    Praktijk voor Psychotherapie GedachtenGoed is een eenmanspraktijk
                    en is op grond van de AVG niet verplicht een Functionaris voor
                    Gegevensbescherming aan te stellen. Voor privacy-gerelateerde
                    vragen kunt u zich rechtstreeks tot mij wenden.
                </p>

                <h2>11. Wijzigingen</h2>
                <p>
                    Deze privacyverklaring kan worden aangepast als wet- of regelgeving
                    daartoe aanleiding geeft. De meest actuele versie vindt u altijd op
                    deze pagina.
                </p>
            </article>
        </>
    );
}
