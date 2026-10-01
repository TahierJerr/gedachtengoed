import { ExternalLink, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PortalActionProps = {
    href: string;
    icon: LucideIcon;
    title: string;
    description: string;
    primary?: boolean;
};

export function PortalAction({ href, icon: Icon, title, description, primary }: PortalActionProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group flex flex-col rounded-[2rem] p-8 transition-colors",
                primary
                    ? "bg-accent-dark text-[#d5e2da] hover:bg-accent"
                    : "border border-border bg-surface hover:border-accent hover:bg-accent-soft"
            )}
        >
            <Icon
                className={cn("h-8 w-8", primary ? "text-white" : "text-accent-dark")}
                aria-hidden="true"
            />
            <h2 className={cn("mt-5 text-3xl", primary && "text-white")}>{title}</h2>
            <p className="mt-2 flex-1">{description}</p>
            <span
                className={cn(
                    "mt-6 inline-flex items-center gap-2 font-semibold",
                    primary ? "text-white" : "text-accent-dark"
                )}
            >
                Open het portaal
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opent in een nieuw tabblad)</span>
            </span>
        </a>
    );
}
