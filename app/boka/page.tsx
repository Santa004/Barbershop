import { siteConfig } from "@/content/site";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Boka tid – ${siteConfig.name}`,
  description:
    "Boka din tid hos Kisa Barbershop på torget i Kisa. Fade, skäggtrimning och herrklippning – enkelt via Bokahit.",
  path: "/boka",
});

export default function BookingPage() {
  return (
    <>
      <section className="bg-neutral-950 pt-28 pb-10 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            title="Boka din tid"
            description="Välj tjänst och tid direkt via Bokahit. Öppet mån–fre 10:00–18:00 på Kisa torget."
          />
          <Button href={siteConfig.bookingUrl} external className="mt-2">
            Öppna bokningssystemet
          </Button>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <BookingEmbed />
        </Container>
      </section>
    </>
  );
}
