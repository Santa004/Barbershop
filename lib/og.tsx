import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "MP Entreprenad Service Borås AB – service och reparation av bergborrningsutrustning";

/** Gemensam og-/twitterbild, 1200×630. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1b2126",
          color: "#e8eae7",
          padding: "64px 72px",
          backgroundImage:
            "linear-gradient(90deg, rgba(232,234,231,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(232,234,231,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: 1 }}>
            MP&nbsp;<span style={{ color: "#e07b43" }}>ENTREPRENAD</span>
          </div>
          <div style={{ fontSize: 20, letterSpacing: 6, color: "#a3abb1", marginTop: 6 }}>SERVICE BORÅS AB</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", borderLeft: "8px solid #bd4f16", paddingLeft: 36 }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1 }}>STILLASTÅENDE BORRIGG</div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1, color: "#e07b43", marginTop: 8 }}>ÄR VÅRT JOBB</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#c9cdcf" }}>
          <span>Service · Reparation · Reservdelar · StonePower</span>
          <span style={{ color: "#e8eae7", fontWeight: 700 }}>033-10 82 63</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
