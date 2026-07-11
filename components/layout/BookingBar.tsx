"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { isOpenNow } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BookingBar() {
  const [visible, setVisible] = useState(false);
  const open = isOpenNow();

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 400 && y > lastY) {
        setVisible(true);
      } else if (y < 200) {
        setVisible(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="banner"
      aria-label="Snabb bokning"
      className={cn(
        "fixed inset-x-0 top-0 z-[60] border-b border-accent/15 bg-neutral-950/95 backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0" : "-translate-y-full pointer-events-none",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center md:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70 sm:text-sm">
          <span className="inline-flex items-center gap-2 font-medium">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                open ? "bg-emerald-400" : "bg-red-400",
              )}
              aria-hidden
            />
            {open ? "Öppet nu" : "Stängt"}
          </span>
          <span>Mån–Fre 10:00–18:00</span>
          <a href={siteConfig.phoneLink} className="hover:text-white">
            {siteConfig.phone}
          </a>
        </div>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-neutral-950 transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Boka tid
        </a>
      </div>
    </div>
  );
}

export function FloatingBookButton() {
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Boka tid hos Kisa Barbershop"
      className="fixed right-4 bottom-5 z-40 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-neutral-950 shadow-lg shadow-accent/25 transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden motion-reduce:transition-none"
    >
      Boka tid
    </a>
  );
}
