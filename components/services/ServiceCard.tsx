import Image from "next/image";
import { siteConfig } from "@/content/site";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
      {service.icon ? (
        <Image
          src={service.icon}
          alt=""
          width={48}
          height={48}
          className="mb-4"
          aria-hidden
        />
      ) : null}
      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {service.description}
      </p>
      <div className="mt-5 flex items-end justify-between gap-3">
        <span className="rounded border border-accent/25 px-2.5 py-1 text-xs font-medium tracking-wide text-accent uppercase">
          {service.duration}
        </span>
        <span className="text-xl font-bold text-white">{service.price}</span>
      </div>
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-bold text-neutral-950 transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Boka {service.name.toLowerCase()}
      </a>
    </article>
  );
}
