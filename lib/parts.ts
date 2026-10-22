/**
 * RESERVDELAR
 *
 * n = artikelnamn, t = modellgrupper (styr filterchipsen), s = status, a = artikelnummer.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ ARTIKELNUMMER: fältet `a` nedan är tillfälliga nummer.               │
 * │ Byt dem mot kundens riktiga artikelnummer direkt i listan.           │
 * │ Bildfilen för varje artikel heter <a i gemener>.jpg och ligger i     │
 * │ public/bilder/delar/ – byter du nummer, byt även namn på bilden.     │
 * │                                                                      │
 * │ PRISER: lägg till fältet `pris`, t.ex. pris: "4 900 kr exkl. moms",  │
 * │ så visas priset på kortet. Utan pris visas bara "Begär offert".      │
 * └──────────────────────────────────────────────────────────────────────┘
 */

export type PartStatus = "lager" | "nytillverkad" | "renoverad" | "ny";

export type Part = {
  n: string;
  t: string[];
  s: PartStatus;
  a: string;
  pris?: string;
};

export const PARTS: Part[] = [
 {n:"Atlas Copco COP 1838HE", t:["Hammare"], s:"renoverad", a:"COP-1838HE"},
 {n:"Atlas Copco COP 1238", t:["Hammare"], s:"renoverad", a:"COP-1238"},
 {n:"Diverse slitdelar till Atlas-hammare", t:["Hammare"], s:"lager", a:"SLIT-ATL"},
 {n:"Medbringare till flertalet hammarmodeller", t:["Hammare"], s:"lager", a:"MEDB-UNI"},
 {n:"5″ sugfot till ROC D5/D7/D9", t:["ROC D5/D7/D9"], s:"lager", a:"SUG-5-D579"},
 {n:"Urspårningsskydd till tidiga ROC D5/D7 med rundbom", t:["ROC D5/D7/D9"], s:"nytillverkad", a:"URSP-D57R"},
 {n:"Urspårningsskydd till ROC T35/T40", t:["ROC T35/T40"], s:"nytillverkad", a:"URSP-T3540"},
 {n:"Karusellstång/axel till D5/D7/D9/T35/T40", t:["ROC D5/D7/D9","ROC T35/T40"], s:"nytillverkad", a:"KARU-AXEL"},
 {n:"Nytillverkad bananlänk till ROC D5/D7/D9/T35/T40", t:["ROC D5/D7/D9","ROC T35/T40"], s:"nytillverkad", a:"BANA-LANK"},
 {n:"Borrmaskinsslädar i stål, Atlas Copco/Epiroc D5/D7/D9/T35/T40", t:["ROC D5/D7/D9","ROC T35/T40"], s:"nytillverkad", a:"SLAD-STAL"},
 {n:"Larvband D3/T30", t:["ROC D3/T30"], s:"lager", a:"LARV-D3T30"},
 {n:"Styrningssats TAC56 till lilla borrstödet, D3/T30", t:["ROC D3/T30"], s:"lager", a:"TAC56-STYR"},
 {n:"Radiolåda + mottagare till Sandvik DC302", t:["Sandvik"], s:"lager", a:"RAD-DC302"},
 {n:"Radiolåda till Sandvik DC122", t:["Sandvik"], s:"ny", a:"RAD-DC122"},
 {n:"Nyrenoverad kedjespännare till ROC 512HC/542HC", t:["ROC 512/542HC"], s:"renoverad", a:"KEDJ-512HC"},
 {n:"Nyrenoverad matarväxel till Atlas Copco ROC 512 HC", t:["ROC 512/542HC"], s:"renoverad", a:"MATV-512HC"},
 {n:"Nytillverkad DCT-kona / utloppssektion", t:["Övrigt"], s:"nytillverkad", a:"DCT-KONA"},
 {n:"Nytillverkad föravskiljare, lilla modellen", t:["Övrigt"], s:"nytillverkad", a:"FORA-LITEN"},
 {n:"Renoveringskit för stora borrstödet", t:["Övrigt"], s:"lager", a:"RENO-BSTOD"},
 {n:"Diverse luckor till borrvagn", t:["Övrigt"], s:"lager", a:"LUCK-DIV"},
 {n:"Gummipackningar till div. maskiner", t:["Övrigt"], s:"lager", a:"PACK-GUMMI"},
 {n:"Rototilt", t:["Övrigt"], s:"lager", a:"ROTO-TILT"},
 {n:"Transtronic Phone S09 rugged med mjukvara", t:["Övrigt"], s:"ny", a:"TRANS-S09"}
];

export const PART_FILTERS = [
  "Alla",
  "Hammare",
  "ROC D5/D7/D9",
  "ROC T35/T40",
  "ROC D3/T30",
  "ROC 512/542HC",
  "Sandvik",
  "Övrigt",
] as const;

export const STATUS_LABEL: Record<PartStatus, { label: string; tone: "ok" | "warn" }> = {
  lager: { label: "I lager", tone: "ok" },
  nytillverkad: { label: "Nytillverkad", tone: "ok" },
  renoverad: { label: "Nyrenoverad", tone: "warn" },
  ny: { label: "Ny vara", tone: "ok" },
};

/** Filnamn (utan ändelse) för artikelns bild i public/bilder/delar/. */
export function partSlug(p: Part): string {
  return p.a.toLowerCase();
}
