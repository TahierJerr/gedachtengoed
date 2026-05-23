import { siteConfig } from "./site-config";

type JsonLd = Record<string, unknown>;

/**
 * MedicalBusiness JSON-LD — Google's recommended schema type for healthcare providers.
 * Inherits LocalBusiness so it also qualifies for Maps / local pack rich results.
 */
export function medicalBusinessSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.contact.email,
        image: `${siteConfig.url}/opengraph-image`,
        logo: `${siteConfig.url}/opengraph-image`,
        priceRange: "€€",
        medicalSpecialty: "Psychiatric",
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.street,
            postalCode: siteConfig.contact.postalCode,
            addressLocality: siteConfig.contact.city,
            addressCountry: siteConfig.contact.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.contact.latitude,
            longitude: siteConfig.contact.longitude,
        },
        openingHoursSpecification: siteConfig.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${h.day}`,
            opens: h.opens,
            closes: h.closes,
        })),
        availableService: [
            { "@type": "MedicalTherapy", name: "Cliëntgerichte Psychotherapie" },
            { "@type": "MedicalTherapy", name: "Cognitieve Gedragstherapie (CGT)" },
            { "@type": "MedicalTherapy", name: "Schematherapie" },
            { "@type": "MedicalTherapy", name: "Emotion Focused Therapy (EFT)" },
            { "@type": "MedicalTherapy", name: "EMDR" },
            { "@type": "MedicalTherapy", name: "Narratieve Exposure Therapie (NET)" },
        ],
        founder: {
            "@type": "Person",
            "@id": `${siteConfig.url}/psychotherapeut#person`,
            name: siteConfig.author.name,
        },
    };
}

/**
 * Physician schema for Siepie — improves rich result eligibility on her profile page.
 */
export function physicianSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        "@id": `${siteConfig.url}/psychotherapeut#person`,
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.role,
        description:
            "BIG-geregistreerd GZ-Psycholoog en Psychotherapeut, werkzaam in de GGZ sinds 1997, gespecialiseerd in angst-, stemmings-, trauma- en persoonlijkheidsproblematiek.",
        url: `${siteConfig.url}/psychotherapeut`,
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        memberOf: [
            { "@type": "Organization", name: "Landelijke Vereniging van Vrijgevestigde Psychologen & Psychotherapeuten (LVVP)" },
            { "@type": "Organization", name: "Vereniging voor Schematherapie (VSt)" },
            { "@type": "Organization", name: "Vereniging voor Gedrags- en Cognitieve Therapieën (VGCT)" },
            { "@type": "Organization", name: "Vereniging Persoonsgerichte experiëntiële Psychotherapie (VPeP)" },
            { "@type": "Organization", name: "Vereniging EMDR Nederland (VEN)" },
        ],
        hasCredential: [
            { "@type": "EducationalOccupationalCredential", credentialCategory: `BIG-registratie psychotherapeut ${siteConfig.business.bigPsychotherapeut}` },
            { "@type": "EducationalOccupationalCredential", credentialCategory: `BIG-registratie GZ-psycholoog ${siteConfig.business.bigGzPsycholoog}` },
        ],
    };
}

/**
 * Site-level WebSite schema — enables the search box rich result eventually.
 */
export function websiteSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteConfig.url}/#organization` },
    };
}

/**
 * Breadcrumb trail for inner pages.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: `${siteConfig.url}${item.path}`,
        })),
    };
}

/**
 * FAQ schema — for the aanmelden page where common questions are answered.
 */
export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
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
