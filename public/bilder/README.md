# Bilder

Lägg kundens foton här med **exakt** de filnamn som står nedan. Saknas en fil
visar sajten en randig platshållare i stället, så sajten kan byggas och
publiceras innan alla bilder finns.

- Format: **.jpg** (gemener i filnamnet).
- Storlek: minst 1600 px bred för hero, minst 1200 px för maskiner, minst 800 px för delar.
- Next.js skalar om och komprimerar automatiskt (AVIF/WebP), så originalfoton går bra.
- Efter att du lagt till bilder: committa och pusha – Vercel bygger om sajten.

## hero/

| Fil | Används till |
|---|---|
| `hero/hero-verkstad.jpg` | Bakgrund i toppsektionen på startsidan (mörkläggs automatiskt). Liggande, gärna verkstaden eller en borrigg i arbete. |

`bilder/hero-verkstad.jpg` (direkt i `bilder/`) fungerar också.

## maskiner/

Tre bilder per maskin. Bild 1 visas även på startsidans maskinkort (4:3-beskärning).

| Fil | Maskin |
|---|---|
| `maskiner/stone-spider-1.jpg` | Stone Spider – huvudbild |
| `maskiner/stone-spider-2.jpg` | Stone Spider – bild 2 |
| `maskiner/stone-spider-3.jpg` | Stone Spider – bild 3 |
| `maskiner/stone-scorpion-1.jpg` | Stone Scorpion – huvudbild |
| `maskiner/stone-scorpion-2.jpg` | Stone Scorpion – bild 2 |
| `maskiner/stone-scorpion-3.jpg` | Stone Scorpion – bild 3 |
| `maskiner/stone-termite-1.jpg` | Stone Termite – huvudbild |
| `maskiner/stone-termite-2.jpg` | Stone Termite – bild 2 |
| `maskiner/stone-termite-3.jpg` | Stone Termite – bild 3 |
| `maskiner/drill-och-split-s150-1.jpg` | Drill & Split S150 – huvudbild |
| `maskiner/drill-och-split-s150-2.jpg` | Drill & Split S150 – bild 2 |
| `maskiner/drill-och-split-s150-3.jpg` | Drill & Split S150 – bild 3 |

## delar/

En bild per artikel, beskärs till 4:3. Filnamnet är artikelnumret i gemener
(fältet `a` i `lib/parts.ts`). Byter du artikelnummer – byt även filnamn.

| Fil | Artikel |
|---|---|
| `delar/cop-1838he.jpg` | Atlas Copco COP 1838HE |
| `delar/cop-1238.jpg` | Atlas Copco COP 1238 |
| `delar/slit-atl.jpg` | Diverse slitdelar till Atlas-hammare |
| `delar/medb-uni.jpg` | Medbringare till flertalet hammarmodeller |
| `delar/sug-5-d579.jpg` | 5″ sugfot till ROC D5/D7/D9 |
| `delar/ursp-d57r.jpg` | Urspårningsskydd till tidiga ROC D5/D7 med rundbom |
| `delar/ursp-t3540.jpg` | Urspårningsskydd till ROC T35/T40 |
| `delar/karu-axel.jpg` | Karusellstång/axel till D5/D7/D9/T35/T40 |
| `delar/bana-lank.jpg` | Nytillverkad bananlänk till ROC D5/D7/D9/T35/T40 |
| `delar/slad-stal.jpg` | Borrmaskinsslädar i stål, Atlas Copco/Epiroc D5/D7/D9/T35/T40 |
| `delar/larv-d3t30.jpg` | Larvband D3/T30 |
| `delar/tac56-styr.jpg` | Styrningssats TAC56 till lilla borrstödet, D3/T30 |
| `delar/rad-dc302.jpg` | Radiolåda + mottagare till Sandvik DC302 |
| `delar/rad-dc122.jpg` | Radiolåda till Sandvik DC122 |
| `delar/kedj-512hc.jpg` | Nyrenoverad kedjespännare till ROC 512HC/542HC |
| `delar/matv-512hc.jpg` | Nyrenoverad matarväxel till Atlas Copco ROC 512 HC |
| `delar/dct-kona.jpg` | Nytillverkad DCT-kona / utloppssektion |
| `delar/fora-liten.jpg` | Nytillverkad föravskiljare, lilla modellen |
| `delar/reno-bstod.jpg` | Renoveringskit för stora borrstödet |
| `delar/luck-div.jpg` | Diverse luckor till borrvagn |
| `delar/pack-gummi.jpg` | Gummipackningar till div. maskiner |
| `delar/roto-tilt.jpg` | Rototilt |
| `delar/trans-s09.jpg` | Transtronic Phone S09 rugged med mjukvara |

## verkstad/

Reserverad för bilder från verkstaden och servicebilarna. Används inte av koden
ännu – lägg dem här så finns de samlade när de ska in på sajten.
