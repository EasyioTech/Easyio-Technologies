export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { TestimonialManager } from '@/modules/admin/components/TestimonialManager';

export default async function TestimonialsAdminPage() {
  const allTestimonials = await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));

  return (
    <TestimonialManager initialTestimonials={allTestimonials} />
  );
}
