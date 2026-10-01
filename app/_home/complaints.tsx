import Image from "next/image";
import Link from "next/link";
import { complaints } from "@/lib/complaints";
import { photos } from "@/lib/photos";

export function Complaints() {
    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-muted-background sm:aspect-[21/9]">
                <Image
                    src={photos.lotusvijver.src}
                    alt={photos.lotusvijver.alt}
                    fill
                    sizes="(min-width: 1152px) 1088px, 94vw"
                    placeholder="blur"
                    className="object-cover"
                />
            </div>

            <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                <div>
                    <h2 className="text-3xl sm:text-4xl">Voor wie is de praktijk?</h2>
                    <p className="mt-6 font-serif text-lg leading-[1.8]">
                        Psychotherapie is de eerst aangewezen keuze bij behandeling van angst-,
                        stemmings-, trauma- en persoonlijkheidsproblematiek. Wanneer klachten
                        hardnekkig of terugkerend zijn, kan psychotherapie hulp bieden.
                    </p>
                    <p className="mt-4 text-muted">
                        De praktijk is gericht op volwassenen vanaf 18 jaar. Therapie is maatwerk en
                        wordt zo goed mogelijk afgestemd op uw hulpvraag.
                    </p>
                    <p className="mt-7">
                        <Link href="/voor-wie" className="text-link">
                            Voor wie, en wanneer niet
                        </Link>
                    </p>
                </div>
                <ul className="divide-y divide-border border-y border-border">
                    {complaints.map((complaint) => (
                        <li key={complaint} className="flex gap-4 py-3.5">
                            <span
                                aria-hidden="true"
                                className="mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-lotus"
                            />
                            {complaint}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
