type PageHeroProps = {
    eyebrow?: string;
    title: string;
    intro?: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
    return (
        <section className="bg-accent-soft border-b border-border">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {eyebrow && (
                    <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                        {eyebrow}
                    </div>
                )}
                <h1 className="text-4xl sm:text-5xl font-serif text-accent-dark mb-4">
                    {title}
                </h1>
                {intro && (
                    <p className="text-lg text-foreground leading-relaxed max-w-2xl">
                        {intro}
                    </p>
                )}
            </div>
        </section>
    );
}
