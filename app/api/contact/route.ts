import { NextRequest } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { PracticeNotificationEmail } from "@/emails/practice-notification";
import { ClientConfirmationEmail } from "@/emails/client-confirmation";

const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().max(20).optional().or(z.literal("")),
    subject: z.string().min(2).max(150),
    message: z.string().min(10).max(2000),
    consent: z.literal(true),
    website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

// Simple in-memory rate limiter: max 5 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || entry.resetAt < now) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count += 1;
    return true;
}

function getClientIp(req: NextRequest): string {
    const forwarded = req.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    const real = req.headers.get("x-real-ip");
    if (real) return real;
    return "unknown";
}

type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

async function sendEmails(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    // Development fallback — log without sending
    if (!apiKey || !fromEmail || !toEmail) {
        if (process.env.NODE_ENV !== "production") {
            console.log("[contact-form] Email config missing — message would have been:");
            console.log(JSON.stringify(payload, null, 2));
            return { ok: true };
        }
        return { ok: false, error: "Email service is not configured." };
    }

    const resend = new Resend(apiKey);
    const submittedAt = new Date().toLocaleString("nl-NL", {
        dateStyle: "long",
        timeStyle: "short",
    });

    try {
        // Send both emails in parallel for speed
        const [practiceResult, clientResult] = await Promise.all([
            // Notification to the practice (Siepie)
            resend.emails.send({
                from: fromEmail,
                to: [toEmail],
                replyTo: payload.email,
                subject: `[Contactformulier] ${payload.subject}`,
                react: PracticeNotificationEmail({
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    subject: payload.subject,
                    message: payload.message,
                    submittedAt,
                }),
            }),
            // Confirmation to the client
            resend.emails.send({
                from: fromEmail,
                to: [payload.email],
                replyTo: toEmail,
                subject: "Bedankt voor uw bericht — Praktijk GedachtenGoed",
                react: ClientConfirmationEmail({
                    name: payload.name,
                    subject: payload.subject,
                    message: payload.message,
                }),
            }),
        ]);

        if (practiceResult.error) {
            console.error("[contact-form] Practice email error:", practiceResult.error);
            return { ok: false, error: "Email naar de praktijk kon niet verstuurd worden." };
        }
        if (clientResult.error) {
            // Practice already received it, so don't fail the user — just log
            console.error("[contact-form] Client confirmation error:", clientResult.error);
        }

        return { ok: true };
    } catch (err) {
        console.error("[contact-form] Send error:", err);
        return { ok: false, error: "Onverwachte fout bij het versturen van e-mails." };
    }
}

export async function POST(req: NextRequest) {
    try {
        const ip = getClientIp(req);
        if (!checkRateLimit(ip)) {
            return Response.json(
                { error: "Te veel berichten verstuurd. Probeer het later opnieuw." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return Response.json(
                { error: "Ongeldige invoer. Controleer de velden en probeer opnieuw." },
                { status: 400 }
            );
        }

        // Honeypot — silently succeed but do not actually send
        if (parsed.data.website && parsed.data.website.length > 0) {
            return Response.json({ message: "OK" }, { status: 200 });
        }

        const sendResult = await sendEmails({
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || undefined,
            subject: parsed.data.subject,
            message: parsed.data.message,
        });

        if (!sendResult.ok) {
            return Response.json(
                {
                    error:
                        "Het bericht kon niet verstuurd worden. Mail rechtstreeks naar GedachtenGoedPsychotherapie@gmail.com.",
                },
                { status: 500 }
            );
        }

        return Response.json({ message: "Bericht verstuurd" }, { status: 200 });
    } catch (error) {
        console.error("[contact-form] Error:", error);
        return Response.json({ error: "Interne serverfout." }, { status: 500 });
    }
}
