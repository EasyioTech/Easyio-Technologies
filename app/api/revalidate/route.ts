import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { CACHE_TAGS } from '@/lib/cache';

/**
 * On-demand revalidation endpoint
 * Usage:
 * POST /api/revalidate?tag=blog-posts&secret=YOUR_SECRET_KEY
 *
 * Requires NEXT_PUBLIC_REVALIDATE_SECRET in environment
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tag = request.nextUrl.searchParams.get('tag');

  // Validate secret
  if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return NextResponse.json(
      { success: false, message: 'Invalid or missing secret' },
      { status: 401 }
    );
  }

  // Validate tag
  if (!tag || !Object.values(CACHE_TAGS).includes(tag as any)) {
    return NextResponse.json(
      { success: false, message: 'Invalid tag', validTags: Object.values(CACHE_TAGS) },
      { status: 400 }
    );
  }

  try {
    revalidateTag(tag, 'max');
    return NextResponse.json(
      {
        success: true,
        message: `Revalidated tag: ${tag}`,
        revalidatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Revalidation failed', error: (error as any).message },
      { status: 500 }
    );
  }
}
