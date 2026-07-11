import { siteConfig } from "@/content/site";

export function MapEmbed() {
  return (
    <div className="max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/20">
      <iframe
        src={siteConfig.mapsEmbedUrl}
        title="Karta till Kisa Barbershop på Kisa torget"
        className="aspect-[4/3] min-h-[280px] w-full md:min-h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
