import type { MetadataRoute } from "next";
import { MACHINES } from "@/lib/machines";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...MACHINES.map((m) => ({
      url: `${base}/teknisk-data/${m.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${base}/integritetspolicy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
