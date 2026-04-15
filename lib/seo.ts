import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://easyiotech.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  author?: string;
  canonicalUrl?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  author,
  canonicalUrl,
  twitterCard = "summary_large_image",
}: SEOMetadata): Metadata {
  const fullTitle = `${title} | Easyio Technologies`;
  const fullCanonicalUrl = canonicalUrl || `${SITE_URL}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonicalUrl,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Easyio Technologies",
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@easyiotech",
    },
    alternates: {
      canonical: fullCanonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function generateJsonLd(schema: Record<string, any>) {
  return {
    __html: JSON.stringify(schema),
  };
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Easyio Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Frontier software lab dedicated to building high-performance systems and next-generation business solutions.",
  sameAs: [
    "https://twitter.com/easyiotech",
    "https://linkedin.com/company/easyio",
    "https://instagram.com/easyiotech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "hello@easyiotech.com",
  },
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Easyio Technologies",
  description:
    "Frontier software lab building high-performance, user-centric systems.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
