"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { isNavGroup, navItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Koru } from "./koru";
import { MobileMenu } from "./mobile-menu";
import { NavDropdown } from "./nav-dropdown";

export function SiteHeader() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex shrink-0 items-center gap-3"
                        aria-label={`${siteConfig.shortName} ${siteConfig.tagline}, naar de homepage`}
                    >
                        <Koru size={44} className="h-10 w-10 text-accent-dark sm:h-11 sm:w-11" />
                        <span className="flex flex-col leading-tight">
                            <span className="font-serif text-xl text-accent-dark sm:text-2xl">
                                {siteConfig.shortName}
                            </span>
                            <span className="text-xs text-muted sm:text-sm">
                                {siteConfig.tagline}
                            </span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hoofdmenu">
                        {navItems.map((item) =>
                            isNavGroup(item) ? (
                                <NavDropdown key={item.label} group={item} pathname={pathname} />
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                    className={cn(
                                        "rounded-full px-3.5 py-2 text-[0.975rem] font-medium transition-colors hover:bg-accent-soft",
                                        pathname === item.href
                                            ? "text-accent-dark"
                                            : "text-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                        <Link href="/contact" className="btn btn-primary ml-3 min-h-11">
                            Aanmelden
                        </Link>
                    </nav>

                    <button
                        type="button"
                        className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-accent-dark transition-colors hover:bg-accent-soft lg:hidden"
                        onClick={() => setMenuOpen((value) => !value)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "Sluit menu" : "Open menu"}
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </header>

            {/* Buiten <header>, anders zit het menu vast in de backdrop-blur-laag. */}
            {menuOpen && <MobileMenu pathname={pathname} onClose={closeMenu} />}
        </>
    );
}
