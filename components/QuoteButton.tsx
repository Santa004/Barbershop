"use client";

import { requestQuote } from "@/lib/quote";

type Props = {
  subject: string;
  label?: string;
  className?: string;
  /** Tillgängligt namn när knapptexten inte räcker, t.ex. "Begär offert på Rototilt". */
  ariaLabel?: string;
};

/** Knapp som scrollar till formuläret och förifyller "Gäller". Fungerar som vanlig länk utan JS. */
export function QuoteButton({ subject, label = "Begär offert", className = "btn btn--sm", ariaLabel }: Props) {
  return (
    <a
      href={`/?galler=${encodeURIComponent(subject)}#offert`}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (!document.getElementById("offert")) return;
        e.preventDefault();
        requestQuote(subject);
      }}
    >
      {label}
    </a>
  );
}
