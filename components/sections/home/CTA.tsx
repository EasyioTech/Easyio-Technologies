'use client';

import Link from "next/link";
import { MessageSquare, Phone, Terminal } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export default function CTA() {
  return (
    <section className="py-60 px-6 relative border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <FadeIn>
          <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black shadow-2xl">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Let's Connect</span>
          </div>
        </FadeIn>

        <h2 className="heading-1 mb-12 max-w-5xl mx-auto">
          <TextReveal>READY TO SIMPLIFY</TextReveal> <br />
          <TextReveal delay={0.3} className="text-zinc-500 dark:text-zinc-700 italic">YOUR TECHNOLOGY?</TextReveal>
        </h2>

        <div className="max-w-3xl mx-auto mb-20">
          <TextReveal delay={0.6} className="text-xl md:text-3xl text-zinc-500 font-medium italic">
            We turn old, messy technology into simple, powerful tools that just work. No complicated jargon—just solutions that help your business move faster.
          </TextReveal>
        </div>

        <FadeIn delay={0.9}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="btn-primary group h-16 px-10">
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Talk to an Expert</span>
            </Link>
            <a href="tel:+1234567890" className="btn-secondary h-16 px-10 group">
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              <span>Call Us Directly</span>
            </a>
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
