'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, X, Calculator, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio team! I would like to discuss a custom software / ERP project for my company.'
  )}`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[99] font-sans print:hidden flex flex-col items-end"
    >
      {/* Inquiry Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Quick Contact Options"
          className="mb-3 w-[310px] sm:w-[350px] rounded-3xl bg-white text-zinc-900 border border-zinc-200/90 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200 relative overflow-hidden"
        >
          {/* Header with Hero-Styled Ambient Gradient */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50/60 via-yellow-50/40 to-white border-b border-zinc-100 relative">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/80 hover:bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors shadow-2xs"
              aria-label="Close quick contact panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Team Avatars with Hero Butter Border */}
            <div className="flex items-center gap-3 pr-6">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-9 h-9 rounded-full border-2 border-[#FEF9C3] bg-zinc-100 overflow-hidden shadow-2xs">
                  <img src="/images/avatar_1.jpg" alt="Burhan Ali - CTO" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#FEF9C3] bg-zinc-100 overflow-hidden shadow-2xs">
                  <img src="/images/avatar_4.jpg" alt="Mohammad Faheem - CEO" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-950 leading-tight">
                  Easyio Engineering
                </h4>
                <p className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Online &bull; Sopore &amp; Srinagar</span>
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed mt-3">
              Speak directly with our senior software engineers. We typically reply within ~15 minutes.
            </p>
          </div>

          {/* Action Options */}
          <div className="p-5 sm:p-6 space-y-2.5">
            {/* Primary: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs transition-all shadow-md active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FEF9C3] group-hover:text-zinc-950 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Cost Estimator */}
            <Link
              href="/project-estimator"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/80 text-zinc-900 font-semibold text-xs transition-all active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Calculate Project Cost</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FEF9C3] text-zinc-900 border border-amber-200/60">
                60s
              </span>
            </Link>

            {/* Direct Phone Call */}
            <a
              href="tel:+916005659527"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-600" />
              <span>Call: +91 60056 59527</span>
            </a>

            {/* Micro Footer */}
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
              <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Direct engineer access &bull; 100% Free</span>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button - Human Studio Style (Hero Palette) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={cn(
          "group flex items-center gap-3 h-12 pl-2.5 pr-4 rounded-full bg-white text-zinc-950 border border-zinc-200/90 shadow-xl shadow-zinc-900/10 hover:shadow-2xl hover:border-zinc-300 active:scale-95 transition-all duration-300",
          isOpen && "ring-2 ring-zinc-950/10 bg-zinc-50"
        )}
        aria-label={isOpen ? 'Close chat options' : 'Chat with Easyio team'}
      >
        {isOpen ? (
          <div className="flex items-center gap-2 pl-1.5">
            <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-200 transition-colors">
              <X className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold tracking-tight text-zinc-900">Close</span>
          </div>
        ) : (
          <>
            {/* Real Engineer Avatars with Hero Butter Border */}
            <div className="flex -space-x-2 shrink-0">
              <div className="w-7 h-7 rounded-full border-2 border-[#FEF9C3] bg-zinc-100 overflow-hidden shadow-2xs">
                <img src="/images/avatar_1.jpg" alt="Burhan Ali" className="w-full h-full object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-[#FEF9C3] bg-zinc-100 overflow-hidden shadow-2xs">
                <img src="/images/avatar_4.jpg" alt="Mohammad Faheem" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-left">
              <span className="text-xs font-bold tracking-tight text-zinc-950">
                Chat with team
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            </div>
          </>
        )}
      </button>
    </div>
  );
}