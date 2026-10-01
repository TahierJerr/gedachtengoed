/**
 * Eenvoudige begrenzing in het geheugen: maximaal 5 berichten per IP-adres per uur.
 * In de Worker leeft dit per instantie; het remt misbruik af, samen met de honeypot.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const requests = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string): boolean {
    const now = Date.now();
    const entry = requests.get(key);

    if (!entry || entry.resetAt < now) {
        requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
        return true;
    }
    if (entry.count >= MAX_REQUESTS) return false;

    entry.count += 1;
    return true;
}
