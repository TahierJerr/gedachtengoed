import Link from "next/link";
import { PhotoDisc } from "@/components/site/photo-disc";
import { photos } from "@/lib/photos";

export function Welcome() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
                <figure className="mx-auto w-56 sm:w-64 md:mx-0 lg:w-80">
                    <PhotoDisc photo={photos.siepie} sizes="(min-width: 1024px) 320px, 256px" />
                    <figcaption className="mt-4 text-center">
                        <span className="block font-serif text-xl text-accent-dark">
                            Siepie Zonderland
                        </span>
                        <span className="block text-sm text-muted">
                            GZ-Psycholoog en Psychotherapeut
                        </span>
                    </figcaption>
                </figure>
                <div className="max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl">Welkom bij mijn praktijk</h2>
                    <div className="mt-6 space-y-4 font-serif text-lg leading-[1.8]">
                        <p>
                            Mijn naam is Siepie Zonderland en ik ben BIG-geregistreerd GZ-Psycholoog
                            en Psychotherapeut. Ik bied psychotherapeutische hulp voor volwassenen,
                            gericht op verandering, herstel en persoonlijke groei, in een
                            persoonlijke setting.
                        </p>
                        <p>
                            Kijk gerust rond op de website om een indruk te krijgen van mijn
                            praktijk, visie en behandelaanbod. U kunt contact opnemen als u vragen
                            heeft of als u zich wilt aanmelden.
                        </p>
                    </div>
                    <p className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                        <Link href="/psychotherapeut" className="text-link">
                            Meer over mij
                        </Link>
                        <Link href="/behandelvisie" className="text-link">
                            Mijn behandelvisie
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
