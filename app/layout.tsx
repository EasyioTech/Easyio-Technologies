import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          storageKey="easyio-theme"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
