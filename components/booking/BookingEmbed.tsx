import { siteConfig } from "@/content/site";

export function BookingEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
      <iframe
        src={siteConfig.bookingUrl}
        title="Boka tid hos Kisa Barbershop via Bokahit"
        className="min-h-[720px] w-full"
        loading="lazy"
      />
      <p className="border-t border-neutral-200 bg-neutral-50 px-5 py-4 text-center text-sm text-neutral-600">
        Fungerar inte bokningsrutan?{" "}
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-neutral-900 underline"
        >
          Öppna Bokahit i nytt fönster
        </a>{" "}
        eller ring{" "}
        <a href={siteConfig.phoneLink} className="font-medium text-neutral-900 underline">
          {siteConfig.phone}
        </a>
        .
      </p>
    </div>
  );
}
