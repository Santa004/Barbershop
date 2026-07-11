import { giftCardContent, membershipContent } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

function PremiumCard({
  id,
  title,
  description,
  perks,
  cta,
}: {
  id: string;
  title: string;
  description: string;
  perks: string[];
  cta: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-accent/15 bg-white/5 p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-white/70">{description}</p>
      <ul className="mt-6 space-y-3">
        {perks.map((perk) => (
          <li key={perk} className="flex gap-3 text-sm text-white/75">
            <span className="text-accent" aria-hidden>
              ✓
            </span>
            {perk}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={siteConfig.bookingUrl} external>
          {cta}
        </Button>
      </div>
    </section>
  );
}

export function GiftCardsSection() {
  return <PremiumCard id="presentkort" {...giftCardContent} />;
}

export function MembershipSection() {
  return <PremiumCard id="medlemskap" {...membershipContent} />;
}
