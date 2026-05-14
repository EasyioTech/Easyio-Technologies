import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import BlogIndex from "@/components/sections/blog/BlogIndex";
import PageWrapper from "@/components/layout/PageWrapper";
import { Metadata } from "next";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyiotech.com';

export const metadata: Metadata = {
  title: "Engineering Blog | ERP Systems, AI Infrastructure & Software Architecture | Easyio",
  description: "Technical deep dives into ERP systems, AI infrastructure, and high-performance software architecture by the Easyio engineering team.",
  keywords: ["ERP systems", "software architecture", "AI infrastructure", "engineering blog", "technical articles"],
  openGraph: {
    type: 'website',
    title: "Engineering Blog | Easyio Technologies",
    description: "Deep dives into ERP systems, AI infrastructure, and software architecture.",
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
        mergedPosts.push(filePost);
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
