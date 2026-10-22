const SERVICES = [
  {
    num: "01",
    title: "Mobil verkstad",
    text: "Fyra servicebilar plus tyngre fordon för omfattande jobb och bärgningsarbeten i fält.",
    points: ["Bandvagnsbyte", "Byte av bomhuvud", "Matarhållare och motorer", "Fältbärgning"],
  },
  {
    num: "02",
    title: "Hydraulikverkstad",
    text: "Egen hydraulikverkstad med utrustning för mycket tunga hydraulcylindrar.",
    points: ["Renovering av cylindrar", "Slang och koppling, Hydroscand", "Pump- och ventilarbeten", "Felsökning på plats"],
  },
  {
    num: "03",
    title: "Delar och förbrukning",
    text: "Försäljning av entreprenadstillbehör, nytillverkat och nyrenoverat.",
    points: ["Bergborrningsutrustning", "Kompressor- och motordelar", "Olja och filter, Filterteknik", "Demoleringsverktyg"],
  },
];

export function Services() {
  return (
    <section id="tjanster" className="section" aria-labelledby="tjanster-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">VERKSTAD OCH FÄLT</p>
          <h2 id="tjanster-title">TJÄNSTER</h2>
          <p>Från akut fältreparation till renovering i egen verkstad – vi tar maskinen tillbaka i drift.</p>
        </div>
        <div className="services">
          {SERVICES.map((s) => (
            <article key={s.num} className="service">
              <span className="service__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="ticks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
