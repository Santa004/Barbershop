"use client";

import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import { PART_FILTERS, PARTS, STATUS_LABEL } from "@/lib/parts";
import { SITE } from "@/lib/site";
import { SearchIcon } from "./Icons";
import { Placeholder } from "./Placeholder";
import { QuoteButton } from "./QuoteButton";

const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");

export function PartsSearch({ images }: { images: Record<string, string | null> }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof PART_FILTERS)[number]>("Alla");
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const terms = norm(deferredQuery).split(/[\s,]+/).filter(Boolean);
    return PARTS.filter((p) => {
      if (filter !== "Alla" && !p.t.includes(filter)) return false;
      if (!terms.length) return true;
      const hay = norm(`${p.n} ${p.a} ${p.t.join(" ")} ${STATUS_LABEL[p.s].label}`);
      const compact = hay.replace(/\s+/g, "");
      return terms.every((t) => hay.includes(t) || compact.includes(t));
    });
  }, [deferredQuery, filter]);

  return (
    <>
      <div className="parts-tools">
        <div className="search" role="search">
          <label htmlFor="sok-reservdel" className="visually-hidden">
            Sök reservdel
          </label>
          <SearchIcon />
          <input
            id="sok-reservdel"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="T.ex. D7, matarväxel, Sandvik DC302, hammare…"
            autoComplete="off"
            enterKeyHint="search"
          />
        </div>
        <div className="chips" role="group" aria-label="Filtrera på maskingrupp">
          {PART_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="parts-count" aria-live="polite">
          {results.length} av {PARTS.length} artiklar
        </p>
      </div>

      {results.length === 0 ? (
        <p className="empty">
          Ingen träff. Ring <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> — vi hittar eller tillverkar
          delen ändå.
        </p>
      ) : (
        <ul className="parts-grid">
          {results.map((p) => {
            const status = STATUS_LABEL[p.s];
            const img = images[p.a];
            return (
              <li key={p.a}>
                <article className="card">
                  <div className="part__media">
                    {img ? (
                      <Image
                        src={img}
                        alt={`${p.n}, artikelnummer ${p.a}`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 280px"
                      />
                    ) : (
                      <Placeholder />
                    )}
                  </div>
                  <div className="part__body">
                    <h3>{p.n}</h3>
                    <div className="part__meta">
                      <span className="part__sku">Art.nr {p.a}</span>
                      <span className={`badge badge--${status.tone}`}>{status.label}</span>
                    </div>
                    <ul className="tags" aria-label="Passar">
                      {p.t.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {p.pris && <p className="part__price">{p.pris}</p>}
                    <QuoteButton
                      subject={`${p.n} (art.nr ${p.a})`}
                      ariaLabel={`Begär offert på ${p.n}`}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
