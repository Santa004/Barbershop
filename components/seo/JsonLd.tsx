import { images, siteConfig } from "@/content/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export function LocalBusinessSchema() {
  const { address, geo, phoneLink, bookingUrl, instagram, url, name, description } =
    siteConfig;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name,
        description,
        url,
        telephone: phoneLink.replace("tel:", ""),
        image: `${url}${images.logo}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          postalCode: address.postalCode,
          addressLocality: address.city,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "10:00",
            closes: "18:00",
          },
        ],
        sameAs: [instagram],
        hasMap: siteConfig.mapsUrl,
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: bookingUrl,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Boka tid",
          },
        },
      }}
    />
  );
}

export function FAQSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
