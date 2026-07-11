import type { TeamMember } from "@/types";
import { images, siteConfig } from "@/content/site";

/** Verifiera namn, titel och erfarenhet med salongen innan publicering. */
export const teamMembers: TeamMember[] = [
  {
    id: "erik-lindqvist",
    name: "Erik Lindqvist",
    title: "Ägare & mästarbarberare",
    bio: "Mästare på fade, skäggtrimning och klassisk herrklippning. Driver Kisa Barbershop på torget med fokus på precision, personlig service och en premiumupplevelse i stolen.",
    image: images.barberPhoto,
    tags: ["Fade & skägg", "Klassisk klippning"],
    instagram: siteConfig.instagram,
  },
];
