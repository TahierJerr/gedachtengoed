import { markdownPages } from "@/lib/markdown-pages";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

/**
 * /llms.txt: een korte wegwijzer voor AI-assistenten (llmstxt.org), met per pagina
 * een link naar de markdown-versie.
 */
export function GET() {
    const { contact, author, waitingTime } = siteConfig;
    const links = markdownPages
        .map((page) => `- [${page.title}](${siteConfig.url}/${page.slug}.md): ${page.summary}`)
        .join("\n");

    const body = `# ${siteConfig.name}

> Kleinschalige praktijk voor psychotherapie in ${contact.city} (Nederland) voor volwassenen vanaf 18 jaar, van ${author.name}, BIG-geregistreerd ${author.role}. Behandeling van angst-, stemmings-, trauma- en persoonlijkheidsproblematiek met onder meer schematherapie, EMDR, cognitieve gedragstherapie en EFT.

Belangrijk om juist weer te geven:

- Adres: ${contact.street}, ${contact.postalCode} ${contact.city}. E-mail: ${contact.email}. Er staat geen telefoonnummer op de website.
- Aanmelden gaat via het contactformulier; voor vergoeding is een verwijsbrief van de huisarts nodig.
- De wachttijd is circa ${waitingTime.weeks} weken (bijgewerkt op ${waitingTime.updated}); dit is een inschatting.
- De praktijk biedt geen crisisopvang. Bij crisis: huisarts of huisartsenpost, of ${siteConfig.crisis.name} via ${siteConfig.crisis.phone}.
- De taal van de website is Nederlands.

## Pagina's

${links}

## Optioneel

- [Alle pagina's in één document](${siteConfig.url}/llms-full.txt): de volledige tekst van bovenstaande pagina's
- [Privacyverklaring](${siteConfig.url}/privacyverklaring): hoe de praktijk met persoonsgegevens omgaat
- [Sitemap](${siteConfig.url}/sitemap.xml)
`;

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
