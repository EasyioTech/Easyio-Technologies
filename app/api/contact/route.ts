import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    // Rate limit
    const { success: rateLimited } = await rateLimit(`contact-${ip}`, 5, 60000);
    if (!rateLimited) {
      return NextResponse.json(
        { error: 'Too many requests. Try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendContactEmail(validation.data);
    if (!emailResult.success) {
      return NextResponse.json(
        { error: 'Failed to send message. Try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully', id: emailResult.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
