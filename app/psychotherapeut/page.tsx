import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Koru } from "@/components/site/koru";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Siepie – Psychotherapeut & GZ-Psycholoog",
  description:
    "Siepie Zonderland,  BIG-geregistreerd GZ-Psycholoog en Psychotherapeut. Sinds 1997 werkzaam in de GGZ met ervaring in angst-, stemmings-, trauma- en persoonlijkheidsproblematiek.",
  alternates: { canonical: "/psychotherapeut" },
};

export default function PsychotherapeutPage() {
  return (
    <>
      <JsonLd data={physicianSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Over mij", path: "/psychotherapeut" },
        ])}
      />
      <PageHero
        eyebrow="Over mij"
        title="Siepie Zonderland"
        intro="Psychotherapeut en GZ-Psycholoog · Betrokken, professioneel, deskundig, ervaren, betrouwbaar, benaderbaar."
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-12">
          <div className="h-40 w-40 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
            <Koru size={100} className="text-[var(--accent-dark)]" />
          </div>
        </div>

        <div className="prose-content">
          <p>
            Mijn naam is Siepie Zonderland en ik ben BIG-geregistreerd
            GZ-Psycholoog en Psychotherapeut. Sinds 1997 heb ik op verschillende
            werkplekken binnen de geestelijke gezondheidszorg gewerkt. Ik heb
            onder andere veel behandelervaring op gebied van angst- en
            stemmingsklachten, werk gerelateerde en interpersoonlijke
            problematiek, (complexe) trauma klachten, zelfbeeld problemen en
            persoonlijkheidsproblemen.
          </p>
          <p>
            Op dit moment combineer ik het werken in mijn eigen praktijk met het
            werken bij een grotere instelling voor gespecialiseerde geestelijke
            gezondheidszorg. Binnen mijn praktijk bied ik psychotherapeutische
            behandelingen gericht op verandering, herstel en persoonlijke groei
            in een persoonlijke setting. Dit doe ik met veel enthousiasme en
            geeft me veel voldoening en vrijheid.
          </p>

          <h2>Registraties</h2>
          <p>
            <Link
              href="https://zoeken.bigregister.nl/zorgverlener/1a19842e-959d-4083-afa4-7ca5ce127f18"
              target="_blank"
              rel="noopener noreferrer"
            >
              BIG-register
            </Link>
          </p>
          <ul>
            <li>Psychotherapeut BIG-registratie 59054812016</li>
            <li>GZ-psycholoog BIG-registratie 39054812025</li>
          </ul>
          <p>
            Senior Schematherapeut, Persoonsgerichte en Experientiele
            Psychotherapeut (VPeP), Cognitief Gedragstherapeut (VGCT), EMDR
            Europe Practitioner (Vereniging EMDR Nederland VEN), Emotion
            Focused-i therapist (EFT).
          </p>
          <ul>
            <li>
              Supervisor, erkend door de Vereniging voor Gedragstherapie en
              Cognitieve therapie (VGCt)
            </li>
            <li>
              Supervisor, erkend door de Vereniging voor Schematherapie (VSt)
            </li>
          </ul>

          <h3>AGB-codes</h3>
          <ul>
            <li>Persoonlijk AGB: 94015697</li>
            <li>Praktijk AGB: 94065990</li>
            <li>KVK-nummer: 81310870</li>
          </ul>

          <h2>Beroepsverenigingen</h2>
          <p>Ik ben lid van de volgende beroepsverenigingen:</p>
          <ul>
            <li>
              Landelijke Vereniging van Vrijgevestigde Psychologen &amp;
              Psychotherapeuten (LVVP)
            </li>
            <li>Vereniging voor Schematherapie (VSt)</li>
            <li>Vereniging voor Gedrags- en Cognitieve Therapieën (VGCT)</li>
            <li>
              Vereniging Persoonsgerichte experiëntiële Psychotherapie (VPeP)
            </li>
            <li>Vereniging EMDR Nederland (VEN)</li>
          </ul>
        </div>
      </article>
    </>
  );
}
