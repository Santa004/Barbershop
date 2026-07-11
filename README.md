# Kisa Barbershop

Premium Next.js-webbplats för Kisa Barbershop på torget i Kisa.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint + Prettier
- Vercel-ready

## Kom igång

```bash
npm install
cp .env.example .env.local
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – utvecklingsserver
- `npm run build` – produktionsbuild
- `npm run start` – kör produktionsbuild
- `npm run lint` – ESLint
- `npm run typecheck` – TypeScript
- `npm run format` – Prettier

## Struktur

- `app/` – sidor och routing
- `components/` – återanvändbara UI-komponenter
- `content/` – tjänster, FAQ, team m.m.
- `public/images/` – bilder och logotyp
- `_legacy/` – arkiverad Webflow-export (referens)

## Bokning

All bokning går via Bokahit:

`https://bokahit.se/barber-main-page/790205074`

Sätt `NEXT_PUBLIC_BOOKING_URL` i `.env.local` om länken ändras.
