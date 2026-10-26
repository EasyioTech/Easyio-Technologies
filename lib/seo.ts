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
  // Prevent duplicate brand suffix if title already contains Easyio
  const fullTitle = title.toLowerCase().includes("easyio") ? title : `${title} | Easyio Technologies`;
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
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
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
      alternateName: [
        "Easyio",
        "Easy io",
        "Easyio Tech",
        "Easyio Technologies Sopore",
        "Easyio Kashmir"
      ],
      legalName: "Easyio Technologies",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      image: `${SITE_URL}/og-image.png`,
      description: "Easyio Technologies is Kashmir's premier software engineering firm and technology consultancy. We build mission-critical enterprise ERPs, cloud architecture, AI workflows, and high-concurrency digital platforms for startups and established enterprises across Jammu & Kashmir and India.",
      foundingDate: "2024",
      founder: [
        {
          "@type": "Person",
          name: "Mohammad Faheem",
          jobTitle: "Founder & CEO",
          url: `${SITE_URL}/about`
        },
        {
          "@type": "Person",
          name: "Burhan Ali",
          jobTitle: "Co-Founder & CTO",
          url: `${SITE_URL}/about`
        },
        {
          "@type": "Person",
          name: "Mohammad Ayoob",
          jobTitle: "Co-Founder & CFO",
          url: `${SITE_URL}/about`
        }
      ],
      sameAs: [
        "https://github.com/EasyioTech",
        "https://twitter.com/easyiotech",
        "https://linkedin.com/company/easyiotech",
        "https://instagram.com/easyiotech"
      ],
      knowsAbout: [
        "Custom Software Engineering",
        "Enterprise Resource Planning (ERP)",
        "Distributed Cloud Architecture",
        "Next.js and Full-Stack Development",
        "PostgreSQL and High-Concurrency Databases",
        "Supply Chain and Cold Storage Software",
        "Point of Sale (POS) Systems",
        "Mobile Application Development"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support and Project Inquiries",
        telephone: "+91-6005659527",
        email: "contact@easyio.tech",
        areaServed: ["IN", "Jammu and Kashmir"],
        availableLanguage: ["English", "Kashmiri", "Urdu", "Hindi"]
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, War Complex, Block 'B', Main Chowk Tehsil Road",
        addressLocality: "Sopore",
        addressRegion: "Jammu and Kashmir",
        postalCode: "193201",
        addressCountry: "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Easyio Technologies",
      alternateName: ["Easyio", "Easy io", "Easyio Tech"],
      publisher: {
        "@id": `${SITE_URL}/#organization`
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Easyio Technologies",
      alternateName: ["Easyio", "Easy io", "Easyio Tech", "Easyio Technologies Sopore"],
      image: `${SITE_URL}/og-image.png`,
      url: SITE_URL,
      description: "Premier software engineering firm and technology consultancy based in Sopore, Kashmir. Designing high-scale ERP systems, mobile applications, and enterprise digital solutions.",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Jammu and Kashmir" },
        { "@type": "City", name: "Sopore" },
        { "@type": "City", name: "Baramulla" },
        { "@type": "City", name: "Srinagar" },
        { "@type": "City", name: "Anantnag" },
        { "@type": "Country", name: "India" }
      ],
      telephone: "+91-6005659527", 
      email: "contact@easyio.tech",
      priceRange: "$$",
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
        closes: "18:00"
      }
    }
  ]
};
