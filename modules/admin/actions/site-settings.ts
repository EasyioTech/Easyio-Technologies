'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const settingSchema = z.object({
  key: z.string().min(1),
  value: z.any(),
});

/**
 * Updates a site setting with lightning-fast execution.
 * Zero client-side overhead as this runs purely on the server.
 */
export async function updateSiteSetting(rawData: { key: string; value: any }) {
  try {
    // 1. Validate data
    const { key, value } = settingSchema.parse(rawData);

    // 2. Perform DB upsert within milliseconds
    await db
      .insert(siteSettings)
      .values({
        id: crypto.randomUUID(),
        key,
        value,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: siteSettings.key,
        set: { value, updatedAt: new Date() },
      });

    // 3. Purge cache instantly
    revalidatePath('/');
    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Update failed:', error);
    return { success: false, error: 'Failed to update setting' };
  }
}
