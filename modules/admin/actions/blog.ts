'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
import { blogPosts } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';
import { z } from 'zod';
import { CACHE_TAGS } from '@/lib/cache';

const blogSchema = z.object({
  title: z.string().min(2, 'Title is too short'),
  slug: z.string().min(2, 'Slug is too short'),
  excerpt: z.string().min(10, 'Excerpt is too short'),
  content: z.string().min(20, 'Content is too short'),
  author: z.string().min(2, 'Author name is required'),
  category: z.string().min(2, 'Category is required'),
  image: z.string().optional(),
  published: z.enum(['true', 'false']).default('false'),
  focusKeyword: z.string().optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  keywords: z.string().optional(),
  readingTime: z.string().optional(),
  toc: z.string().optional(),
});

export async function getBlogPost(id: string) {
  try {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return post || null;
  } catch (error) {
    return null;
  }
}

export async function createBlogPost(data: z.infer<typeof blogSchema>) {
  try {
    const validatedData = blogSchema.parse(data);
    const now = new Date();

    await db.insert(blogPosts).values({
      id: crypto.randomUUID(),
      ...validatedData,
      publishedAt: validatedData.published === 'true' ? now : null,
      createdAt: now,
      updatedAt: now,
    });

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.BLOG_POSTS);
    revalidatePath('/dashboard/blog');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateBlogPost(id: string, data: Partial<z.infer<typeof blogSchema>>) {
  try {
    const updateData: any = {
      ...data,
      updatedAt: new Date()
    };

    // Auto-set publishedAt if becoming published
    if (data.published === 'true') {
      updateData.publishedAt = new Date();
    }

    await db.update(blogPosts)
      .set(updateData)
      .where(eq(blogPosts.id, id));

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.BLOG_POSTS);
    if (data.slug) {
      revalidateTag(CACHE_TAGS.BLOG_POST_DETAIL);
    }
    revalidatePath('/dashboard/blog');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.BLOG_POSTS);
    revalidateTag(CACHE_TAGS.BLOG_POST_DETAIL);
    revalidatePath('/dashboard/blog');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getPublishedBlogPosts() {
  try {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, 'true'))
      .orderBy(desc(blogPosts.publishedAt));
  } catch (error) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);
    return post || null;
  } catch (error) {
    return null;
  }
}
