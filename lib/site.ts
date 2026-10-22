/**
 * Företagsuppgifter som används på hela sajten.
 * Värden inom {HAKPARENTES} är platshållare som kunden fyller i.
 */
export const SITE = {
  name: "MP Entreprenad Service Borås AB",
  shortName: "MP Entreprenad",
  phoneDisplay: "033-10 82 63",
  phoneTel: "+4633108263",
  orderEmail: "order@mp-entreprenad.se",
  infoEmail: "info@mp-entreprenad.se",
  street: "Maskingatan 5",
  postalCode: "504 62",
  city: "Borås",
  country: "SE",
  /** Organisationsnummer – fylls i av kunden. */
  orgNr: "{ORGNR – fylls i av kunden}",
  hours: "Vardagar 7–16",
  /**
   * Ungefärliga koordinater för Ramnaslätt, Borås.
   * Verifiera mot exakt position för Maskingatan 5 innan lansering.
   */
  geo: { latitude: 57.704, longitude: 12.973 },
  facebook: "https://www.facebook.com/mpentreprenad/",
  instagram: "https://www.instagram.com/mpentrserviceborasab/",
} as const;

export const ADDRESS_LINE = `${SITE.street}, ${SITE.postalCode} ${SITE.city}`;

export const MAPS_QUERY = encodeURIComponent(`${SITE.street}, ${SITE.postalCode} ${SITE.city}`);
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

/** Sajtens publika adress. Styrs av NEXT_PUBLIC_SITE_URL, annars Vercels produktionsadress. */
export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://mp-entreprenad.se";
}
