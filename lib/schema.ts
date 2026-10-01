import { siteConfig } from "./site-config";
import { therapies } from "./therapies";

type JsonLd = Record<string, unknown>;

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const PERSON_ID = `${siteConfig.url}/psychotherapeut#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const professionalBodies = [
    "Landelijke Vereniging van Vrijgevestigde Psychologen & Psychotherapeuten (LVVP)",
    "Vereniging voor Schematherapie (VSt)",
    "Vereniging voor Gedrags- en Cognitieve Therapieën (VGCT)",
    "Vereniging Persoonsgerichte experiëntiële Psychotherapie (VPeP)",
    "Vereniging EMDR Nederland (VEN)",
];

/**
 * MedicalBusiness (ook LocalBusiness): het type dat Google aanraadt voor
 * zorgaanbieders, met adres, werkdagen en behandelvormen.
 */
export function medicalBusinessSchema(): JsonLd {
    const { contact } = siteConfig;

    return {
        "@context": "https://schema.org",
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": ORGANIZATION_ID,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: siteConfig.url,
        email: contact.email,
        image: [
            `${siteConfig.url}/images/spreekkamer.jpg`,
            `${siteConfig.url}/images/praktijk-buiten.jpg`,
        ],
        logo: `${siteConfig.url}/logo.png`,
        medicalSpecialty: "https://schema.org/Psychiatric",
        isAcceptingNewPatients: true,
        address: {
            "@type": "PostalAddress",
            streetAddress: contact.street,
            postalCode: contact.postalCode,
            addressLocality: contact.city,
            addressRegion: "Noord-Brabant",
            addressCountry: contact.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: contact.latitude,
            longitude: contact.longitude,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${contact.street}, ${contact.postalCode} ${contact.city}`
        )}`,
        areaServed: { "@type": "City", name: contact.city },
        openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${hours.day}`,
            opens: hours.opens,
            closes: hours.closes,
        })),
        availableService: therapies.map((therapy) => ({
            "@type": "MedicalTherapy",
            name: therapy.title,
            description: therapy.description,
        })),
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
    };
}

/** Siepie Zonderland als persoon, met registraties en lidmaatschappen. */
export function personSchema(): JsonLd {
    const { business } = siteConfig;

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": PERSON_ID,
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.role,
        description:
            "BIG-geregistreerd GZ-Psycholoog en Psychotherapeut, werkzaam in de GGZ sinds 1997, met behandelervaring op het gebied van angst-, stemmings-, trauma- en persoonlijkheidsproblematiek.",
        url: `${siteConfig.url}/psychotherapeut`,
        image: `${siteConfig.url}/images/siepie-zonderland.jpg`,
        worksFor: { "@id": ORGANIZATION_ID },
        workLocation: { "@id": ORGANIZATION_ID },
        sameAs: ["https://zoeken.bigregister.nl/zorgverlener/f5926bd8-d83b-44ca-9249-997a053d8474"],
        knowsAbout: therapies.map((therapy) => therapy.title),
        memberOf: professionalBodies.map((name) => ({ "@type": "Organization", name })),
        hasCredential: [
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "BIG-registratie psychotherapeut",
                identifier: business.bigPsychotherapeut,
            },
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "BIG-registratie GZ-psycholoog",
                identifier: business.bigGzPsycholoog,
            },
        ],
    };
}

export function websiteSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": ORGANIZATION_ID },
    };
}

/** Kruimelpad voor inhoudspagina's; hoort bij het zichtbare kruimelpad in de paginakop. */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.path}`,
        })),
    };
}

/** Veelgestelde vragen. De vragen en antwoorden moeten ook zichtbaar op de pagina staan. */
export function faqSchema(items: readonly { question: string; answer: string }[]): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}
