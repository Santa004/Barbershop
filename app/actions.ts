"use server";

import { Resend } from "resend";
import { FIELD_LABEL, URGENCY, type FieldName, type QuoteState } from "@/lib/quote-schema";
import { SITE } from "@/lib/site";

const MAX: Record<FieldName, number> = {
  galler: 200,
  modell: 120,
  serienummer: 80,
  foretag: 160,
  kontakt: 120,
  telefon: 40,
  epost: 200,
  bradska: 20,
  beskrivning: 5000,
};

const REQUIRED_MSG: Partial<Record<FieldName, string>> = {
  galler: "Skriv vad förfrågan gäller, t.ex. en reservdel eller service på en maskin.",
  foretag: "Skriv vilket företag du kontaktar oss från.",
  kontakt: "Skriv namnet på kontaktpersonen.",
  telefon: "Skriv ett telefonnummer så vi kan nå dig.",
  epost: "Skriv en e-postadress så vi kan svara dig.",
};
const REQUIRED = Object.keys(REQUIRED_MSG) as FieldName[];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{6,}$/;

function read(formData: FormData, name: FieldName): string {
  const v = formData.get(name);
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Honeypot: riktiga besökare ser aldrig fältet. Fylls det i låtsas vi att allt gick bra.
  const honeypot = formData.get("webbplats");
  if (typeof honeypot === "string" && honeypot.trim()) {
    return { status: "success", sentTo: [SITE.orderEmail], submittedAt: Date.now() };
  }

  const v = {} as Record<FieldName, string>;
  for (const key of Object.keys(FIELD_LABEL) as FieldName[]) v[key] = read(formData, key).slice(0, MAX[key]);

  const errors: Partial<Record<FieldName, string>> = {};
  for (const key of REQUIRED) {
    if (!v[key]) errors[key] = REQUIRED_MSG[key];
  }
  if (v.epost && !EMAIL_RE.test(v.epost)) errors.epost = "E-postadressen ser inte ut att stämma, t.ex. namn@foretag.se.";
  if (v.telefon && !PHONE_RE.test(v.telefon)) errors.telefon = "Ange ett telefonnummer med siffror, t.ex. 070-123 45 67.";

  const urgency = URGENCY.find((u) => u.value === v.bradska) ?? URGENCY[1];

  if (Object.keys(errors).length) return { status: "invalid", errors };

  const akut = urgency.value === "akut";
  const to = akut ? [SITE.orderEmail, SITE.infoEmail] : [SITE.orderEmail];
  const subject = `Webbförfrågan: ${v.galler}`;

  const rows: [string, string][] = [
    ["Gäller", v.galler],
    ["Maskinmodell", v.modell || "–"],
    ["Serienummer", v.serienummer || "–"],
    ["Företag", v.foretag],
    ["Kontaktperson", v.kontakt],
    ["Telefon", v.telefon],
    ["E-post", v.epost],
    ["Brådska", urgency.label],
  ];
  const text = [...rows.map(([k, val]) => `${k}: ${val}`), "", "Beskrivning:", v.beskrivning || "–"].join("\n");

  const mailto = `mailto:${to.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "unconfigured", mailto, replyEmail: v.epost };
  }

  const html = `<!doctype html><html lang="sv"><body style="font-family:Arial,sans-serif;color:#15181a">
<h2 style="margin:0 0 12px">${akut ? "AKUT – maskinen står<br>" : ""}${escapeHtml(subject)}</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, val]) =>
        `<tr><th align="left" style="border-bottom:1px solid #d6d8d5;color:#5a6066;font-weight:normal">${k}</th><td style="border-bottom:1px solid #d6d8d5"><strong>${escapeHtml(val)}</strong></td></tr>`,
    )
    .join("")}</table>
<h3 style="margin:18px 0 6px">Beskrivning</h3>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(v.beskrivning || "–")}</p>
<p style="margin-top:24px;color:#5a6066;font-size:13px">Skickat via formuläret på webbplatsen. Svara direkt på det här mejlet för att svara kunden.</p>
</body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "MP Entreprenad webbformulär <onboarding@resend.dev>",
      to,
      replyTo: v.epost,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("Resend-fel:", error);
      return { status: "failed", mailto, replyEmail: v.epost };
    }
  } catch (err) {
    console.error("Kunde inte skicka förfrågan:", err);
    return { status: "failed", mailto, replyEmail: v.epost };
  }

  return { status: "success", sentTo: to, replyEmail: v.epost, submittedAt: Date.now() };
}
