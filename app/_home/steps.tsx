import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const steps = [
    {
        title: "Aanmelden",
        text: "U meldt zich aan via het contactformulier. Voor vergoeding door de zorgverzekeraar heeft u een verwijsbrief van uw huisarts nodig.",
    },
    {
        title: "Telefonische kennismaking",
        text: "Ik neem vrijblijvend telefonisch contact met u op. We staan kort stil bij uw klachten en hulpvraag en gaan na of verdere gesprekken bij mij zinvol zijn.",
    },
    {
        title: "Intake",
        text: "In 2 tot 3 gesprekken brengen we in kaart welke klachten er spelen, wat uw hulpvraag is en wat uw verhaal en levensgeschiedenis is.",
    },
    {
        title: "Advies en behandelovereenkomst",
        text: "In een adviesgesprek besluiten we tot psychotherapie of tot doorverwijzing. De behandeldoelen en de methode leggen we samen vast.",
    },
    {
        title: "Behandeling",
        text: "Tijdens de behandeling evalueren we op verschillende momenten. De afronding is in overleg; daar werken we samen naartoe.",
    },
];

export function Steps() {
    const { waitingTime } = siteConfig;

    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                <div>
                    <h2 className="text-3xl sm:text-4xl">Van aanmelding tot behandeling</h2>
                    <div className="mt-8 rounded-3xl bg-lotus-soft p-6">
                        <p className="font-serif text-lg text-accent-dark">
                            De wachttijd voor nieuwe aanmeldingen is momenteel circa{" "}
                            <strong className="font-semibold">{waitingTime.weeks} weken</strong>.
                        </p>
                        <p className="mt-2 text-sm text-muted">
                            Bijgewerkt op {waitingTime.updated}. Een inschatting, waar geen rechten
                            aan worden ontleend.
                        </p>
                    </div>
                    <p className="mt-7">
                        <Link href="/aanmelden-en-werkwijze" className="text-link">
                            Alles over aanmelden en werkwijze
                        </Link>
                    </p>
                </div>
                <ol className="border-l-2 border-border">
                    {steps.map((step, index) => (
                        <li key={step.title} className="relative pb-9 pl-9 last:pb-0 sm:pl-12">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[1.2rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent-dark font-serif text-white"
                            >
                                {index + 1}
                            </span>
                            <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                            <p className="mt-2 max-w-xl">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
