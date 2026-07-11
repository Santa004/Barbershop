import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kisa Barbershop",
  tagline: "Precision i varje klippning.",
  description:
    "Barbershop på Kisa torget. Herrklippning, fade och skäggtrimning med personlig service. Boka tid enkelt via Bokahit.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barbershop-cyan-eta.vercel.app",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://bokahit.se/barber-main-page/790205074",
  phone: "079-020 50 74",
  phoneLink: "tel:+46790205074",
  address: {
    street: "Kisa torget",
    postalCode: "590 37",
    city: "Kisa",
    region: "Östergötland",
    country: "SE",
  },
  geo: {
    latitude: 57.987343,
    longitude: 15.632519,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kisa+torget+590+37+Kisa",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=57.987343,15.632519&hl=sv&z=16&output=embed",
  instagram: "https://www.instagram.com/kisabarbershop",
  openingHours: [
    { label: "Måndag–Fredag", value: "10:00–18:00" },
    { label: "Lördag–Söndag", value: "Stängt" },
  ],
  cancellationPolicy:
    "Avboka eller omboka via Bokahit. Vi rekommenderar minst 24 timmar i förväg om du inte kan komma.",
};

export const owner = {
  name: "Mero",
  title: "Ägare & barberare",
} as const;

export const heroContent = {
  label: "Barbershop på Kisa torget",
  headline: "Precision i varje klippning.",
  subheadline:
    "Klippning, fade och skäggtrimning med personlig service mitt i Kisa.",
  hours: "Mån–fre 10:00–18:00",
} as const;

export const trustHighlights = [
  "Centralt på Kisa torget",
  "Tydliga priser",
  "Enkel bokning via Bokahit",
  "Kort eller Swish i salongen",
] as const;

export const navigation = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Boka tid", href: "/boka" },
] as const;

export const images = {
  logo: "/images/logo-kisa-barbershop.svg",
  favicon: "/images/63b872b83e5783fdd64cdc32_Favicon.svg",
  hero: "/images/6352b63fc9635f6969ca8f39_Home-barbershop-x.jpg",
  interior: "/images/6352caffe6a8ab6bbcae3ce2_Left-Image-Barbershop.jpg",
  barberPhoto:
    "https://mybarberblob.blob.core.windows.net/barberspics/531cf30f-194c-42bf-8359-7eb8bb60afcf_barber_26.jpg",
  og: "/images/63866f937eb4aab9ca431e06_featured-image-barber-webflow-ecommerce-template.png",
} as const;
