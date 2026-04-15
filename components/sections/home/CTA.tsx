'use client';

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export default function CTA() {
  return (
    <section className="py-60 px-6 relative border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <FadeIn>
          <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black shadow-2xl">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Ready to Execute</span>
          </div>
        </FadeIn>

        <h2 className="heading-1 mb-12 max-w-5xl mx-auto">
          <TextReveal>INITIALIZE YOUR</TextReveal> <br />
          <TextReveal delay={0.3} className="text-zinc-500 dark:text-zinc-700 italic">LEGACY PROTOCOL.</TextReveal>
        </h2>

        <div className="max-w-3xl mx-auto mb-20">
          <TextReveal delay={0.6} className="text-xl md:text-3xl text-zinc-500 font-medium italic">
            Stop building for today. We engineer for the next decade of operational dominance.
          </TextReveal>
        </div>

        <FadeIn delay={0.9}>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/contact" className="btn-primary group">
              Initialize Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/careers" className="btn-secondary">
              Join the Lab
            </Link>
          </div>
        </FadeIn>
        
        {/* Architectural Footer Accent */}
        <FadeIn delay={1.2}>
          <div className="mt-40 flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-20 dark:opacity-10 grayscale transition-all">
              <div className="text-[10px] font-bold uppercase tracking-[1em]">Architecture</div>
              <div className="text-[10px] font-bold uppercase tracking-[1em]">Latency</div>
              <div className="text-[10px] font-bold uppercase tracking-[1em]">Scale</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
