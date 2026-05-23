type KoruProps = {
    className?: string;
    size?: number;
};

export function Koru({ className, size = 40 }: KoruProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={className}
            aria-hidden="true"
            role="img"
        >
            <path
                d="M 50 12 C 70 12, 85 28, 85 50 C 85 70, 70 85, 50 85 C 35 85, 22 73, 22 58 C 22 45, 32 35, 45 35 C 55 35, 63 43, 63 53 C 63 60, 57 66, 50 66 C 45 66, 41 62, 41 57 C 41 54, 43 52, 46 52"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
