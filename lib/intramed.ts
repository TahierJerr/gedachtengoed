/**
 * Links naar het patiëntenportaal van Intramed.
 *
 * Het portaal kan sinds maart 2026 niet meer in een iframe (Safari blokkeert dat),
 * dus de website linkt rechtstreeks naar importaal.intramedonline.nl.
 *
 * Debiteurnummer en administratienummer staan in de environment variables, zodat ze
 * in Vercel aangepast kunnen worden zonder de code te wijzigen. De waarden staan in
 * "Mijn Intramed" of Bijlage II.
 */

const BASE = "https://importaal.intramedonline.nl";

const debiteur = process.env.NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER ?? "DEBITEURNUMMER";
const admNumber = process.env.NEXT_PUBLIC_INTRAMED_ADM_NUMBER ?? "01";

const adm = `ADM${admNumber}`;

export const intramedPortal = {
    home: `${BASE}/${debiteur}/${adm}`,
    inschrijven: `${BASE}/${debiteur}/${adm}/inschrijven`,
    inloggen: `${BASE}/${debiteur}/${adm}/inloggen`,
} as const;

/** False zolang de environment variables nog niet zijn ingevuld. */
export const intramedConfigured =
    debiteur !== "DEBITEURNUMMER" && process.env.NEXT_PUBLIC_INTRAMED_ADM_NUMBER !== undefined;
