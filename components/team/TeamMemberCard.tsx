import Image from "next/image";
import { siteConfig } from "@/content/site";
import type { TeamMember } from "@/types";
import { Button } from "@/components/ui/Button";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="grid gap-8 rounded-2xl border border-white/10 bg-neutral-900/50 p-6 md:grid-cols-[240px_1fr] md:p-8">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={`${member.name} – ${member.title}`}
          fill
          sizes="240px"
          className="object-cover"
          unoptimized={member.image.startsWith("http")}
        />
      </div>
      <div>
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">
          {member.title}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">{member.name}</h3>
        <p className="mt-4 leading-relaxed text-white/70">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={siteConfig.bookingUrl} external size="sm">
            Boka hos {member.name.split(" ")[0]}
          </Button>
          {member.instagram ? (
            <Button href={member.instagram} external variant="secondary" size="sm">
              Instagram
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
