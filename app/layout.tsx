import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnitasConnect | Funding. Strategy. Growth.",
  description:
    "UnitasConnect delivers expert grant writing, bid writing, strategic planning, health & safety consultancy, and project management for charities, VCSEs, SMEs, and community organisations across the UK.",
  keywords:
    "grant writing UK, bid writing, charity consultancy, VCSE support, strategic planning, health and safety consultancy, IEMA, CDM, project management, community organisations",
  openGraph: {
    title: "UnitasConnect | Funding. Strategy. Growth.",
    description:
      "Expert consultancy for charities, SMEs, and community organisations. We handle the funding, strategy, and complexity — you deliver the mission.",
    url: "https://unitasconnect.co.uk",
    siteName: "UnitasConnect",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnitasConnect | Funding. Strategy. Growth.",
    description:
      "Expert consultancy for charities, VCSEs, SMEs and community organisations across the UK.",
  },
  alternates: {
    canonical: "https://unitasconnect.co.uk",
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
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
