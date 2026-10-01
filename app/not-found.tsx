import type { Metadata } from "next";
import Link from "next/link";
import { Koru } from "@/components/site/koru";

export const metadata: Metadata = {
    title: "Pagina niet gevonden",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
            <Koru size={72} className="text-accent" />
            <h1 className="mt-8 text-4xl sm:text-5xl">Deze pagina bestaat niet</h1>
            <p className="mt-4 max-w-xl font-serif text-xl">
                De pagina die u zoekt is verplaatst of bestaat niet meer. Via de homepage vindt u
                alle informatie over de praktijk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/" className="btn btn-primary">
                    Naar de homepage
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                    Contact
                </Link>
            </div>
        </section>
    );
}
