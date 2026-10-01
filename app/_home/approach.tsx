import Link from "next/link";
import { therapies } from "@/lib/therapies";

export function Approach() {
    return (
        <section className="bg-accent-dark text-[#d5e2da]">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8">
                <div>
                    <h2 className="text-3xl text-white sm:text-4xl">
                        Elke behandeling is maatwerk
                    </h2>
                    <p className="mt-6 font-serif text-lg leading-[1.8]">
                        Ik werk persoonsgericht, waarbij de ontwikkeling van de persoon als geheel
                        centraal staat: echt contact aangaan, niet (ver)oordelend, betrokken en
                        empathisch. Ieder mens is immers uniek, vanuit een basis gevormd door
                        ervaringen.
                    </p>
                    <p className="mt-4">
                        De praktijk biedt integratieve psychotherapie. De therapie wordt op u, uw
                        hulpvraag en het klachtenbeeld afgestemd, met een combinatie van methoden
                        uit verschillende therapiestromingen.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/behandelaanbod" className="btn btn-light">
                            Bekijk het behandelaanbod
                        </Link>
                    </div>
                </div>
                <ul className="divide-y divide-white/15 border-y border-white/15">
                    {therapies.map((therapy) => (
                        <li key={therapy.title} className="py-4">
                            <h3 className="text-xl text-white">{therapy.title}</h3>
                            <p className="mt-1 text-[0.975rem]">{therapy.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
