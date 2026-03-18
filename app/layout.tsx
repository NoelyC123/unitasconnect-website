import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UnitasConnect | Funding. Strategy. Growth.",
  description:
    "UnitasConnect supports VCSEs, SMEs, CICs and community organisations across the UK with grant writing, bid writing, strategic planning, health & safety consultancy, project management, and governance support.",
  keywords:
    "grant writing UK, bid writing, VCSE support, charity consultancy, strategic planning, health and safety, IEMA, project management, Cumbria, Lancashire, community organisations",
  openGraph: {
    title: "UnitasConnect | Funding. Strategy. Growth.",
    description:
      "Practical, hands-on consultancy for charities, VCSEs, SMEs and community organisations. Funding secured. Strategies built. Results delivered.",
    url: "https://unitasconnect.com",
    siteName: "UnitasConnect",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnitasConnect | Funding. Strategy. Growth.",
    description:
      "Practical consultancy for VCSEs, SMEs and community organisations across the UK.",
  },
  alternates: {
    canonical: "https://unitasconnect.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const hasGaId = typeof gaId === "string" && gaId.startsWith("G-");

  return (
    <html lang="en-GB">
      <head>
        {hasGaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
