import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Praktijk voor Psychotherapie GedachtenGoed in Veldhoven via het AVG-conforme contactformulier of per e-mail.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Neem contact op"
        title="Contact"
        intro="Voor meer informatie kunt u contact opnemen via onderstaand formulier of per e-mail. Ik ga graag met u in gesprek over de mogelijkheden."
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div>
            <h2 className="text-2xl font-serif text-[var(--accent-dark)] mb-6">
              Stuur een bericht
            </h2>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="bg-[var(--accent-soft)] rounded-lg p-6">
              <h3 className="text-lg font-serif text-[var(--accent-dark)] mb-4">
                Contactgegevens
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--accent-dark)] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-[var(--accent-dark)] mb-0.5">
                      Locatie
                    </div>
                    <div className="text-[var(--foreground)]">
                      Van Aelstlaan 79
                      <br />
                      5503 BC Veldhoven
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[var(--accent-dark)] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-[var(--accent-dark)] mb-0.5">
                      E-mail
                    </div>
                    <a
                      href="mailto:GedachtenGoedPsychotherapie@gmail.com"
                      className="text-[var(--foreground)] hover:text-[var(--accent-dark)] break-all underline"
                    >
                      GedachtenGoedPsychotherapie@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[var(--accent-dark)] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-[var(--accent-dark)] mb-0.5">
                      Openingstijden
                    </div>
                    <div className="text-[var(--foreground)]">
                      Maandag: 9:00 – 17:00
                      <br />
                      Dinsdag: 9:00 – 17:00
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-lg font-serif text-[var(--accent-dark)] mb-3">
                Praktische informatie
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                De spreekkamer bevindt zich in het souterrain en is bereikbaar
                via een trap. Er is voldoende gelegenheid tot parkeren in de
                buurt.
              </p>
            </div>

            <div className="bg-[var(--error-bg)] border border-[var(--error-border)] rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[var(--error-fg)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[var(--error-fg)] mb-1">
                    Spoed of crisis?
                  </h3>
                  <p className="text-sm text-[var(--error-fg)] leading-relaxed">
                    Bel uw huisarts of huisartsenpost. Voor directe
                    ondersteuning: <strong>113.nl</strong>, bereikbaar 24/7 via{" "}
                    <strong>0800-0113</strong>.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-lg overflow-hidden border border-[var(--border)] aspect-[16/9]">
          <iframe
            title="Kaart locatie praktijk in Veldhoven"
            src="https://maps.google.com/maps?q=Van%20Aelstlaan%2079%2C%205503%20BC%2C%20Veldhoven%2C%20Nederland&t=m&z=14&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
