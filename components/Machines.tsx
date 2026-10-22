import Image from "next/image";
import Link from "next/link";
import { MACHINES } from "@/lib/machines";
import { publicImage } from "@/lib/images";
import { ArrowIcon } from "./Icons";
import { Placeholder } from "./Placeholder";
import { QuoteButton } from "./QuoteButton";

export function Machines() {
  return (
    <section id="maskiner" className="section section--alt" aria-labelledby="maskiner-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">ENSAMÅTERFÖRSÄLJARE I SVERIGE</p>
          <h2 id="maskiner-title">STONEPOWER BORRIGGAR</h2>
          <p>Finsk konstruktion, svensk service. Vi säljer, levererar och servar hela StonePower-programmet.</p>
        </div>
        <ul className="machines">
          {MACHINES.map((m) => {
            const img = publicImage(`/bilder/maskiner/${m.slug}-1.jpg`);
            const href = `/teknisk-data/${m.slug}`;
            return (
              <li key={m.slug}>
                <article className="card">
                  <div className="machine__media">
                    {img ? (
                      <Image
                        src={img}
                        alt={`StonePower ${m.name} i arbete`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 270px"
                      />
                    ) : (
                      <Placeholder label={m.name} />
                    )}
                  </div>
                  <div className="machine__body">
                    <h3>
                      <Link href={href}>{m.name}</Link>
                    </h3>
                    <p>{m.summary}</p>
                    <div className="machine__actions">
                      <Link className="btn btn--outline btn--sm" href={href} aria-label={`Teknisk data för ${m.name}`}>
                        Teknisk data <ArrowIcon />
                      </Link>
                      <QuoteButton subject={`Offert: ${m.name}`} ariaLabel={`Begär offert på ${m.name}`} />
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
