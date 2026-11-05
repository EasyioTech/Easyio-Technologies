'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X, Calculator, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio team! I would like to discuss a custom software / ERP project for my company.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[99] font-sans print:hidden flex flex-col items-end">
      {/* Light, Clean Friendly Inquiry Card */}
      {isOpen && (
        <div className="mb-3 w-[310px] sm:w-[350px] rounded-3xl bg-white text-zinc-900 p-5 sm:p-6 border border-zinc-200/90 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200 relative overflow-hidden">
          {/* Subtle Ambient Tint */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-100/40 blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header with Human Avatars */}
          <div className="flex items-center gap-3 mb-4 pr-6">
            <div className="flex -space-x-2 shrink-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-2xs">
                  <img src={`/images/avatar_${i}.jpg`} alt="Team" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-950 leading-tight">
                Easyio Team
              </h4>
              <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online &bull; Sopore &amp; Srinagar</span>
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-normal">
            Have an idea or need software for your business? We reply in ~15 minutes.
          </p>

          {/* Clean Action Options */}
          <div className="space-y-2">
            {/* Primary: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs transition-all shadow-sm active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>

            {/* Cost Estimator */}
            <Link
              href="/project-estimator"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold text-xs transition-all active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-zinc-700 shrink-0" />
                <span>Calculate Project Cost</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-normal">60s estimate</span>
            </Link>

            {/* Direct Call */}
            <a
              href="tel:+916005659527"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 font-medium text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>Call: +91 60056 59527</span>
            </a>
          </div>

          {/* Micro Footer */}
          <div className="mt-3.5 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>No sales spam &bull; 100% Free</span>
          </div>
        </div>
      )}

      {/* Single Clean Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white shadow-xl shadow-zinc-950/20 active:scale-95 transition-all border border-zinc-800"
        aria-label={isOpen ? 'Close chat' : 'Chat with Easyio team'}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-zinc-300" />
        ) : (
          <>
            <div className="relative">
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-xs font-semibold tracking-tight text-white">
              Chat with Us
            </span>
          </>
        )}
      </button>
    </div>
  );
}
