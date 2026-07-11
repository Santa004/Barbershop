import Image from "next/image";
import { heroContent, images, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="texture-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,169,106,0.08),transparent_50%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {heroContent.label}
            </p>
            <h1 className="font-display mt-5 text-[2.25rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {heroContent.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {heroContent.subheadline}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <ClockIcon />
              {heroContent.hours}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                href={siteConfig.bookingUrl}
                external
                size="lg"
                className="min-h-[44px] w-full sm:w-auto"
              >
                Boka tid
              </Button>
              <Button
                href="/tjanster"
                variant="secondary"
                size="lg"
                className="min-h-[44px] w-full sm:w-auto"
              >
                Se tjänster &amp; priser
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animation-delay-200 relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src={images.hero}
              alt="Barberarstol och atmosfär hos Kisa Barbershop på torget"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-neutral-950/20"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4 text-accent"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}
