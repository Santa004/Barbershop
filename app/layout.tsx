import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE, siteUrl } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const HOME_TITLE = "MP Entreprenad Service Borås AB — service och reparation av bergborrningsutrustning";
const HOME_DESCRIPTION =
  "Service, reparation och reservdelar för bergborrningsutrustning och entreprenadmaskiner i hela Sverige. Fyra servicebilar, egen hydraulikverkstad i Borås och ensamåterförsäljare för StonePower.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: HOME_TITLE, template: "%s | MP Entreprenad Service Borås AB" },
  description: HOME_DESCRIPTION,
  applicationName: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: SITE.name,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1b2126" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f11" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Vercel Web Analytics är kakfritt och laddas bara i produktion på Vercel.
  const analytics = process.env.VERCEL_ENV === "production";

  return (
    <html lang="sv" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <a className="skip-link" href="#innehall">
          Hoppa till innehållet
        </a>
        <Header />
        <main id="innehall" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {analytics && (
          <>
            <Script id="vercel-analytics" strategy="afterInteractive">
              {"window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};"}
            </Script>
            <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
