import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// Simple in-memory fallback if Redis not configured
const memoryStore = new Map<string, { count: number; resetTime: number }>();

export async function rateLimit(identifier: string, limit = 5, window = 60000) {
  // If Redis configured, use it
  if (process.env.UPSTASH_REDIS_REST_URL) {
    try {
      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.fixedWindow(limit, `${window}ms`),
      });

      const { success } = await ratelimit.limit(identifier);
      return { success };
    } catch (error) {
      console.error('Rate limit error:', error);
      return { success: true }; // Fail open
    }
  }

  // Fallback: in-memory rate limit
  const now = Date.now();
  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    memoryStore.set(identifier, { count: 1, resetTime: now + window });
    return { success: true };
  }

  if (record.count < limit) {
    record.count++;
    return { success: true };
  }

  return { success: false };
}
