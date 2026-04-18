'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { CACHE_TAGS } from '@/lib/cache';

const testimonialSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  role: z.string().min(2, 'Role is required'),
  content: z.string().min(10, 'Testimonial content is too short'),
  avatar: z.string().optional(),
  company: z.string().optional().or(z.literal('')),
  rating: z.string().default('5'),
});

export async function getTestimonial(id: string) {
  try {
    const [item] = await db.select().from(testimonials).where(eq(testimonials.id, id)).limit(1);
    return item || null;
  } catch (error) {
    return null;
  }
}

export async function createTestimonial(data: z.infer<typeof testimonialSchema>) {
  try {
    const validatedData = testimonialSchema.parse(data);

    await db.insert(testimonials).values({
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date(),
    });

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.TESTIMONIALS, 'max');
    revalidatePath('/dashboard/testimonials');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateTestimonial(id: string, data: Partial<z.infer<typeof testimonialSchema>>) {
  try {
    await db.update(testimonials)
      .set(data)
      .where(eq(testimonials.id, id));

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.TESTIMONIALS, 'max');
    revalidatePath('/dashboard/testimonials');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await db.delete(testimonials).where(eq(testimonials.id, id));

    // Revalidate cache tags for ISR
    revalidateTag(CACHE_TAGS.TESTIMONIALS, 'max');
    revalidatePath('/dashboard/testimonials');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
