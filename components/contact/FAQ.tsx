"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <span
                  className={cn(
                    "text-accent transition-transform motion-reduce:transition-none",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-white/70"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
