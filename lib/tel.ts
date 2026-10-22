/** Gör om ett visningsnummer ("070-657 40 90", "+47 38 32 04 20") till en tel:-länk utan mellanslag. */
export function toTelHref(display: string): string {
  const digits = display.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return `tel:${digits}`;
  if (digits.startsWith("0")) return `tel:+46${digits.slice(1)}`;
  return `tel:${digits}`;
}
