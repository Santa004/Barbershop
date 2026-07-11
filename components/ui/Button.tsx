import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-accent text-neutral-950 hover:bg-accent-light shadow-sm shadow-accent/20 hover:shadow-accent/30",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-accent/35 hover:bg-white/8",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "min-h-[44px] px-4 py-2.5 text-sm",
  md: "min-h-[44px] px-6 py-3 text-sm",
  lg: "min-h-[48px] px-8 py-3.5 text-base",
};

function isAnchorHref(href: string, external?: boolean) {
  return (
    external ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (isAnchorHref(href, external)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
