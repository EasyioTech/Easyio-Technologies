'use client';

import { useState } from 'react';
import { Share2, Check, MessageCircle, Copy } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url?: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return url || window.location.href;
    }
    return url || 'https://easyio.tech/blog';
  };

  const handleCopy = async () => {
    try {
      const shareUrl = getShareUrl();
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleWhatsAppShare = () => {
    const shareUrl = encodeURIComponent(getShareUrl());
    const shareText = encodeURIComponent(`${title} - Read more on Easyio: `);
    window.open(`https://api.whatsapp.com/send?text=${shareText}${shareUrl}`, '_blank');
  };

  const handleNativeShare = async () => {
    const shareUrl = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="p-4 bg-zinc-50/80 rounded-2xl border border-zinc-200/80 space-y-2">
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500 px-1">
        <span>Share article</span>
        <Share2 className="w-3.5 h-3.5 text-zinc-400" />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50/50 transition-all shadow-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <button
          onClick={handleWhatsAppShare}
          type="button"
          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-all shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
