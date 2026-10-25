'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio team, I am interested in custom software development / IT consultation.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden flex flex-col items-end">
      {/* Expanded Quick Inquiry Drawer/Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-2xl bg-white text-zinc-900 p-5 border border-zinc-200/90 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200 relative">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Close widget"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-3 pr-6">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 font-bold">
                <MessageCircle className="w-5 h-5 text-zinc-900" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-950 leading-tight">
                Easyio Engineering Team
              </div>
              <div className="text-[11px] text-emerald-800 font-medium">
                Active in Sopore & Srinagar
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-normal">
            Need custom software, mandi ERP, billing POS, or web & mobile apps? Talk directly with our senior engineering leads.
          </p>

          {/* Trust Highlights */}
          <div className="space-y-1.5 mb-4 text-[11px] text-zinc-700 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="font-medium">100% Code & Database Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="font-medium">War Complex Sopore & Srinagar</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs tracking-wide transition-all shadow-sm active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp (+91 60056 59527)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+916005659527"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>Call Directly</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold text-xs transition-colors"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3 h-3 text-zinc-500" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button - Perfect Circle with Hover Tooltip */}
      <div className="relative group flex items-center">
        {/* Floating Hover Label / Tooltip (revealed smoothly on hover) */}
        <div className="pointer-events-none absolute right-full mr-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap hidden sm:block">
          <div className="bg-zinc-950 text-white border border-zinc-800 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{isOpen ? 'Close' : 'Chat with Engineers'}</span>
          </div>
        </div>

        {/* Circular Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-zinc-950 hover:bg-zinc-900 text-white border border-zinc-800 shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={isOpen ? 'Close consultation options' : 'Chat with Engineers on WhatsApp'}
        >
          {/* Pulsing online indicator dot (visible when closed) */}
          {!isOpen && (
            <span className="absolute top-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-zinc-950" />
            </span>
          )}

          {isOpen ? (
            <X className="w-5 h-5 text-zinc-300 transition-transform duration-200" />
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
          )}
        </button>
      </div>
    </div>
  );
}
