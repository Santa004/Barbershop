import Image from "next/image";
import { galleryImages } from "@/content/gallery";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <Section>
      <SectionHeading
        title="Galleri"
        description="En titt in i salongen och vardagen på Kisa torget."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <a
            key={image.src}
            href={image.href ?? siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading={index < 3 ? "eager" : "lazy"}
              unoptimized={image.src.startsWith("http")}
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
