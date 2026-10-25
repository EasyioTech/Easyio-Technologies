'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio team, I am interested in custom software development / IT consultation.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden">
      {/* Expanded Quick Inquiry Drawer/Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-3xl bg-zinc-950 text-white p-5 border border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200 relative overflow-hidden">
          {/* Ambient light */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            aria-label="Close widget"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-zinc-950" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">
                Easyio Engineering Team
              </div>
              <div className="text-[11px] text-emerald-400 font-medium">
                Active in Sopore & Srinagar
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed mb-4">
            Need custom software, mandi ERP, billing POS, or web & mobile apps? Chat with our senior system architects directly.
          </p>

          {/* Trust Highlights */}
          <div className="space-y-1.5 mb-4 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% Code & Database Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>War Complex Sopore & Srinagar presence</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 60056 59527)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+916005659527"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>Call Us</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-xs transition-colors"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-900 text-white border border-zinc-800 shadow-2xl transition-all hover:scale-105 active:scale-95"
        aria-label="Open contact and WhatsApp consultation options"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? 'Close' : 'Chat with Engineers'}
        </span>
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <MessageCircle className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
}
