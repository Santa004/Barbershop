import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <Section id="tjanster">
      <SectionHeading
        eyebrow="Tjänster"
        title="Klippning, fade och skägg"
        description="Tydliga priser och tider – boka direkt när det passar dig."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {preview.map((service) => (
          <article
            key={service.id}
            className="group flex flex-col rounded-xl border border-white/10 bg-neutral-900/40 p-5 transition duration-200 hover:border-accent/20 hover:bg-neutral-900/60 motion-reduce:transition-none md:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold leading-snug text-white">
                {service.name}
              </h3>
              <span className="shrink-0 text-xl font-bold text-accent">
                {service.price}
              </span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-white/60">
              {service.description}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
              <span className="text-xs font-medium tracking-wide text-white/45 uppercase">
                {service.duration}
              </span>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent/90 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Boka
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href="/tjanster" variant="secondary">
          Se alla tjänster och priser
        </Button>
        <Button href={siteConfig.bookingUrl} external>
          Boka tid
        </Button>
      </div>
    </Section>
  );
}
