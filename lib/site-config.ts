/**
 * Centrale gegevens van de praktijk. Gebruikt in metadata, sitemap, JSON-LD,
 * e-mails en op de pagina's zelf. Wijzigt er iets, dan hoeft dat alleen hier.
 */
export const siteConfig = {
    name: "Praktijk voor Psychotherapie GedachtenGoed",
    shortName: "GedachtenGoed",
    tagline: "Praktijk voor Psychotherapie",
    description:
        "Kleinschalige psychotherapiepraktijk in Veldhoven die volwassenen helpt met angst-, stemmings-, trauma- en persoonlijkheidsproblematiek, gericht op verandering, herstel en persoonlijke groei.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gedachtengoedpsychotherapie.nl",
    ogImage: "/opengraph-image",
    locale: "nl_NL",
    language: "nl-NL",
    author: {
        name: "Siepie Zonderland",
        role: "GZ-Psycholoog en Psychotherapeut",
    },
    contact: {
        email: "info@gedachtengoedpsychotherapie.nl",
        street: "Van Aelstlaan 79",
        postalCode: "5503 BC",
        city: "Veldhoven",
        country: "NL",
        // Van Aelstlaan 79 volgens de PDOK Locatieserver
        latitude: 51.4117,
        longitude: 5.4009,
    },
    business: {
        kvk: "81310870",
        agbPraktijk: "94065990",
        agbPersoonlijk: "94015697",
        bigPsychotherapeut: "59054812016",
        bigGzPsycholoog: "39054812025",
    },
    openingHours: [
        { day: "Monday", label: "Maandag", opens: "09:00", closes: "17:00" },
        { day: "Tuesday", label: "Dinsdag", opens: "09:00", closes: "17:00" },
    ],
    /** Wachttijd voor nieuwe aanmeldingen. Pas beide regels aan bij een wijziging. */
    waitingTime: {
        weeks: 12,
        updated: "21 februari 2026",
    },
    crisis: {
        name: "113.nl",
        url: "https://www.113.nl",
        phone: "0800-0113",
    },
    keywords: [
        "psychotherapie Veldhoven",
        "psychotherapeut Veldhoven",
        "GZ-psycholoog Veldhoven",
        "EMDR Veldhoven",
        "schematherapie",
        "cognitieve gedragstherapie",
        "EFT therapie",
        "traumatherapie",
        "angststoornis behandeling",
        "depressie behandeling",
        "GedachtenGoed",
        "Siepie Zonderland",
    ],
} as const;

export type SiteConfig = typeof siteConfig;

export const mailto = `mailto:${siteConfig.contact.email}`;
