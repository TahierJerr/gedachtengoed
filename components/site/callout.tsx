import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutProps = {
    tone: "info" | "warning" | "crisis";
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    className?: string;
};

const tones = {
    info: "bg-accent-soft border-accent/40 [--callout-fg:var(--accent-dark)]",
    warning:
        "bg-[var(--warning-bg)] border-[var(--warning-border)] [--callout-fg:var(--warning-fg)]",
    crisis: "bg-[var(--error-bg)] border-[var(--error-border)] [--callout-fg:var(--error-fg)]",
};

/** Opvallend blok voor informatie die niet gemist mag worden. */
export function Callout({ tone, title, icon: Icon, children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "callout my-10 flex gap-4 rounded-3xl border p-6 font-sans text-[1.0625rem] leading-relaxed text-[var(--callout-fg)] sm:p-7",
                tones[tone],
                className
            )}
        >
            {Icon && <Icon className="mt-1 h-6 w-6 shrink-0" aria-hidden="true" />}
            <div className="min-w-0">
                <h3 className="font-serif text-xl text-[var(--callout-fg)]">{title}</h3>
                <div className="mt-2 space-y-3">{children}</div>
            </div>
        </div>
    );
}
