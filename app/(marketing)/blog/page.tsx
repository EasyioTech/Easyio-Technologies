import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import BlogIndex from "@/components/sections/blog/BlogIndex";
import PageWrapper from "@/components/layout/PageWrapper";
import { Metadata } from "next";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyio.tech';

export const metadata: Metadata = {
  title: "Software & Tech Guides Kashmir | Custom ERPs & Architecture | Easyio",
  description: "Explore in-depth software engineering guides, apple mandi ERPs, cold storage logistics, and technology benchmarks in Kashmir by Easyio Technologies.",
  keywords: ["software company in kashmir", "tech company in kashmir", "ERP systems kashmir", "software architecture", "apple mandi software", "engineering blog"],
  openGraph: {
    type: 'website',
    title: "Software & Tech Guides Kashmir | Easyio Technologies",
    description: "In-depth engineering guides, custom ERPs, cold storage software, and tech benchmarks in Kashmir.",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    url: `${siteUrl}/blog`,
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

// Cached query for blog posts
const getCachedBlogPosts = cacheQuery(
  () => db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.published, 'true'))
    .orderBy(desc(blogPosts.publishedAt)),
  [CACHE_TAGS.BLOG_POSTS],
  CACHE_DURATION.MEDIUM
);

export default async function BlogListingPage() {
  try {
    // Only fetch published posts (cached)
    const rawPosts = await getCachedBlogPosts();

    const posts = rawPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      description: post.seoDescription || post.excerpt,
      date: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : '',
      author: post.author,
      category: post.category,
      content: post.content,
      image: post.image,
      readingTime: post.readingTime,
      keywords: post.keywords,
      focusKeyword: post.focusKeyword,
      seoTitle: post.seoTitle,
      toc: post.toc,
    }));

    // Merge with file-based posts if database is empty or failing
    const filePosts = getBlogPosts();
    const mergedPosts = [...posts];
    
    // Add file posts that don't exist in DB (by slug)
    filePosts.forEach(filePost => {
      if (!mergedPosts.some(p => p.slug === filePost.slug)) {
        mergedPosts.push(filePost as any);
      }
    });

    return (
      <PageWrapper>
        <BlogIndex posts={mergedPosts as any} />
      </PageWrapper>
    );
  } catch (error: any) {
    console.error("DATABASE_ERROR_IN_BLOG:", error);
    
    // Fallback to file-based posts on DB error
    const filePosts = getBlogPosts();
    
    return (
      <PageWrapper>
        <BlogIndex posts={filePosts as any} />
      </PageWrapper>
    );
  }
}
