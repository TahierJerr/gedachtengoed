import Link from "next/link";
import { Koru } from "@/components/site/koru";
import { PhotoDisc } from "@/components/site/photo-disc";
import { photos } from "@/lib/photos";

export function Hero() {
    return (
        <section className="overflow-hidden border-b border-border bg-muted-background">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8 lg:py-20">
                <div>
                    {/* De h1 noemt wat en waar (ook voor zoekmachines); de grote regel is haar welkom. */}
                    <h1 className="font-sans text-base font-semibold tracking-normal text-accent sm:text-lg">
                        Psychotherapie in Veldhoven voor volwassenen
                    </h1>
                    <p className="mt-4 font-serif text-[2.5rem] font-medium leading-[1.1] tracking-[-0.01em] text-accent-dark [text-wrap:balance] sm:text-6xl lg:text-[4.1rem]">
                        Wat goed dat u de eerste stap heeft gezet
                    </p>
                    <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
                        De stap om hulp te vragen is voor veel mensen spannend, maar zeker de moeite
                        waard.
                    </p>
                    <p className="mt-4 max-w-xl text-muted">
                        Praktijk voor Psychotherapie GedachtenGoed is een kleinschalige praktijk van
                        Siepie Zonderland, GZ-Psycholoog en Psychotherapeut. Gericht op verandering,
                        herstel en persoonlijke groei.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/contact" className="btn btn-primary">
                            Aanmelden
                        </Link>
                        <Link href="/aanmelden-en-werkwijze" className="btn btn-secondary">
                            Zo werkt aanmelden
                        </Link>
                    </div>
                </div>

                <div className="relative order-first w-44 sm:w-64 lg:order-none lg:w-full">
                    <PhotoDisc
                        photo={photos.bloesem}
                        sizes="(min-width: 1024px) 520px, (min-width: 640px) 256px, 176px"
                        preload
                        className="relative"
                    />
                    <Koru
                        size={96}
                        className="absolute -right-3 bottom-0 h-14 w-14 rounded-full text-accent-dark ring-4 ring-muted-background sm:h-16 sm:w-16 lg:bottom-[4%] lg:left-[2%] lg:right-auto lg:h-24 lg:w-24 lg:ring-8"
                    />
                </div>
            </div>
        </section>
    );
}
