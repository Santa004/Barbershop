import { PARTS, partSlug } from "@/lib/parts";
import { publicImage } from "@/lib/images";
import { PartsSearch } from "./PartsSearch";

export function Parts() {
  // Bildkontroll sker vid byggtid så att kort utan foto får platshållare direkt.
  const images: Record<string, string | null> = {};
  for (const p of PARTS) images[p.a] = publicImage(`/bilder/delar/${partSlug(p)}.jpg`);

  return (
    <section id="reservdelar" className="section section--alt" aria-labelledby="reservdelar-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">LAGER OCH NYTILLVERKNING</p>
          <h2 id="reservdelar-title">RESERVDELAR</h2>
          <p>Delar vi har hemma eller tillverkar själva. Hittar du inte det du söker – fråga ändå.</p>
        </div>
        <PartsSearch images={images} />
      </div>
    </section>
  );
}
