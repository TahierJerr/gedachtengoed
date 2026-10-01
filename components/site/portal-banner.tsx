import Link from "next/link";

export function PortalBanner() {
    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-accent-soft p-8 sm:p-10 md:flex-row md:items-center">
                <div className="max-w-xl">
                    <h2 className="text-2xl sm:text-3xl">Patiëntenportaal</h2>
                    <p className="mt-3">
                        Schrijf u in, log in op uw dossier of vul een vragenlijst in via het
                        beveiligde portaal van Intramed.
                    </p>
                </div>
                <Link href="/patientenportaal" className="btn btn-primary shrink-0">
                    Naar het portaal
                </Link>
            </div>
        </section>
    );
}
