/**
 * Centralized site configuration — used everywhere from metadata, sitemap,
 * JSON-LD structured data and emails. Update the domain in one place if it changes.
 */
export const siteConfig = {
    name: "Praktijk voor Psychotherapie GedachtenGoed",
    shortName: "GedachtenGoed",
    description:
        "Kleinschalige psychotherapie­praktijk in Veldhoven die volwassenen helpt met angst-, stemmings-, trauma- en persoonlijkheidsproblematiek — gericht op verandering, herstel en persoonlijke groei.",
    url:
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://gedachtengoedpsychotherapie.nl",
    ogImage: "/opengraph-image",
    locale: "nl_NL",
    language: "nl-NL",
    author: {
        name: "Siepie Zonderland",
        role: "GZ-Psycholoog en Psychotherapeut",
    },
    contact: {
        email: "GedachtenGoedPsychotherapie@gmail.com",
        street: "Van Aelstlaan 79",
        postalCode: "5503 BC",
        city: "Veldhoven",
        country: "NL",
        // approximate coords for Van Aelstlaan, Veldhoven
        latitude: 51.4192,
        longitude: 5.4147,
    },
    business: {
        kvk: "81310870",
        agbPraktijk: "94065990",
        agbPersoonlijk: "94015697",
        bigPsychotherapeut: "59054812016",
        bigGzPsycholoog: "39054812025",
    },
    openingHours: [
        { day: "Monday", opens: "09:00", closes: "17:00" },
        { day: "Tuesday", opens: "09:00", closes: "17:00" },
    ],
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
