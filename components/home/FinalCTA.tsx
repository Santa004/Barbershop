import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-accent/15 bg-neutral-900 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,106,0.06),transparent_65%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl lg:text-[2.75rem]">
          Redo för nästa klippning?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
          Välj tjänst och tid direkt via Bokahit.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href={siteConfig.bookingUrl} external size="lg">
            Boka tid
          </Button>
          <Button href={siteConfig.phoneLink} variant="secondary" size="lg">
            Ring salongen
          </Button>
        </div>
      </Container>
    </section>
  );
}
