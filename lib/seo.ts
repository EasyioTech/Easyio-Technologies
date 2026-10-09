import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";
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
      locale: "en_IN",
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
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE", // User should update
    },
    other: {
      "geo.region": "IN-JK",
      "geo.placename": "Sopore",
      "geo.position": "34.2987;74.4728",
      "ICBM": "34.2987, 74.4728",
    },
  };
}

export function generateJsonLd(schema: Record<string, any>) {
  return {
    __html: JSON.stringify(schema),
  };
}

export const MASTER_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Easyio Technologies",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      description: "Top software development company in Sopore, Kashmir, building high-performance systems and custom digital solutions for startups and enterprises.",
      sameAs: [
        "https://twitter.com/easyiotech",
        "https://linkedin.com/company/easyiotech",
        "https://instagram.com/easyiotech"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "hello@easyio.tech"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Easyio Technologies",
      publisher: {
        "@id": `${SITE_URL}/#organization`
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Easyio Technologies",
      image: `${SITE_URL}/og-image.png`,
      url: SITE_URL,
      telephone: "+91-6005659527", 
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, War Complex, Block 'B', Main Chowk Tehsil Road",
        addressLocality: "Sopore",
        addressRegion: "Jammu and Kashmir",
        postalCode: "193201",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.2987,
        longitude: 74.4728
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00"
      }
    }
  ]
};

