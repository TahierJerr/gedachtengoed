import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Callout } from "./callout";

type CrisisCalloutProps = {
    className?: string;
    /** Korte versie voor in een smalle kolom. */
    compact?: boolean;
};

export function CrisisCallout({ className, compact = false }: CrisisCalloutProps) {
    const { crisis } = siteConfig;

    return (
        <Callout tone="crisis" title="Spoed en crisis" icon={Phone} className={className}>
            {!compact && (
                <p>
                    De praktijk heeft geen faciliteiten voor opvang bij crisis. Voor cliënten die
                    bij mij in zorg zijn ben ik op mijn werkdagen het eerste aanspreekpunt. Buiten
                    kantoortijden of bij afwezigheid kunt u terecht bij uw huisarts of de
                    dienstdoende huisartsenpost.
                </p>
            )}
            {compact && <p>Bel uw huisarts of de dienstdoende huisartsenpost.</p>}
            <p>
                U kunt ook chatten of bellen met{" "}
                <a
                    href={crisis.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    {crisis.name}
                </a>
                . Deze organisatie biedt dag en nacht gratis ondersteuning via{" "}
                <a href="tel:08000113" className="font-semibold underline">
                    {crisis.phone}
                </a>
                .
            </p>
        </Callout>
    );
}
