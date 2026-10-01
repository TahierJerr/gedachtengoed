import { NextRequest } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";
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

function getClientIp(req: NextRequest): string {
    const forwarded = req.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
    try {
        if (!checkRateLimit(getClientIp(req))) {
            return Response.json(
                { error: "Er zijn te veel berichten verstuurd. Probeer het over een uur opnieuw." },
                { status: 429 }
            );
        }

        const body: unknown = await req.json();
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return Response.json(
                { error: "Niet alle velden zijn goed ingevuld. Controleer ze en probeer opnieuw." },
                { status: 400 }
            );
        }

        // Honeypot ingevuld: doen alsof het gelukt is, maar niets versturen.
        if (parsed.data.website) {
            return Response.json({ message: "Bericht verstuurd" }, { status: 200 });
        }

        const { name, email, phone, subject, message } = parsed.data;
        const sent = await sendPracticeEmail({
            name,
            email,
            phone: phone || undefined,
            subject,
            message,
        });

        if (!sent) {
            return Response.json(
                {
                    error: `Het bericht is niet verstuurd. Mail rechtstreeks naar ${siteConfig.contact.email}.`,
                },
                { status: 500 }
            );
        }

        return Response.json({ message: "Bericht verstuurd" }, { status: 200 });
    } catch (error) {
        console.error("[contact] Fout:", error);
        return Response.json(
            { error: "Er ging iets mis op de server. Probeer het later opnieuw." },
            { status: 500 }
        );
    }
}
