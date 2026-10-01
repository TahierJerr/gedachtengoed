import { Resend } from "resend";
import { PracticeNotificationEmail } from "@/emails/practice-notification";
import { siteConfig } from "@/lib/site-config";

export type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

/**
 * Stuurt het bericht als één e-mail naar de praktijk. De afzender staat als
 * reply-to, zodat beantwoorden direct naar de afzender gaat.
 * Geeft `false` terug als de e-mail niet is verstuurd.
 */
export async function sendPracticeEmail(payload: ContactPayload): Promise<boolean> {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = siteConfig.contact.email;

    if (!apiKey || !fromEmail) {
        // Lokaal zonder Resend-gegevens: alleen loggen, zodat het formulier te testen is.
        if (process.env.NODE_ENV !== "production") {
            console.log(`[contact] Resend niet ingesteld; bericht voor ${toEmail}:`, payload);
            return true;
        }
        console.error("[contact] RESEND_API_KEY of CONTACT_FROM_EMAIL ontbreekt in productie.");
        return false;
    }

    const resend = new Resend(apiKey);
    const submittedAt = new Date().toLocaleString("nl-NL", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Europe/Amsterdam",
    });

    try {
        const result = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: payload.email,
            subject: `[Contactformulier] ${payload.subject}`,
            react: PracticeNotificationEmail({ ...payload, submittedAt }),
        });

        if (result.error) {
            console.error("[contact] Versturen mislukt:", result.error);
            return false;
        }
        return true;
    } catch (error) {
        console.error("[contact] Versturen mislukt:", error);
        return false;
    }
}
