import Link from "next/link";
import Image from "next/image";
import { images, navigation, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 pb-24 pt-12 text-white md:pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src={images.logo}
                alt={siteConfig.name}
                width={140}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-white/60">
              <p>
                {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </p>
              <p>
                <a href={siteConfig.phoneLink} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                {siteConfig.openingHours[0].label}:{" "}
                {siteConfig.openingHours[0].value}
              </p>
            </address>
            <div className="mt-5">
              <Button href={siteConfig.bookingUrl} external size="sm">
                Boka tid
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Meny
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/tjanster#presentkort"
                  className="text-white/70 hover:text-accent"
                >
                  Presentkort
                </Link>
              </li>
              <li>
                <Link
                  href="/tjanster#medlemskap"
                  className="text-white/70 hover:text-accent"
                >
                  Medlemskap
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link
                  href="/integritetspolicy"
                  className="text-white/70 hover:text-accent"
                >
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {year} {siteConfig.name}. Alla rättigheter förbehållna.
        </div>
      </Container>
    </footer>
  );
}
