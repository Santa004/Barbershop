import { siteConfig } from "@/content/site";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
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
      <section className="bg-neutral-950 pb-8 pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Bokning
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
            Boka din tid
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            Välj tjänst och tid i bokningsrutan nedan. Öppet mån–fre 10:00–18:00
            på Kisa torget.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={siteConfig.bookingUrl} external>
              Öppna Bokahit
            </Button>
            <Button href={siteConfig.phoneLink} variant="secondary">
              Ring {siteConfig.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-20">
        <Container>
          <BookingEmbed />
        </Container>
      </section>
    </>
  );
}
