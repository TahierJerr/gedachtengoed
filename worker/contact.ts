import { z } from "zod";

import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";

import type { Env } from "./index";
import { sendPracticeEmail } from "./send-practice-email";

const contactSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.email().max(254),
    phone: z.string().trim().max(20).optional(),
    subject: z.string().trim().min(2).max(150),
    message: z.string().trim().min(10).max(2000),
    consent: z.literal(true),
    website: z.string().optional(), // honeypot
});

const json = (body: unknown, status: number) =>
    Response.json(body, {
        status,
        headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });

// Het contactformulier: valideren, misbruik afremmen en één e-mail naar de praktijk sturen.
// Er wordt niets opgeslagen.
export async function handleContact(request: Request, env: Env): Promise<Response> {
    try {
        const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
        if (!checkRateLimit(ip)) {
            return json(
                { error: "Er zijn te veel berichten verstuurd. Probeer het over een uur opnieuw." },
                429
            );
        }

        const body: unknown = await request.json();
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return json(
                { error: "Niet alle velden zijn goed ingevuld. Controleer ze en probeer opnieuw." },
                400
            );
        }

        // Honeypot ingevuld: doen alsof het gelukt is, maar niets versturen.
        if (parsed.data.website) return json({ message: "Bericht verstuurd" }, 200);

        const { name, email, phone, subject, message } = parsed.data;
        const sent = await sendPracticeEmail(env, {
            name,
            email,
            phone: phone || undefined,
            subject,
            message,
        });
        if (!sent) {
            return json(
                {
                    error: `Het bericht is niet verstuurd. Mail rechtstreeks naar ${siteConfig.contact.email}.`,
                },
                500
            );
        }
        return json({ message: "Bericht verstuurd" }, 200);
    } catch (error) {
        console.error("[contact] Fout:", error);
        return json({ error: "Er ging iets mis op de server. Probeer het later opnieuw." }, 500);
    }
}
