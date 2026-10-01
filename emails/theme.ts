/**
 * Kleuren en lettertypen voor de e-mail, gelijk aan die van de website.
 * Mailprogramma's kennen geen CSS-variabelen, dus alles staat hier als vaste waarde.
 */
export const emailTheme = {
    colors: {
        background: "#f4f7f3",
        cardBackground: "#ffffff",
        text: "#1b2422",
        muted: "#55625d",
        mutedBackground: "#e7eee8",
        accent: "#3f6b57",
        accentDark: "#1f3a34",
        accentSoft: "#dde8e0",
        border: "#cbd7ce",
        warningBg: "#fdf3e3",
        warningBorder: "#e2b06d",
        warningText: "#63400f",
    },
    fonts: {
        serif: "Georgia, 'Times New Roman', serif",
        sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    },
} as const;
