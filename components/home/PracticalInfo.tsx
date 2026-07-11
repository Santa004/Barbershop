import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/contact/MapEmbed";

export function PracticalInfo() {
  return (
    <Section>
      <SectionHeading
        title="Praktisk information"
        description="Allt du behöver veta innan ditt besök på Kisa torget."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <InfoBlock title="Adress">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-accent hover:underline"
            >
              Öppna i Google Maps
            </a>
          </InfoBlock>

          <InfoBlock title="Öppettider">
            <ul className="space-y-2">
              {siteConfig.openingHours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4">
                  <span>{row.label}</span>
                  <span className="text-white/80">{row.value}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock title="Telefon">
            <a href={siteConfig.phoneLink} className="text-accent hover:underline">
              {siteConfig.phone}
            </a>
          </InfoBlock>

          <InfoBlock title="Parkering">
            <p>Parkeringsplatser finns runt Kisa torget, mitt i centrum.</p>
          </InfoBlock>

          <InfoBlock title="Avbokning">
            <p>{siteConfig.cancellationPolicy}</p>
          </InfoBlock>
        </div>

        <MapEmbed />
      </div>

      <div className="mt-10 text-center">
        <Button href={siteConfig.bookingUrl} external>
          Boka tid nu
        </Button>
      </div>
    </Section>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
