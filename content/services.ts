import type { Service } from "@/types";

const icon = (file: string) => `/images/${file}`;

export const services: Service[] = [
  {
    id: "herrklippning",
    name: "Herrklippning",
    description:
      "Klassisk eller modern klippning anpassad efter din huvudform och stil. Inkluderar lättare styling.",
    duration: "20 min",
    price: "380 kr",
    icon: icon(
      "63862eaff96ecdf8025493ea_classic-haircut-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "skaggtrimning",
    name: "Skäggtrimning",
    description:
      "Formning och trimning av skägget med maskin och sax. Avslutas med vårdande skäggolja.",
    duration: "20 min",
    price: "220 kr",
    icon: icon(
      "63862eaf785a2ef90f1cabf3_beard-trim-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "barn-0-10",
    name: "Barnklippning 0–10 år",
    description:
      "En trygg och snabb klippning för de yngsta på deras egna villkor.",
    duration: "20 min",
    price: "300 kr",
    icon: icon(
      "63862eb0fc1ac2a331a28242_kids-haircut-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "barn-11-15",
    name: "Barnklippning 11–15 år",
    description:
      "Stilig klippning för ungdomar – vi anpassar tempo och stil efter önskemål.",
    duration: "20 min",
    price: "350 kr",
    icon: icon(
      "63862eb0fc1ac2a331a28242_kids-haircut-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "rakning",
    name: "Rakning med maskin",
    description:
      "Skonsam och noggrann rakning med maskin för en slät och välvårdad finish.",
    duration: "20 min",
    price: "220 kr",
    icon: icon(
      "63862eaf971e1c6a341257c4_neck-shave-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "harvattt",
    name: "Hårtvätt & styling",
    description:
      "Uppfriskande tvätt och styling som ger ditt hår den perfekta finish efter klippningen.",
    duration: "20 min",
    price: "220 kr",
    icon: icon(
      "63862eaf5ff3e2f137ed3b3a_scalp-moisturizing-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "har-skagg",
    name: "Hår & skägg",
    description:
      "Det kompletta paketet. Full klippning och skäggtrimning för en helt ny look.",
    duration: "40 min",
    price: "600 kr",
    icon: icon(
      "63862eaf05534bf92c96d0b5_beard-grooming-and-spa-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "pensionar",
    name: "Pensionärsklippning",
    description:
      "Varsam klippning för pensionärer med tid för en avslappnad stund i stolen.",
    duration: "20 min",
    price: "300 kr",
    icon: icon(
      "63862eaff96ecdf8025493ea_classic-haircut-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
  {
    id: "varm-vax",
    name: "Varm vax (näsa & öron)",
    description:
      "Snabb och skonsam vaxning av näsa och öron – avslutar din grooming perfekt.",
    duration: "10 min",
    price: "50 kr",
    icon: icon(
      "63862eaf971e1c6a341257c4_neck-shave-service-icon-barber-webflow-ecommerce-template.svg",
    ),
  },
];

export const giftCardContent = {
  title: "Presentkort",
  description:
    "Ge bort en premium barberarupplevelse på Kisa torget. Perfekt till födelsedag, fars dag eller som tack till någon speciell.",
  perks: [
    "Gäller alla tjänster i salongen",
    "Personligt och stilrent – precis som en riktig premiumgåva",
    "Enkelt att lösa in vid bokning",
  ],
  cta: "Köp presentkort via Bokahit",
};

export const membershipContent = {
  title: "Medlemskap",
  description:
    "För dig som vill ha en fast stol hos oss på torget. Prioriterad bokning, personlig service och en smidigare vardag.",
  perks: [
    "Prioriterad bokning – enklare att hitta tider som passar",
    "Personlig barberare – vi lär känna din stil och dina preferenser",
    "Fast prisnivå – tydligt och förutsägbart",
    "Lojalitetsförmåner – exklusiva erbjudanden för medlemmar",
  ],
  cta: "Fråga om medlemskap",
};
