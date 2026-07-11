import { reviews } from "@/content/reviews";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <Section variant="muted">
      <SectionHeading
        title="Vad våra kunder säger"
        description="Omdömen från verifierade kunder via Bokahit."
      />

      <div className="mx-auto grid max-w-4xl gap-6">
        {reviews.map((review) => (
          <blockquote
            key={review.id}
            className="rounded-2xl border border-white/10 bg-neutral-950/60 p-8"
          >
            <div className="mb-4 text-accent" aria-hidden>
              ★★★★★
            </div>
            <p className="text-xl leading-relaxed text-white/90">“{review.quote}”</p>
            <footer className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/55">
              <cite className="not-italic font-semibold tracking-wide text-white uppercase">
                {review.author}
              </cite>
              <span aria-hidden>·</span>
              <span>{review.location}</span>
              <span aria-hidden>·</span>
              <a
                href={review.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Verifierad via {review.source}
              </a>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={siteConfig.bookingUrl} external variant="secondary">
          Boka och skriv ditt omdöme
        </Button>
      </div>
    </Section>
  );
}
