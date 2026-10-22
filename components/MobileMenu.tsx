"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";
import { ADDRESS_LINE, SITE } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./Icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobilmeny"
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div id="mobilmeny" ref={panelRef} className="mobile-panel" hidden={!open}>
        <nav aria-label="Mobilmeny">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link className="mobile-link" href={item.href} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn--block" href="/#offert" onClick={close}>
          Begär offert
        </Link>
        <a className="btn btn--outline on-steel btn--block" href={`tel:${SITE.phoneTel}`}>
          Ring {SITE.phoneDisplay}
        </a>
        <p className="mobile-panel__meta">
          {ADDRESS_LINE}
          <br />
          {SITE.hours}
        </p>
      </div>
    </>
  );
}
