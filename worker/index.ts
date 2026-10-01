// http → https en www → adres zonder www (301), het contactformulier op /api/contact,
// en de rest uit de statische bestanden in out/.
import { handleContact } from "./contact";

type Fetcher = { fetch: (req: Request) => Promise<Response> };
export type Env = { ASSETS: Fetcher; RESEND_API_KEY?: string; CONTACT_FROM_EMAIL?: string };

const APEX = "gedachtengoedpsychotherapie.nl";

const worker = {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);

        if (url.hostname === `www.${APEX}` || (url.hostname === APEX && url.protocol === "http:")) {
            url.hostname = APEX;
            url.protocol = "https:";
            return Response.redirect(url.toString(), 301);
        }

        if (url.pathname === "/api/contact") {
            if (request.method !== "POST") {
                return Response.json(
                    { error: "Methode niet toegestaan." },
                    { status: 405, headers: { Allow: "POST" } }
                );
            }
            return handleContact(request, env);
        }

        const response = await env.ASSETS.fetch(request);
        if (url.hostname === APEX) return response;
        // Elk ander adres (workers.dev, lokaal) is een kopie: niet laten indexeren.
        const kopie = new Response(response.body, response);
        kopie.headers.set("X-Robots-Tag", "noindex");
        return kopie;
    },
};

export default worker;
