import { SITE } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export function Jourrad() {
  return (
    <aside className="jour" aria-label="Maskinstopp">
      <div className="wrap jour__inner">
        <p className="jour__title">MASKINSTOPP?</p>
        <p className="jour__text">
          Verkstaden har öppet vardagar 7–16. Står maskinen utanför den tiden — ring, så lägger vi upp en plan
          direkt.
        </p>
        <a className="jour__phone" href={`tel:${SITE.phoneTel}`} aria-label={`Ring ${SITE.phoneDisplay}`}>
          <PhoneIcon size={26} />
          {SITE.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
