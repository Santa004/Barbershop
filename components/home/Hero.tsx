import Image from "next/image";
import { images, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-20 pt-28 md:pb-28 md:pt-36">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.12),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Image
              src={images.logo}
              alt=""
              width={180}
              height={54}
              className="mb-8 h-12 w-auto opacity-90"
              aria-hidden
            />
            <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Passion för barberarkonst och personlig service på torget i Kisa.
              Boka din tid på under en minut.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.bookingUrl} external size="lg">
                Boka tid
              </Button>
              <Button href="/tjanster" variant="secondary" size="lg">
                Se våra tjänster
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src={images.hero}
              alt="Barberarstol och atmosfär hos Kisa Barbershop på torget"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
