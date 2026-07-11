import { siteConfig } from "@/content/site";
import { reviews } from "@/content/reviews";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustSection() {
  return (
    <Section variant="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            title="Verifierade kundomdömen"
            description="Läs vad våra kunder säger om sitt besök hos oss på Kisa torget."
          />
          <div className="rounded-xl border border-accent/15 bg-white/5 p-6">
            <p className="text-sm text-white/65">
              Vi visar endast omdömen som finns i vårt bokningssystem. Inga
              påhittade betyg eller siffror.
            </p>
            <div className="mt-5">
              <Button href={siteConfig.bookingUrl} external variant="secondary">
                Läs fler omdömen på Bokahit
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className="rounded-xl border border-white/10 bg-neutral-950/60 p-6"
            >
              <div className="mb-3 text-accent" aria-hidden>
                ★★★★★
              </div>
              <p className="text-base leading-relaxed text-white/85">
                “{review.quote}”
              </p>
              <footer className="mt-4 text-sm text-white/55">
                <cite className="not-italic font-medium text-white">
                  {review.author}
                </cite>
                <span> · {review.location}</span>
                <span>
                  {" "}
                  ·{" "}
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {review.source}
                  </a>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
