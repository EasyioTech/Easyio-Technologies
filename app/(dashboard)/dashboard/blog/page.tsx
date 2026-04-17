export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';
import { blogPosts } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { BlogManager } from '@/modules/admin/components/BlogManager';

export default async function BlogAdminPage() {
  const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));

  return (
    <BlogManager initialPosts={posts} />
  );
}
