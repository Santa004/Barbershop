import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </p>
      ) : (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-accent/40" aria-hidden />
          <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
          <span className="h-px w-8 bg-accent/40" aria-hidden />
        </div>
      )}
      <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
