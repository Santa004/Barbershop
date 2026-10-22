# MP Entreprenad Service Borås AB – webbplats

Next.js 15 (App Router, TypeScript, React Server Components) med egen CSS.
Beroenden i drift: `next`, `react`, `react-dom` och `resend` – inget annat.

## Kör lokalt

Kräver Node 20 eller senare.

```bash
npm install
cp .env.example .env.local   # valfritt, sajten fungerar utan
npm run dev                  # http://localhost:3000
```

Övriga kommandon:

| Kommando | Gör |
|---|---|
| `npm run build` | Produktionsbygge (kör även lint och typkontroll) |
| `npm start` | Startar produktionsbygget |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## Miljövariabler

| Variabel | Behövs | Beskrivning |
|---|---|---|
| `RESEND_API_KEY` | För att formuläret ska skicka mejl | Nyckel från [resend.com/api-keys](https://resend.com/api-keys). Saknas den byggs sajten ändå, och formuläret visar e-postadress och telefonnummer i stället för att krascha. |
| `RESEND_FROM` | Rekommenderas | Avsändare, t.ex. `MP Entreprenad <webb@mp-entreprenad.se>`. Domänen måste vara verifierad i Resend. Utan den används `onboarding@resend.dev`, som bara kan skicka till Resend-kontots egen adress. |
| `NEXT_PUBLIC_SITE_URL` | Valfri | Sajtens publika adress (sitemap, canonical, og-bilder). På Vercel används projektets produktionsadress automatiskt. Sätt till `https://mp-entreprenad.se` när domänen är kopplad. |

Formuläret skickar till `order@mp-entreprenad.se`, och även till
`info@mp-entreprenad.se` när kunden valt *Maskinen står — akut*. Reply-to är
kundens e-post, så det räcker att trycka Svara.

## Var ändrar jag…

| Vad | Fil |
|---|---|
| Artikelnummer, artiklar och priser | `lib/parts.ts` – fältet `a` är artikelnumret. Lägg till `pris: "4 900 kr exkl. moms"` på en artikel för att visa pris. |
| Maskinernas tekniska data | `lib/machines.ts` – byt `{SPEC – kompletteras}` mot riktiga värden. |
| Personal och direktnummer | `lib/people.ts` – lägg till `tel: "070-123 45 67"` så blir numret klickbart. |
| Servicepartners | `lib/partners.ts` |
| Telefon, adress, org.nr, sociala medier, koordinater | `lib/site.ts` |
| Färger och typografi | `app/globals.css` (CSS-variabler överst) |

### Platshållare som kunden ska fylla i

Allt som står inom `{HAKPARENTES}` är kunddata som saknas:

- `{ORGNR – fylls i av kunden}` – organisationsnummer, `lib/site.ts`
- `{SPEC – kompletteras}` – teknisk data, `lib/machines.ts`

Koordinaterna i `lib/site.ts` (används i Googles strukturerade data) är en
uppskattning för Ramnaslätt – kontrollera exakt position för Maskingatan 5.

## Bilder

Lägg foton i `public/bilder/` (`hero/`, `delar/`, `maskiner/`, `verkstad/`).
Exakta filnamn står i [`public/bilder/README.md`](public/bilder/README.md).
Saknas en bild visar sajten en randig platshållare, så den kan publiceras innan
alla foton finns. Next.js skalar och komprimerar bilderna automatiskt.

## Publicera på Vercel

Repot är kopplat till Vercel: varje push till `main` bygger och publicerar
sajten automatiskt, och andra grenar får en förhandsadress.

Första gången, eller i ett nytt Vercel-konto:

1. Gå till [vercel.com/new](https://vercel.com/new) och importera GitHub-repot.
2. Ramverket hittas automatiskt (Next.js). Inga byggsteg behöver ändras.
3. Under **Settings → Environment Variables**: lägg till `RESEND_API_KEY`
   (och gärna `RESEND_FROM`). Gör om publiceringen efteråt.
4. Under **Analytics**: klicka **Enable** för Web Analytics. Det är kakfritt,
   så sajten behöver ingen samtyckesruta.
5. Under **Settings → Domains**: lägg till `mp-entreprenad.se` och följ
   DNS-instruktionerna.

## Teknik i korthet

- Startsidan och alla undersidor är statiskt genererade.
- Offertformuläret är en Server Action med serverside-validering och honeypot mot spam.
- `app/sitemap.ts` och `app/robots.ts` genererar sitemap och robots.txt.
- og-/twitterbild (1200×630) genereras i `lib/og.tsx`.
- JSON-LD (schema.org LocalBusiness) ligger på startsidan.
- Google Maps laddas först när besökaren klickar på "Visa karta", så inga
  tredjepartskakor sätts utan att besökaren själv valt det.
- Ljust och mörkt tema följer systeminställningen. Sätt `data-theme="light"`
  eller `"dark"` på `<html>` för att tvinga ett tema.
