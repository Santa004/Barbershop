/**
 * Personal. Fältet `tel` är valfritt – fyll i ett direktnummer
 * (t.ex. tel: "070-123 45 67") så visas det som klickbar länk.
 */
export type Person = { name: string; role: string; email: string; tel?: string };

export const PEOPLE: Person[] = [
  { name: "Jonas", role: "VD · Säljare · Teknisk support", email: "jonas@mp-entreprenad.se" },
  { name: "Jesper", role: "Vice VD · Säljare · Teknisk support", email: "jesper@mp-entreprenad.se" },
  { name: "Kicki", role: "Reservdelsansvarig", email: "kicki@mp-entreprenad.se" },
  { name: "Lovisa", role: "Ekonomiansvarig", email: "lovisa@mp-entreprenad.se" },
  { name: "Sebastian", role: "Mekaniker", email: "basse@mp-entreprenad.se" },
  { name: "Dennis", role: "Mekaniker", email: "dennis@mp-entreprenad.se" },
  { name: "Michael", role: "Grundare · Konsult", email: "michael@mp-entreprenad.se" },
];
