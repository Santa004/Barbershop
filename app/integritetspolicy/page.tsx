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
    <section className="bg-neutral-950 pt-28 pb-20 md:pt-36">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Integritetspolicy
        </h1>
        <div className="prose prose-invert mt-8 max-w-none space-y-4 text-white/75">
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
            <a href={siteConfig.phoneLink} className="text-accent hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
