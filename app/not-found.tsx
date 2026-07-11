import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-neutral-950 py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white">Sidan hittades inte</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          Sidan du letade efter finns inte. Gå tillbaka till startsidan eller boka
          din tid direkt.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-accent/40"
          >
            Till startsidan
          </Link>
          <Button href={siteConfig.bookingUrl} external>
            Boka tid
          </Button>
        </div>
      </Container>
    </section>
  );
}
