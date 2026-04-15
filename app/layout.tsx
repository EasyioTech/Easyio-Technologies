import type { Metadata } from "next";
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

import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
