import { Metadata } from "next";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import ProjectLayout from "@/components/sections/projects/ProjectLayout";
import JsonLd from "@/components/shared/JsonLd";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyio.tech';

const FALLBACK_PROJECTS: Record<string, any> = {
  "enterprise-resource-protocol": {
    slug: "enterprise-resource-protocol",
    title: "Enterprise Resource Protocol (ERP)",
    description: "Custom operational software engineered for apple cold storage and fruit mandi distribution networks across Sopore & Kashmir.",
    category: "DISTRIBUTED_SYSTEMS",
    image: "https://itx-ali.netlify.app/oruerp.png",
    tags: ["ERP", "Supply Chain", "Next.js", "PostgreSQL"],
    createdAt: new Date("2024-01-15"),
    seoTitle: "Enterprise ERP Case Study | Easyio Technologies",
    seoDescription: "How Easyio engineered a custom cold storage and mandi ERP in Sopore, cutting dispatch bottleneck by 43%."
  },
  "global-commerce-gateway": {
    slug: "global-commerce-gateway",
    title: "Global Commerce Gateway",
    description: "Headless Next.js international e-commerce platform exporting luxury Kashmir handicrafts & saffron to clients in the USA, UK & UAE.",
    category: "CLOUD_ARCHITECTURE",
    image: "https://itx-ali.netlify.app/serique.png",
    tags: ["Next.js", "Headless", "Global Payments", "Stripe"],
    createdAt: new Date("2024-03-20"),
    seoTitle: "Global E-Commerce Case Study | Easyio Technologies",
    seoDescription: "Headless Next.js store for Kashmir artisan exports achieving 1.1s load speed and 3.8x conversion increase."
  },
  "institutional-learning-management": {
    slug: "institutional-learning-management",
    title: "Institutional Learning Management (LMS)",
    description: "Scalable live learning and testing infrastructure supporting 14,000+ active students with sub-second video sync.",
    category: "AI_INFRASTRUCTURE",
    image: "https://itx-ali.netlify.app/technnurture.png",
    tags: ["EdTech", "WebSockets", "Node.js", "AWS"],
    createdAt: new Date("2024-02-10"),
    seoTitle: "EdTech LMS Case Study | Easyio Technologies",
    seoDescription: "Architecture and scaling of a live learning system handling 14,000 concurrent students."
  },
  "financial-management-suite": {
    slug: "financial-management-suite",
    title: "Financial Management Suite",
    description: "Instant UPI and ledger reconciliation engine processing over ₹1.4Cr in daily wholesale transactions with zero latency.",
    category: "FINTECH_SECURITY",
    image: "https://itx-ali.netlify.app/orulabs.png",
    tags: ["FinTech", "Ledger", "ACID", "Postgres"],
    createdAt: new Date("2024-04-05"),
    seoTitle: "FinTech Ledger Suite Case Study | Easyio Technologies",
    seoDescription: "High-volume transactional ledger system with zero data discrepancies."
  },
  "hotel-management-platform": {
    slug: "hotel-management-platform",
    title: "Hotel Management Platform",
    description: "Automated booking and reservation pipeline for luxury hospitality chains with real-time payment gateway settlement.",
    category: "INDUSTRIAL_LOGIC",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    tags: ["Hospitality", "Booking Engine", "Razorpay"],
    createdAt: new Date("2024-05-12"),
    seoTitle: "Hotel Booking Platform Case Study | Easyio Technologies",
    seoDescription: "Custom direct booking software boosting direct hotel reservations by 68%."
  }
};

// Cached query for individual project
const getProjectBySlug = (slug: string) =>
  cacheQuery(
    () => db.select().from(projects).where(eq(projects.slug, slug)).limit(1),
    [CACHE_TAGS.PROJECT_DETAIL, slug],
    CACHE_DURATION.MEDIUM
  );

async function resolveProject(slug: string) {
  try {
    const [dbProject] = await getProjectBySlug(slug)();
    if (dbProject) return dbProject;
  } catch (e) {
    console.error("DB query failed in resolveProject:", e);
  }
  return FALLBACK_PROJECTS[slug] || null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await resolveProject(slug);

  if (!project) return {};

  const canonical = `${siteUrl}/case-studies/${project.slug}`;
  const ogImage = project.image || `${siteUrl}/og-image.png`;

  return {
    title: project.seoTitle || `${project.title} | Case Study | Easyio Technologies`,
    description: project.seoDescription || project.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await resolveProject(slug);

  if (!project) {
    notFound();
  }

  const canonical = `${siteUrl}/case-studies/${project.slug}`;
  const publishedDate = project.createdAt instanceof Date ? project.createdAt.toISOString() : new Date().toISOString();

  // Organization / Article Schema
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': project.title,
    'description': project.seoDescription || project.description,
    'image': project.image || undefined,
    'datePublished': publishedDate,
    'author': {
      '@type': 'Organization',
      'name': 'Easyio Technologies',
      'url': siteUrl,
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonical,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Case Studies',
        'item': `${siteUrl}/case-studies`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': project.title,
        'item': canonical,
      },
    ],
  };

  return (
    <PageWrapper>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectLayout project={project as any} />
    </PageWrapper>
  );
}
