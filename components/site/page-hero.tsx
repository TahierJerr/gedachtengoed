import Link from "next/link";
import type { Photo } from "@/lib/photos";
import { PhotoDisc } from "./photo-disc";

type PageHeroProps = {
    /** Naam van de rubriek; wordt getoond als kruimelpad (Home / rubriek). */
    eyebrow?: string;
    title: string;
    intro?: string;
    photo?: Photo;
};

export function PageHero({ eyebrow, title, intro, photo }: PageHeroProps) {
    return (
        <section className="border-b border-border bg-muted-background">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] lg:px-8">
                <div className="max-w-2xl">
                    {eyebrow && (
                        <nav aria-label="Kruimelpad" className="mb-4 text-sm text-muted">
                            <Link href="/" className="underline-offset-4 hover:underline">
                                Home
                            </Link>
                            <span aria-hidden="true" className="mx-2">
                                /
                            </span>
                            <span>{eyebrow}</span>
                        </nav>
                    )}
                    <h1 className="text-4xl sm:text-5xl">{title}</h1>
                    {intro && (
                        <p className="mt-5 font-serif text-xl leading-relaxed text-foreground">
                            {intro}
                        </p>
                    )}
                </div>
                {photo && (
                    <PhotoDisc
                        photo={photo}
                        sizes="(min-width: 1024px) 288px, (min-width: 768px) 224px, 160px"
                        preload
                        className="order-first w-40 md:order-none md:w-56 lg:w-72"
                    />
                )}
            </div>
        </section>
    );
}
