import Image from "next/image";
import { publicImage } from "@/lib/images";

const SPECS = [
  { n: "4", t: "ambulerande servicebilar + tung bärgningsbil för fältjobb" },
  { n: "1000", t: "kvm verkstad på Ramnaslätt, Borås — egen hydraulikverkstad" },
  { n: "9", t: "servicepartners från Flekkefjord till Kiruna" },
  { n: "35", t: "år i branschen hos grundaren Michael Persson" },
];

export function Hero() {
  const bg = publicImage("/bilder/hero/hero-verkstad.jpg") ?? publicImage("/bilder/hero-verkstad.jpg");

  return (
    <section className="hero steel" aria-labelledby="hero-title">
      {bg && (
        <div className="hero__bg">
          <Image
            src={bg}
            alt="MP Entreprenads verkstad på Ramnaslätt i Borås med en borrigg inne för service"
            fill
            priority
            sizes="100vw"
            quality={70}
          />
        </div>
      )}
      <div className="wrap hero__inner">
        <div>
          <p className="eyebrow">SERVICE &amp; REPARATION SEDAN 2000</p>
          <h1 id="hero-title">
            STILLASTÅENDE BORRIGG
            <span className="accent">ÄR VÅRT JOBB</span>
          </h1>
          <p className="hero__lead">
            Vi servar och reparerar bergborrningsutrustning, entreprenadmaskiner och markförstärkningsmaskiner i
            hela Sverige. Fyra ambulerande servicebilar, egen hydraulikverkstad och ensamåterförsäljare för
            StonePower.
          </p>
          <div className="hero__ctas">
            <a className="btn" href="#offert">
              Begär service eller offert
            </a>
            <a className="btn btn--outline" href="#reservdelar">
              Sök reservdel
            </a>
          </div>
        </div>
        <ul className="spec-list" aria-label="MP Entreprenad i siffror">
          {SPECS.map((s) => (
            <li key={s.n}>
              <strong>{s.n}</strong>
              <span>{s.t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap brands">
        Atlas Copco / Epiroc · Sandvik · StonePower · Hydroscand-auktoriserade · Filterteknik
      </div>
    </section>
  );
}
