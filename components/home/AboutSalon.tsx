import Image from "next/image";
import { images, siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSalon() {
  const barber = teamMembers[0];

  return (
    <Section variant="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={images.interior}
            alt="Interiör hos Kisa Barbershop på torget"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            title="Vår salong på Kisa torget"
            description="Genuint barberarhantverk mitt i centrum – boka din tid online och upplev en personlig stol hos oss."
          />
          <p className="mb-6 text-white/70">
            Vi erbjuder fade, skäggtrimning och klassisk herrklippning med fokus
            på precision och en avslappnad upplevelse. Familjevänlig salong med
            personlig service.
          </p>
          {barber ? (
            <div className="mb-8 rounded-xl border border-white/10 bg-neutral-950/50 p-5">
              <p className="text-sm font-semibold text-accent">{barber.title}</p>
              <p className="mt-1 text-lg font-semibold text-white">{barber.name}</p>
              <p className="mt-2 text-sm text-white/65">{barber.bio}</p>
            </div>
          ) : null}
          <Button href="/om-oss" variant="secondary">
            Mer om oss
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Erfarna barberare",
            text: "Varje besök är en upplevelse – från välkomnande till sista spegelkollen.",
            icon: "/images/63b872b83e578392894cdc3a_people-man-beard-webflow-ecommerce-template.svg",
          },
          {
            title: "Premiumtjänster",
            text: "Precision i varje linje, oavsett om det gäller fade, skägg eller klassisk klippning.",
            icon: "/images/63b872b83e5783e3594cdc3b_hair-dress-chair-webflow-ecommerce-template.svg",
          },
          {
            title: "Centralt läge",
            text: "Mitt på Kisa torget med parkering i närheten och enkelt att hitta.",
            icon: "/images/63585749a45d5a3630209ac5_Location.svg",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-neutral-950/40 p-6"
          >
            <Image src={item.icon} alt="" width={40} height={40} className="mb-4" aria-hidden />
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={siteConfig.bookingUrl} external>
          Boka tid
        </Button>
      </div>
    </Section>
  );
}
