import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/Placeholder";
import { MACHINES, SPEC_TBD, getMachine } from "@/lib/machines";
import { publicImage } from "@/lib/images";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return MACHINES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getMachine((await params).slug);
  if (!m) return {};
  const path = `/teknisk-data/${m.slug}`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path },
    openGraph: { title: m.title, description: m.description, url: path, type: "website", locale: "sv_SE" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

const GALLERY_ALT = ["i arbete på berg", "sedd från sidan", "närbild på bom och matare"];

export default async function MachinePage({ params }: Props) {
  const m = getMachine((await params).slug);
  if (!m) notFound();

  const quoteHref = `/?galler=${encodeURIComponent(`Offert: ${m.name}`)}&modell=${encodeURIComponent(m.name)}#offert`;
  const gallery = [1, 2, 3].map((i) => ({
    src: publicImage(`/bilder/maskiner/${m.slug}-${i}.jpg`),
    alt: `StonePower ${m.name} ${GALLERY_ALT[i - 1]}`,
  }));
  const hasTbd = m.specs.some((g) => g.rows.some((r) => r.value === SPEC_TBD));

  return (
    <>
      <section className="steel page-hero" aria-labelledby="sidrubrik">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Brödsmulor">
            <ol>
              <li>
                <Link href="/">Startsidan</Link>
              </li>
              <li>
                <Link href="/#maskiner">Maskiner</Link>
              </li>
              <li aria-current="page">{m.name}</li>
            </ol>
          </nav>
          <p className="eyebrow page-hero__eyebrow">
            STONEPOWER · TEKNISK DATA
          </p>
          <h1 id="sidrubrik">{m.name.toUpperCase()}</h1>
          <p>{m.intro}</p>
          <div className="hero__ctas">
            <a className="btn" href={quoteHref}>
              Begär offert
            </a>
            <a className="btn btn--outline" href={`tel:${SITE.phoneTel}`}>
              Ring {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="specrubrik">
        <div className="wrap">
          <ul className="gallery" aria-label={`Bilder på ${m.name}`}>
            {gallery.map((g, i) => (
              <li key={i}>
                {g.src ? (
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    priority={i === 0}
                    sizes={i === 0 ? "(max-width: 640px) 100vw, 740px" : "(max-width: 640px) 50vw, 370px"}
                  />
                ) : (
                  <Placeholder label={i === 0 ? `${m.name} – bild kommer` : "Bild kommer"} />
                )}
              </li>
            ))}
          </ul>

          <div className="spec-layout">
            <div>
              <h2 id="specrubrik" className="visually-hidden">
                Specifikationer
              </h2>
              {m.specs.map((group) => (
                <table key={group.title} className="spec-table">
                  <caption>{group.title}</caption>
                  <tbody>
                    {group.rows.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">{r.label}</th>
                        {r.value === SPEC_TBD ? (
                          <td className="tbd">
                            {SPEC_TBD}
                            {r.unit ? ` (${r.unit})` : ""}
                          </td>
                        ) : (
                          <td>
                            {r.value}
                            {r.unit ? ` ${r.unit}` : ""}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
              <table className="spec-table">
                <caption>Utrustningslista</caption>
                <tbody>
                  {m.equipment.map((e, i) => (
                    <tr key={i}>
                      <td className={e === SPEC_TBD ? "tbd" : undefined}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <aside className="card spec-aside" aria-labelledby="offert-aside">
              <h2 id="offert-aside">Intresserad av {m.name}?</h2>
              <p>
                Vi är ensamåterförsäljare för StonePower i Sverige och sköter leverans, utbildning och service.
                {hasTbd ? " Fullständigt datablad skickas på begäran." : ""}
              </p>
              <a className="btn btn--block" href={quoteHref}>
                Begär offert
              </a>
              <p>
                Eller ring Jonas på <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
              </p>
              <p>
                <Link href="/#maskiner">← Alla maskiner</Link>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
