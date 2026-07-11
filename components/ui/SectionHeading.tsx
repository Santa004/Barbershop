import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/content/site";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
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
      <div
        className={cn(
          "mb-5 flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="hidden h-px flex-1 max-w-24 bg-accent/30 sm:block" aria-hidden />
        <Image src={images.icon} alt="" width={40} height={40} aria-hidden />
        <span className="hidden h-px flex-1 max-w-24 bg-accent/30 sm:block" aria-hidden />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
