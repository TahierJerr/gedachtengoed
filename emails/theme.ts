/**
 * Design tokens for emails,  mirror the website's CSS custom properties.
 * Email clients don't support CSS variables, so everything is inlined.
 */
export const emailTheme = {
  colors: {
    background: "#faf8f4",
    cardBackground: "#ffffff",
    text: "#2a2e2c",
    muted: "#6b716e",
    mutedBackground: "#f0ece4",
    accent: "#5b7a6a",
    accentDark: "#3f574a",
    accentSoft: "#e3ebe5",
    border: "#d9d3c7",
    warningBg: "#fef3e6",
    warningBorder: "#e8b87a",
    warningText: "#6b4416",
  },
  fonts: {
    serif: "Georgia, 'Times New Roman', serif",
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
} as const;
