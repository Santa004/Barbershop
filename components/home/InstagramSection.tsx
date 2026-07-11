import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramSection() {
  return (
    <Section variant="muted">
      <SectionHeading
        title="Följ oss på Instagram"
        description="Se fler bilder från salongen, fades och skägg på @kisabarbershop."
      />

      <div className="mx-auto max-w-xl text-center">
        <p className="mb-6 text-sm text-white/60">
          Vi visar inget falskt live-flöde. Följ oss på Instagram för senaste
          inlägg och bakom kulisserna på torget.
        </p>
        <Button href={siteConfig.instagram} external size="lg">
          Följ @kisabarbershop
        </Button>
      </div>
    </Section>
  );
}
