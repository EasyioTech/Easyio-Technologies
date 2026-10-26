import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Easyio Technologies | Leadership, Engineering Lab & Mission",
  description:
    "Discover Easyio Technologies — Kashmir's premier software engineering firm and technology consultancy founded in Sopore by Mohammad Faheem, Burhan Ali, and Mohammad Ayoob. Specializing in enterprise ERPs, cloud platforms, and custom software.",
  canonicalUrl: "https://easyio.tech/about",
  keywords: [
    "Easyio Technologies",
    "About Easyio Technologies",
    "Easyio founders",
    "Mohammad Faheem Easyio",
    "Burhan Ali Easyio",
    "Mohammad Ayoob Easyio",
    "software company in Sopore",
    "best tech company in Kashmir",
    "Kashmir software development agency",
  ],
});

const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://easyio.tech/about/#webpage",
      url: "https://easyio.tech/about",
      name: "About Easyio Technologies",
      isPartOf: {
        "@id": "https://easyio.tech/#website",
      },
      about: {
        "@id": "https://easyio.tech/#organization",
      },
      mainEntity: {
        "@id": "https://easyio.tech/#organization",
      },
      description:
        "Comprehensive background on Easyio Technologies, its founding leadership (Mohammad Faheem, Burhan Ali, Mohammad Ayoob), software engineering philosophy, and enterprise tech solutions across Jammu & Kashmir.",
      inLanguage: "en-IN",
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(ABOUT_PAGE_SCHEMA)}
      />
      {children}
    </>
  );
}
