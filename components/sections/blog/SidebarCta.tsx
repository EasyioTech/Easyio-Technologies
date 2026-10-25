'use client';

import { MessageCircle, Phone, MapPin, ShieldCheck, ArrowUpRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SidebarCta() {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hi Easyio team, I came across your blog and would like to discuss custom software development for my business.'
  )}`;

  return (
    <div className="rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 p-6 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for New Projects
        </span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white mb-2 leading-snug">
        Need Custom Software in Kashmir?
      </h3>

      <p className="text-xs text-zinc-400 leading-relaxed mb-5">
        From custom ERPs and mandi billing to high-speed Next.js web & mobile apps. Talk directly with senior engineers in Sopore & Srinagar.
      </p>

      {/* Trust points */}
      <div className="space-y-2 mb-6 text-xs text-zinc-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>100% Code & Database Ownership</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Fixed-Price Scope within 24 Hours</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>War Complex, Sopore & Srinagar</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-98"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp (+91 60056 59527)</span>
        </a>

        <a
          href="tel:+916005659527"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-semibold text-xs transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-zinc-400" />
          <span>Call Us: +91 60056 59527</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 w-full py-2 text-[11px] font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <span>Schedule an on-site or virtual discovery meeting</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
