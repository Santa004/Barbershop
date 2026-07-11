import Image from "next/image";
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
        title="Våra tjänster"
        description="Precision, stil och en personlig upplevelse – varje gång."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {preview.map((service) => (
          <article
            key={service.id}
            className="group rounded-2xl border border-white/10 bg-neutral-900/50 p-6 transition hover:-translate-y-1 hover:border-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {service.icon ? (
              <Image
                src={service.icon}
                alt=""
                width={48}
                height={48}
                className="mb-4"
                aria-hidden
              />
            ) : null}
            <h3 className="text-lg font-semibold text-white">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {service.description}
            </p>
            <div className="mt-5 flex items-end justify-between gap-3">
              <span className="rounded border border-accent/25 px-2.5 py-1 text-xs font-medium tracking-wide text-accent uppercase">
                {service.duration}
              </span>
              <span className="text-lg font-bold text-white">{service.price}</span>
            </div>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-neutral-950 transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Boka {service.name.toLowerCase()}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href={siteConfig.bookingUrl} external>
          Boka tid
        </Button>
        <Button href="/tjanster" variant="secondary">
          Se alla tjänster
        </Button>
      </div>
    </Section>
  );
}
