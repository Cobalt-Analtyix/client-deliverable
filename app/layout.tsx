import type { Metadata } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-dsp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlayBlue — Sector & Client Intelligence | Cobalt Analytix",
  description:
    "Cobalt Analytix sector and client intelligence brief prepared for PlayBlue.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${familjenGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
