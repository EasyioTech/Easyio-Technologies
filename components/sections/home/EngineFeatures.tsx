'use client';

import { m } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

export default function EngineFeatures() {
  return (
    <section className="py-16 md:py-24 bg-transparent overflow-hidden mobile-section-content" id="engine">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Engine Capabilities</span>
            </div>
            <PremiumHeading 
              text="Built for Business."
              highlightWords={["Business."]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-tight"
            />
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed">
            Modular, production-ready architecture engineered for high availability, bank-grade security, and sub-second speed.
          </p>
        </div>

        {/* Cohesive 60-30-10 Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 sm:gap-5 min-h-0 lg:h-[520px]">
          
          {/* Card 1: Enterprise-Grade Software Systems (Primary Obsidian Card) */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 order-1 lg:order-none lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-3 bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[340px] lg:min-h-0 shadow-xl shadow-zinc-950/10"
          >
            <div className="relative z-20 max-w-[400px]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">01 / CORE SYSTEMS</span>
                <div className="px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider rounded-full">
                  98.4% Efficiency
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05] mb-4">
                Enterprise-Grade<br/>Software Systems.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal max-w-[340px]">
                Building smart, scalable software that solves complex multi-branch business and supply-chain operations.
              </p>
              
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link 
                  href="/enterprise-software-systems" 
                  className="inline-flex items-center gap-2 bg-white text-zinc-950 text-xs font-bold py-3 px-6 rounded-full hover:bg-emerald-400 transition-colors shadow-sm active:scale-95"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors py-2 px-1"
                >
                  <span>View Case Studies &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Blended Image Peeking from Bottom-Right */}
            <div 
              className="absolute bottom-0 right-0 w-[80%] h-[60%] translate-x-10 translate-y-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 pointer-events-none rounded-3xl overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to top left, black 35%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to top left, black 35%, transparent 85%)'
              }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/enterprise_engine.png" 
                  alt="Enterprise Software Systems" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-30 grayscale contrast-125"
                />
              </div>
            </div>
          </m.div>

          {/* Card 2: Ultra-Fast Speed (Clean Alabaster Card) */}
          <Link 
            href="/ultra-fast-speed" 
            className="col-span-1 order-2 lg:order-none lg:col-start-7 lg:col-end-10 lg:row-start-2 lg:row-end-3 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-white border border-zinc-200/90 hover:border-zinc-950 rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer shadow-xs hover:shadow-lg transition-all overflow-hidden min-h-[190px] sm:min-h-[210px]"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 bg-zinc-100 border border-zinc-200/80 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                    <Zap className="w-4 h-4 text-zinc-900 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 truncate">
                    0.12ms Latency
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-950 tracking-tight mb-1.5 leading-snug">
                  Ultra-Fast Speed.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Sub-millisecond edge caching and instant data delivery.
                </p>
              </div>

              <div className="mt-3 pt-2 relative z-20 flex justify-between items-center border-t border-zinc-100">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Global Edge</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-100 group-hover:bg-zinc-950 flex items-center justify-center transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700 group-hover:text-white" />
                </div>
              </div>
            </m.div>
          </Link>

          {/* Card 3: Enterprise Security (Refined Deep Emerald Card) */}
          <Link 
            href="/enterprise-security" 
            className="col-span-1 order-2 lg:order-none lg:col-start-10 lg:col-end-13 lg:row-start-2 lg:row-end-3 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-emerald-950 text-white border border-emerald-900 rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer shadow-xs hover:shadow-lg transition-all overflow-hidden min-h-[190px] sm:min-h-[210px]"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 bg-emerald-900/80 border border-emerald-800 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-emerald-300" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-200 uppercase tracking-wider bg-emerald-900/70 px-2.5 py-0.5 rounded-full border border-emerald-800 truncate">
                    Bank-Grade
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-1.5 leading-snug">
                  Enterprise Security.
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  End-to-end encryption &amp; strict compliance protocols.
                </p>
              </div>

              <div className="mt-3 pt-2 relative z-20 flex justify-between items-center border-t border-emerald-900/80">
                <span className="text-[10px] font-bold text-emerald-300/90 uppercase tracking-wider">Zero-Trust Auth</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-white flex items-center justify-center transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-emerald-950" />
                </div>
              </div>
            </m.div>
          </Link>

          {/* Card 4: Cloud Infrastructure (Top-Right Editorial Card) */}
          <Link 
            href="/cloud-infrastructure" 
            className="col-span-2 order-3 lg:order-none lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-2 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-white border border-zinc-200/90 hover:border-zinc-950 rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative cursor-pointer shadow-xs hover:shadow-lg transition-all overflow-hidden min-h-[210px] sm:min-h-[230px]"
            >
              <div className="relative z-20 max-w-[440px]">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-zinc-950 rounded-xl flex items-center justify-center shadow-2xs">
                      <Cloud className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">Cloud &amp; DevOps</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 rounded-full border border-emerald-200/80 text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    99.99% Uptime
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight mb-1.5 leading-snug">
                  Cloud Infrastructure.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 max-w-[380px]">
                  Resilient, auto-scaling cloud deployments with multi-region backup and zero-downtime releases.
                </p>

                {/* Capability Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {["Auto-Scaling", "Multi-Region", "Zero Downtime"].map((badge) => (
                    <span
                      key={badge}
                      className="text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200/60"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blended Network Illustration on the Right */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-1/2 translate-x-8 opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700 pointer-events-none overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(ellipse at center right, black 25%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center right, black 25%, transparent 75%)'
                }}
              >
                <Image 
                  src="/cloud_mesh.png" 
                  alt="Cloud Infrastructure" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 35vw" 
                  className="object-cover object-center grayscale contrast-125" 
                />
              </div>

              {/* Action Button at Bottom Right */}
              <div className="absolute bottom-6 right-6 z-20">
                <div className="w-9 h-9 rounded-full bg-zinc-100 group-hover:bg-zinc-950 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-white" />
                </div>
              </div>
            </m.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
