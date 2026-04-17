import { unstable_cache } from 'next/cache';

/**
 * Wrapper for unstable_cache to create reusable cached database queries
 * Usage: const getCachedPosts = cacheQuery(() => db.select()..., ['blog-posts'], 3600)
 */
export function cacheQuery<T>(
  fn: () => Promise<T>,
  tags: string[],
  revalidateSeconds: number = 3600
): () => Promise<T> {
  return unstable_cache(fn, tags, { revalidate: revalidateSeconds, tags });
}

/**
 * Specific cache keys for invalidation
 */
export const CACHE_TAGS = {
  // Blog
  BLOG_POSTS: 'blog-posts',
  BLOG_POST_DETAIL: 'blog-post-detail',

  // Projects / Case Studies
  PROJECTS: 'projects',
  PROJECT_DETAIL: 'project-detail',

  // Testimonials
  TESTIMONIALS: 'testimonials',

  // Home page dependencies
  HOME_DATA: 'home-data',
} as const;

/**
 * Cache durations (in seconds)
 */
export const CACHE_DURATION = {
  LONG: 86400,    // 24 hours
  MEDIUM: 3600,   // 1 hour
  SHORT: 1800,    // 30 minutes
  VERY_SHORT: 300, // 5 minutes
} as const;
