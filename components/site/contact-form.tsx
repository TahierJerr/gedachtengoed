"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Vul uw naam in (minimaal 2 tekens)." })
        .max(100, { message: "De naam is te lang (maximaal 100 tekens)." }),
    email: z
        .string()
        .min(1, { message: "Vul uw e-mailadres in." })
        .email({ message: "Dit e-mailadres klopt niet. Controleer het en probeer opnieuw." }),
    phone: z.string().max(20, { message: "Het telefoonnummer is te lang." }),
    subject: z
        .string()
        .min(2, { message: "Vul een onderwerp in." })
        .max(150, { message: "Het onderwerp is te lang (maximaal 150 tekens)." }),
    message: z
        .string()
        .min(10, { message: "Het bericht is te kort (minimaal 10 tekens)." })
        .max(2000, { message: "Het bericht is te lang (maximaal 2000 tekens)." }),
    consent: z.boolean().refine((value) => value, {
        message: "Geef toestemming om het bericht te kunnen versturen.",
    }),
    // honeypot: moet leeg blijven
    website: z.string().max(0),
});

type ContactValues = z.infer<typeof contactSchema>;

type SubmitState =
    | { status: "idle" }
    | { status: "success" }
    | { status: "error"; message: string };

const fieldClass = "rounded-xl border-[var(--muted)] h-12";
const required = (
    <span className="text-[var(--error-fg)]" aria-hidden="true">
        {" "}
        *
    </span>
);

export function ContactForm() {
    const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

    const form = useForm<ContactValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            consent: false,
            website: "",
        },
    });

    async function onSubmit(values: ContactValues) {
        setSubmitState({ status: "idle" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = (await res.json()) as { error?: string };
            if (!res.ok) {
                setSubmitState({
                    status: "error",
                    message:
                        data.error ??
                        `Het bericht is niet verstuurd. Probeer het opnieuw of mail naar ${siteConfig.contact.email}.`,
                });
                return;
            }
            setSubmitState({ status: "success" });
            form.reset();
        } catch {
            setSubmitState({
                status: "error",
                message: `Het bericht is niet verstuurd: er is geen verbinding. Probeer het opnieuw of mail naar ${siteConfig.contact.email}.`,
            });
        }
    }

    if (submitState.status === "success") {
        return (
            <div
                role="status"
                className="rounded-3xl border border-accent bg-surface p-8 text-center sm:p-10"
            >
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-2xl">Uw bericht is verstuurd</h2>
                <p className="mt-3">
                    Bedankt voor uw bericht. Ik neem zo spoedig mogelijk contact met u op.
                </p>
                <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setSubmitState({ status: "idle" })}
                >
                    Nog een bericht versturen
                </Button>
            </div>
        );
    }

    const submitting = form.formState.isSubmitting;

    return (
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="mb-7 rounded-2xl border border-[var(--warning-border)] bg-[var(--warning-bg)] p-4 text-[0.975rem] text-[var(--warning-fg)]">
                <p className="font-semibold">
                    Stuur geen medische of gevoelige gegevens via dit formulier
                </p>
                <p className="mt-1">
                    Dit formulier is bedoeld voor een eerste contact. Houd uw bericht algemeen en
                    geef geen gezondheidsgegevens, diagnoses of BSN op. Inhoudelijke informatie
                    bespreken we tijdens het telefonisch contact.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
                    {/* Honeypot: onzichtbaar voor mensen, alleen bots vullen dit in. */}
                    <div
                        aria-hidden="true"
                        className="absolute -left-[10000px] h-px w-px overflow-hidden"
                    >
                        <label htmlFor="website">Website (laat leeg)</label>
                        <input
                            type="text"
                            id="website"
                            tabIndex={-1}
                            autoComplete="off"
                            {...form.register("website")}
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Naam{required}</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="name"
                                            required
                                            className={fieldClass}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mailadres{required}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className={fieldClass}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Telefoonnummer{" "}
                                        <span className="font-normal text-muted">(optioneel)</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            autoComplete="tel"
                                            className={fieldClass}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Onderwerp{required}</FormLabel>
                                    <FormControl>
                                        <Input required className={fieldClass} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bericht{required}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={6}
                                        required
                                        placeholder="Houd uw bericht algemeen. Inhoudelijke zaken bespreken we telefonisch."
                                        className="rounded-xl border-[var(--muted)]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="pt-2">
                                <div className="flex items-start gap-3">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) =>
                                                field.onChange(checked === true)
                                            }
                                            onBlur={field.onBlur}
                                            ref={field.ref}
                                            name={field.name}
                                            required
                                            className="h-6 w-6 border-[var(--muted)]"
                                        />
                                    </FormControl>
                                    <FormLabel className="cursor-pointer text-[0.975rem] font-normal leading-relaxed text-foreground">
                                        Ik geef toestemming dat mijn gegevens (naam, e-mailadres,
                                        eventueel telefoonnummer en de inhoud van mijn bericht)
                                        worden verwerkt om contact met mij op te nemen. Ik begrijp
                                        dat ik geen medische of gezondheidsgegevens via dit
                                        formulier hoor te versturen.{required}
                                    </FormLabel>
                                </div>
                                <FormMessage className="ml-9" />
                            </FormItem>
                        )}
                    />

                    <p className="text-sm text-muted">
                        Ik verwerk uw gegevens uitsluitend om contact met u op te nemen. Uw bericht
                        wordt per e-mail aan mij verzonden en niet opgeslagen in een database.
                        Gegevens worden bewaard zolang dat voor ons contact nodig is, en daarna
                        verwijderd.{" "}
                        <Link href="/privacyverklaring" className="underline">
                            Lees de privacyverklaring
                        </Link>
                        .
                    </p>

                    {submitState.status === "error" && (
                        <div
                            role="alert"
                            className="flex items-start gap-3 rounded-2xl border border-[var(--error-border)] bg-[var(--error-bg)] p-4 text-[var(--error-fg)]"
                        >
                            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                            <p className="text-[0.975rem]">{submitState.message}</p>
                        </div>
                    )}

                    <div className="pt-1">
                        <Button
                            type="submit"
                            size="lg"
                            disabled={submitting}
                            className="w-full rounded-full sm:w-auto"
                        >
                            {submitting ? "Bezig met versturen" : "Verstuur bericht"}
                        </Button>
                        <p className="mt-3 text-sm text-muted">
                            Velden met <span className="text-[var(--error-fg)]">*</span> zijn
                            verplicht.
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    );
}
