import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { Callout } from "@/components/site/callout";
import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { SignupAside } from "@/components/site/signup-aside";
import { complaints } from "@/lib/complaints";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Voor wie: psychotherapie voor volwassenen",
    description:
        "De praktijk is gericht op volwassenen vanaf 18 jaar, voor klachten zoals angst, somberheid, trauma, rouw, een negatief zelfbeeld en persoonlijkheidsproblematiek.",
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
                eyebrow="Voor wie"
                title="Voor wie?"
                intro="De praktijk is gericht op volwassenen vanaf 18 jaar. U kunt zich aanmelden voor kortdurende en langdurende klachten. Therapie is maatwerk en wordt zo goed mogelijk afgestemd op uw hulpvraag."
                photo={photos.zonsopkomstMeer}
            />

            <PageBody aside={<SignupAside />}>
                <h2>U kunt bij mij in behandeling komen voor</h2>
                <ul>
                    {complaints.map((complaint) => (
                        <li key={complaint}>{complaint}</li>
                    ))}
                </ul>

                <Callout tone="warning" title="Wanneer niet?">
                    <p>
                        Ik kan u vanuit mijn praktijk niet de hulp bieden die nodig is als uw
                        zorgvraag te zwaar en te complex is.
                    </p>
                    <p>
                        Als{" "}
                        <strong>
                            psychose(s), crisis, acute suïcidaliteit, zelfverwonding, ernstige
                            verslavingsproblematiek, een ernstige eetstoornis of
                            agressieproblematiek
                        </strong>{" "}
                        op de voorgrond staan, is een gespecialiseerd aanbod en een
                        multidisciplinaire behandeling elders meer geïndiceerd.
                    </p>
                    <p>In dat geval kan de huisarts u helpen bij het vinden van passende zorg.</p>
                </Callout>
            </PageBody>
        </>
    );
}
