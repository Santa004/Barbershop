import { ADDRESS_LINE, SITE } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

export function Quote() {
  return (
    <section id="offert" className="section" aria-labelledby="offert-title">
      <div className="wrap">
        <div className="quote">
          <div className="quote__aside steel">
            <h2 id="offert-title">FÖRFRÅGAN</h2>
            <p>Beskriv maskinen och felet, så återkommer vi med tillgänglighet och pris.</p>
            <ul className="routing">
              <li>
                <small>Reservdel och pris</small>
                <strong>Kicki, reservdelsansvarig</strong>
              </li>
              <li>
                <small>Service och fältjobb</small>
                <strong>Jonas eller Jesper</strong>
              </li>
              <li>
                <small>Ny maskin från StonePower</small>
                <strong>Jonas</strong>
              </li>
            </ul>
            <p className="quote__foot">
              {ADDRESS_LINE} · {SITE.hours}
            </p>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
