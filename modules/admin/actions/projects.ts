'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { projects } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(2, 'Title is too short'),
  slug: z.string().min(2, 'Slug is too short'),
  description: z.string().min(10, 'Description is too short'),
  image: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  link: z.string().optional(),
  featured: z.enum(['true', 'false']).default('false'),
  content: z.string().optional(),
  category: z.string().optional(),
  focusKeyword: z.string().optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
});

export async function getProject(id: string) {
  try {
    const [item] = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return item || null;
  } catch (error) {
    return null;
  }
}

export async function createProject(data: z.infer<typeof projectSchema>) {
  try {
    const validatedData = projectSchema.parse(data);
    
    await db.insert(projects).values({
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    revalidatePath('/dashboard/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateProject(id: string, data: Partial<z.infer<typeof projectSchema>>) {
  try {
    await db.update(projects)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(projects.id, id));

    revalidatePath('/dashboard/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteProject(id: string) {
  try {
    await db.delete(projects).where(eq(projects.id, id));
    revalidatePath('/dashboard/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
