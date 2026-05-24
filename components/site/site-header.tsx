"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Koru } from "./koru";
import { cn } from "@/lib/utils";

type NavItem = {
    label: string;
    href?: string;
    children?: { label: string; href: string; description?: string }[];
};

const navItems: NavItem[] = [
    {
        label: "Over mij",
        children: [
            {
                label: "Siepie Zonderland",
                href: "/psychotherapeut",
                description: "GZ-Psycholoog & Psychotherapeut",
            },
            {
                label: "Behandelvisie",
                href: "/behandelvisie",
                description: "Persoonsgericht werken",
            },
            {
                label: "Voor wie",
                href: "/voor-wie",
                description: "Voor welke klachten en doelgroep",
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
                label: "Aanmelden & werkwijze",
                href: "/aanmelden-en-werkwijze",
                description: "Wachttijd, intake en behandelovereenkomst",
            },
            {
                label: "Tarieven & vergoedingen",
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
                description: "Inschrijven, inloggen of vragenlijst invullen",
            },
        ],
    },
    { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Close mobile menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close mobile menu with escape key
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
                    aria-label="Home"
                >
                    <Koru
                        size={36}
                        className="text-[var(--accent-dark)] transition-transform group-hover:rotate-6 sm:[width:42px] sm:[height:42px]"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="font-serif text-base sm:text-xl text-[var(--accent-dark)]">
                            GedachtenGoed
                        </span>
                        <span className="text-[10px] sm:text-xs text-[var(--muted)] hidden sm:block">
                            Praktijk voor Psychotherapie
                        </span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="hidden lg:flex items-center gap-1"
                    aria-label="Hoofdmenu"
                >
                    {navItems.map((item) => {
                        if (item.children) {
                            const childActive = item.children.some(
                                (c) => c.href === pathname
                            );
                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        type="button"
                                        className={cn(
                                            "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                            childActive
                                                ? "text-[var(--accent-dark)]"
                                                : "text-[var(--foreground)] hover:text-[var(--accent-dark)]"
                                        )}
                                        aria-expanded={openDropdown === item.label}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={cn(
                                                "h-3.5 w-3.5 transition-transform",
                                                openDropdown === item.label && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div
                                            className="absolute top-full left-0 pt-2 min-w-[340px]"
                                            role="menu"
                                        >
                                            <div className="bg-white border border-[var(--border)] rounded-lg shadow-lg p-2">
                                                {item.children.map((c) => (
                                                    <Link
                                                        key={c.href}
                                                        href={c.href}
                                                        className={cn(
                                                            "block px-3 py-2.5 rounded-md hover:bg-[var(--accent-soft)] transition-colors",
                                                            pathname === c.href &&
                                                                "bg-[var(--accent-soft)]"
                                                        )}
                                                        role="menuitem"
                                                    >
                                                        <div
                                                            className={cn(
                                                                "text-sm font-medium",
                                                                pathname === c.href
                                                                    ? "text-[var(--accent-dark)]"
                                                                    : "text-[var(--foreground)]"
                                                            )}
                                                        >
                                                            {c.label}
                                                        </div>
                                                        {c.description && (
                                                            <div className="text-xs text-[var(--muted)] mt-0.5">
                                                                {c.description}
                                                            </div>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={item.href}
                                href={item.href!}
                                className={cn(
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    pathname === item.href
                                        ? "text-[var(--accent-dark)]"
                                        : "text-[var(--foreground)] hover:text-[var(--accent-dark)]"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA + Mobile toggle */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/contact"
                        className="hidden lg:inline-flex items-center justify-center h-10 px-5 rounded-md bg-[var(--accent-dark)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors"
                    >
                        Aanmelden
                    </Link>

                    <button
                        type="button"
                        className="lg:hidden p-2.5 -mr-2 text-[var(--accent-dark)] rounded-md hover:bg-[var(--accent-soft)] transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-label={open ? "Sluit menu" : "Open menu"}
                        aria-controls="mobile-menu"
                    >
                        {open ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            </header>

            {/* Mobile menu — full screen drawer, rendered outside <header>
                so it isn't trapped in the header's backdrop-blur stacking context */}
            {open && (
                <>
                    {/* Backdrop (also closes on tap) */}
                    <button
                        type="button"
                        className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/20 z-50"
                        aria-label="Sluit menu"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        id="mobile-menu"
                        className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-[var(--background)] overflow-y-auto flex flex-col"
                    >
                        <nav
                            className="flex-1 px-4 py-6 space-y-6"
                            aria-label="Mobiel menu"
                        >
                            {navItems.map((item) => {
                                if (item.children) {
                                    return (
                                        <div key={item.label} className="space-y-1">
                                            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                                                {item.label}
                                            </div>
                                            {item.children.map((c) => (
                                                <Link
                                                    key={c.href}
                                                    href={c.href}
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        "block px-3 py-3 rounded-lg transition-colors",
                                                        pathname === c.href
                                                            ? "bg-[var(--accent-soft)]"
                                                            : "hover:bg-[var(--accent-soft)]"
                                                    )}
                                                >
                                                    <div
                                                        className={cn(
                                                            "text-base font-medium",
                                                            pathname === c.href
                                                                ? "text-[var(--accent-dark)]"
                                                                : "text-[var(--foreground)]"
                                                        )}
                                                    >
                                                        {c.label}
                                                    </div>
                                                    {c.description && (
                                                        <div className="text-xs text-[var(--muted)] mt-0.5">
                                                            {c.description}
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href!}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "block px-3 py-3 rounded-lg text-base font-medium transition-colors",
                                            pathname === item.href
                                                ? "bg-[var(--accent-soft)] text-[var(--accent-dark)]"
                                                : "text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Sticky bottom CTA */}
                        <div className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-4">
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-md bg-[var(--accent-dark)] text-white font-medium hover:bg-[var(--accent)] transition-colors"
                            >
                                Aanmelden
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
