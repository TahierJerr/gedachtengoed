/** NZa-tarieven 2026 voor de meest gebruikte consulten. Jaarlijks bijwerken. */
export const ratesYear = 2026;

export const rates = [
    { code: "C00570", desc: "Diagnostiek / intakegesprek 60 min", price: "€ 231,50" },
    { code: "C00505", desc: "Behandelsessie 45 min", price: "€ 172,85" },
    { code: "C00635", desc: "Behandelsessie 60 min", price: "€ 205,96" },
    { code: "OV0007", desc: "Intercollegiaal overleg (kort > 5 min)", price: "€ 32,50" },
    { code: "OV0008", desc: "Intercollegiaal overleg (lang > 15 min)", price: "€ 93,60" },
] as const;
