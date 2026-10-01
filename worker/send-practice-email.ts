import { render } from "@react-email/render";

import { PracticeNotificationEmail } from "@/emails/practice-notification";
import { siteConfig } from "@/lib/site-config";

import type { Env } from "./index";

export type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

/**
 * Stuurt het bericht als één e-mail naar de praktijk, via Resend. De afzender staat als
 * reply-to, zodat beantwoorden direct naar de afzender gaat.
 * Geeft `false` terug als de e-mail niet is verstuurd.
 */
export async function sendPracticeEmail(env: Env, payload: ContactPayload): Promise<boolean> {
    const apiKey = env.RESEND_API_KEY;
    const fromEmail = env.CONTACT_FROM_EMAIL;
    if (!apiKey || !fromEmail) {
        console.error("[contact] RESEND_API_KEY of CONTACT_FROM_EMAIL ontbreekt.");
        return false;
    }

    const submittedAt = new Date().toLocaleString("nl-NL", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Europe/Amsterdam",
    });
    const mail = PracticeNotificationEmail({ ...payload, submittedAt });

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                from: fromEmail,
                to: [siteConfig.contact.email],
                reply_to: payload.email,
                subject: `[Contactformulier] ${payload.subject}`,
                html: await render(mail),
                text: await render(mail, { plainText: true }),
            }),
        });
        if (!res.ok) {
            console.error("[contact] Versturen mislukt:", res.status, await res.text());
            return false;
        }
        return true;
    } catch (error) {
        console.error("[contact] Versturen mislukt:", error);
        return false;
    }
}
