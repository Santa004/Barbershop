import { PEOPLE } from "@/lib/people";
import { ADDRESS_LINE, MAPS_DIRECTIONS_URL, SITE } from "@/lib/site";
import { toTelHref } from "@/lib/tel";
import { CopyEmail } from "./CopyEmail";
import { MapEmbed } from "./MapEmbed";

export function Contacts() {
  return (
    <section id="kontakt" className="section section--alt" aria-labelledby="kontakt-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">SJU PERSONER, DIREKTKONTAKT</p>
          <h2 id="kontakt-title">KONTAKT</h2>
          <p>
            Växel <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · beställningar till{" "}
            <a href={`mailto:${SITE.orderEmail}`}>{SITE.orderEmail}</a>
          </p>
        </div>

        <ul className="people">
          {PEOPLE.map((p) => {
            const mailId = `mail-${p.name.toLowerCase()}`;
            return (
              <li key={p.email} className="card person">
                <h3>{p.name}</h3>
                <p className="person__role">{p.role}</p>
                {p.tel && (
                  <a className="tel" href={toTelHref(p.tel)}>
                    {p.tel}
                  </a>
                )}
                <a id={mailId} href={`mailto:${p.email}`}>
                  {p.email}
                </a>
                <CopyEmail email={p.email} targetId={mailId} />
              </li>
            );
          })}
        </ul>

        <div className="map">
          <div className="map__info">
            <h3>Besök verkstaden</h3>
            <address>
              {SITE.name}
              <br />
              {ADDRESS_LINE}
            </address>
            <p>{SITE.hours}</p>
            <a className="btn" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Vägbeskrivning
              <span className="visually-hidden"> (öppnar Google Maps i nytt fönster)</span>
            </a>
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
