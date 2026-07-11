import Image from "next/image";
import { images, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "Personlig service",
    text: "Vi tar oss tid att förstå din stil och preferenser vid varje besök.",
  },
  {
    title: "Precision i detaljer",
    text: "Fade, skägg och klassisk klippning med fokus på rena linjer och finish.",
  },
  {
    title: "Mitt på torget",
    text: "Centralt läge med parkering i närheten – enkelt att hitta i Kisa.",
  },
] as const;

export function AboutSalon() {
  return (
    <Section variant="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={images.interior}
            alt="Interiör hos Kisa Barbershop på torget"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-neutral-950/30 to-transparent"
            aria-hidden
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Om salongen"
            title="Din barberare i Kisa"
            description="En avslappnad barbershop mitt på torget – där hantverk, stil och personlig service möts."
          />
          <p className="mb-8 text-base leading-relaxed text-white/65">
            Hos oss får du fade, skäggtrimning och klassisk herrklippning i en
            lugn miljö. Vi erbjuder tydliga priser och enkel bokning så att du
            snabbt kan komma till din stol.
          </p>

          <ul className="mb-8 space-y-4">
            {benefits.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="mt-2 h-px w-6 shrink-0 bg-accent/50"
                  aria-hidden
                />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/om-oss" variant="secondary">
              Läs mer om oss
            </Button>
            <Button href={siteConfig.bookingUrl} external>
              Boka tid
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
