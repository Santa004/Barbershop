import Link from "next/link";
import { NAV } from "@/lib/nav";
import { ADDRESS_LINE, SITE } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer steel">
      <div className="wrap footer-cols">
        <div>
          <h2>Kontakt</h2>
          <address>
            {SITE.name}
            <br />
            {ADDRESS_LINE}
          </address>
          <p>
            <a className="num" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE.orderEmail}`}>{SITE.orderEmail}</a>
            <br />
            <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a>
          </p>
        </div>
        <div>
          <h2>Öppettider</h2>
          <p>Verkstad och reservdelar: vardagar 07–16</p>
          <p>Maskinstopp utanför öppettid: ring, så lägger vi upp en plan.</p>
          <h2 className="footer-gap">Auktorisationer</h2>
          <ul>
            <li>Ensamåterförsäljare för StonePower i Sverige</li>
            <li>Hydroscand-auktoriserade</li>
            <li>Filterteknik</li>
          </ul>
        </div>
        <div>
          <h2>Snabbmeny</h2>
          <nav aria-label="Snabbmeny">
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#offert">Begär offert</Link>
              </li>
              <li>
                <Link href="/integritetspolicy">Integritetspolicy</Link>
              </li>
            </ul>
          </nav>
          <div className="socials">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="MP Entreprenad på Facebook (öppnas i nytt fönster)">
              <FacebookIcon />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="MP Entreprenad på Instagram (öppnas i nytt fönster)">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 {SITE.name}</p>
        <p>Org.nr {SITE.orgNr}</p>
      </div>
    </footer>
  );
}
