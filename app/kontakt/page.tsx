import { siteConfig } from "@/content/site";
import { faqItems } from "@/content/faq";
import { FAQ } from "@/components/contact/FAQ";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { FAQSchema } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Kontakt – ${siteConfig.name}`,
  description:
    "Kontakta Kisa Barbershop på torget. Adress, öppettider, telefon, karta och vanliga frågor.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      <section className="bg-neutral-950 pb-10 pt-24 md:pt-32">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Kontakt"
            title="Hitta hit eller boka online"
            description="Vi finns mitt på Kisa torget. Ring, boka via Bokahit eller kom förbi under öppettiderna."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={siteConfig.bookingUrl} external>
              Boka tid
            </Button>
            <Button href={siteConfig.phoneLink} variant="secondary">
              Ring salongen
            </Button>
            <Button href={siteConfig.mapsUrl} external variant="secondary">
              Vägbeskrivning
            </Button>
          </div>
        </Container>
      </section>

      <Section className="!pt-0">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <ContactCard title="Adress">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </ContactCard>
            <ContactCard title="Telefon">
              <a
                href={siteConfig.phoneLink}
                className="text-lg font-medium text-accent hover:underline"
              >
                {siteConfig.phone}
              </a>
            </ContactCard>
            <ContactCard title="Öppettider">
              <ul className="space-y-2">
                {siteConfig.openingHours.map((row) => (
                  <li key={row.label} className="flex justify-between gap-4">
                    <span>{row.label}</span>
                    <span className="font-medium text-white/85">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </ContactCard>
            <ContactCard title="Parkering">
              <p>Parkeringsplatser finns runt Kisa torget, mitt i centrum.</p>
            </ContactCard>
          </div>
          <MapEmbed />
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading eyebrow="FAQ" title="Vanliga frågor" />
        <div className="mx-auto max-w-3xl">
          <FAQ items={faqItems} />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function ContactCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/30 p-5">
      <h2 className="mb-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
