import { trustHighlights } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function TrustSection() {
  return (
    <section
      className="border-y border-white/10 bg-neutral-900/80 py-6 md:py-7"
      aria-label="Fördelar"
    >
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustHighlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-white/80 md:text-[0.9375rem]"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
