import { Metadata } from "next";

import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import PostLayout from "@/components/sections/blog/PostLayout";
import { notFound } from "next/navigation";
import JsonLd from "@/components/shared/JsonLd";
import PageWrapper from "@/components/layout/PageWrapper";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyiotech.com';

function extractFaqs(content: string): { question: string; answer: string }[] {
  const faqSection = content.split(/##\s+Frequently Asked Questions/i)[1];
  if (!faqSection) return [];

  const lines = faqSection.split('\n').filter(Boolean);
  const faqs: { question: string; answer: string }[] = [];
  let currentQ = '';
  let currentA: string[] = [];

  for (const line of lines) {
    if (line.startsWith('### ') || (line.startsWith('**') && line.endsWith('**'))) {
      if (currentQ && currentA.length) {
        faqs.push({ question: currentQ, answer: currentA.join(' ').trim() });
      }
      currentQ = line.replace(/^###\s*/, '').replace(/\*\*/g, '').trim();
      currentA = [];
    } else if (currentQ && line.trim()) {
      currentA.push(line.trim());
    }
  }

  if (currentQ && currentA.length) {
    faqs.push({ question: currentQ, answer: currentA.join(' ').trim() });
  }

  return faqs.slice(0, 8);
}

// Cached query for individual blog post
const getBlogPostBySlug = (slug: string) =>
  cacheQuery(
    () => db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1),
    [CACHE_TAGS.BLOG_POST_DETAIL, slug],
    CACHE_DURATION.MEDIUM
  );

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [post] = await getBlogPostBySlug(slug)();

  if (!post) return {};

  const canonical = `${siteUrl}/blog/${post.slug}`;
  const ogImage = post.image || `${siteUrl}/og-image.png`;

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords?.split(',').map(k => k.trim()),
    authors: [{ name: post.author }],
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: canonical,
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: [post.author],
      tags: post.keywords?.split(',').map(k => k.trim()),
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post] = await getBlogPostBySlug(slug)();

  if (!post || post.published !== 'true') {
    notFound();
  }

  const canonical = `${siteUrl}/blog/${post.slug}`;
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const faqs = extractFaqs(post.content);

  // Main TechArticle schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': post.title,
    'description': post.seoDescription || post.excerpt,
    'image': post.image || undefined,
    'datePublished': post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    'dateModified': post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
    'author': {
      '@type': 'Person',
      'name': post.author,
      'url': `${siteUrl}/about`,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Easyio Technologies',
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonical,
    },
    'keywords': post.keywords || undefined,
    'timeRequired': post.readingTime ? `PT${post.readingTime.replace(' min read', 'M')}` : undefined,
    'articleBody': post.content.substring(0, 500) + '...',
    'wordCount': wordCount,
  };

  // BreadcrumbList schema
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
        'name': 'Blog',
        'item': `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': canonical,
      },
    ],
  };

  // FAQPage schema (if FAQs found)
  const faqSchema = faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  } : null;

  const mappedPost = {
    ...post,
    description: post.seoDescription || post.excerpt,
    date: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : '',
    keywords: post.keywords,
    focusKeyword: post.focusKeyword,
    seoTitle: post.seoTitle,
    toc: post.toc,
  };

  return (
    <PageWrapper>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <PostLayout post={mappedPost as any} />
    </PageWrapper>
  );
}
