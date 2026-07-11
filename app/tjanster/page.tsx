import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { ServiceCard } from "@/components/services/ServiceCard";
import {
  GiftCardsSection,
  MembershipSection,
} from "@/components/services/PremiumSections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Tjänster – ${siteConfig.name}`,
  description:
    "Se alla tjänster, priser och tider hos Kisa Barbershop. Herrklippning, skäggtrimning, barnklippning och mer – boka enkelt online.",
  path: "/tjanster",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-neutral-950 pt-28 pb-12 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            title="Våra tjänster"
            description="Alla priser och tider – boka direkt via Bokahit."
          />
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={siteConfig.bookingUrl} external size="lg">
            Boka tid
          </Button>
        </div>
      </Section>

      <Section variant="muted">
        <div className="space-y-8">
          <GiftCardsSection />
          <MembershipSection />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
