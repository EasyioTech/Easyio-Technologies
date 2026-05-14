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
    title: "Frontier Software Lab | Best Tech Company in Kashmir & India",
    description:
      "Easyio Technologies: Premier software development and system architecture lab in Kashmir, India. We build high-performance web apps, mobile apps (iOS/Android), and modular LSM systems for the global market.",
    keywords: [
      "software development Kashmir",
      "best tech company in Srinagar",
      "web apps development India",
      "mobile app development Kashmir",
      "iOS app development India",
      "system architecture",
      "LSM system design",
      "custom software Srinagar",
      "AI solutions Kashmir",
      "LLM integration services",
      "Easyio Technologies",
      "Frontier Software Lab",
    ],
  }),
  metadataBase: new URL("https://easyiotech.com"),
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { 
  ORGANIZATION_SCHEMA, 
  WEBSITE_SCHEMA, 
  LOCAL_BUSINESS_SCHEMA, 
  generateJsonLd 
} from "@/lib/seo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(ORGANIZATION_SCHEMA)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(WEBSITE_SCHEMA)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(LOCAL_BUSINESS_SCHEMA)}
        />
      </head>
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
