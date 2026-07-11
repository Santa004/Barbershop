import Image from "next/image";
import { galleryImages } from "@/content/gallery";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layoutClasses = [
  "col-span-2 row-span-2 md:col-span-7 md:row-span-3",
  "col-span-1 row-span-1 md:col-span-5 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-2 row-span-1 md:col-span-4 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-5 md:row-span-3",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
] as const;

export function Gallery() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Galleri"
        title="Salongsmiljö och stämning"
        description="Bilder som speglar atmosfären hos oss på Kisa torget."
      />

      <div className="grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[160px] md:grid-cols-12 md:gap-4">
        {galleryImages.map((image, index) => (
          <a
            key={image.src}
            href={image.href ?? siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-xl border border-white/10 ${layoutClasses[index] ?? "col-span-1 row-span-1"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading={index < 3 ? "eager" : "lazy"}
              unoptimized={image.src.startsWith("http")}
            />
            <div
              className="absolute inset-0 bg-neutral-950/0 transition duration-300 group-hover:bg-neutral-950/20 motion-reduce:transition-none"
              aria-hidden
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
