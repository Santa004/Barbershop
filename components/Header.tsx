import Link from "next/link";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";
import { PhoneIcon } from "./Icons";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="logo" aria-label="MP Entreprenad Service Borås AB – till startsidan">
          <span className="logo__name">
            MP <span>Entreprenad</span>
          </span>
          <span className="logo__sub">SERVICE BORÅS AB</span>
        </Link>

        <nav className="main-nav" aria-label="Huvudmeny">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${SITE.phoneTel}`} aria-label={`Ring ${SITE.phoneDisplay}`}>
            <PhoneIcon />
            <span className="header-phone__label">{SITE.phoneDisplay}</span>
          </a>
          <Link className="btn btn--sm" href="/#offert">
            Begär offert
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
