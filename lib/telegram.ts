interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  company?: string;
  message: string;
}

export async function sendTelegramNotification(data: ContactData): Promise<{ success: boolean; error?: unknown }> {
  const token = process.env.TELEGRAM_BOT_TOKEN || '8898462599:AAGQYiHPcYyUOb_iJsx03avpIVsW9lSvt80';
  const chatId = process.env.TELEGRAM_CHAT_ID || '7658385347';

  if (!chatId) {
    console.warn('TELEGRAM_CHAT_ID is not configured. Message skipped.');
    return { success: false, error: 'TELEGRAM_CHAT_ID not configured' };
  }

  // Using HTML mode for reliable, bulletproof formatting without MarkdownV2 escaping bugs
  const htmlText = `📬 <b>New Lead Submission - Easyio Technologies</b>\n\n` +
    `👤 <b>Name:</b> ${escapeHtml(data.name)}\n` +
    (data.phone ? `📞 <b>Phone / WhatsApp:</b> <code>${escapeHtml(data.phone)}</code>\n` : '') +
    `📧 <b>Email:</b> ${escapeHtml(data.email)}\n` +
    (data.service ? `🛠 <b>Interested In:</b> <b>${escapeHtml(data.service)}</b>\n` : '') +
    (data.company ? `🏢 <b>Company:</b> ${escapeHtml(data.company)}\n` : '') +
    `💬 <b>Project Details:</b>\n${escapeHtml(data.message)}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlText,
        parse_mode: 'HTML',
      }),
    });

    const result = await res.json();
    if (!result.ok) {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return { success: false, error };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
