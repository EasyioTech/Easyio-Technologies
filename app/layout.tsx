import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Instrument_Serif, Bodoni_Moda, Sacramento } from "next/font/google";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

const sacramento = Sacramento({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Frontier Software Lab",
    description:
      "Easyio Technologies: Building high-performance, modular systems and next-generation business solutions. From custom software to system architecture.",
    keywords: [
      "software development",
      "system architecture",
      "DevOps",
      "custom software",
      "technology consulting",
    ],
  }),
  metadataBase: new URL("https://easyiotech.com"),
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${bodoniModa.variable} ${sacramento.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
