import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { emailTheme } from "./theme";

type ClientConfirmationEmailProps = {
    name: string;
    subject: string;
    message: string;
};

export function ClientConfirmationEmail({
    name = "Maria",
    subject = "Aanmelding voor intake",
    message = "Beste Siepie, ik zou graag een intakegesprek inplannen.",
}: ClientConfirmationEmailProps) {
    // First name only — feels personal but not familiar
    const firstName = name.split(" ")[0];

    return (
        <Html lang="nl">
            <Head />
            <Preview>
                Bedankt voor uw bericht — ik neem zo spoedig mogelijk contact met u op
            </Preview>
            <Body style={bodyStyle}>
                <Container style={containerStyle}>
                    {/* Header with Koru */}
                    <Section style={headerStyle}>
                        <Heading as="h1" style={brandStyle}>
                            GedachtenGoed
                        </Heading>
                        <Text style={brandSubStyle}>
                            Praktijk voor Psychotherapie
                        </Text>
                    </Section>

                    {/* Main card */}
                    <Section style={cardStyle}>
                        <Heading as="h2" style={titleStyle}>
                            Beste {firstName},
                        </Heading>

                        <Text style={paragraphStyle}>
                            Bedankt voor uw bericht. Ik heb uw aanvraag in goede
                            orde ontvangen en neem zo spoedig mogelijk contact
                            met u op — meestal binnen enkele werkdagen.
                        </Text>

                        <Text style={paragraphStyle}>
                            In dat eerste contact bespreken we kort uw vraag en
                            kunnen we samen nagaan of een intakegesprek bij mij
                            zinvol is.
                        </Text>

                        {/* Recap of their message */}
                        <Section style={recapBoxStyle}>
                            <Text style={recapLabelStyle}>Uw bericht</Text>
                            <Text style={recapSubjectStyle}>
                                Onderwerp: {subject}
                            </Text>
                            <Hr style={recapHrStyle} />
                            <Text style={recapMessageStyle}>{message}</Text>
                        </Section>

                        <Hr style={hrStyle} />

                        {/* Good to know */}
                        <Heading as="h3" style={subheadingStyle}>
                            Goed om te weten
                        </Heading>
                        <Text style={paragraphStyle}>
                            <strong style={strongStyle}>Wachttijd</strong>
                            <br />
                            De wachttijd voor nieuwe aanmeldingen is op dit
                            moment circa 12 weken. Actuele informatie vindt u
                            altijd op{" "}
                            <Link
                                href="https://gedachtengoedpsychotherapie.nl/aanmelden-en-werkwijze"
                                style={linkStyle}
                            >
                                de aanmeldpagina
                            </Link>
                            .
                        </Text>
                        <Text style={paragraphStyle}>
                            <strong style={strongStyle}>Verwijsbrief</strong>
                            <br />
                            Voor vergoeding via de zorgverzekering heeft u een
                            verwijsbrief van uw huisarts nodig. U mag deze later
                            aan mij doorsturen — die kan ook na het eerste
                            telefonisch contact.
                        </Text>

                        {/* Crisis notice */}
                        <Section style={crisisBoxStyle}>
                            <Text style={crisisLabelStyle}>
                                In geval van crisis
                            </Text>
                            <Text style={crisisTextStyle}>
                                Bevindt u zich in een acute crisis? Neem dan
                                contact op met uw huisarts of de
                                huisartsenpost. Voor 24/7 ondersteuning kunt u
                                terecht bij{" "}
                                <Link href="https://113.nl" style={crisisLinkStyle}>
                                    113.nl
                                </Link>{" "}
                                of bel <strong>0800-0113</strong>.
                            </Text>
                        </Section>

                        <Hr style={hrStyle} />

                        <Text style={signatureStyle}>
                            Met vriendelijke groet,
                        </Text>
                        <Text style={signatureNameStyle}>Siepie Zonderland</Text>
                        <Text style={signatureRoleStyle}>
                            GZ-Psycholoog & Psychotherapeut
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footerStyle}>
                        <Text style={footerBoldStyle}>
                            Praktijk voor Psychotherapie GedachtenGoed
                        </Text>
                        <Text style={footerTextStyle}>
                            Van Aelstlaan 79 · 5503 BC Veldhoven
                            <br />
                            <Link
                                href="mailto:GedachtenGoedPsychotherapie@gmail.com"
                                style={footerLinkStyle}
                            >
                                GedachtenGoedPsychotherapie@gmail.com
                            </Link>
                        </Text>
                        <Text style={footerTinyStyle}>
                            KVK 81310870 · AGB praktijk 94065990 · BIG-geregistreerd
                        </Text>
                        <Text style={footerTinyStyle}>
                            <Link
                                href="https://gedachtengoedpsychotherapie.nl/privacyverklaring"
                                style={footerLinkStyle}
                            >
                                Privacyverklaring
                            </Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default ClientConfirmationEmail;

// ── Styles ────────────────────────────────────────────────────────────────────

const bodyStyle = {
    backgroundColor: emailTheme.colors.background,
    fontFamily: emailTheme.fonts.sans,
    margin: 0,
    padding: "40px 20px",
};

const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
};

