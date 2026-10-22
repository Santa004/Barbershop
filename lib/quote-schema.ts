/** Delade definitioner för offertformuläret (används både i klient och server). */

export const URGENCY = [
  { value: "akut", label: "Maskinen står — akut" },
  { value: "dagar", label: "Inom några dagar" },
  { value: "planerad", label: "Planerad service" },
  { value: "pris", label: "Bara prisuppgift" },
] as const;

export type UrgencyValue = (typeof URGENCY)[number]["value"];

export type FieldName =
  | "galler"
  | "modell"
  | "serienummer"
  | "foretag"
  | "kontakt"
  | "telefon"
  | "epost"
  | "bradska"
  | "beskrivning";

export const FIELD_LABEL: Record<FieldName, string> = {
  galler: "Gäller",
  modell: "Maskinmodell",
  serienummer: "Serienummer",
  foretag: "Företag",
  kontakt: "Kontaktperson",
  telefon: "Telefon",
  epost: "E-post",
  bradska: "Hur bråttom är det?",
  beskrivning: "Beskriv felet eller behovet",
};

export type QuoteState = {
  status: "idle" | "success" | "invalid" | "unconfigured" | "failed";
  errors?: Partial<Record<FieldName, string>>;
  /** Mottagare som förfrågan skickades till. */
  sentTo?: string[];
  /** Ämne och brödtext, används för mailto-länken när e-post inte kan skickas. */
  mailto?: string;
  replyEmail?: string;
  submittedAt?: number;
};

export const INITIAL_QUOTE_STATE: QuoteState = { status: "idle" };
