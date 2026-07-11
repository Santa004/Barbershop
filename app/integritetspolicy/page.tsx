import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Integritetspolicy – ${siteConfig.name}`,
  description: "Integritetspolicy för Kisa Barbershops webbplats.",
  path: "/integritetspolicy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-neutral-950 pb-20 pt-24 md:pt-32">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Juridiskt
        </p>
        <h1 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
          Integritetspolicy
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-white/70">
          <p>
            Kisa Barbershop respekterar din integritet. Denna webbplats samlar
            inte in personuppgifter via formulär. Bokning sker via Bokahit, som
            har egna villkor och integritetspolicy.
          </p>
          <p>
            Vid besök på webbplatsen kan standard loggdata (t.ex. IP-adress och
            webbläsarinformation) behandlas av vår hostingleverantör Vercel i
            syfte att leverera och säkra tjänsten.
          </p>
          <p>
            För frågor om hur vi hanterar dina uppgifter, kontakta oss på{" "}
            <a
              href={siteConfig.phoneLink}
              className="text-accent hover:underline"
            >
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
