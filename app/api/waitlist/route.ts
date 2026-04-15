import { NextRequest, NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/validations';
import { sendWaitlistEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = waitlistSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // Send confirmation email
    await sendWaitlistEmail(validation.data);

    return NextResponse.json(
      { success: true, message: 'Added to waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
