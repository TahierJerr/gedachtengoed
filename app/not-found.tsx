import Link from "next/link";
import { Koru } from "@/components/site/koru";

export default function NotFound() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
            <div className="text-center max-w-md">
                <Koru
                    size={80}
                    className="text-[var(--accent-dark)] mx-auto mb-6 opacity-50"
                />
                <h1 className="text-5xl font-serif text-[var(--accent-dark)] mb-3">
                    404
                </h1>
                <p className="text-lg text-[var(--foreground)] mb-2">
                    Deze pagina kon ik niet vinden.
                </p>
                <p className="text-sm text-[var(--muted)] mb-8">
                    De pagina die u zoekt bestaat niet of is verplaatst.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-[var(--accent-dark)] text-white font-medium hover:bg-[var(--accent)] transition-colors"
                >
                    Terug naar de homepage
                </Link>
            </div>
        </section>
    );
}
