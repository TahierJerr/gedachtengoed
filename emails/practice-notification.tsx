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

type PracticeNotificationEmailProps = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
};

export function PracticeNotificationEmail({
  name = "Maria Janssen",
  email = "maria@voorbeeld.nl",
  phone,
  subject = "Aanmelding voor intake",
  message = "Beste Siepie, ik zou graag een intakegesprek inplannen. Ik heb een verwijsbrief van mijn huisarts.",
  submittedAt = new Date().toLocaleString("nl-NL"),
}: PracticeNotificationEmailProps) {
  return (
    <Html lang="nl">
      <Head />
      <Preview>Nieuw bericht via het contactformulier van {name}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Heading as="h1" style={brandStyle}>
              GedachtenGoed
            </Heading>
            <Text style={brandSubStyle}>Praktijk voor Psychotherapie</Text>
          </Section>

          {/* Card */}
          <Section style={cardStyle}>
            <Heading as="h2" style={titleStyle}>
              Nieuw bericht via contactformulier
            </Heading>
            <Text style={paragraphStyle}>
              Er is een nieuw bericht binnengekomen via het contactformulier op
              de website.
            </Text>

            <Hr style={hrStyle} />

            {/* Sender details,  labeled rows */}
            <DetailRow label="Naam" value={name} />
            <DetailRow label="E-mail" value={email} isEmail />
            {phone && <DetailRow label="Telefoon" value={phone} isPhone />}
            <DetailRow label="Onderwerp" value={subject} />
            <DetailRow label="Verstuurd" value={submittedAt} />

            <Hr style={hrStyle} />

            {/* Message */}
            <Text style={messageLabelStyle}>Bericht</Text>
            <Section style={messageBoxStyle}>
              <Text style={messageTextStyle}>{message}</Text>
            </Section>

            <Hr style={hrStyle} />

            {/* Action hint */}
            <Text style={actionHintStyle}>
              U kunt direct antwoorden op deze e-mail, uw reactie gaat naar het
              opgegeven adres van de verzender.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Dit bericht is automatisch verstuurd vanaf het contactformulier
              van{" "}
              <Link
                href="https://gedachtengoedpsychotherapie.nl"
                style={footerLinkStyle}
              >
                gedachtengoedpsychotherapie.nl
              </Link>
            </Text>
            <Text style={footerTextStyle}>
              Verstuurd via Resend · Niet opgeslagen in een database
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function DetailRow({
  label,
  value,
  isEmail,
  isPhone,
}: {
  label: string;
  value: string;
  isEmail?: boolean;
  isPhone?: boolean;
}) {
  return (
    <Section style={detailRowStyle}>
      <Text style={detailLabelStyle}>{label}</Text>
      {isEmail ? (
        <Link href={`mailto:${value}`} style={detailLinkStyle}>
          {value}
        </Link>
      ) : isPhone ? (
        <Link href={`tel:${value.replace(/\s/g, "")}`} style={detailLinkStyle}>
          {value}
        </Link>
      ) : (
        <Text style={detailValueStyle}>{value}</Text>
      )}
    </Section>
  );
}

export default PracticeNotificationEmail;

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
  fontSize: "28px",
  fontWeight: 400,
  margin: 0,
  letterSpacing: "0.02em",
};

const brandSubStyle = {
  color: emailTheme.colors.muted,
  fontSize: "13px",
  margin: "4px 0 0",
  letterSpacing: "0.1em",
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
  fontSize: "24px",
  fontWeight: 400,
  margin: "0 0 16px",
  lineHeight: 1.3,
};

const paragraphStyle = {
  color: emailTheme.colors.text,
  fontSize: "15px",
  lineHeight: 1.6,
  margin: "0 0 8px",
};

const hrStyle = {
  border: "none",
  borderTop: `1px solid ${emailTheme.colors.border}`,
  margin: "28px 0",
};

const detailRowStyle = {
  marginBottom: "16px",
};

const detailLabelStyle = {
  color: emailTheme.colors.accent,
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const detailValueStyle = {
  color: emailTheme.colors.text,
  fontSize: "16px",
  margin: 0,
  lineHeight: 1.4,
};

const detailLinkStyle = {
  color: emailTheme.colors.accentDark,
  fontSize: "16px",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

const messageLabelStyle = {
  color: emailTheme.colors.accent,
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  margin: "0 0 8px",
};

const messageBoxStyle = {
  backgroundColor: emailTheme.colors.accentSoft,
  borderLeft: `3px solid ${emailTheme.colors.accent}`,
  borderRadius: "4px",
  padding: "16px 20px",
};

const messageTextStyle = {
  color: emailTheme.colors.text,
  fontSize: "15px",
  lineHeight: 1.6,
  margin: 0,
  whiteSpace: "pre-wrap" as const,
};

const actionHintStyle = {
  color: emailTheme.colors.muted,
  fontSize: "13px",
  fontStyle: "italic" as const,
  margin: "16px 0 0",
};

const footerStyle = {
  textAlign: "center" as const,
  padding: "24px 0 0",
};

const footerTextStyle = {
  color: emailTheme.colors.muted,
  fontSize: "12px",
  lineHeight: 1.5,
  margin: "4px 0",
};

const footerLinkStyle = {
  color: emailTheme.colors.accentDark,
  textDecoration: "underline",
};
