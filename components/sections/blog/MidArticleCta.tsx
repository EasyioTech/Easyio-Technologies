'use client';

import React from 'react';
import { MessageCircle, ArrowUpRight, Star, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

interface MidArticleCtaProps {
  title?: string;
  description?: string;
  badge?: string;
  primaryActionText?: string;
  whatsappMessage?: string;
}

export default function MidArticleCta({
  title = "Planning a software or digital system project in 2026?",
  description = "Get a fixed-price roadmap and architecture estimate within 24 hours. Speak directly with senior engineers — no sales pressure, zero proprietary lock-in.",
  badge = "Free Technical Consultation",
  primaryActionText = "Chat on WhatsApp",
  whatsappMessage = "Hi Easyio Technologies! I am reading your guide and would like to discuss a custom software project for my business.",
}: MidArticleCtaProps) {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside
      aria-label="Software Advisory Banner"
      className="my-12 not-prose relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/30 border border-zinc-200/90 p-7 sm:p-9 md:p-10 shadow-xs"
    >
      {/* Soft Ambient Mesh Glow - Matching Homepage Hero */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-yellow-100/40 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Top Bar: Eyebrow + Social Proof */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-zinc-200 text-zinc-800 text-xs font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{badge}</span>
          </span>

          {/* Social Proof Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-white bg-zinc-100 overflow-hidden shadow-2xs">
                  <img src={`/images/avatar_${i}.jpg`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-zinc-500">Verified Client Reviews</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-zinc-950 mb-3 leading-tight max-w-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-600 mb-6 leading-relaxed max-w-2xl font-normal">
          {description}
        </p>

        {/* Feature Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 pt-5 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Code &amp; Data Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Fixed-Price Milestone Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Sopore &amp; Srinagar On-Site Support</span>
          </div>
        </div>

        {/* Clean Action Buttons (Hero Section Style) */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-12 pl-6 pr-2.5 flex items-center justify-center bg-zinc-950 text-white font-medium text-xs sm:text-sm rounded-full hover:bg-zinc-800 transition-all shadow-md active:scale-95"
          >
            <span>{primaryActionText}</span>
            <div className="w-8 h-8 ml-3 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-300 group-hover:rotate-45 -rotate-[22.5deg]">
              <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
            </div>
          </a>

          <Link
            href="/project-estimator"
            className="h-12 px-6 flex items-center justify-center bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 font-semibold text-xs sm:text-sm rounded-full transition-all shadow-2xs active:scale-95"
          >
            Calculate Project Cost
          </Link>

          <a
            href="tel:+916005659527"
            className="text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-2 transition-colors"
          >
            Call: +91 60056 59527
          </a>
        </div>
      </div>
    </aside>
  );
}
