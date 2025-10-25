import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const defaultSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://hyeoksu1234.github.io/zero100_team"
    : "http://localhost:3002");

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteUrl),
  title: "Project Palette — Builder Team Landing",
  description:
    "Introducing Project Palette: a builder team crafting calendar-first automation and a block data OS for AI Builderthon readiness.",
  openGraph: {
    title: "Project Palette — Builder Team Landing",
    description:
      "Meet the team building calendar-first automation and a block data OS. Explore mission, team, and flagship project highlights.",
    url: "https://project-palette.team",
    siteName: "Project Palette",
    images: [
      {
        url: "https://project-palette.team/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project Palette Team"
      }
    ],
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Palette — Builder Team Landing",
    description:
      "Calendar-based automation & block data OS builder team. Explore mission, team, and flagship project highlights.",
    images: ["https://project-palette.team/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground selection:bg-accent selection:text-accent-foreground`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,114,128,0.15),transparent_55%)]" />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
