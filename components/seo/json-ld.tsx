/**
 * Renders a JSON-LD <script> tag in the page head/body.
 * Server component — emits as static HTML, no client JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
    return (
        <script
            type="application/ld+json"
            // dangerouslySetInnerHTML is the standard way to inject JSON-LD in Next.js
            // and is safe here because we only stringify our own typed objects
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
