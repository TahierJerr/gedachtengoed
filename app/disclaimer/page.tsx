import { PageBody } from "@/components/site/page-body";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/page-metadata";
import { photos } from "@/lib/photos";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
    title: "Disclaimer",
    description:
        "Disclaimer en aansprakelijkheid voor het gebruik van de website van Praktijk voor Psychotherapie GedachtenGoed.",
    path: "/disclaimer",
});

export default function DisclaimerPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbSchema([
                    { name: "Home", path: "/" },
                    { name: "Disclaimer", path: "/disclaimer" },
                ])}
            />
            <PageHero
                eyebrow="Disclaimer"
                title="Disclaimer"
                intro="Algemene voorwaarden voor het gebruik van deze website."
                photo={photos.bergenEnWater}
            />

            <PageBody>
                <h2>Informatie op deze website</h2>
                <p>
                    De informatie op deze website is met de grootst mogelijke zorg samengesteld.
                    Toch is het mogelijk dat informatie onvolledig en/of onjuist is. Aan de inhoud
                    van deze website kunnen daarom geen rechten worden ontleend. De informatie is
                    met name niet bedoeld als vervanging van een (medisch) consult of behandeling.
                </p>

                <h2>Aansprakelijkheid</h2>
                <p>
                    Praktijk voor Psychotherapie GedachtenGoed aanvaardt geen aansprakelijkheid voor
                    schade die zou kunnen ontstaan als gevolg van het gebruik van de informatie op
                    deze website, of voor schade door technische storingen of het tijdelijk niet
                    beschikbaar zijn van de website.
                </p>

                <h2>Externe links</h2>
                <p>
                    Deze website bevat links naar websites van derden. Praktijk voor Psychotherapie
                    GedachtenGoed is niet verantwoordelijk voor de inhoud, het functioneren of het
                    privacybeleid van deze externe websites.
                </p>

                <h2>Auteursrecht</h2>
                <p>
                    Alle inhoud op deze website (teksten, afbeeldingen, vormgeving) is eigendom van
                    Praktijk voor Psychotherapie GedachtenGoed, tenzij uitdrukkelijk anders vermeld.
                    Het is niet toegestaan deze inhoud over te nemen, te vermenigvuldigen of
                    openbaar te maken zonder voorafgaande schriftelijke toestemming.
                </p>

                <h2>Toepasselijk recht</h2>
                <p>
                    Op het gebruik van deze website en deze disclaimer is uitsluitend Nederlands
                    recht van toepassing.
                </p>
            </PageBody>
        </>
    );
}
