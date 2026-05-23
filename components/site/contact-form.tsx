"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Vul uw naam in (minimaal 2 tekens)." })
    .max(100, { message: "Naam is te lang." }),
  email: z
    .string()
    .min(1, { message: "Vul uw e-mailadres in." })
    .email({ message: "Vul een geldig e-mailadres in." }),
  phone: z
    .string()
    .max(20, { message: "Telefoonnummer is te lang." })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(2, { message: "Vul een onderwerp in." })
    .max(150, { message: "Onderwerp is te lang." }),
  message: z
    .string()
    .min(10, { message: "Bericht is te kort (minimaal 10 tekens)." })
    .max(2000, { message: "Bericht is te lang (maximaal 2000 tekens)." }),
  consent: z.literal(true, {
    message:
      "U moet toestemming geven voordat het bericht verstuurd kan worden.",
  }),
  // honeypot,  must remain empty
  website: z.string().max(0).optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false as unknown as true,
      website: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const consentValue = watch("consent");

  async function onSubmit(values: ContactForm) {
    setSubmitState({ status: "submitting" });
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
            "Er ging iets mis bij het versturen. Probeer het opnieuw of mail rechtstreeks.",
        });
        return;
      }
      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Verbindingsprobleem. Probeer het opnieuw of mail rechtstreeks naar GedachtenGoedPsychotherapie@gmail.com.",
      });
    }
  }

  if (submitState.status === "success") {
    return (
      <div className="bg-white border border-[var(--accent)] rounded-lg p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-[var(--accent)] mx-auto mb-4" />
        <h2 className="text-2xl font-serif text-[var(--accent-dark)] mb-3">
          Bedankt voor uw bericht
        </h2>
        <p className="text-[var(--foreground)] mb-6">
          Uw bericht is in goede orde ontvangen. Ik neem zo spoedig mogelijk
          contact met u op.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitState({ status: "idle" })}
        >
          Nieuw bericht versturen
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--border)] rounded-lg p-6 sm:p-8">
      {/* AVG transparantie - dit is verplicht volgens de AVG (informatieplicht bij verzameling) */}
      <div className="mb-6 p-4 bg-[var(--accent-soft)] rounded-md text-sm space-y-2">
        <div className="flex items-start gap-2">
          <ShieldAlert className="h-5 w-5 text-[var(--accent-dark)] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[var(--accent-dark)] mb-1">
              Privacy &amp; gegevensverwerking
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">
              Ik verwerk uw gegevens uitsluitend om contact met u op te nemen.
              Uw bericht wordt per e-mail aan mij verzonden en niet opgeslagen
              in een database. Gegevens worden bewaard zolang dat voor onze
              contactlegging nodig is, en daarna verwijderd.{" "}
              <Link
                href="/privacyverklaring"
                className="underline hover:text-[var(--accent-dark)]"
              >
                Lees de volledige privacyverklaring
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Waarschuwing tegen het versturen van medische / gevoelige gegevens */}
      <div className="mb-6 p-4 bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-md text-sm">
        <p className="text-[var(--warning-fg)] font-medium mb-1">
          Let op: stuur geen medische of gevoelige gegevens via dit formulier
        </p>
        <p className="text-[var(--warning-fg)] leading-relaxed">
          Dit formulier is uitsluitend bedoeld voor een eerste contact. Beperk
          uw bericht tot algemene informatie over uw vraag. Geef geen
          gezondheidsgegevens, diagnoses of BSN op. Inhoudelijke informatie
          bespreken we tijdens het telefonisch contact.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Honeypot,  onzichtbaar voor mensen, alleen bots vullen dit in */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor="website">Website (laat leeg)</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name">
              Naam <span className="text-[var(--error-fg)]">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-[var(--error-fg)]">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              E-mail <span className="text-[var(--error-fg)]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-[var(--error-fg)]">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="phone">
              Telefoon{" "}
              <span className="text-[var(--muted)] font-normal">
                (optioneel)
              </span>
            </Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-[var(--error-fg)]">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">
              Onderwerp <span className="text-[var(--error-fg)]">*</span>
            </Label>
            <Input
              id="subject"
              type="text"
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              {...register("subject")}
            />
            {errors.subject && (
              <p id="subject-error" className="text-sm text-[var(--error-fg)]">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Bericht <span className="text-[var(--error-fg)]">*</span>
          </Label>
          <Textarea
            id="message"
            rows={6}
            placeholder="Houd uw bericht algemeen. Inhoudelijke zaken bespreken we telefonisch."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-[var(--error-fg)]">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* AVG-toestemming */}
        <div className="space-y-2 pt-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={!!consentValue}
              onCheckedChange={(checked) =>
                setValue(
                  "consent",
                  checked === true
                    ? (true as const)
                    : (false as unknown as true),
                  {
                    shouldValidate: true,
                  },
                )
              }
              aria-invalid={errors.consent ? "true" : "false"}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <Label
              htmlFor="consent"
              className="text-sm font-normal leading-relaxed cursor-pointer text-[var(--foreground)]"
            >
              Ik geef toestemming dat mijn gegevens (naam, e-mail, eventueel
              telefoonnummer en de inhoud van mijn bericht) worden verwerkt om
              contact met mij op te nemen. Ik begrijp dat ik geen medische of
              gezondheidsgegevens via dit formulier hoor te versturen.{" "}
              <span className="text-[var(--error-fg)]">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p
              id="consent-error"
              className="text-sm text-[var(--error-fg)] ml-8"
            >
              {errors.consent.message}
            </p>
          )}
        </div>

        {submitState.status === "error" && (
          <div className="p-4 bg-[var(--error-bg)] border border-[var(--error-border)] rounded-md flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[var(--error-fg)] shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--error-fg)]">
              {submitState.message}
            </p>
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || submitState.status === "submitting"}
            className="w-full sm:w-auto"
          >
            {isSubmitting || submitState.status === "submitting"
              ? "Versturen..."
              : "Verstuur bericht"}
          </Button>
          <p className="text-xs text-[var(--muted)] mt-3">
            Velden gemarkeerd met{" "}
            <span className="text-[var(--error-fg)]">*</span> zijn verplicht.
          </p>
        </div>
      </form>
    </div>
  );
}
