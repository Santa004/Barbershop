import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
  id?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </Tag>
  );
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "dark";
}) {
  const variants = {
    default: "bg-neutral-950 text-white",
    muted: "bg-neutral-900 text-white",
    dark: "bg-neutral-950 text-white",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
      <Container>{children}</Container>
    </section>
  );
}