const headerStyle = {
    textAlign: "center" as const,
    padding: "24px 0 32px",
};

const brandStyle = {
    color: emailTheme.colors.accentDark,
    fontFamily: emailTheme.fonts.serif,
    fontSize: "30px",
    fontWeight: 400,
    margin: 0,
    letterSpacing: "0.02em",
};

const brandSubStyle = {
    color: emailTheme.colors.muted,
    fontSize: "13px",
    margin: "4px 0 0",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
};

const cardStyle = {
    backgroundColor: emailTheme.colors.cardBackground,
    border: `1px solid ${emailTheme.colors.border}`,
    borderRadius: "8px",
    padding: "40px 32px",
};

const titleStyle = {
    color: emailTheme.colors.accentDark,
    fontFamily: emailTheme.fonts.serif,
    fontSize: "26px",
    fontWeight: 400,
    margin: "0 0 24px",
    lineHeight: 1.3,
};

const subheadingStyle = {
    color: emailTheme.colors.accentDark,
    fontFamily: emailTheme.fonts.serif,
    fontSize: "18px",
    fontWeight: 400,
    margin: "8px 0 16px",
};

const paragraphStyle = {
    color: emailTheme.colors.text,
    fontSize: "15px",
    lineHeight: 1.7,
    margin: "0 0 16px",
};

const strongStyle = {
    color: emailTheme.colors.accentDark,
    fontWeight: 600,
};

const linkStyle = {
    color: emailTheme.colors.accentDark,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
};

const recapBoxStyle = {
    backgroundColor: emailTheme.colors.accentSoft,
    borderLeft: `3px solid ${emailTheme.colors.accent}`,
    borderRadius: "4px",
    padding: "20px 24px",
    margin: "24px 0",
};

const recapLabelStyle = {
    color: emailTheme.colors.accent,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    margin: "0 0 8px",
};

const recapSubjectStyle = {
    color: emailTheme.colors.accentDark,
    fontSize: "15px",
    fontWeight: 600,
    margin: "0",
    fontFamily: emailTheme.fonts.serif,
};

const recapHrStyle = {
    border: "none",
    borderTop: `1px solid ${emailTheme.colors.border}`,
    margin: "12px 0",
};

const recapMessageStyle = {
    color: emailTheme.colors.text,
    fontSize: "14px",
    lineHeight: 1.6,
    margin: 0,
    whiteSpace: "pre-wrap" as const,
    fontStyle: "italic" as const,
};

const hrStyle = {
    border: "none",
    borderTop: `1px solid ${emailTheme.colors.border}`,
    margin: "28px 0",
};

const crisisBoxStyle = {
    backgroundColor: emailTheme.colors.warningBg,
    border: `1px solid ${emailTheme.colors.warningBorder}`,
    borderRadius: "6px",
    padding: "16px 20px",
    margin: "20px 0 8px",
};

const crisisLabelStyle = {
    color: emailTheme.colors.warningText,
    fontSize: "13px",
    fontWeight: 600,
    margin: "0 0 6px",
};

const crisisTextStyle = {
    color: emailTheme.colors.warningText,
    fontSize: "13px",
    lineHeight: 1.6,
    margin: 0,
};

const crisisLinkStyle = {
    color: emailTheme.colors.warningText,
    textDecoration: "underline",
    fontWeight: 600,
};

const signatureStyle = {
    color: emailTheme.colors.text,
    fontSize: "15px",
    margin: "8px 0 4px",
};

const signatureNameStyle = {
    color: emailTheme.colors.accentDark,
    fontFamily: emailTheme.fonts.serif,
    fontSize: "20px",
    fontWeight: 400,
    margin: "8px 0 2px",
};

const signatureRoleStyle = {
    color: emailTheme.colors.muted,
    fontSize: "13px",
    fontStyle: "italic" as const,
    margin: 0,
};

const footerStyle = {
    textAlign: "center" as const,
    padding: "32px 16px 0",
};

const footerBoldStyle = {
    color: emailTheme.colors.accentDark,
    fontFamily: emailTheme.fonts.serif,
    fontSize: "14px",
    margin: "0 0 8px",
};

const footerTextStyle = {
    color: emailTheme.colors.muted,
    fontSize: "12px",
    lineHeight: 1.6,
    margin: "0 0 12px",
};

const footerTinyStyle = {
    color: emailTheme.colors.muted,
    fontSize: "11px",
    margin: "4px 0",
};

const footerLinkStyle = {
    color: emailTheme.colors.accentDark,
    textDecoration: "underline",
};
