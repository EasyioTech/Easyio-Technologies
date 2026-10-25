'use client';

import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, MessageCircle, Phone, MapPin, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio Technologies, I want to discuss a software project for my company.'
  )}`;

  return (
    <section className="mt-20 pt-10 border-t border-zinc-200">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 sm:p-12 md:p-14 text-white border border-zinc-800 shadow-2xl">
          {/* Background ambient accents */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Partner with Easyio Technologies
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              Ready to automate your operations with high-performance software?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
              Whether you need an offline-first mandi ERP, custom billing system, high-speed Next.js web application, or a dedicated software engineering pod in Kashmir—we deliver enterprise software with 100% intellectual property ownership.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero recurring SaaS vendor lock-in</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>On-site staff training in Kashmir</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>War Complex Sopore & Srinagar presence</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-7 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 60056 59527)</span>
              </a>

              <a
                href="tel:+916005659527"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 py-4 rounded-2xl text-sm font-semibold text-white transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-zinc-400" />
                <span>Call Directly</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-zinc-300 hover:text-emerald-400 px-4 py-4 text-sm font-medium transition-colors"
              >
                <span>Request Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
