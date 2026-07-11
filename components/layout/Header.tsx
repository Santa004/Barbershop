"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images, navigation, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-b border-white/10 bg-neutral-950/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="relative z-50 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            src={images.logo}
            alt={siteConfig.name}
            width={160}
            height={48}
            priority
            className="h-8 w-auto max-w-[148px] sm:h-9 sm:max-w-none md:h-10"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Huvudnavigation"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  isActive ? "text-accent" : "text-white/75",
                )}
              >
                {item.label}
                {isActive ? (
                  <span
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-accent/60"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
          <Button href={siteConfig.bookingUrl} external size="sm">
            Boka tid
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "relative z-50 flex h-11 min-h-[44px] w-11 min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-md border lg:hidden",
            scrolled
              ? "border-white/15 bg-neutral-900/80"
              : "border-white/10 bg-neutral-950/50 backdrop-blur-sm",
          )}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              "h-0.5 w-5 bg-white transition-transform",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-white transition-opacity",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-white transition-transform",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-neutral-950 transition-opacity duration-300 lg:hidden motion-reduce:transition-none",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-7 px-6"
          aria-label="Mobilnavigation"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "min-h-[44px] text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  isActive ? "text-accent" : "text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            href={siteConfig.bookingUrl}
            external
            size="lg"
            className="mt-2 min-h-[44px]"
          >
            Boka tid
          </Button>
        </nav>
      </div>
    </header>
  );
}
