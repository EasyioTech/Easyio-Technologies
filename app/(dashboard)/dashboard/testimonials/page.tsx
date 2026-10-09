export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { TestimonialManager } from '@/modules/admin/components/TestimonialManager';

export default async function TestimonialsAdminPage() {
  let allTestimonials: any[] = [];
  try {
    allTestimonials = await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
  } catch (error) {
    console.error("Database error in TestimonialsAdminPage:", error);
  }

  return (
    <TestimonialManager initialTestimonials={allTestimonials} />
  );
}
