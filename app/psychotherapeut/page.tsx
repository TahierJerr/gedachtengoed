import { JsonLd } from "@/components/seo/json-ld";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { SignupAside } from "@/components/site/signup-aside";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
    title: "Siepie Zonderland, psychotherapeut en GZ-psycholoog in Veldhoven",
    description:
        "Siepie Zonderland is BIG-geregistreerd GZ-Psycholoog en Psychotherapeut. Sinds 1997 werkzaam in de GGZ, met ervaring in angst-, stemmings-, trauma- en persoonlijkheidsproblematiek.",
    path: "/psychotherapeut",
    markdown: true,
});

export default function PsychotherapeutPage() {
    const { business } = siteConfig;

    return (
        <>
            <JsonLd data={personSchema()} />
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Over mij", path: "/psychotherapeut" },
                ])}
            />
            <PageHero
                eyebrow="Over mij"
                title="Siepie Zonderland"
                intro="Psychotherapeut en GZ-Psycholoog. Betrokken, professioneel, deskundig, ervaren, betrouwbaar en benaderbaar."
                photo={photos.siepie}
            />

            <PageBody aside={<SignupAside />}>
                <p>
                    Mijn naam is Siepie Zonderland en ik ben BIG-geregistreerd GZ-Psycholoog en
                    Psychotherapeut. Sinds 1997 heb ik op verschillende werkplekken binnen de
                    geestelijke gezondheidszorg gewerkt. Ik heb onder andere veel behandelervaring
                    op gebied van angst- en stemmingsklachten, werkgerelateerde en interpersoonlijke
                    problematiek, (complexe) traumaklachten, zelfbeeldproblemen en
                    persoonlijkheidsproblemen.
                </p>
                <p>
                    Op dit moment combineer ik het werken in mijn eigen praktijk met het werken bij
                    een grotere instelling voor gespecialiseerde geestelijke gezondheidszorg. Binnen
                    mijn praktijk bied ik psychotherapeutische behandelingen gericht op verandering,
                    herstel en persoonlijke groei in een persoonlijke setting. Dit doe ik met veel
                    enthousiasme en het geeft me veel voldoening en vrijheid.
                </p>

                <h2>Registraties</h2>
                <ul>
                    <li>Psychotherapeut, BIG-registratie {business.bigPsychotherapeut}</li>
                    <li>GZ-psycholoog, BIG-registratie {business.bigGzPsycholoog}</li>
                </ul>
                <p>
                    Beide registraties zijn te controleren in het{" "}
                    <a
                        href="https://zoeken.bigregister.nl/zorgverlener/f5926bd8-d83b-44ca-9249-997a053d8474"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BIG-register
                    </a>
                    .
                </p>

                <h3>Specialisaties</h3>
                <ul>
                    <li>Senior Schematherapeut</li>
                    <li>Persoonsgerichte en Experiëntiële Psychotherapeut (VPeP)</li>
                    <li>Cognitief Gedragstherapeut (VGCT)</li>
                    <li>EMDR Europe Practitioner (Vereniging EMDR Nederland, VEN)</li>
                    <li>Emotion Focused-i therapist (EFT)</li>
                </ul>

                <h3>Supervisor</h3>
                <ul>
                    <li>
                        Supervisor, erkend door de Vereniging voor Gedragstherapie en Cognitieve
                        therapie (VGCt)
                    </li>
                    <li>Supervisor, erkend door de Vereniging voor Schematherapie (VSt)</li>
                </ul>

                <h3>AGB-codes en KVK</h3>
                <ul>
                    <li>Persoonlijk AGB: {business.agbPersoonlijk}</li>
                    <li>Praktijk AGB: {business.agbPraktijk}</li>
                    <li>KVK-nummer: {business.kvk}</li>
                </ul>

                <h2>Beroepsverenigingen</h2>
                <p>Ik ben lid van de volgende beroepsverenigingen:</p>
                <ul>
                    <li>
                        Landelijke Vereniging van Vrijgevestigde Psychologen &amp; Psychotherapeuten
                        (LVVP)
                    </li>
                    <li>Vereniging voor Schematherapie (VSt)</li>
                    <li>Vereniging voor Gedrags- en Cognitieve Therapieën (VGCT)</li>
                    <li>Vereniging Persoonsgerichte experiëntiële Psychotherapie (VPeP)</li>
                    <li>Vereniging EMDR Nederland (VEN)</li>
                </ul>
            </PageBody>
        </>
    );
}
