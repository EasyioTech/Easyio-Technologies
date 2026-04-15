import { Resend } from 'resend';

// Resend client - can be undefined if no API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendContactEmail(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {
    if (!resend) {
      console.log('Resend not configured. Contact submission:', data);
      return { success: true, id: 'mock-id' };
    }

    const result = await resend.emails.send({
      from: 'contact@easyiotech.com',
      to: 'hello@easyiotech.com',
      replyTo: data.email,
      subject: `New contact from ${data.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return { success: false, error: result.error };
    }

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}

export async function sendWaitlistEmail(data: {
  email: string;
  firstName: string;
  company?: string;
}) {
  try {
    if (!resend) {
      console.log('Resend not configured. Waitlist signup:', data);
      return { success: true, id: 'mock-id' };
    }

    const result = await resend.emails.send({
      from: 'waitlist@easyiotech.com',
      to: data.email,
      subject: 'Welcome to Easyio Technologies',
      html: `
        <h2>Welcome to the waitlist!</h2>
        <p>Hi ${data.firstName},</p>
        <p>Thanks for joining. We'll notify you when something big launches.</p>
        <p>Best,<br>Easyio Team</p>
      `,
    });

    return { success: !result.error, id: result.data?.id };
  } catch (error) {
    console.error('Waitlist email error:', error);
    return { success: false, error };
  }
}
