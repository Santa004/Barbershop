import { siteConfig } from "@/content/site";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-neutral-900/40 p-5 transition hover:border-accent/20 md:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-snug text-white">
          {service.name}
        </h3>
        <span className="shrink-0 text-2xl font-bold text-accent">
          {service.price}
        </span>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-white/60">
        {service.description}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
        <span className="text-xs font-medium tracking-wide text-white/45 uppercase">
          {service.duration}
        </span>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Boka
        </a>
      </div>
    </article>
  );
}
