import type { Metadata } from "next";
import { ADDRESS_LINE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så hanterar MP Entreprenad Service Borås AB personuppgifter: inga kakor, kakfri besöksstatistik och formulärdata som bara används för att besvara din förfrågan.",
  alternates: { canonical: "/integritetspolicy" },
  openGraph: { title: "Integritetspolicy", url: "/integritetspolicy", type: "website", locale: "sv_SE" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="steel page-hero" aria-labelledby="sidrubrik">
        <div className="wrap">
          <p className="eyebrow">PERSONUPPGIFTER</p>
          <h1 id="sidrubrik">INTEGRITETSPOLICY</h1>
          <p>Kort och rakt: vi samlar så lite som möjligt och använder det bara till det du bett oss om.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap prose">
          <h2>Inga kakor</h2>
          <p>
            Webbplatsen sätter inga kakor (cookies). Därför finns ingen samtyckesruta. Besöksstatistiken kommer från
            Vercel Web Analytics, som räknar sidvisningar utan kakor och utan att
            identifiera eller följa enskilda besökare mellan webbplatser.
          </p>

          <h2>Kartan</h2>
          <p>
            Kartan under Kontakt hämtas från Google Maps först när du klickar på &quot;Visa karta&quot;. Då gäller
            Googles villkor och Google kan sätta egna kakor. Klickar du inte laddas inget från Google.
          </p>

          <h2>Formuläret</h2>
          <p>
            När du skickar en förfrågan får vi de uppgifter du fyller i: namn, företag, telefon, e-post och det du
            skriver om maskinen. Uppgifterna skickas som e-post till oss via tjänsten Resend och används bara för att
            besvara förfrågan och lämna offert. Vi säljer dem inte och använder dem inte för utskick.
          </p>
          <p>
            Mejlet sparas i vår e-post så länge det behövs för att hantera ärendet, och därefter så länge bokföringslagen
            kräver om förfrågan leder till en affär.
          </p>

          <h2>Dina rättigheter</h2>
          <p>
            Du kan när som helst be oss berätta vilka uppgifter vi har om dig, rätta dem eller radera dem. Hör av dig
            till <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a> eller ring{" "}
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Är du missnöjd med hur vi hanterar dina
            uppgifter kan du vända dig till Integritetsskyddsmyndigheten (IMY).
          </p>

          <h2>Personuppgiftsansvarig</h2>
          <p>
            {SITE.name}
            <br />
            {ADDRESS_LINE}
            <br />
            Org.nr {SITE.orgNr}
          </p>
        </div>
      </section>
    </>
  );
}
