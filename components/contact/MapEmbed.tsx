import { siteConfig } from "@/content/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/15 shadow-xl shadow-black/20">
      <iframe
        src={siteConfig.mapsEmbedUrl}
        title="Karta till Kisa Barbershop på Kisa torget"
        className="min-h-[420px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
