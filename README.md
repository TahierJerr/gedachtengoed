# Praktijk voor Psychotherapie GedachtenGoed

Een statische marketing website voor Praktijk voor Psychotherapie GedachtenGoed in Veldhoven, met een AVG-conform contactformulier en SEO-geoptimaliseerde structuur.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** componenten (handgeschreven, geen externe init nodig)
- **react-hook-form** + **Zod** voor formulier-validatie
- **Resend** + **React Email** voor branded transactional emails
- **Bun** als package manager
- **Vercel** als hosting platform (aanbevolen)

## Lokaal draaien

```bash
bun install
cp .env.example .env
# vul de Resend-gegevens in als je echte e-mails wilt versturen
bun run dev
```

In development hoeven de Resend-variabelen niet ingevuld te zijn. Berichten verschijnen dan in de server-log.

### Email templates previewen

```bash
bunx react-email dev --dir ./emails --port 3001
```

Open http://localhost:3001 om beide email templates live te bewerken en te previewen.

## Productie / deploy

Aanbevolen: **Vercel**.

1. Push de repository naar GitHub.
2. Importeer het project in Vercel.
3. Vul de environment variables in (zie `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — bv. `https://gedachtengoedpsychotherapie.nl`
   - `RESEND_API_KEY` — vraag aan via [resend.com](https://resend.com)
   - `CONTACT_FROM_EMAIL` — verzendadres op een geverifieerd domein in Resend
   - `CONTACT_TO_EMAIL` — `GedachtenGoedPsychotherapie@gmail.com`
   - `NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER` — debiteurnummer uit Mijn Intramed
   - `NEXT_PUBLIC_INTRAMED_ADM_NUMBER` — administratienummer (alleen het cijfer, bv. `01`)
4. Deploy.

## Patiëntenportaal (Intramed)

Per maart 2026 is iframe-integratie van het Intramed patiëntenportaal niet meer mogelijk (Safari blokkeert dit). De `/patientenportaal` pagina werkt daarom met directe links naar het portaal in plaats van een ingebed frame.

De URL-template is `https://importaal.intramedonline.nl/{debiteurnummer}/ADM{xx}/{actie}`, met drie acties: `inschrijven`, `inloggen` en de portaal-home (zonder actie). De pagina toont twee prominente knoppen ("Inschrijven" en "Inloggen") plus uitleg over wat patiënten in het portaal kunnen doen.

**Belangrijk:** na de eerste deploy moet Siepie in Intramed zelf de externe-toegang-URL bijwerken naar `https://gedachtengoedpsychotherapie.nl/patientenportaal` (Systeem → Systeemgegevens → tabblad 10: Externe toegang). De oude pagina moet minimaal 14 dagen blijven bestaan in verband met links die nog in omloop zijn in vragenlijst-emails.

## SEO

De website is opgezet volgens Next.js 16 SEO best practices voor 2026:

### Metadata

- **Hierarchical metadata** met root template (`%s | GedachtenGoed`)
- `metadataBase` ingesteld via `NEXT_PUBLIC_SITE_URL` zodat alle relatieve URL's correct werken
- Elke pagina heeft een eigen `alternates.canonical`
- **Open Graph + Twitter Card** met dynamisch gegenereerd 1200×630 OG-image via `app/opengraph-image.tsx`
- Volledige robots-configuratie inclusief Googlebot-specifieke instructies

### Structured Data (JSON-LD)

- **MedicalBusiness** (subtype van LocalBusiness) op alle pagina's — Google's aanbevolen schema voor zorgaanbieders, geeft toegang tot Maps/local pack rich results
- **WebSite** schema voor de hele site
- **Physician** schema op de over-mij pagina met BIG-registraties en beroepsverenigingen
- **BreadcrumbList** op elke inner page
- **FAQPage** schema op de aanmelden-pagina met de meest gestelde vragen — kwalificeert nog steeds voor FAQ rich snippets in de zorgsector (zeldzaamheid in 2026)

### Performance

- **Statische generation** voor 11 van de 12 pagina's (alleen `/api/contact` is dynamisch)
- Geen externe fonts (system-ui) → geen render-blocking CSS, CLS=0
- Geen tracking scripts → snellere Core Web Vitals
- Lazy-loaded Google Maps iframe op contactpagina

### Sitemap & robots

- `app/sitemap.ts` met per-pagina prioriteit en `changeFrequency`
- `app/robots.ts` met sitemap-referentie en host

### Niet-technische aandachtspunten

Na de eerste deploy:

1. **Google Search Console** verifieren en sitemap submitten (`/sitemap.xml`)
2. **Google Business Profile** aanmaken/claimen voor de Veldhoven-locatie (cruciaal voor "psychotherapie Veldhoven" zoekopdrachten)
3. **Bing Webmaster Tools** verifieren (15-20% van NL zoekverkeer)
4. **Schema markup valideren** met Google's [Rich Results Test](https://search.google.com/test/rich-results)
5. Eventueel **backlinks** opbouwen via: LVVP-praktijkprofiel, GGZ Standaard, ZorgkaartNederland, psychotherapie.nl

## AVG-overwegingen voor het contactformulier

Het formulier is opgezet volgens de AVG-beginselen voor zorgverleners:

1. **Dataminimalisatie**: alleen naam, e-mail, optioneel telefoon, onderwerp en bericht.
2. **Doelbinding**: gegevens worden uitsluitend gebruikt om contact op te nemen.
3. **Grondslag = toestemming** (art. 6 lid 1 sub a AVG) — expliciete, niet vooraf aangevinkte checkbox.
4. **Transparantie bij het verzamelmoment**: doel, grondslag, bewaartermijn en link naar de privacyverklaring direct boven het formulier.
5. **Waarschuwing** tegen het versturen van medische of gezondheidsgegevens.
6. **Geen tracking, geen cookies van derden, geen Google Fonts** → geen cookiebanner nodig.
7. **HTTPS only** (door Vercel gegarandeerd).
8. **Server-side validatie** met Zod naast client-side validatie.
9. **Rate limiting** in de API route (max 5 berichten per IP per uur).
10. **Honeypot** in plaats van Google reCAPTCHA — geen US-dataprocessor-leak.
11. **Geen database**: berichten worden alleen per e-mail doorgestuurd, niet opgeslagen op de server.

### Wat de praktijk zelf nog moet regelen

- **Verwerkersovereenkomst met Resend** en **Vercel**.
- **Verwerkingsregister** bijhouden.
- **Datalekprocedure** documenteren.
- De **privacyverklaring** laten reviewen door bijvoorbeeld de LVVP-jurist.

## Email templates

In `emails/` staan twee React Email templates die qua kleur en typografie 1-op-1 aansluiten op de website (sage green, Georgia serif, cream achtergrond):

- `practice-notification.tsx` — naar Siepie. Bevat alle gegevens van de afzender, een geformatteerde recap van het bericht, en `reply-to` ingesteld op het mailadres van de afzender zodat ze direct kan antwoorden.
- `client-confirmation.tsx` — naar de aanvrager. Bevestigt ontvangst, recap van eigen bericht, info over wachttijd en verwijsbrief, crisis-instructies onderaan, en de zakelijke voettekst met KVK/AGB/BIG-registraties.

Beide templates zijn geheel via inline CSS gestyled (mail clients ondersteunen geen CSS variables) maar gebruiken een gedeelde `theme.ts` zodat ze in sync blijven met de website.

## Structuur

- `app/api/contact/route.ts` — AVG-conform formulier-endpoint, stuurt beide emails via Resend
- `app/opengraph-image.tsx` — dynamisch gegenereerd 1200×630 OG image
- `app/sitemap.ts` / `app/robots.ts` — automatische sitemap en robots.txt
- `lib/site-config.ts` — alle site-gegevens op één plek
- `lib/schema.ts` — JSON-LD generators (MedicalBusiness, Physician, FAQ, Breadcrumb, WebSite)
- `components/seo/json-ld.tsx` — server component voor JSON-LD injectie
- `emails/` — React Email templates en gedeelde theme

## Aandachtspunten

- De URL-slugs zijn identiek aan de oude website, dus zonder verlies van SEO over te zetten.
- Het oude kontaktformulier staat als "niet actief" — dit nieuwe formulier vervangt dat.
- De Google Maps-iframe op `/contact` zet cookies van Google — staat vermeld in het cookiebeleid. Voor strikter cookiebeleid kan dit vervangen worden door een statische screenshot met link naar Google Maps.
# gedachtengoed
