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
    <section ref={sectionRef} className="relative pt-24 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Frontier Badge */}
          <FadeIn>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <Terminal className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 dark:text-zinc-400">
                  TRUSTED BY <span className="text-zinc-950 dark:text-white">ENTERPRISE LEADERS</span>
                </span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <div className="w-1 h-1 rounded-full bg-zinc-400" />
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-zinc-400 dark:text-zinc-500">KASHMIR_HQ // PREMIER_ENGINEERING_HUB</span>
              </div>
            </div>
          </FadeIn>

          {/* Main Heading with Parallax Scroll */}
          <div className="relative mb-12 overflow-visible">
            <motion.h1 style={{ x: xLeft }} className="heading-1 whitespace-nowrap opacity-10 dark:opacity-10">
              SCALABLE SYSTEMS // ENGINEERING FOR THE FUTURE // v.2.0 //
            </motion.h1>
            
            <motion.h1 style={{ x: xRight }} className="heading-1 whitespace-nowrap mt-4 opacity-10 dark:opacity-10">
              MODERN INFRASTRUCTURE // <span className="text-primary italic">HIGH PERFORMANCE.</span> // STABLE DEPLOYMENT
            </motion.h1>
          </div>

          {/* Subheading Narrative */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-20">
            <TextReveal delay={0.7} className="text-base md:text-3xl text-zinc-900 dark:text-zinc-200 font-medium italic">
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
