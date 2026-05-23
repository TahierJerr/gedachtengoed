import type { Metadata } from "next";
import Link from "next/link";
import {
  UserPlus,
  LogIn,
  ClipboardList,
  Lock,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { intramedPortal, intramedConfigured } from "@/lib/intramed";

export const metadata: Metadata = {
  title: "Patiëntenportaal",
  description:
    "Toegang tot het patiëntenportaal van Praktijk voor Psychotherapie GedachtenGoed. Inschrijven, inloggen of vragenlijsten invullen via de beveiligde Intramed-omgeving.",
  alternates: { canonical: "/patientenportaal" },
  robots: {
    // The actual portal lives at importaal.intramedonline.nl,  no need to
    // have this landing page indexed too heavily. Still allow it so direct
    // searches like "GedachtenGoed portaal" find it.
    index: true,
    follow: true,
  },
};

export default function PatientenportaalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Patiëntenportaal", path: "/patientenportaal" },
        ])}
      />

      <PageHero
        eyebrow="Voor cliënten"
        title="Patiëntenportaal"
        intro="Via het beveiligde patiëntenportaal van Intramed kunt u zich inschrijven, inloggen, vragenlijsten invullen en uw afspraken beheren,  wanneer het u uitkomt."
      />

      {/* Show a clear warning when env vars aren't set in production */}
      {!intramedConfigured && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-4 bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[var(--warning-fg)] shrink-0 mt-0.5" />
            <div className="text-sm text-[var(--warning-fg)]">
              <p className="font-semibold mb-1">
                Configuratie nog niet voltooid
              </p>
              <p>
                De Intramed-koppeling is nog niet ingesteld. Vul{" "}
                <code className="bg-white/50 px-1 rounded">
                  NEXT_PUBLIC_INTRAMED_DEBITEURNUMMER
                </code>{" "}
                en{" "}
                <code className="bg-white/50 px-1 rounded">
                  NEXT_PUBLIC_INTRAMED_ADM_NUMBER
                </code>{" "}
                in de environment variables. Deze waardes vindt u in Mijn
                Intramed of Bijlage II.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Primary CTAs */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <PortalAction
            href={intramedPortal.inschrijven}
            icon={<UserPlus className="h-7 w-7" />}
            title="Inschrijven"
            description="Nog niet bij de praktijk bekend? Schrijf u in via het portaal en vul uw gegevens veilig in."
            primary
          />
          <PortalAction
            href={intramedPortal.inloggen}
            icon={<LogIn className="h-7 w-7" />}
            title="Inloggen"
            description="Bestaande cliënten kunnen inloggen om afspraken te bekijken of vragenlijsten in te vullen."
          />
        </div>
      </section>

      {/* Explanation block */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 prose-content">
        <h2>Wat kunt u doen in het portaal?</h2>
        <ul>
          <li>
            <strong>Inschrijven</strong> als nieuwe cliënt, uw gegevens komen
            direct beveiligd in mijn administratie
          </li>
          <li>
            <strong>Vragenlijsten invullen</strong> die u per e-mail toegestuurd
            krijgt vanuit de praktijk
          </li>
          <li>
            <strong>Afspraken bekijken</strong> en, indien van toepassing,
            verzetten of annuleren
          </li>
          <li>
            <strong>Persoonlijke gegevens</strong> inzien en bijwerken
          </li>
        </ul>

        <h2>Vragenlijsten</h2>
        <p>
          Wanneer ik een vragenlijst voor u klaarzet, ontvangt u een e-mail met
          een directe link. U hoeft dan niet eerst in te loggen, de link in de
          e-mail brengt u rechtstreeks naar de juiste vragenlijst.
        </p>

        <h2>Beveiliging en privacy</h2>
        <p>
          Het patiëntenportaal wordt geleverd door <strong>Intramed</strong>,
          een gespecialiseerde leverancier voor de Nederlandse zorg. Het portaal
          voldoet aan de beveiligingseisen voor gezondheidsgegevens (NEN 7510)
          en de Algemene Verordening Gegevensbescherming (AVG). Alle gegevens
          worden versleuteld verstuurd en opgeslagen in Nederland.
        </p>
        <p>
          U verlaat deze website wanneer u op een van de knoppen klikt, u wordt
          doorgestuurd naar{" "}
          <code className="text-sm bg-[var(--muted-background)] px-1.5 py-0.5 rounded">
            importaal.intramedonline.nl
          </code>
          , de beveiligde omgeving van Intramed.
        </p>

        <h2>Hulp nodig?</h2>
        <p>
          Komt u er niet uit met inloggen of inschrijven? Of heeft u geen e-mail
          met de link voor uw vragenlijst ontvangen? Neem dan{" "}
          <Link href="/contact">contact</Link> met mij op via e-mail of het
          contactformulier.
        </p>

        <div className="mt-8 p-5 bg-[var(--muted-background)] border border-[var(--border)] rounded-lg">
          <h3 className="!mt-0 !mb-2 text-base flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Stuur geen wachtwoorden of medische informatie via e-mail
          </h3>
          <p className="!mb-0 text-sm text-[var(--muted)]">
            Inhoudelijke en gezondheidsgerelateerde gegevens horen uitsluitend
            in het beveiligde portaal of tijdens een afspraak , niet in een
            gewone e-mail.
          </p>
        </div>
      </article>
    </>
  );
}

function PortalAction({
  href,
  icon,
  title,
  description,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "group flex flex-col p-8 bg-[var(--accent-dark)] text-white rounded-xl hover:bg-[var(--accent)] transition-colors shadow-sm hover:shadow-md"
          : "group flex flex-col p-8 bg-white border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:shadow-md transition-all"
      }
    >
      <div
        className={
          primary
            ? "h-14 w-14 rounded-lg bg-white/15 flex items-center justify-center mb-5"
            : "h-14 w-14 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-dark)] flex items-center justify-center mb-5"
        }
      >
        {icon}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h2
          className={
            primary
              ? "!text-white text-2xl !font-serif !m-0"
              : "text-2xl !font-serif !m-0"
          }
        >
          {title}
        </h2>
        <ExternalLink
          className={
            primary
              ? "h-4 w-4 text-white/70 group-hover:text-white"
              : "h-4 w-4 text-[var(--muted)] group-hover:text-[var(--accent-dark)]"
          }
        />
      </div>
      <p
        className={
          primary
            ? "text-white/85 leading-relaxed"
            : "text-[var(--muted)] leading-relaxed"
        }
      >
        {description}
      </p>
      <div
        className={
          primary
            ? "mt-6 text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
            : "mt-6 text-sm font-medium text-[var(--accent-dark)] inline-flex items-center gap-2 group-hover:gap-3 transition-all"
        }
      >
        Open portaal
        <ClipboardList className="h-4 w-4" />
      </div>
    </a>
  );
}
