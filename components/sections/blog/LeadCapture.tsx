'use client';

import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, MessageCircle, Phone, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio Technologies, I want to discuss a software project for my company.'
  )}`;

  return (
    <section className="mt-20 pt-10 border-t border-zinc-200">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-200/90 p-8 sm:p-12 md:p-14 text-zinc-900 shadow-sm">
          <div className="relative z-10 max-w-3xl">
            {/* Clean Typographic Eyebrow - No Capsule Pill */}
            <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase mb-3">
              Custom Software & Enterprise Systems
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 mb-5 leading-[1.15]">
              Ready to automate your operations with high-performance software?
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed max-w-2xl font-normal">
              Whether you need an offline-first mandi ERP, custom billing system, high-speed Next.js web application, or a dedicated software engineering pod in Kashmir—we deliver enterprise software with 100% intellectual property ownership.
            </p>

            {/* Clean Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-zinc-200/80 text-xs sm:text-sm text-zinc-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-medium">Zero recurring SaaS vendor lock-in</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-medium">On-site staff training in Kashmir</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-medium">War Complex Sopore & Srinagar</span>
              </div>
            </div>

            {/* Professional Clean Action Buttons - Never wrap into two lines */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp (+91 60056 59527)</span>
              </a>

              <a
                href="tel:+916005659527"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 transition-all active:scale-98 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <span className="whitespace-nowrap">Call Directly</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-zinc-600 hover:text-zinc-950 px-3 py-3 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Request Project Scope</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
