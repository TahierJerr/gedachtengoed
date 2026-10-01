import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Korte aanmeldkaart naast de tekst van inhoudspagina's. */
export function SignupAside() {
    const { waitingTime } = siteConfig;

    return (
        <section className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
            <h2 className="text-2xl">Aanmelden</h2>
            <p className="mt-3">
                Aanmelden gaat via het contactformulier. Ik neem daarna vrijblijvend telefonisch
                contact met u op.
            </p>
            <dl className="mt-5 space-y-3 border-t border-border pt-5 text-[0.975rem]">
                <div>
                    <dt className="font-semibold text-accent-dark">Wachttijd</dt>
                    <dd className="text-muted">
                        Circa {waitingTime.weeks} weken (bijgewerkt op {waitingTime.updated})
                    </dd>
                </div>
                <div>
                    <dt className="font-semibold text-accent-dark">Verwijsbrief</dt>
                    <dd className="text-muted">
                        Nodig van uw huisarts voor vergoeding door de zorgverzekeraar
                    </dd>
                </div>
            </dl>
            <Link href="/contact" className="btn btn-primary mt-6 w-full">
                Aanmelden
            </Link>
            <p className="mt-4 text-center text-[0.975rem]">
                <Link href="/aanmelden-en-werkwijze" className="text-link">
                    Zo werkt aanmelden
                </Link>
            </p>
        </section>
    );
}
