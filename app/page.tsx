import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { Jourrad } from "@/components/Jourrad";
import { Machines } from "@/components/Machines";
import { Parts } from "@/components/Parts";
import { Partners } from "@/components/Partners";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { SITE, siteUrl } from "@/lib/site";

function LocalBusinessJsonLd() {
  const url = siteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#foretag`,
    name: SITE.name,
    url,
    image: `${url}/opengraph-image`,
    telephone: SITE.phoneTel,
    email: SITE.orderEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      postalCode: SITE.postalCode,
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    openingHours: "Mo-Fr 07:00-16:00",
    areaServed: { "@type": "Country", name: "Sverige" },
    sameAs: [SITE.facebook, SITE.instagram],
    foundingDate: "2000",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Jourrad />
      <Services />
      <Parts />
      <Quote />
      <Machines />
      <Partners />
      <Contacts />
    </>
  );
}
