import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { Koru } from "./koru";

export function SiteFooter() {
    return (
        <footer className="bg-[var(--muted-background)] border-t border-[var(--border)] mt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Koru size={36} className="text-[var(--accent-dark)]" />
                            <div>
                                <div className="font-serif text-lg text-[var(--accent-dark)]">
                                    GedachtenGoed
                                </div>
                                <div className="text-xs text-[var(--muted)]">
                                    Praktijk voor Psychotherapie
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-md">
                            Professionele psychotherapie op maat, gericht op verandering, herstel
                            en persoonlijke groei.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[var(--accent-dark)] mb-3 font-sans">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>Van Aelstlaan 79<br />5503 BC Veldhoven</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                                <a
                                    href="mailto:GedachtenGoedPsychotherapie@gmail.com"
                                    className="hover:text-[var(--accent-dark)] break-all"
                                >
                                    GedachtenGoedPsychotherapie@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>Maandag & Dinsdag<br />9:00 – 17:00</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[var(--accent-dark)] mb-3 font-sans">
                            Voor cliënten
                        </h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li>
                                <Link
                                    href="/patientenportaal"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Patiëntenportaal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/aanmelden-en-werkwijze"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Aanmelden & werkwijze
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[var(--accent-dark)] mb-3 font-sans">
                            Informatie
                        </h3>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li>
                                <Link
                                    href="/voorwaarden"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Voorwaarden
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacyverklaring"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Privacyverklaring
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/disclaimer"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookiebeleid"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    Cookiebeleid
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[var(--muted)]">
                    <div>
                        © {new Date().getFullYear()} Praktijk voor Psychotherapie GedachtenGoed
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>KVK 81310870</span>
                        <span>AGB praktijk 94065990</span>
                        <span>BIG psychotherapeut 59054812016</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
