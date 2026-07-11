import type { Review } from "@/types";
import { siteConfig } from "@/content/site";

/** Recensioner från befintlig Bokahit/schema-källa – inga påhittade citat. */
export const reviews: Review[] = [
  {
    id: "jonatan-andersson",
    quote: "Duktiga och trevliga – precis den upplevelse man vill ha på en barbershop.",
    author: "Jonatan Andersson",
    location: "Kisa",
    source: "Bokahit",
    sourceUrl: siteConfig.bookingUrl,
  },
  {
    id: "maria-l",
    quote: "Trevliga, duktiga, bra priser. Kommer definitivt tillbaka.",
    author: "Maria L.",
    location: "Kisa",
    source: "Bokahit",
    sourceUrl: siteConfig.bookingUrl,
  },
];
