# Praktijk voor Psychotherapie GedachtenGoed

Website van Praktijk voor Psychotherapie GedachtenGoed (Siepie Zonderland) in Veldhoven.
Alle pagina's zijn statisch gegenereerd; alleen het contactformulier gebruikt een serverfunctie.

## Stack

- Next.js 16 (App Router) + TypeScript, Tailwind CSS v4
- shadcn/ui-componenten (handgeschreven) + react-hook-form + Zod voor het formulier
- Resend + React Email voor de e-mail van het contactformulier
- Lettertypen via @fontsource (zelf gehost: geen Google Fonts)
- Bun als package manager, Vercel als hosting

## Lokaal draaien

```bash
bun install
cp .env.example .env
bun run dev
```

Zonder Resend-gegevens wordt een formulierbericht lokaal alleen in de serverlog getoond.

Controles vóór een deploy:

```bash
bunx tsc --noEmit && bun run lint && bun run build
```

## Environment variables (Vercel)

| Variabele | Waarvoor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Het adres van de site, voor canonieke links, sitemap en gestructureerde data |
| `RESEND_API_KEY` | Versturen van het formulierbericht |
| `CONTACT_FROM_EMAIL` | Afzender, op een domein dat in Resend geverifieerd is |
| `NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER` | Debiteurnummer uit Mijn Intramed |
| `NEXT_PUBLIC_INTRAMED_ADM_NUMBER` | Administratienummer (alleen het cijfer, bv. `01`) |

Het formulier stuurt één e-mail naar het adres in `lib/site-config.ts`
(`info@gedachtengoedpsychotherapie.nl`), met de afzender als reply-to. Er gaat geen
bevestiging naar de afzender en er wordt niets opgeslagen.

## Waar staat wat

- `lib/site-config.ts`: adres, e-mail, werkdagen, registraties en de **wachttijd**
  (`waitingTime`: aantal weken en datum van bijwerken; wordt op drie plekken getoond)
- `lib/photos.ts`: alle foto's met alt-tekst en uitsnede; bestanden in `public/images/`
- `lib/therapies.ts`, `lib/complaints.ts`, `lib/faq.ts`: behandelvormen, klachten en veelgestelde vragen
- `lib/navigation.ts`: menu en voettekst
- `lib/schema.ts`: gestructureerde data (MedicalBusiness, Person, FAQ, kruimelpad)
- `app/_home/`: de secties van de homepage
- `components/site/`: gedeelde onderdelen (kop, voet, paginakop met ronde foto, callouts)
- `app/voorwaarden/page.tsx`: tarieven (jaarlijks bijwerken met de NZa-tarieven)

## Ontwerp

Het beeldmerk is de koru in een volle schijf. Die ronde vorm keert terug in de foto's bovenaan
elke pagina. De kleuren komen uit de lotusvijver-foto's: vijvergroen, bladgroen, lotusroze en
een koel papier. Koppen en lopende tekst in Literata, menu en formulier in Albert Sans.

## Zoekmachines

- Elke pagina heeft een eigen titel, beschrijving en canonieke link; de URL's zijn gelijk
  aan die van de oude website.
- `sitemap.xml` en `robots.txt` worden gegenereerd.
- Gestructureerde data: praktijk (adres, coördinaten, werkdagen, behandelvormen), Siepie
  als persoon (BIG-registraties, verenigingen), kruimelpaden en veelgestelde vragen. De
  vragen staan ook zichtbaar op de pagina Aanmelden en werkwijze.
- Na livegang op het eigen domein: sitemap aanmelden in Google Search Console en een
  Google Bedrijfsprofiel voor de praktijk aanmaken of claimen.

## Privacy

- Geen trackers, geen cookies van derden bij het laden van een pagina.
- De kaart van Google Maps laadt pas na een klik op "Toon de kaart".
- Formulier: toestemming verplicht, waarschuwing tegen medische gegevens, honeypot en
  een limiet van 5 berichten per IP-adres per uur.
- De praktijk regelt zelf: verwerkersovereenkomsten met Resend en Vercel, het
  verwerkingsregister en de datalekprocedure.

## Patiëntenportaal (Intramed)

Het portaal kan niet meer in een iframe (Safari blokkeert dat). `/patientenportaal` linkt
daarom rechtstreeks naar `importaal.intramedonline.nl/{debiteurnummer}/ADM{xx}/…`. Na
livegang moet in Intramed de externe-toegang-URL op
`https://gedachtengoedpsychotherapie.nl/patientenportaal` staan (Systeem → Systeemgegevens
→ tabblad 10: Externe toegang).

## AI-assistenten en zoekmachines

- `/llms.txt`: korte wegwijzer voor AI-assistenten (llmstxt.org), met links naar de
  markdown-versie van elke pagina; `/llms-full.txt` bevat alles in één document.
- `/<pagina>.md` (de homepage: `/index.md`): markdown-versie van een pagina. De inhoud komt
  uit `lib/markdown-pages.ts` en gebruikt dezelfde gegevens als de site (wachttijd, tarieven,
  behandelvormen, klachten, veelgestelde vragen). Wijzigt de lopende tekst van een pagina, werk
  dan ook de samenvatting in dat bestand bij.
- Markdown-versies hebben `noindex` en een canonieke link naar de gewone pagina.
- `lib/page-metadata.ts`: titel, beschrijving, canonieke link en deelgegevens per pagina.
- Search Console en Bing: zet de verificatiecode in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  of `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel en deploy opnieuw.
