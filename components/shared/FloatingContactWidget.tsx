'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calculator, Phone, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hi Easyio Technologies! I would like to consult with an engineer regarding a custom software / web project.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[90] font-sans">
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-3 w-[310px] sm:w-[340px] bg-white rounded-3xl border border-zinc-200/90 shadow-2xl shadow-zinc-900/15 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">Easyio Engineering Desk</h4>
                  <p className="text-[10px] text-zinc-400 font-mono">Senior Architect Online</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="p-3 space-y-2 bg-zinc-50/70">
              {/* WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500 hover:shadow-xs flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-950 group-hover:text-emerald-700 transition-colors">
                      Chat on WhatsApp
                    </h5>
                    <p className="text-[10px] text-zinc-500">Fastest response (10–15 mins)</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Calculator Action */}
              <Link
                href="/project-estimator"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-950 hover:shadow-xs flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-950 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Calculator className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                      Calculate Project Cost
                    </h5>
                    <p className="text-[10px] text-zinc-500">Instant estimate in ₹ or $</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
              </Link>

              {/* Call Action */}
              <a
                href="tel:+916005659527"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-950 hover:shadow-xs flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-zinc-700" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-950">Call Engineering HQ</h5>
                    <p className="text-[10px] font-mono text-zinc-500">+91 60056 59527</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
              </a>
            </div>

            {/* Footer Notice */}
            <div className="px-4 py-2.5 bg-white border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Sopore &amp; Srinagar, Kashmir
              </span>
              <span className="font-mono font-bold text-zinc-400">EST &amp; IST Ready</span>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 h-12 pl-3.5 pr-4 rounded-full bg-zinc-950 text-white shadow-xl shadow-zinc-950/25 hover:bg-zinc-800 active:scale-95 transition-all border border-zinc-800"
        aria-label="Contact Engineering Team"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950">
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-300 ring-2 ring-zinc-950 animate-pulse" />
        </div>

        <div className="flex flex-col text-left leading-none">
          <span className="text-xs font-black tracking-tight text-white flex items-center gap-1.5">
            Instant Estimate &amp; Chat
          </span>
          <span className="text-[9px] font-mono text-emerald-400 mt-0.5">
            Replies in ~15 mins
          </span>
        </div>
      </button>
    </div>
  );
}
