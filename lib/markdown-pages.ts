import { complaints } from "./complaints";
import { signupFaq } from "./faq";
import { rates, ratesYear } from "./rates";
import { siteConfig } from "./site-config";
import { therapies } from "./therapies";

/**
 * Markdown-versies van de belangrijkste pagina's, bedoeld voor AI-assistenten en
 * andere programma's die de site lezen (zie /llms.txt). Elke pagina is bereikbaar
 * als `/<slug>.md`; de homepage als `/index.md`.
 */
export type MarkdownPage = {
    slug: string;
    /** Pad van de gewone (HTML) pagina. */
    path: string;
    title: string;
    summary: string;
    body: () => string;
};

const { contact, business, waitingTime, crisis, author } = siteConfig;
const address = `${contact.street}, ${contact.postalCode} ${contact.city}`;
const workdays = siteConfig.openingHours.map((hours) => hours.label).join(" en ");
const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

export const markdownPages: MarkdownPage[] = [
    {
        slug: "index",
        path: "/",
        title: siteConfig.name,
        summary:
            "Kleinschalige praktijk voor psychotherapie in Veldhoven voor volwassenen, van GZ-Psycholoog en Psychotherapeut Siepie Zonderland.",
        body: () => `Praktijk voor Psychotherapie GedachtenGoed is een kleinschalige praktijk in ${contact.city} van ${author.name}, BIG-geregistreerd ${author.role}. De praktijk biedt psychotherapeutische hulp voor volwassenen, gericht op verandering, herstel en persoonlijke groei, in een persoonlijke setting.

Psychotherapie is de eerst aangewezen keuze bij behandeling van angst-, stemmings-, trauma- en persoonlijkheidsproblematiek. Wanneer klachten hardnekkig of terugkerend zijn, kan psychotherapie hulp bieden.

## Kerngegevens

- Adres: ${address}
- E-mail: ${contact.email}
- Werkdagen: ${workdays}, 9.00 tot 17.00 uur
- Doelgroep: volwassenen vanaf 18 jaar
- Wachttijd voor nieuwe aanmeldingen: circa ${waitingTime.weeks} weken (bijgewerkt op ${waitingTime.updated})
- Aanmelden: via het contactformulier op ${siteConfig.url}/contact; daarna volgt een vrijblijvende telefonische kennismaking
- Verwijsbrief van de huisarts nodig voor vergoeding door de zorgverzekeraar

## Behandelvormen

${list(therapies.map((therapy) => therapy.title))}

## Spoed en crisis

De praktijk heeft geen faciliteiten voor opvang bij crisis. Bel de huisarts of de huisartsenpost. ${crisis.name} is dag en nacht bereikbaar op ${crisis.phone}.`,
    },
    {
        slug: "psychotherapeut",
        path: "/psychotherapeut",
        title: "Siepie Zonderland, psychotherapeut en GZ-psycholoog",
        summary: "Achtergrond, BIG-registraties, specialisaties en beroepsverenigingen.",
        body: () => `${author.name} is BIG-geregistreerd GZ-Psycholoog en Psychotherapeut. Sinds 1997 werkt zij op verschillende plekken binnen de geestelijke gezondheidszorg. Zij heeft veel behandelervaring op het gebied van angst- en stemmingsklachten, werkgerelateerde en interpersoonlijke problematiek, (complexe) traumaklachten, zelfbeeldproblemen en persoonlijkheidsproblemen. Zij combineert haar eigen praktijk met werk bij een grotere instelling voor gespecialiseerde geestelijke gezondheidszorg.

## Registraties

- Psychotherapeut, BIG-registratie ${business.bigPsychotherapeut}
- GZ-psycholoog, BIG-registratie ${business.bigGzPsycholoog}
- Persoonlijk AGB: ${business.agbPersoonlijk}
- Praktijk AGB: ${business.agbPraktijk}
- KVK-nummer: ${business.kvk}

## Specialisaties

- Senior Schematherapeut
- Persoonsgerichte en Experiëntiële Psychotherapeut (VPeP)
- Cognitief Gedragstherapeut (VGCT)
- EMDR Europe Practitioner (Vereniging EMDR Nederland, VEN)
- Emotion Focused-i therapist (EFT)
- Supervisor, erkend door de VGCt en door de Vereniging voor Schematherapie (VSt)

## Beroepsverenigingen

- Landelijke Vereniging van Vrijgevestigde Psychologen & Psychotherapeuten (LVVP)
- Vereniging voor Schematherapie (VSt)
- Vereniging voor Gedrags- en Cognitieve Therapieën (VGCT)
- Vereniging Persoonsgerichte experiëntiële Psychotherapie (VPeP)
- Vereniging EMDR Nederland (VEN)`,
    },
    {
        slug: "behandelvisie",
        path: "/behandelvisie",
        title: "Behandelvisie",
        summary:
            "Persoonsgericht werken: de ontwikkeling van de persoon als geheel staat centraal.",
        body: () => `Siepie Zonderland werkt persoonsgericht, waarbij de ontwikkeling van de persoon als geheel centraal staat: echt contact aangaan, niet (ver)oordelend, betrokken en empathisch. Om het proces van therapie aan te gaan is het belangrijk dat een cliënt zich op zijn of haar gemak en vertrouwd voelt. Wie zich veilig voelt kan zich openstellen; dan komt er ruimte voor groei en verandering.

Elke behandeling is maatwerk: ieder mens is uniek, vanuit een basis gevormd door ervaringen. Er is veel aandacht voor het verhaal van de cliënt en voor de betekenis van de klachten. Afhankelijk van hulpvraag en klachten is de werkwijze meer klachtgericht of meer onderzoekend.

Behandelingen kunnen vanuit meerdere referentiekaders en methodieken worden geboden: persoonsgerichte therapie, cognitieve gedragstherapie, schematherapie, Emotion Focused Therapy (EFT), EMDR en Narratieve Exposure Therapie (NET).

## De koru

Persoonlijke groei en ontwikkeling wordt gesymboliseerd door de koru, het Maori-symbool dat een opgerolde varen verbeeldt. Daarom is de koru het beeldmerk van de praktijk.`,
    },
    {
        slug: "voor-wie",
        path: "/voor-wie",
        title: "Voor wie",
        summary: "Voor welke klachten volwassenen bij de praktijk terecht kunnen, en wanneer niet.",
        body: () => `De praktijk is gericht op volwassenen vanaf 18 jaar, voor kortdurende en langdurende klachten. Therapie is maatwerk en wordt zo goed mogelijk afgestemd op de hulpvraag.

## Klachten waarvoor u in behandeling kunt komen

${list(complaints)}

## Wanneer niet

De praktijk kan niet de hulp bieden die nodig is als de zorgvraag te zwaar en te complex is. Als psychose(s), crisis, acute suïcidaliteit, zelfverwonding, ernstige verslavingsproblematiek, een ernstige eetstoornis of agressieproblematiek op de voorgrond staan, is een gespecialiseerd aanbod en een multidisciplinaire behandeling elders meer geïndiceerd. De huisarts kan dan helpen bij het vinden van passende zorg.`,
    },
    {
        slug: "behandelaanbod",
        path: "/behandelaanbod",
        title: "Behandelaanbod",
        summary: "Integratieve psychotherapie: de behandelvormen van de praktijk.",
        body: () => `Psychotherapie is een behandelmethode bij psychische klachten en stoornissen. Het helpt zicht te krijgen op uzelf en uw problemen en biedt handvatten om anders met problemen om te gaan, pijnlijke gevoelens te verwerken en meer in contact te komen met uzelf.

De praktijk biedt psychotherapie op een integratieve wijze: de therapie wordt afgestemd op de persoon, de hulpvraag en het klachtenbeeld, met een combinatie van interventies en methoden uit verschillende therapiestromingen.

## Behandelvormen

${therapies.map((therapy) => `- **${therapy.title}**: ${therapy.description} Meer uitleg: ${therapy.href}`).join("\n")}`,
    },
    {
        slug: "aanmelden-en-werkwijze",
        path: "/aanmelden-en-werkwijze",
        title: "Aanmelden en werkwijze",
        summary: "Aanmelden, verwijsbrief, actuele wachttijd, intake en behandelovereenkomst.",
        body: () => `## Aanmelden

Aanmelden gaat via het contactformulier op ${siteConfig.url}/contact. Daarna volgt een vrijblijvend telefonisch contact, waarin kort wordt stilgestaan bij klachten en hulpvraag en wordt nagegaan of verdere (intake)gesprekken zinvol zijn. Voor een intakegesprek is een verwijsbrief van de huisarts nodig.

Voor vergoeding door de zorgverzekeraar staat in de verwijsbrief in ieder geval:

- Datum verwijzing
- Naam, adres, functie, AGB-code en stempel van de verwijzer/arts
- Gegevens van de cliënt (naam, adres, BSN-nummer en geboortedatum)
- De reden van verwijzing
- Generalistische of specialistische GGZ
- Bij Basis Generalistische GGZ: om welke prestatie het gaat (kort, middel, intensief of chronisch)
- De vermoedelijke diagnose (of een vermoeden van een DSM-V-diagnose)

## Actuele wachttijd

De wachttijd voor nieuwe aanmeldingen is circa ${waitingTime.weeks} weken (bijgewerkt op ${waitingTime.updated}). De wachttijd is onafhankelijk van diagnosegroep, soort behandeling (GBGGZ of SGGZ) en zorgverzekeraar. Het is een inschatting waar geen rechten aan worden ontleend. Wie de wachttijd te lang vindt, kan de zorgverzekeraar om wachtlijstbemiddeling vragen.

## Werkwijze

- **Intake**: 2 tot 3 gesprekken over klachten, verwachtingen, hulpvraag en levensgeschiedenis; eventueel vragenlijsten. Daarna een adviesgesprek waarin tot psychotherapie of doorverwijzing wordt besloten.
- **Behandelovereenkomst**: beschrijft hulpvraag, behandeldoelen, behandelmethode, frequentie en zo mogelijk de verwachte duur. Tijdens de behandeling wordt op verschillende momenten geëvalueerd.
- **Waarneming**: bij afwezigheid door vakantie of ziekte neemt een collega waar.

## Spoed en crisis

De praktijk heeft geen faciliteiten voor opvang bij crisis. Buiten kantoortijden of bij afwezigheid: de huisarts of de dienstdoende huisartsenpost. ${crisis.name} biedt dag en nacht gratis ondersteuning via ${crisis.phone}.

## Veelgestelde vragen

${signupFaq.map((item) => `**${item.question}**\n${item.answer}`).join("\n\n")}`,
    },
    {
        slug: "voorwaarden",
        path: "/voorwaarden",
        title: "Tarieven en vergoedingen",
        summary: `Tarieven ${ratesYear}, vergoeding door zorgverzekeraars, eigen risico en annuleren.`,
        body: () => `Alle aangeboden psychotherapie is opgenomen in de basisverzekering van de Zorgverzekeringswet als Specialistische GGZ. De behandeling wordt afgerekend volgens het Zorgprestatiemodel; de tarieven stelt de Nederlandse Zorgautoriteit (NZa) jaarlijks vast.

## Vergoeding

- De praktijk werkt op een paar uitzonderingen na contractvrij: de cliënt ontvangt maandelijks de factuur en declareert zelf bij de zorgverzekeraar. De vergoeding hangt af van de polis en ligt veelal tussen de 55% en de 85%.
- Contracten in ${ratesYear}: DSW en Stad Holland. Bij deze verzekeraars wordt de behandeling volledig vergoed vanuit de basisverzekering.
- Het jaarlijks eigen risico (€ 385,–) wordt door de verzekeraar verrekend.
- Een verwijsbrief van de huisarts is noodzakelijk.

## Tarieven NZa ${ratesYear}

| Prestatie | Code | Tarief |
|---|---|---|
${rates.map((rate) => `| ${rate.desc} | ${rate.code} | ${rate.price} |`).join("\n")}

## Onverzekerde zorg en zelf betalen

- Onverzekerde zorg (bijvoorbeeld relatieproblemen, werkproblemen, gestagneerde rouw): € 146,00 per behandelconsult van 45 minuten en € 182,50 per behandelconsult van 60 minuten (NZa-tarief ${ratesYear}). Hiervoor is geen verwijsbrief nodig.
- Zelf betalen kan ook; het tarief is dan 100% van de NZa-maximumtarieven. Een verwijzing van de huisarts blijft nodig.

## Afspraak annuleren

Kosteloos annuleren kan per e-mail tot 24 uur voor de afspraak. Voor niet of te laat afgezegde afspraken wordt € 65 per sessie in rekening gebracht; dit kan niet bij de zorgverzekeraar worden gedeclareerd.`,
    },
    {
        slug: "praktijkinfo",
        path: "/praktijkinfo",
        title: "Praktijkinfo",
        summary: "Kwaliteitsstatuut, beroepscode, rechten, privacy en klachtenregeling.",
        body: () => `- **Praktijkvoering**: de praktijk is aangesloten bij de LVVP en volgt het reglement van de LVVP. Informatie voor cliënten: https://lvvp.info/voor-clienten
- **Kwaliteit**: de praktijk beschikt over een goedgekeurd kwaliteitsstatuut. De behandelaar volgt bij- en nascholing, neemt deel aan intervisiegroepen en meet het verloop en effect van de behandeling met vragenlijsten.
- **Beroepscode**: de beroepscode voor psychotherapeuten van de Nederlandse Vereniging voor Psychotherapie (NVP).
- **Rechten en privacy**: de Wet Geneeskundige Behandelovereenkomst (WGBO) en de AVG zijn van toepassing. Privacyverklaring: ${siteConfig.url}/privacyverklaring
- **Klachten**: bespreek een klacht bij voorkeur eerst met de behandelaar. Komt u er samen niet uit, dan kunt u terecht bij een LVVP-klachtenfunctionaris van Klacht&Company: https://lvvp.info/voor-clienten/wat-als-ik-ontevreden-ben-de-behandeling/`,
    },
    {
        slug: "contact",
        path: "/contact",
        title: "Contact en aanmelden",
        summary: "Adres, e-mail, werkdagen en het contactformulier.",
        body: () => `- Adres: ${address}
- E-mail: ${contact.email}
- Werkdagen: ${workdays}, 9.00 tot 17.00 uur
- Contactformulier en aanmelden: ${siteConfig.url}/contact

De spreekkamer bevindt zich in het souterrain en is bereikbaar via een trap. Er is voldoende gelegenheid tot parkeren in de buurt.

Stuur geen medische of gevoelige gegevens via het contactformulier of per gewone e-mail; inhoudelijke informatie wordt telefonisch of tijdens een afspraak besproken.

Bij spoed of crisis: bel de huisarts of de huisartsenpost. ${crisis.name} is dag en nacht bereikbaar op ${crisis.phone}.`,
    },
    {
        slug: "patientenportaal",
        path: "/patientenportaal",
        title: "Patiëntenportaal",
        summary: "Inschrijven, inloggen en vragenlijsten invullen via het portaal van Intramed.",
        body: () => `Via het beveiligde patiëntenportaal van Intramed kunnen cliënten zich inschrijven, inloggen, vragenlijsten invullen, afspraken bekijken en persoonlijke gegevens bijwerken. De knoppen om in te schrijven en in te loggen staan op ${siteConfig.url}/patientenportaal.

Het portaal voldoet aan NEN 7510 en de AVG. Inhoudelijke en gezondheidsgerelateerde gegevens horen uitsluitend in het beveiligde portaal of tijdens een afspraak, niet in een gewone e-mail.`,
    },
];

export function getMarkdownPage(slug: string): MarkdownPage | undefined {
    return markdownPages.find((page) => page.slug === slug);
}

/** Het volledige markdown-document van één pagina, met titel en bronvermelding. */
export function renderMarkdownPage(page: MarkdownPage): string {
    return `# ${page.title}\n\n> ${page.summary}\n\n${page.body()}\n\n---\nBron: ${siteConfig.url}${page.path === "/" ? "" : page.path}\n`;
}
