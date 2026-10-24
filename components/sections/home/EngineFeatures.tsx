'use client';

import { m } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

export default function EngineFeatures() {
  return (
    <section className="py-8 md:py-16 bg-transparent overflow-hidden mobile-section-content" id="engine">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - Compact */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-1.5 h-1.5 bg-zinc-950" />
            <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">Engine Capabilities</span>
          </div>
          <PremiumHeading 
            text="Built for Business."
            highlightWords={["Business."]}
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-zinc-950 leading-tight md:leading-none"
          />
        </div>

        {/* Bento Grid:
            Desktop/Laptop: 12-col 2-row grid.
              - Yellow Card: cols 1..6, rows 1..2 (Left 50% full height)
              - Teal Card: cols 7..12, row 1 (Right top 50%)
              - Pink Card: cols 7..9, row 2 (Right bottom-left 25%)
              - Indigo Card: cols 10..12, row 2 (Right bottom-right 25%)
            Mobile: 2-col auto-row grid.
              - Row 1: Yellow Card (col-span-2 order-1)
              - Row 2: Pink Card (col-span-1 order-2) + Indigo Card (col-span-1 order-2) side by side
              - Row 3: Teal Card (col-span-2 order-3)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-3.5 sm:gap-4 md:gap-5 min-h-0 lg:h-[500px]">
          
          {/* Card 1: Enterprise-Grade Software Systems (Yellow Card) */}
          {/* Mobile: Row 1 (order-1, col-span-2). Desktop: Cols 1-6, Rows 1-2 */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 order-1 lg:order-none lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-3 bg-[#FDE047] rounded-[1.75rem] md:rounded-[2rem] p-6 sm:p-7 md:p-9 flex flex-col justify-between relative overflow-hidden group min-h-[340px] lg:min-h-0 shadow-2xl shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all"
          >
            <div className="relative z-20 max-w-[380px]">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-900/50 uppercase">01 / CORE SYSTEMS</span>
                <div className="px-2.5 py-0.5 bg-zinc-950 text-[9px] font-black text-white uppercase tracking-wider rounded-full shadow-sm">
                  98.4% Efficiency
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tighter leading-[0.95] md:leading-[0.92] mb-3 md:mb-4">
                Enterprise-Grade<br/>Software Systems.
              </h3>
              <p className="text-zinc-950/75 text-xs sm:text-sm md:text-base leading-snug font-bold max-w-[320px]">
                Building smart, scalable software that solves complex business operations.
              </p>
              
              <div className="mt-5 md:mt-7 flex flex-wrap items-center gap-3">
                <Link 
                  href="/enterprise-software-systems" 
                  className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-black py-3 px-6 sm:px-7 md:py-3.5 md:px-8 rounded-full hover:scale-105 transition-all shadow-xl shadow-zinc-950/20 active:scale-95"
                >
                  See Our Work <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-zinc-900/70 hover:text-zinc-950 transition-colors py-2 px-1"
                >
                  Case Studies &rarr;
                </Link>
              </div>
            </div>

            {/* Blended Image Peeking from Bottom-Right */}
            <div 
              className="absolute bottom-0 right-0 w-[85%] h-[65%] translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-1000 pointer-events-none rounded-[2.5rem] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to top left, black 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to top left, black 40%, transparent 85%)'
              }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/enterprise_engine.png" 
                  alt="Enterprise Software Systems" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40 grayscale-[0.8] contrast-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDE047] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#FDE047] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </m.div>

          {/* Card 2: Ultra-Fast Speed (Pink Card) */}
          {/* Mobile: Row 2 (order-2, col-span-1). Desktop: Cols 7-9, Row 2 */}
          <Link 
            href="/ultra-fast-speed" 
            className="col-span-1 order-2 lg:order-none lg:col-start-7 lg:col-end-10 lg:row-start-2 lg:row-end-3 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#F272B6] rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] p-4 sm:p-5 md:p-5.5 flex flex-col justify-between relative cursor-pointer shadow-xl shadow-pink-500/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all overflow-hidden min-h-[180px] sm:min-h-[200px]"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-zinc-950 rounded-lg shadow-md shrink-0">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-black text-white/90 uppercase tracking-widest bg-black/15 px-2 py-0.5 rounded-full border border-white/10 truncate">
                    0.12ms Latency
                  </span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tighter mb-1 leading-tight">
                  Ultra-Fast Speed.
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-white/85 leading-snug line-clamp-2 sm:line-clamp-none">
                  Sub-millisecond data delivery for instant, seamless user experiences.
                </p>
              </div>

              {/* Blended Image */}
              <div 
                className="absolute bottom-0 right-0 w-full h-full translate-x-1/4 translate-y-1/4 opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at bottom right, black 25%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at bottom right, black 25%, transparent 80%)'
                }}
              >
                <Image src="/edge_caching.png" alt="Speed Performance" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover grayscale" />
              </div>

              <div className="mt-2.5 sm:mt-3 pt-1 relative z-20 flex justify-between items-end">
                <span className="text-[8px] sm:text-[9px] font-extrabold text-white/80 uppercase tracking-widest">Global Edge</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all shadow-lg shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F272B6]" />
                </div>
              </div>
            </m.div>
          </Link>

          {/* Card 3: Enterprise Security (Indigo Card) */}
          {/* Mobile: Row 2 (order-2, col-span-1). Desktop: Cols 10-12, Row 2 */}
          <Link 
            href="/enterprise-security" 
            className="col-span-1 order-2 lg:order-none lg:col-start-10 lg:col-end-13 lg:row-start-2 lg:row-end-3 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#6366F1] rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] p-4 sm:p-5 md:p-5.5 flex flex-col justify-between relative cursor-pointer shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all overflow-hidden min-h-[180px] sm:min-h-[200px]"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-zinc-950 rounded-lg shadow-md shrink-0">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-black text-white/90 uppercase tracking-widest bg-black/15 px-2 py-0.5 rounded-full border border-white/10 truncate">
                    Bank-Grade
                  </span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tighter mb-1 leading-tight">
                  Enterprise Security.
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-white/85 leading-snug line-clamp-2 sm:line-clamp-none">
                  Bank-grade encryption & global standards, engineered in Sopore.
                </p>
              </div>

              {/* Blended Security Image */}
              <div 
                className="absolute bottom-0 right-0 w-full h-[65%] translate-x-1/6 translate-y-1/6 opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 pointer-events-none rounded-[2rem] overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at bottom right, black 30%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(circle at bottom right, black 30%, transparent 90%)'
                }}
              >
                <Image 
                  src="/security_protocols.png" 
                  alt="Enterprise Security Protocols" 
                  fill 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top grayscale"
                />
              </div>

              <div className="mt-2.5 sm:mt-3 pt-1 relative z-20 flex justify-between items-end">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white text-[#6366F1] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider group-hover:scale-105 group-hover:bg-zinc-950 group-hover:text-white transition-all shadow-lg w-fit">
                  Work With Us <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
              </div>
            </m.div>
          </Link>

          {/* Card 4: Cloud Infrastructure (Teal Card) */}
          {/* Mobile: Row 3 (order-3, col-span-2). Desktop: Cols 7-12, Row 1 */}
          <Link 
            href="/cloud-infrastructure" 
            className="col-span-2 order-3 lg:order-none lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-2 block h-full group"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#1AB896] rounded-[1.75rem] md:rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer shadow-xl shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all overflow-hidden min-h-[200px] sm:min-h-[220px]"
            >
              <div className="relative z-20 max-w-[420px]">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-zinc-950 rounded-lg shadow-md">
                      <Cloud className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white/90 uppercase tracking-wider">Cloud & DevOps</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-black text-white uppercase tracking-widest">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300"></span>
                    </span>
                    99.99% Uptime
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter mb-1.5 leading-tight">
                  Cloud Infrastructure.
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-white/85 leading-relaxed mb-3 max-w-[360px]">
                  Resilient, auto-scaling cloud deployments with multi-region backup and zero downtime.
                </p>

                {/* Capability Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[9px] font-extrabold text-white/90 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/15">
                    Auto-Scaling
                  </span>
                  <span className="text-[9px] font-extrabold text-white/90 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/15">
                    Multi-Region
                  </span>
                  <span className="text-[9px] font-extrabold text-white/90 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/15">
                    Zero Downtime
                  </span>
                </div>
              </div>

              {/* Blended Network Illustration on the Right */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-2/3 translate-x-12 opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 pointer-events-none overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 80%)'
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

              {/* Action Button at Bottom */}
              <div className="mt-3 relative z-20 flex justify-end">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-[#1AB896]" />
                </div>
              </div>
            </m.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
