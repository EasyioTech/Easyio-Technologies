import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Instrument_Serif, Sacramento } from "next/font/google";
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

const sacramento = Sacramento({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Easyio Technologies | Best Tech & Software Company in Kashmir",
    description:
      "Easyio Technologies: Premier software engineering firm and system architecture lab based in Sopore & Srinagar, Kashmir. We build mission-critical ERP systems, web & mobile applications, and enterprise digital solutions.",
    keywords: [
      "Easyio Technologies",
      "Easyio",
      "Easy io",
      "Easyio Tech",
      "Easyio Kashmir",
      "Easyio Sopore",
      "best tech company in Kashmir",
      "best software company in Kashmir",
      "software development agency Kashmir",
      "custom ERP systems Kashmir"
    ],
  }),
  metadataBase: new URL("https://easyio.tech"),
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MotionProvider from "@/components/providers/MotionProvider";
import { 
  MASTER_SCHEMA, 
  generateJsonLd 
} from "@/lib/seo";

import FloatingLeadWidget from "@/components/shared/FloatingLeadWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(MASTER_SCHEMA)}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${sacramento.variable} antialiased select-none`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <MotionProvider>{children}</MotionProvider>
            <FloatingLeadWidget />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
