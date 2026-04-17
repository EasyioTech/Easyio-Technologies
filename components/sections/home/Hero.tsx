'use client';

import Link from "next/link";
import { ArrowRight, Activity, Terminal } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1.1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} className="relative pt-24 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Frontier Badge */}
          <FadeIn>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <Terminal className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                  TRUSTED BY <span className="text-zinc-950 dark:text-zinc-200">ENTERPRISE LEADERS</span>
                </span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <div className="w-1 h-1 rounded-full bg-zinc-400" />
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-zinc-400">KASHMIR_HQ // PREMIER_ENGINEERING_HUB</span>
              </div>
            </div>
          </FadeIn>

          {/* Main Heading with Parallax Scroll */}
          <div className="relative mb-12 overflow-visible">
            <motion.h1 style={{ x: xLeft }} className="heading-1 whitespace-nowrap">
              <span className="opacity-10 dark:opacity-5 mr-8">SCALABLE SYSTEMS //</span>
              ENGINEERING FOR
              <span className="opacity-10 dark:opacity-5 ml-8 text-zinc-500 italic">GLOBAL SCALE // RELIABILITY</span>
            </motion.h1>
            
            <motion.h1 style={{ x: xRight }} className="heading-1 whitespace-nowrap mt-4">
              <span className="opacity-10 dark:opacity-5 mr-8 italic">MODERN INFRASTRUCTURE //</span>
              <span className="text-zinc-500 dark:text-zinc-700 italic">HIGH PERFORMANCE.</span>
              <span className="opacity-10 dark:opacity-5 ml-8">STABLE DEPLOYMENT // v.2.0</span>
            </motion.h1>
          </div>

          {/* Subheading Narrative */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-20">
            <TextReveal delay={0.7} className="text-base md:text-3xl text-zinc-500 font-medium italic">
              Easyio Technologies builds ultra-high-performance business systems. We help companies replace technical complexity with streamlined, scalable software that powers growth.
            </TextReveal>
          </div>

          {/* Tactical CTAs */}
          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="btn-primary group">
                Start Your Project
                <Activity className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary group">
                See Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
