import type { GalleryImage } from "@/types";
import { images, siteConfig } from "@/content/site";

export const galleryImages: GalleryImage[] = [
  {
    src: images.barberPhoto,
    alt: "Salongsmiljö hos Kisa Barbershop på torget",
    href: siteConfig.instagram,
    external: true,
  },
  {
    src: "/images/6352f2b6a7b90cfd94ae18b4_Left-Image-Experience-Barbershop.jpg",
    alt: "Barberarstol och interiör i salongen",
    href: siteConfig.instagram,
    external: true,
  },
  {
    src: "/images/6352f252e708dc38e92e533c_Center-Top-Image-Experience-Barbershop.jpg",
    alt: "Detaljer från barbershop-miljön",
    href: siteConfig.instagram,
    external: true,
  },
  {
    src: "/images/6352f268e708dc07112e544a_Center-Bottom-Image-Experience-Barbershop.jpg",
    alt: "Verktyg och atmosfär i salongen",
    href: siteConfig.instagram,
    external: true,
  },
  {
    src: "/images/6352f2f605de392c9d02f20b_Right-Image-Experience-Barbershop.jpg",
    alt: "Barbershop-inredning och stämning",
    href: siteConfig.instagram,
    external: true,
  },
  {
    src: images.interior,
    alt: "Interiör hos Kisa Barbershop på Kisa torget",
    href: siteConfig.instagram,
    external: true,
  },
];
