import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sint Srl — Sicurezza, metodo, visione",
  description:
    "Sint Srl — Progettiamo la sicurezza di luoghi, persone e sistemi dal 1990.",
  openGraph: {
    images: ["https://bolt.new/static/og_default.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#17221d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell" id="top">
          {children}
        </div>
      </body>
    </html>
  );
}
