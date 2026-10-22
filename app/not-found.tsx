import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  description: "Sidan du sökte finns inte hos MP Entreprenad Service Borås AB.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap notfound">
        <p className="eyebrow">FEL 404</p>
        <h1>SIDAN FINNS INTE</h1>
        <p>
          Länken kan vara gammal eller felstavad. Gå till startsidan, eller ring{" "}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> så hjälper vi dig direkt.
        </p>
        <p>
          <Link className="btn" href="/">
            Till startsidan
          </Link>
        </p>
      </div>
    </section>
  );
}
