"use client";

import Link from "next/link";
import { useEffect } from "react";
import { isNavGroup, navItems, type NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
    pathname: string;
    onClose: () => void;
};

export function MobileMenu({ pathname, onClose }: MobileMenuProps) {
    useEffect(() => {
        function onKey(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    function renderLink(link: NavLink) {
        const current = pathname === link.href;
        return (
            <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={current ? "page" : undefined}
                className={cn(
                    "block rounded-xl px-3 py-3 transition-colors",
                    current ? "bg-accent-soft" : "hover:bg-accent-soft"
                )}
            >
                <span className="block text-lg font-medium text-accent-dark">{link.label}</span>
                {link.description && (
                    <span className="mt-0.5 block text-sm text-muted">{link.description}</span>
                )}
            </Link>
        );
    }

    return (
        <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto bg-background sm:top-20 lg:hidden"
        >
            <nav className="flex-1 space-y-6 px-4 py-6" aria-label="Mobiel menu">
                {navItems.map((item) =>
                    isNavGroup(item) ? (
                        <div key={item.label}>
                            <h2 className="px-3 pb-1 font-sans text-sm font-semibold text-muted">
                                {item.label}
                            </h2>
                            {item.children.map(renderLink)}
                        </div>
                    ) : (
                        renderLink(item)
                    )
                )}
            </nav>
            <div className="sticky bottom-0 border-t border-border bg-background px-4 py-4">
                <Link href="/contact" onClick={onClose} className="btn btn-primary w-full">
                    Aanmelden
                </Link>
            </div>
        </div>
    );
}
