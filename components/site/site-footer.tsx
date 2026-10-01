import Link from "next/link";
import type { CSSProperties } from "react";
import { legalLinks } from "@/lib/navigation";
import { mailto, siteConfig } from "@/lib/site-config";
import { Koru } from "./koru";

const clientLinks = [
    { label: "Aanmelden en werkwijze", href: "/aanmelden-en-werkwijze" },
    { label: "Patiëntenportaal", href: "/patientenportaal" },
    { label: "Praktijkinfo", href: "/praktijkinfo" },
    { label: "Contact", href: "/contact" },
];

const linkClass = "underline-offset-4 hover:text-white hover:underline";

export function SiteFooter() {
    const { contact, business, crisis, openingHours } = siteConfig;

    return (
        <footer className="mt-24 bg-accent-dark text-[#d5e2da]">
            <div className="border-b border-white/15">
                <p className="mx-auto max-w-6xl px-4 py-5 text-[0.975rem] sm:px-6 lg:px-8">
                    <strong className="font-semibold text-white">Spoed of crisis?</strong> Bel uw
                    huisarts of de huisartsenpost. {crisis.name} is dag en nacht bereikbaar op{" "}
                    <a href="tel:08000113" className="font-semibold text-white underline">
                        {crisis.phone}
                    </a>
                    .
                </p>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.35fr_0.9fr_0.9fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <Koru
                                size={44}
                                className="text-white"
                                // De spiraal neemt de kleur van de voettekst-achtergrond aan.
                                style={{ "--koru-cutout": "var(--accent-dark)" } as CSSProperties}
                            />
                            <div className="leading-tight">
                                <div className="font-serif text-2xl text-white">
                                    {siteConfig.shortName}
                                </div>
                                <div className="text-sm">{siteConfig.tagline}</div>
                            </div>
                        </div>
                        <p className="mt-5 max-w-sm text-[0.975rem]">
                            Professionele psychotherapie op maat, gericht op verandering, herstel en
                            persoonlijke groei.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-sans text-base font-semibold text-white">Praktijk</h2>
                        <address className="mt-3 space-y-3 text-[0.975rem] not-italic">
                            <p>
                                {contact.street}
                                <br />
                                {contact.postalCode} {contact.city}
                            </p>
                            <p>
                                <a
                                    href={mailto}
                                    className={`${linkClass} text-[0.9rem] [overflow-wrap:anywhere]`}
                                >
                                    {contact.email}
                                </a>
                            </p>
                            <p>
                                {openingHours.map((hours) => hours.label).join(" en ")}
                                <br />
                                9.00 tot 17.00 uur
                            </p>
                        </address>
                    </div>

                    <nav aria-label="Voor cliënten">
                        <h2 className="font-sans text-base font-semibold text-white">
                            Voor cliënten
                        </h2>
                        <ul className="mt-3 space-y-2 text-[0.975rem]">
                            {clientLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Informatie">
                        <h2 className="font-sans text-base font-semibold text-white">Informatie</h2>
                        <ul className="mt-3 space-y-2 text-[0.975rem]">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm sm:flex-row sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {siteConfig.name}
                    </p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1">
                        <li>KVK {business.kvk}</li>
                        <li>AGB praktijk {business.agbPraktijk}</li>
                        <li>BIG psychotherapeut {business.bigPsychotherapeut}</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
