/**
 * Helpers for building Intramed patiëntportaal URLs.
 *
 * Per Intramed's March 2026 guidance, the portal can no longer be iframed
 * (Safari blocks it). Instead, the practice's website should link directly
 * to importaal.intramedonline.nl with the correct debiteurnummer and ADM.
 *
 * The debiteurnummer and administratienummer are configured via env vars so
 * Siepie can update them in Vercel without touching code. Default placeholders
 * are intentionally invalid,  they must be replaced before going live.
 *
 * Get the correct values from "Mijn Intramed" or Bijlage II.
 */

const BASE = "https://importaal.intramedonline.nl";

const debiteur =
  process.env.NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER ?? "DEBITEURNUMMER";
const admNumber = process.env.NEXT_PUBLIC_INTRAMED_ADM_NUMBER ?? "01";

const adm = `ADM${admNumber}`;

export const intramedPortal = {
  home: `${BASE}/${debiteur}/${adm}`,
  inschrijven: `${BASE}/${debiteur}/${adm}/inschrijven`,
  inloggen: `${BASE}/${debiteur}/${adm}/inloggen`,
} as const;

/**
 * True when the env vars are still on their placeholder values.
 * Used on the portal page to show a warning during development.
 */
export const intramedConfigured =
  debiteur !== "DEBITEURNUMMER" &&
  process.env.NEXT_PUBLIC_INTRAMED_ADM_NUMBER !== undefined;
