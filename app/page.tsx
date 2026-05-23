import Link from "next/link";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Koru } from "@/components/site/koru";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--accent-soft)] via-[var(--background)] to-[var(--muted-background)] overflow-hidden">
        <div className="absolute top-12 right-8 lg:right-24 opacity-10 pointer-events-none">
          <Koru size={400} className="text-[var(--accent-dark)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-6 font-medium">
              Professionele psychotherapie op maat
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--accent-dark)] mb-6 leading-[1.15]">
              Praktijk voor Psychotherapie GedachtenGoed
            </h1>
            <p className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed mb-8 max-w-2xl">
              Een kleinschalige praktijk in Veldhoven die psychotherapeutische
              hulp biedt voor volwassenen, gericht op verandering, herstel en
              persoonlijke groei, in een persoonlijke setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-[var(--accent-dark)] text-white font-medium hover:bg-[var(--accent)] transition-colors gap-2"
              >
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/behandelaanbod"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-[var(--accent-dark)] text-[var(--accent-dark)] font-medium hover:bg-[var(--accent-soft)] transition-colors"
              >
                Bekijk behandelaanbod
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome block */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            <div className="flex md:flex-col items-center gap-4 mx-auto md:mx-0">
              <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[var(--accent-soft)] flex items-center justify-center shrink-0">
                <Image
                  src="/Siepie_2.jpg"
                  alt="Foto van Siepie Zonderland"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-center">
                <div className="font-serif text-lg text-[var(--accent-dark)]">
                  Siepie Zonderland
                </div>
                <div className="text-xs text-[var(--muted)]">
                  GZ-Psycholoog & Psychotherapeut
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-[var(--accent-dark)] mb-5">
                Wat goed dat u de eerste stap heeft gezet
              </h2>
              <p className="text-base leading-relaxed text-[var(--foreground)] mb-4">
                <strong>
                  De stap om hulp te vragen is voor veel mensen spannend, maar
                  zeker de moeite waard.
                </strong>
              </p>
              <p className="text-base leading-relaxed text-[var(--foreground)] mb-4">
                Mijn naam is Siepie Zonderland en ik ben BIG-geregistreerd
                GZ-Psycholoog en Psychotherapeut. Ik bied psychotherapeutische
                hulp voor volwassenen, gericht op verandering, herstel en
                persoonlijke groei.
              </p>
              <p className="text-base leading-relaxed text-[var(--foreground)] mb-6">
                Kijk gerust rond op de website om een indruk te krijgen van mijn
                praktijk, visie en behandelaanbod. U kunt contact opnemen als u
                vragen heeft of als u zich wilt aanmelden.
              </p>
              <Link
                href="/psychotherapeut"
                className="inline-flex items-center gap-1 text-[var(--accent-dark)] font-medium hover:gap-2 transition-all"
              >
                Meer over mij
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote block */}
      <section className="bg-[var(--muted-background)] py-16 sm:py-20 border-y border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-serif text-[var(--accent-dark)] leading-relaxed">
            Psychotherapie is de eerst aangewezen keuze bij behandeling van
            angst-, stemmings-, trauma- en persoonlijkheidsproblematiek. Wanneer
            klachten hardnekkig of terugkerend zijn, kan Psychotherapie hulp
            bieden.
          </p>
        </div>
      </section>

      {/* Three cards */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Heart className="h-6 w-6" />}
              title="Mijn behandelvisie"
              description="Persoonsgericht werken waarbij ontwikkeling van de persoon als geheel centraal staat. Echt contact, niet veroordelend, betrokken en empathisch."
              href="/behandelvisie"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Behandelaanbod"
              description="Integratieve psychotherapie afgestemd op u en uw hulpvraag. CGT, schematherapie, EFT, EMDR, NET en persoonsgerichte therapie."
              href="/behandelaanbod"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Aanmelden"
              description="Aanmelden gaat via het contactformulier. Wachttijd actueel circa 12 weken. U heeft een verwijsbrief van uw huisarts nodig."
              href="/aanmelden-en-werkwijze"
            />
          </div>
        </div>
      </section>

      {/* Patient portal CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--accent-soft)] border border-[var(--accent)] rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-2 font-medium">
                Reeds cliënt of nieuw?
              </div>
              <h2 className="text-2xl font-serif text-[var(--accent-dark)] mb-2">
                Patiëntenportaal
              </h2>
              <p className="text-[var(--foreground)] leading-relaxed max-w-xl">
                Schrijf u in, log in op uw dossier of vul een vragenlijst in via
                het beveiligde portaal van Intramed.
              </p>
            </div>
            <Link
              href="/patientenportaal"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-[var(--accent-dark)] text-white font-medium hover:bg-[var(--accent)] transition-colors gap-2 shrink-0"
            >
              Naar het portaal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[var(--border)] rounded-xl p-7 hover:border-[var(--accent)] hover:shadow-md transition-all"
    >
      <div className="h-12 w-12 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent-dark)] mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-[var(--accent-dark)] mb-3">
        {title}
      </h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-[var(--accent-dark)] text-sm font-medium group-hover:gap-2 transition-all">
        Lees verder
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
