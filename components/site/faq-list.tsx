import { ChevronDown } from "lucide-react";

type FaqListProps = {
    items: readonly { question: string; answer: string }[];
};

/** Uitklapbare vragen met <details>, zodat ze ook zonder JavaScript werken. */
export function FaqList({ items }: FaqListProps) {
    return (
        <div className="border-t border-border font-sans">
            {items.map((item) => (
                <details key={item.question} className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-accent-dark [&::-webkit-details-marker]:hidden">
                        {item.question}
                        <ChevronDown
                            className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                            aria-hidden="true"
                        />
                    </summary>
                    <p className="!mb-5 text-[1.0625rem] leading-relaxed">{item.answer}</p>
                </details>
            ))}
        </div>
    );
}
