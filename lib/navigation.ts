export type NavLink = {
    label: string;
    href: string;
    description?: string;
};

export type NavGroup = {
    label: string;
    children: NavLink[];
};

export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
    return "children" in item;
}

export const navItems: NavItem[] = [
    {
        label: "Over mij",
        children: [
            {
                label: "Siepie Zonderland",
                href: "/psychotherapeut",
                description: "GZ-Psycholoog en Psychotherapeut",
            },
            {
                label: "Behandelvisie",
                href: "/behandelvisie",
                description: "Persoonsgericht werken",
            },
            {
                label: "Voor wie",
                href: "/voor-wie",
                description: "Voor welke klachten u bij mij terecht kunt",
            },
        ],
    },
    {
        label: "Behandeling",
        children: [
            {
                label: "Behandelaanbod",
                href: "/behandelaanbod",
                description: "CGT, EMDR, schematherapie, EFT en NET",
            },
            {
                label: "Aanmelden en werkwijze",
                href: "/aanmelden-en-werkwijze",
                description: "Wachttijd, intake en behandelovereenkomst",
            },
            {
                label: "Tarieven en vergoedingen",
                href: "/voorwaarden",
                description: "Kosten en zorgverzekeraars",
            },
        ],
    },
    {
        label: "Praktijk",
        children: [
            {
                label: "Praktijkinfo",
                href: "/praktijkinfo",
                description: "Kwaliteit, beroepscode en klachten",
            },
            {
                label: "Patiëntenportaal",
                href: "/patientenportaal",
                description: "Inschrijven, inloggen of een vragenlijst invullen",
            },
        ],
    },
    { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
    { label: "Tarieven en voorwaarden", href: "/voorwaarden" },
    { label: "Privacyverklaring", href: "/privacyverklaring" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookiebeleid", href: "/cookiebeleid" },
];
