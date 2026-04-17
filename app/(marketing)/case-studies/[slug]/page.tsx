import { Metadata } from "next";

import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import ProjectLayout from "@/components/sections/projects/ProjectLayout";
import JsonLd from "@/components/shared/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyiotech.com';

// Force dynamic rendering - no static generation at build time
// (DB is not available during Docker build stage)
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [project] = await db.select().from(projects).where(eq(projects.slug, slug)).limit(1);

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
  const [project] = await db.select().from(projects).where(eq(projects.slug, slug)).limit(1);

  if (!project) {
    notFound();
  }

  const canonical = `${siteUrl}/case-studies/${project.slug}`;

  // Organization / Article Schema
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': project.title,
    'description': project.seoDescription || project.description,
    'image': project.image || undefined,
    'datePublished': project.createdAt.toISOString(),
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
