import { siteConfig } from "./site-config";

/** Veelgestelde vragen over aanmelden. Zichtbaar op de pagina én als FAQ-schema. */
export const signupFaq = [
    {
        question: "Hoe meld ik mij aan bij de praktijk?",
        answer: "U kunt zich via het contactformulier op deze website aanmelden. Daarna neem ik vrijblijvend telefonisch contact met u op voor een eerste kennismaking. Als verdere intake zinvol is, plannen we een afspraak in.",
    },
    {
        question: "Wat is de actuele wachttijd?",
        answer: `De wachttijd voor nieuwe aanmeldingen is momenteel circa ${siteConfig.waitingTime.weeks} weken. De wachttijd is onafhankelijk van diagnosegroep, behandelsoort en zorgverzekeraar.`,
    },
    {
        question: "Heb ik een verwijzing van de huisarts nodig?",
        answer: "Ja, voor vergoeding via de zorgverzekering is een verwijsbrief van de huisarts nodig. In de brief staan onder andere de datum, de gegevens van de verwijzer, uw gegevens, de reden van verwijzing en de vermoedelijke DSM-V-diagnose.",
    },
    {
        question: "Waaruit bestaat de intakefase?",
        answer: "De intakefase bestaat uit 2 tot 3 gesprekken waarin uw klachten, hulpvraag en levensgeschiedenis in kaart worden gebracht. Ook kunnen vragenlijsten worden afgenomen. Daarna volgt een adviesgesprek waarin tot psychotherapie of doorverwijzing wordt besloten.",
    },
    {
        question: "Wat als ik in crisis ben?",
        answer: `De praktijk heeft geen faciliteiten voor crisisopvang. Bij crisis buiten kantoortijden neemt u contact op met uw huisarts of de huisartsenpost. Voor directe ondersteuning kunt u bellen of chatten met ${siteConfig.crisis.name} via ${siteConfig.crisis.phone} (dag en nacht bereikbaar).`,
    },
] as const;
