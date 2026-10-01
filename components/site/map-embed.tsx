"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const { street, postalCode, city } = siteConfig.contact;
const query = encodeURIComponent(`${street}, ${postalCode} ${city}, Nederland`);

/**
 * De kaart van Google laadt pas na een klik. Zo plaatst Google geen cookies
 * bij bezoekers die de kaart niet willen zien.
 */
export function MapEmbed() {
    const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border sm:aspect-[16/9]">
                <iframe
                    title={`Kaart met de locatie van de praktijk in ${city}`}
                    src={`https://maps.google.com/maps?q=${query}&t=m&z=15&output=embed&iwloc=near`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start gap-4 rounded-[2rem] border border-border bg-accent-soft p-8 sm:p-10">
            <MapPin className="h-8 w-8 text-accent-dark" aria-hidden="true" />
            <div>
                <h2 className="text-2xl">
                    {street}, {postalCode} {city}
                </h2>
                <p className="mt-2 max-w-xl">
                    De kaart komt van Google Maps. Als u de kaart toont, kan Google cookies
                    plaatsen.
                </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full" onClick={() => setLoaded(true)}>
                    Toon de kaart
                </Button>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary min-h-11 text-sm"
                >
                    Plan uw route in Google Maps
                </a>
            </div>
        </div>
    );
}
