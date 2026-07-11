import { reviews } from "@/content/reviews";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <Section variant="muted">
      <SectionHeading
        eyebrow="Kundomdömen"
        title="Vad våra kunder säger"
        description="Omdömen från verifierade kunder via Bokahit."
      />

      <div className="mx-auto grid max-w-4xl gap-5 md:gap-6">
        {reviews.map((review) => (
          <blockquote
            key={review.id}
            className="rounded-xl border border-white/10 bg-neutral-950/50 p-6 md:p-8"
          >
            <p className="font-display text-xl leading-relaxed text-white/90 md:text-2xl">
              &ldquo;{review.quote}&rdquo;
            </p>
            <footer className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/50">
              <cite className="not-italic font-medium text-white/80">
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
                {review.source}
              </a>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={siteConfig.bookingUrl} external variant="secondary">
          Boka ditt besök
        </Button>
      </div>
    </Section>
  );
}
