type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Zet gestructureerde data (JSON-LD) in de pagina. Server component: geen client-JS.
 * `<` wordt ge-escaped zodat de inhoud nooit een script-tag kan afsluiten.
 */
export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
