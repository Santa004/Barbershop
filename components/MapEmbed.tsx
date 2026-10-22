"use client";

import { useState } from "react";
import { MAPS_EMBED_URL } from "@/lib/site";
import { MapPinIcon } from "./Icons";

/**
 * Kartan laddas först när besökaren klickar. Då sätter Google inga kakor
 * förrän besökaren själv valt att visa kartan – därför behövs ingen samtyckesruta.
 */
export function MapEmbed() {
  const [show, setShow] = useState(false);
  return (
    <div className="map__frame">
      {show ? (
        <iframe
          src={MAPS_EMBED_URL}
          title="Karta till Maskingatan 5, Borås"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map__facade">
          <button type="button" className="btn btn--outline" onClick={() => setShow(true)}>
            <MapPinIcon /> Visa karta
          </button>
          <p>Kartan hämtas från Google Maps när du klickar.</p>
        </div>
      )}
    </div>
  );
}
