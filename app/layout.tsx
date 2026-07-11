import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingBar, FloatingBookButton } from "@/components/layout/BookingBar";
import { LocalBusinessSchema } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { images, siteConfig } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `${siteConfig.name} – Premium barbershop i Kisa`,
    description: siteConfig.description,
    path: "/",
  }),
  icons: {
    icon: images.favicon,
    apple: images.favicon,
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full bg-neutral-950 text-white antialiased">
        <LocalBusinessSchema />
        <BookingBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBookButton />
      </body>
    </html>
  );
}
