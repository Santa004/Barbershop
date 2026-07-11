import Link from "next/link";
import Image from "next/image";
import { images, navigation, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src={images.logo}
                alt={siteConfig.name}
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Premium barbershop på Kisa torget. Herrklippning, skäggtrimning och
              styling med personlig service mitt i centrum.
            </p>
            <div className="mt-6">
              <Button href={siteConfig.bookingUrl} external size="sm">
                Boka tid
              </Button>
            </div>
            <div className="mt-8 rounded-xl border border-accent/15 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Besök oss</h3>
              <p className="mt-2 text-sm text-white/65">
                {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </p>
              <p className="mt-1 text-sm text-white/65">
                {siteConfig.openingHours[0].label}: {siteConfig.openingHours[0].value}
              </p>
              <a
                href={siteConfig.phoneLink}
                className="mt-2 inline-block text-sm text-accent hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-white/45 uppercase">
              Meny
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-white/45 uppercase">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tjanster#presentkort" className="text-white/80 hover:text-accent">
                  Presentkort
                </Link>
              </li>
              <li>
                <Link href="/tjanster#medlemskap" className="text-white/80 hover:text-accent">
                  Medlemskap
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent"
                >
                  Hitta hit
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent"
                >
                  Instagram @kisabarbershop
                </a>
              </li>
              <li>
                <Link href="/integritetspolicy" className="text-white/80 hover:text-accent">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {year} {siteConfig.name}. Alla rättigheter förbehållna.
        </div>
      </Container>
    </footer>
  );
}
