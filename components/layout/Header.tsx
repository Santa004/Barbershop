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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-6">
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
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Huvudnavigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                pathname === item.href ? "text-accent" : "text-white/80",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href={siteConfig.bookingUrl} external size="sm">
            Boka tid
          </Button>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/10 bg-neutral-950/60 backdrop-blur lg:hidden"
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
          "fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-lg transition-opacity lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-6 px-6"
          aria-label="Mobilnavigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                pathname === item.href ? "text-accent" : "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href={siteConfig.bookingUrl} external size="lg" className="mt-4">
            Boka tid
          </Button>
        </nav>
      </div>
    </header>
  );
}
