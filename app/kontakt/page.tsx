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

      <section className="bg-neutral-950 pt-28 pb-12 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            title="Kontakta oss"
            description="Hitta hit, ring oss eller boka direkt online."
          />
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard title="Adress">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </ContactCard>
            <ContactCard title="Telefon">
              <a href={siteConfig.phoneLink} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>
            </ContactCard>
            <ContactCard title="Öppettider">
              <ul className="space-y-2">
                {siteConfig.openingHours.map((row) => (
                  <li key={row.label} className="flex justify-between gap-4">
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </li>
                ))}
              </ul>
            </ContactCard>
            <ContactCard title="Bokning">
              <p className="mb-4">
                Boka enkelt via Bokahit – välj tjänst, tid och bekräfta direkt.
              </p>
              <Button href={siteConfig.bookingUrl} external size="sm">
                Boka tid
              </Button>
            </ContactCard>
          </div>
          <MapEmbed />
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading title="Vanliga frågor" />
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
    <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
      <h2 className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
