import Image from "next/image";
import { images, siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Om oss – ${siteConfig.name}`,
  description:
    "Lär känna Kisa Barbershop på torget. Personlig service, precision i varje klippning och en premium barberarupplevelse i Kisa.",
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 pt-28 pb-16 md:pt-36">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                title="Om vår barbershop"
                description="Passion för barberarkonst och personlig service på torget i Kisa."
              />
              <p className="text-white/70">
                Traditionellt hantverk möter modern stil. Från torget till
                spegeln skapar vi looken du vill ha – med tid, precision och
                en avslappnad stämning i stolen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={siteConfig.bookingUrl} external>
                  Boka tid
                </Button>
                <Button href="/tjanster" variant="secondary">
                  Se våra tjänster
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={images.interior}
                alt="Interiör hos Kisa Barbershop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section variant="muted">
        <SectionHeading
          title="Vilka vi är"
          description="Familjevänlig salong på torget med fokus på kvalitet och personlig service."
        />
        <div className="mx-auto max-w-3xl space-y-4 text-center text-white/70">
          <p>
            Välkommen till Kisa Barbershop på torget. Vi erbjuder fade,
            skäggtrimning och klassisk herrklippning med personlig service mitt
            i centrum.
          </p>
          <p>
            Hur vi startade? Med viljan att erbjuda en riktig barberarupplevelse
            lokalt – där varje kund känner sig sedd och varje detalj räknas.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Möt vårt team"
          description="Passionerade barberare med fokus på precision, stil och personlig service."
        />
        <div className="mx-auto max-w-4xl space-y-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
