import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Virosh Daily Play | Product Concept",
  description: "A yeast-protein daily essentials blend with optional flavour shots.",
  openGraph: {
    title: "Virosh Daily Play",
    description: "Same strong base. Pick your play.",
    images: [{ url: "/og.png", width: 1536, height: 910 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virosh Daily Play",
    description: "Same strong base. Pick your play.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
