import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Voor wie",
  description:
    "De praktijk is gericht op volwassenen vanaf 18 jaar voor diverse psychische klachten zoals angst, stemmingsklachten, trauma en persoonlijkheidsproblematiek.",
  alternates: { canonical: "/voor-wie" },
};

export default function VoorWiePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Voor wie", path: "/voor-wie" },
        ])}
      />
      <PageHero
        eyebrow="Doelgroep"
        title="Voor wie?"
        intro="De praktijk is gericht op volwassenen vanaf 18 jaar. U kunt zich aanmelden voor kortdurende en langdurende klachten. Therapie is maatwerk en wordt zo goed mogelijk afgestemd op uw hulpvraag."
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-content">
        <h2>U kunt bij mij in behandeling komen voor</h2>
        <ul>
          <li>
            Angstklachten, onzekerheid, paniek, sociale angst en overmatig
            piekeren
          </li>
          <li>
            Stemmingsklachten, somberheid, depressiviteit, gevoelens van schuld
            en schaamte
          </li>
          <li>Negatief zelfbeeld</li>
          <li>Moeite hebben om voor uzelf op te komen</li>
          <li>Trauma- en stress-gerelateerde klachten</li>
          <li>Levensfaseproblematiek</li>
          <li>(Milde) persoonlijkheidsproblematiek</li>
          <li>Rouwklachten</li>
          <li>Identiteitsproblemen, zoals wie ben ik, wat wil ik</li>
          <li>Problemen in contact met belangrijke anderen</li>
        </ul>

        <div className="mt-12 p-6 bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-lg">
          <h2 className="!mt-0 text-2xl !text-[var(--warning-fg)]">
            Wanneer niet?
          </h2>
          <p className="!text-[var(--warning-fg)]">
            Ik kan u vanuit mijn praktijk niet de hulp bieden die nodig is als
            uw zorgvraag te zwaar en te complex is.
          </p>
          <p className="!text-[var(--warning-fg)]">
            Als{" "}
            <strong>
              psychose(s), crisis, acute suïcidaliteit, zelfverwonding, ernstige
              verslavingsproblematiek, een ernstige eetstoornis of
              agressie-problematiek
            </strong>{" "}
            op de voorgrond staan is een gespecialiseerd aanbod en een
            multidisciplinaire behandeling elders meer geïndiceerd.
          </p>
          <p className="!text-[var(--warning-fg)] !mb-0">
            In dat geval kan de huisarts u helpen bij het vinden van passende
            zorg.
          </p>
        </div>
      </article>
    </>
  );
}
