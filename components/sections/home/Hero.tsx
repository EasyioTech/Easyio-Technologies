'use client';

import Link from "next/link";
import { ArrowRight, Activity, Terminal } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section ref={sectionRef} className="relative pt-44 pb-32 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Frontier Badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 mb-12 shadow-sm">
              <Terminal className="w-3 h-3 text-zinc-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                TRUSTED BY <span className="text-zinc-950 dark:text-zinc-200">ENTERPRISE LEADERS</span>
              </span>
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
          <div className="max-w-4xl mx-auto mb-20">
            <TextReveal delay={0.7} className="text-xl md:text-3xl text-zinc-500 font-medium italic">
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

          {/* Visual Showcase - Technical Dashboard */}
          <FadeIn delay={1.2}>
            <motion.div 
              style={{ scale }}
              className="mt-40 relative max-w-6xl mx-auto rounded-[3rem] border border-zinc-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-3xl overflow-hidden aspect-[16/9] shadow-2xl dark:shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] transition-all group p-1"
            >
              <div className="w-full h-full rounded-[2.8rem] bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-white/5 relative overflow-hidden flex flex-col">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-200/50 dark:border-white/5">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    Stable Infrastructure // v.2.0
                  </div>
                  <div className="w-10 h-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                </div>

                {/* Main Dashboard Area */}
                <div className="flex-1 p-8 grid grid-cols-12 gap-8">
                  {/* Left Column - Metrics */}
                  <div className="col-span-4 flex flex-col gap-6">
                    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-white/5 shadow-sm">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Data Throughput</div>
                      <div className="text-3xl font-black text-zinc-950 dark:text-white tabular-nums">942.8 GB/s</div>
                      <div className="mt-4 h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-zinc-900 dark:bg-white" />
                      </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-white/5 shadow-sm">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">System Efficiency</div>
                      <div className="text-3xl font-black text-zinc-950 dark:text-white tabular-nums">98.4%</div>
                      <div className="mt-4 flex gap-1">
                        {[40, 60, 45, 90, 65, 80, 75].map((h, i) => (
                          <div key={i} className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-sm relative h-12 overflow-hidden">
                            <div 
                              className="absolute bottom-0 w-full bg-zinc-300 dark:bg-zinc-700 transition-all duration-1000" 
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center/Right - Visual Component */}
                  <div className="col-span-8 rounded-3xl bg-zinc-100/30 dark:bg-zinc-950/50 border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden group/viz">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0)_100%)]" />
                    
                    {/* Abstract Grid Map */}
                    <div className="relative w-full h-full flex items-center justify-center">
                       <div className="grid grid-cols-8 gap-4 opacity-10 dark:opacity-20">
                          {Array.from({ length: 32 }).map((_, i) => (
                            <div key={i} className="w-12 h-12 rounded-xl border border-zinc-900 dark:border-white" />
                          ))}
                       </div>
                       
                       <div className="absolute flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full border-4 border-zinc-950 dark:border-white flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_-5px_rgba(255,255,255,0.1)]">
                             <Activity className="w-8 h-8 text-zinc-950 dark:text-white" />
                          </div>
                          <div className="mt-6 text-[10px] font-black tracking-[0.5em] text-zinc-950 dark:text-white uppercase">
                            Core Services Operational
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-[9px] font-bold text-zinc-500 tracking-widest uppercase flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  All Systems Operational // High-Performance Standards Established
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
