import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Tarieven & vergoedingen",
    description:
        "Tarieven, vergoedingen en betalingsvoorwaarden van Praktijk voor Psychotherapie GedachtenGoed volgens het Zorgprestatiemodel.",
    alternates: { canonical: "/voorwaarden" },
};

const tarieven = [
    { code: "C00570", desc: "Diagnostiek / intakegesprek 60 min", price: "€ 231,50" },
    { code: "C00505", desc: "Behandelsessie 45 min", price: "€ 172,85" },
    { code: "C00635", desc: "Behandelsessie 60 min", price: "€ 205,96" },
    { code: "OV0007", desc: "Intercollegiaal overleg (kort > 5 min)", price: "€ 32,50" },
    { code: "OV0008", desc: "Intercollegiaal overleg (lang > 15 min)", price: "€ 93,60" },
];

export default function VoorwaardenPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Tarieven & vergoedingen", path: "/voorwaarden" },
                ])}
            />
            <PageHero
                eyebrow="Kosten"
                title="Tarieven & vergoedingen"
                intro="Alle aangeboden psychotherapie is opgenomen in de basisverzekering van de Zorgverzekeringswet als Specialistische GGZ."
            />

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
                <h2>Zorgprestatiemodel</h2>
                <p>
                    De behandeling in de GGZ wordt vanaf 1 januari 2022 afgerekend middels
                    zorgprestaties, waarvan de tarieven ieder jaar door de Nationale
                    Zorgautoriteit (NZa) worden vastgesteld. De kosten van de behandeling
                    worden bepaald door de duur van het consult, het beroep van de
                    behandelaar en of het een diagnostiek- of behandelconsult is. In het
                    tarief zit ook indirecte tijd (verslaglegging, overleg verwijzer,
                    administratie) verwerkt.
                </p>
                <p>
                    Om voor vergoeding in aanmerking te komen eisen verzekeraars dat de
                    gestelde DSM-V-diagnose en zorgvraagtypering vermeld wordt op de
                    factuur. Hiertegen kunt u voorafgaand aan de start van de behandeling
                    schriftelijk bezwaar maken. Daarnaast is een verwijsbrief van de
                    huisarts noodzakelijk.
                </p>

                <h2>Contractvrij</h2>
                <p>
                    Praktijk voor Psychotherapie GedachtenGoed werkt op een paar
                    uitzonderingen na contractvrij. Op{" "}
                    <Link
                        href="https://contractvrijepsycholoog.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contractvrijepsycholoog.nl
                    </Link>{" "}
                    is hierover meer informatie te vinden. Praktisch betekent dit dat de
                    factuur van de behandeling maandelijks naar u gestuurd wordt en dat u
                    zelf verantwoordelijk bent voor de declaratie aan de zorgverzekeraar
                    en voor de betaling aan mij. Het percentage dat uw verzekeraar
                    vergoedt hangt af van het soort polis dat u heeft en ligt veelal
                    tussen de <strong>55% en de 85%</strong>. U betaalt het overige deel
                    zelf.
                </p>

                <h2>Contracten</h2>
                <p>Voor 2026 heeft Praktijk voor Psychotherapie GedachtenGoed contracten met:</p>
                <ul>
                    <li>DSW</li>
                    <li>Stad Holland</li>
                </ul>
                <p>
                    Indien u bij een van bovenstaande verzekeraars een polis heeft
                    afgesloten wordt de behandeling volledig vergoed vanuit de
                    basisverzekering. De facturen worden direct bij de verzekeraar
                    gedeclareerd en door de verzekeraar aan mij vergoed.
                </p>

                <h2>Eigen risico</h2>
                <p>
                    Hou in alle gevallen rekening met betaling van het jaarlijks eigen
                    risico (vastgesteld op <strong>€ 385,–</strong>). Staat er nog eigen
                    risico open, dan zal dit door de verzekeraar met u worden verrekend.
                </p>

                <h2>Tarieven NZa 2026</h2>
                <p>
                    Praktijk voor Psychotherapie GedachtenGoed hanteert de tarieven die
                    jaarlijks worden vastgesteld door de NZa voor psychotherapie in de
                    ambulante praktijk (Ambulant Kwaliteitsstatuut sectie II,
                    psychotherapeut). Hieronder de meest gebruikte diagnostiek- en
                    behandelconsulten:
                </p>
            </article>

            <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
                <div className="overflow-hidden bg-white border border-[var(--border)] rounded-lg">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-[var(--accent-soft)] text-[var(--accent-dark)]">
                                <th className="text-left px-4 py-3 font-medium">Prestatie</th>
                                <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">
                                    Code
                                </th>
                                <th className="text-right px-4 py-3 font-medium">Tarief</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border)]">
                            {tarieven.map((t) => (
                                <tr key={t.code}>
                                    <td className="px-4 py-3">{t.desc}</td>
                                    <td className="px-4 py-3 text-[var(--muted)] font-mono text-xs hidden sm:table-cell">
                                        {t.code}
                                    </td>
                                    <td className="px-4 py-3 text-right font-medium text-[var(--accent-dark)]">
                                        {t.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-[var(--muted)] mt-3">
                    De volledige tarievenlijst van de NZa is te vinden via de{" "}
                    <a
                        href="https://zorgprestatiemodel.nza.nl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[var(--accent-dark)]"
                    >
                        tarievenzoeker van de NZa
                    </a>
                    .
                </p>
            </section>

            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 prose-content">
                <h2>Betalingsvoorwaarden</h2>
                <p>
                    De praktijk hanteert de betalingsvoorwaarden voor psychotherapeuten
                    van de LVVP. Deze zijn op verzoek beschikbaar.
                </p>

                <h2>Onverzekerde zorg</h2>
                <p>
                    De behandeling van een aantal klachten wordt niet vergoed door
                    zorgverzekeraars, maar hiervoor kunt u wel in therapie gaan. Dat heet
                    onverzekerde zorg. Het gaat dan bijvoorbeeld om relatieproblemen,
                    werkproblemen, gestagneerde rouw, echtscheiding, gezinsproblemen,
                    seksuele problemen en een aanpassingsstoornis. De behandeling hiervan
                    moet u zelf betalen. Er is in dat geval geen verwijsbrief van de
                    huisarts nodig. Het NZa-tarief (2026) voor deze zorg is:{" "}
                    <strong>€ 146,00</strong> per behandelconsult van 45 minuten en{" "}
                    <strong>€ 182,50</strong> per behandelconsult van 60 minuten.
                </p>

                <h2>Betaling door uzelf</h2>
                <p>
                    U kunt er ook voor kiezen de behandeling helemaal zelf te betalen. Er
                    is dan geen inmenging van de zorgverzekeraar en uw eigen risico wordt
                    niet aangesproken. U heeft dan wel een verwijzing van de huisarts
                    nodig. Het tarief in mijn praktijk voor zelfbetalers is 100% van de
                    door de NZa vastgestelde maximumtarieven voor de GGZ.
                </p>

                <h2>Afspraak annuleren</h2>
                <p>
                    Als een afspraak niet door kan gaan is het fijn als u mij dat zo snel
                    mogelijk laat weten. Afspraken kunnen via de e-mail kosteloos worden
                    geannuleerd tot <strong>24 uur</strong> voor de afspraak. Voor
                    afspraken die niet of te laat worden afgezegd, worden kosten in
                    rekening gebracht: <strong>€ 65 per sessie</strong>. Deze kosten
                    kunnen niet bij de zorgverzekeraar gedeclareerd worden.
                </p>
            </article>
        </>
    );
}
