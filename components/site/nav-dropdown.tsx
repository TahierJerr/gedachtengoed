"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NavGroup } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
    group: NavGroup;
    pathname: string;
};

export function NavDropdown({ group, pathname }: NavDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const panelId = useId();
    const active = group.children.some((child) => child.href === pathname);

    useEffect(() => {
        if (!open) return;
        function onKey(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }
        function onPointer(event: PointerEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        window.addEventListener("pointerdown", onPointer);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("pointerdown", onPointer);
        };
    }, [open]);

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
            }}
        >
            <button
                type="button"
                className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.975rem] font-medium transition-colors hover:bg-accent-soft",
                    active ? "text-accent-dark" : "text-foreground"
                )}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
            >
                {group.label}
                <ChevronDown
                    className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                    aria-hidden="true"
                />
                {active && <span className="sr-only">(huidige rubriek)</span>}
            </button>
            <div
                id={panelId}
                hidden={!open}
                className="absolute left-0 top-full z-50 min-w-80 pt-2"
            >
                <ul className="rounded-2xl border border-border bg-surface p-2 shadow-[0_18px_40px_-18px_rgba(31,58,52,0.45)]">
                    {group.children.map((child) => {
                        const current = pathname === child.href;
                        return (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    aria-current={current ? "page" : undefined}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-accent-soft",
                                        current && "bg-accent-soft"
                                    )}
                                >
                                    <span className="block font-medium text-accent-dark">
                                        {child.label}
                                    </span>
                                    {child.description && (
                                        <span className="mt-0.5 block text-sm text-muted">
                                            {child.description}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
