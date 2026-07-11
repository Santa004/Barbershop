import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramSection() {
  return (
    <Section variant="muted">
      <SectionHeading
        eyebrow="Instagram"
        title="Följ oss på Instagram"
        description="Se fler bilder från salongen på @kisabarbershop."
      />

      <div className="text-center">
        <Button href={siteConfig.instagram} external size="lg">
          Följ @kisabarbershop
        </Button>
      </div>
    </Section>
  );
}
