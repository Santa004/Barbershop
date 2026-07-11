import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/contact/MapEmbed";

export function PracticalInfo() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Besök oss"
        title="Praktisk information"
        description="Allt du behöver veta innan ditt besök på Kisa torget."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <InfoBlock title="Adress">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
          </InfoBlock>

          <InfoBlock title="Öppettider">
            <ul className="space-y-2">
              {siteConfig.openingHours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4">
                  <span>{row.label}</span>
                  <span className="font-medium text-white/85">{row.value}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock title="Telefon">
            <a
              href={siteConfig.phoneLink}
              className="text-lg font-medium text-accent hover:underline"
            >
              {siteConfig.phone}
            </a>
          </InfoBlock>

          <InfoBlock title="Parkering">
            <p>Parkeringsplatser finns runt Kisa torget, mitt i centrum.</p>
          </InfoBlock>

          <InfoBlock title="Avbokning">
            <p>{siteConfig.cancellationPolicy}</p>
          </InfoBlock>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button href={siteConfig.mapsUrl} external variant="secondary">
              Vägbeskrivning
            </Button>
            <Button href={siteConfig.bookingUrl} external>
              Boka tid
            </Button>
          </div>
        </div>

        <MapEmbed />
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
    <div className="rounded-xl border border-white/10 bg-neutral-900/30 p-5">
      <h3 className="mb-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
