type PageBodyProps = {
    children: React.ReactNode;
    /** Inhoud voor de smalle kolom rechts (onder de tekst op kleine schermen). */
    aside?: React.ReactNode;
};

/** Lopende tekst van een inhoudspagina, links uitgelijnd met de paginakop. */
export function PageBody({ children, aside }: PageBodyProps) {
    return (
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:gap-16 lg:px-8">
            <article className="prose-content min-w-0">{children}</article>
            {aside && (
                <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">{aside}</aside>
            )}
        </div>
    );
}
