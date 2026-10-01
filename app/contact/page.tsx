import Image from "next/image";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import { CrisisCallout } from "@/components/site/crisis-callout";
import { MapEmbed } from "@/components/site/map-embed";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { mailto, siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
    title: "Contact en aanmelden",
    description:
        "Neem contact op of meld u aan bij Praktijk voor Psychotherapie GedachtenGoed, Van Aelstlaan 79 in Veldhoven, via het contactformulier of per e-mail.",
    path: "/contact",
    markdown: true,
});

export default function ContactPage() {
    const { contact, openingHours } = siteConfig;

    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Contact", path: "/contact" },
                ])}
            />
            <PageHero
                eyebrow="Contact"
                title="Contact en aanmelden"
                intro="Voor meer informatie of om u aan te melden kunt u contact opnemen via onderstaand formulier of per e-mail. Ik ga graag met u in gesprek over de mogelijkheden."
                photo={photos.spreekkamer}
            />

            <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14 lg:px-8">
                <div>
                    <h2 className="mb-6 text-3xl">Stuur een bericht</h2>
                    <ContactForm />
                </div>

                <aside className="space-y-6">
                    <section className="rounded-3xl bg-accent-soft p-6 sm:p-7">
                        <h2 className="text-2xl">Contactgegevens</h2>
                        <dl className="mt-5 space-y-4">
                            <div>
                                <dt className="text-sm font-semibold text-muted">Adres</dt>
                                <dd>
                                    <address className="not-italic">
                                        {contact.street}
                                        <br />
                                        {contact.postalCode} {contact.city}
                                    </address>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold text-muted">E-mail</dt>
                                <dd>
                                    <a
                                        href={mailto}
                                        className="text-link text-[0.95rem] font-normal [overflow-wrap:anywhere]"
                                    >
                                        {contact.email}
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold text-muted">Werkdagen</dt>
                                <dd>
                                    {openingHours.map((hours) => (
                                        <span key={hours.day} className="block">
                                            {hours.label}: 9.00 tot 17.00 uur
                                        </span>
                                    ))}
                                </dd>
                            </div>
                        </dl>
                    </section>

                    <CrisisCallout compact className="my-0" />
                </aside>
            </section>

            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-muted-background">
                        <Image
                            src={photos.praktijkBuiten.src}
                            alt={photos.praktijkBuiten.alt}
                            fill
                            sizes="(min-width: 1024px) 620px, 94vw"
                            placeholder="blur"
                            className="object-cover"
                            style={{ objectPosition: photos.praktijkBuiten.position }}
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl">Zo vindt u de praktijk</h2>
                        <p className="mt-4 font-serif text-lg leading-[1.8]">
                            De spreekkamer bevindt zich in het souterrain en is bereikbaar via een
                            trap. Er is voldoende gelegenheid tot parkeren in de buurt.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
