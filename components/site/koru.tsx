import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type KoruProps = {
    className?: string;
    size?: number;
    style?: CSSProperties;
};

const SPIRAL =
    "M 79 97 C 99 66, 88 22, 51 21 C 25 21, 13 46, 25 64 C 35 79, 60 77, 64 59 C 67 47, 56 39, 47 44";

/**
 * Het beeldmerk van de praktijk: een koru (opgerolde varen) in een volle schijf.
 * De schijf neemt de tekstkleur over, de spiraal is uitgespaard in `--koru-cutout`.
 */
export function Koru({ className, size = 40, style }: KoruProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={cn("shrink-0", className)}
            style={style}
            aria-hidden="true"
        >
            <circle cx="50" cy="50" r="50" fill="currentColor" />
            <path
                d={SPIRAL}
                fill="none"
                stroke="var(--koru-cutout, #ffffff)"
                strokeWidth="9"
                strokeLinecap="round"
            />
            <circle cx="46" cy="46" r="7.5" fill="var(--koru-cutout, #ffffff)" />
        </svg>
    );
}
