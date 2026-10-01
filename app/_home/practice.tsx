import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";

export function Practice() {
    const { contact, openingHours } = siteConfig;

    return (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-muted-background">
                    <Image
                        src={photos.spreekkamer.src}
                        alt={photos.spreekkamer.alt}
                        fill
                        sizes="(min-width: 1024px) 640px, 94vw"
                        placeholder="blur"
                        className="object-cover"
                        style={{ objectPosition: photos.spreekkamer.position }}
                    />
                </div>
                <div>
                    <h2 className="text-3xl sm:text-4xl">De praktijk in Veldhoven</h2>
                    <p className="mt-5">
                        De spreekkamer bevindt zich in het souterrain en is bereikbaar via een trap.
                        Er is voldoende gelegenheid tot parkeren in de buurt.
                    </p>
                    <dl className="mt-6 space-y-4 border-t border-border pt-6">
                        <div>
                            <dt className="text-sm font-semibold text-muted">Adres</dt>
                            <dd>
                                {contact.street}, {contact.postalCode} {contact.city}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-semibold text-muted">Werkdagen</dt>
                            <dd>
                                {openingHours.map((hours) => hours.label).join(" en ")}, 9.00 tot
                                17.00 uur
                            </dd>
                        </div>
                    </dl>
                    <p className="mt-7">
                        <Link href="/contact" className="text-link">
                            Contact en route
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
