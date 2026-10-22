import { PARTNERS } from "@/lib/partners";
import { toTelHref } from "@/lib/tel";
import { ExternalIcon } from "./Icons";

export function Partners() {
  return (
    <section id="partners" className="section" aria-labelledby="partners-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">RIKSTÄCKANDE</p>
          <h2 id="partners-title">SERVICEPARTNERS</h2>
          <p>Står maskinen långt från Borås finns en partner närmare. Sorterade norrifrån och ned.</p>
        </div>
        <ul className="partners">
          {PARTNERS.map((p) => (
            <li key={p.n} className="partner">
              <p className="partner__region">{p.r}</p>
              <h3>{p.n}</h3>
              <a className="tel" href={toTelHref(p.p)}>
                {p.p}
              </a>
              <a href={`mailto:${p.m}`}>{p.m}</a>
              <a className="link-arrow" href={p.u} target="_blank" rel="noopener noreferrer">
                {p.ul}
                <ExternalIcon />
                <span className="visually-hidden"> (öppnas i nytt fönster)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
