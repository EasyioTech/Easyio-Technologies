'use client';

import { MessageCircle, Phone, MapPin, ShieldCheck, ArrowUpRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SidebarCta() {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hi Easyio team, I came across your blog and would like to discuss custom software development for my business.'
  )}`;

  return (
    <div className="rounded-2xl bg-zinc-50 p-6 text-zinc-900 border border-zinc-200/90 shadow-xs relative">
      {/* Clean Eyebrow - No Capsule Pill */}
      <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-800 mb-2">
        Direct Engineering Consultation
      </p>

      <h3 className="text-lg font-bold tracking-tight text-zinc-950 mb-2 leading-snug">
        Need Custom Software in Kashmir?
      </h3>

      <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-normal">
        From custom ERPs and mandi billing to high-speed Next.js web & mobile apps. Talk directly with senior engineers in Sopore & Srinagar.
      </p>

      {/* Clean Trust points */}
      <div className="space-y-2 mb-5 text-xs text-zinc-700">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>100% Code & Database Ownership</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Fixed-Price Scope within 24 Hours</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>War Complex, Sopore & Srinagar</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs tracking-wide transition-colors shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Chat on WhatsApp (+91 60056 59527)</span>
        </a>

        <a
          href="tel:+916005659527"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold text-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-zinc-500" />
          <span>Call Us: +91 60056 59527</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 w-full pt-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <span>Schedule an on-site or virtual meeting</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
