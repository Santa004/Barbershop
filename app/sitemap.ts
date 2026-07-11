import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = ["/", "/tjanster", "/om-oss", "/kontakt", "/boka", "/integritetspolicy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
