import Image from "next/image";
import { images, owner, siteConfig } from "@/content/site";
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
    "Lär känna Kisa Barbershop på torget. Mero driver salongen med personlig service, precision i varje klippning och en avslappnad barbershop i Kisa.",
  path: "/om-oss",
});

const values = [
  {
    title: "Hantverk i fokus",
    text: "Varje klippning, fade och skäggtrimning görs med omsorg om detaljer och finish.",
  },
  {
    title: "Personlig service",
    text: "Vi tar oss tid att förstå din stil och skapa en look som passar dig.",
  },
  {
    title: "Lokal närvaro",
    text: "Mitt på Kisa torget – en naturlig del av vardagen i centrum.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 pb-16 pt-24 md:pb-20 md:pt-32">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Om oss"
                title="Barbershop mitt på torget"
                description={`${owner.name} driver salongen med personlig service, tydliga priser och en avslappnad stämning i stolen.`}
              />
              <p className="text-base leading-relaxed text-white/65">
                Kisa Barbershop är en lokal barbershop där traditionellt
                hantverk möter modern stil. Vi erbjuder herrklippning,
                skäggtrimning och styling mitt i centrum.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={siteConfig.bookingUrl} external>
                  Boka tid
                </Button>
                <Button href="/tjanster" variant="secondary">
                  Se tjänster &amp; priser
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
          eyebrow="Vår filosofi"
          title="Precision, stil och närvaro"
          description="Vi tror på en enkel upplevelse: tydliga priser, enkel bokning och fokus på det som räknas i stolen."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-neutral-950/40 p-6"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Teamet"
          title={`Möt ${owner.name}`}
          description={`${owner.title} på Kisa torget – passionerad om precision, stil och personlig service.`}
        />
        <div className="mx-auto max-w-4xl">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
