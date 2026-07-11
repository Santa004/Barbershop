import type { TeamMember } from "@/types";
import { images, siteConfig } from "@/content/site";

export const teamMembers: TeamMember[] = [
  {
    id: "mero",
    name: "Mero",
    title: "Ägare & barberare",
    bio: "Driver Kisa Barbershop på torget med fokus på fade, skäggtrimning och klassisk herrklippning. Personlig service och precision i varje detalj.",
    image: images.barberPhoto,
    tags: ["Fade & skägg", "Klassisk klippning"],
    instagram: siteConfig.instagram,
  },
];
