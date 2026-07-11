import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="border-y border-accent/15 bg-neutral-900 py-16 md:py-20">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Redo för din nästa klippning?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/65">
          Välj tjänst och tid via Bokahit. Du får bekräftelse direkt och kan
          avboka eller omboka enkelt online.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={siteConfig.bookingUrl} external size="lg">
            Boka tid
          </Button>
          <Button href="/kontakt" variant="secondary" size="lg">
            Kontakta oss
          </Button>
        </div>
      </Container>
    </section>
  );
}
