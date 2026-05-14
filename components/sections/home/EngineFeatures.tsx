'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Cpu, Cloud } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const FeatureCard = ({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-6 transition-all hover:border-zinc-200 hover:shadow-2xl hover:shadow-zinc-100/50",
      className
    )}
  >
    {children}
  </motion.div>
);

export default function EngineFeatures() {
  return (
    <section className="py-16 md:py-24 bg-transparent overflow-hidden" id="engine">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Compact */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-zinc-950" />
            <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">Engine Capabilities</span>
          </div>
          <PremiumHeading 
            text="Built for Business."
            highlightWords={["Performance"]}
            className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 leading-none"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[620px]">
          
          {/* Main Feature: Enterprise Engines */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 md:row-span-2 bg-[#FDE047] rounded-[2.5rem] p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[400px] md:min-h-0 shadow-2xl shadow-yellow-400/10"
          >
            <div className="relative z-20 max-w-[400px]">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-900/40 uppercase">01 / CORE ENGINE</span>
                <div className="px-3 py-1 bg-zinc-950 text-[9px] font-black text-white uppercase rounded-full">
                  98.4% Efficiency
                </div>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-6">
                Industrial Grade<br/>Software Engines.
              </h3>
              <p className="text-zinc-950/60 text-base md:text-lg leading-snug font-bold max-w-[320px]">
                Building smart software that solves complex business problems.
              </p>
              
              <div className="mt-10">
                <button className="bg-zinc-950 text-white text-xs font-black py-4 px-10 rounded-full hover:scale-105 transition-all shadow-xl shadow-zinc-950/20 active:scale-95">
                  See Our Work
                </button>
              </div>
            </div>

            {/* Blended Image Peeking from Bottom-Right */}
            <div 
              className="absolute bottom-0 right-0 w-[90%] h-[70%] translate-x-16 translate-y-16 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-1000 pointer-events-none rounded-[3rem] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to top left, black 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to top left, black 40%, transparent 85%)'
              }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/enterprise_engine.png" 
                  alt="Enterprise Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 grayscale-[0.8] contrast-[1.2]"
                />
                {/* Additional color matching gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDE047] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#FDE047] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </motion.div>

          {/* Center Column: Small Cards */}
          <div className="md:col-span-3 md:row-span-2 flex flex-col gap-6">
            {/* Teal Card: Cloud Mesh */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-[#1AB896] rounded-[2.5rem] p-8 flex flex-col relative group cursor-pointer shadow-xl shadow-emerald-500/10 overflow-hidden"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-zinc-950 rounded-xl">
                        <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">99.999% Uptime</span>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-1">
                  Cloud Mesh
                </h3>
                <p className="text-sm font-bold text-white/60">
                  Global Resilience
                </p>
              </div>
              
              {/* Blended Image */}
              <div 
                className="absolute bottom-0 right-0 w-full h-full translate-x-1/4 translate-y-1/4 opacity-30 group-hover:translate-x-1/5 transition-transform duration-700 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 80%)'
                }}
              >
                <Image src="/cloud_mesh.png" alt="Cloud" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover grayscale" />
              </div>

              <div className="mt-auto relative z-20">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-[#1AB896]" />
                </div>
              </div>
            </motion.div>

            {/* Pink Card: Edge Caching */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-[#F272B6] rounded-[2.5rem] p-8 flex flex-col relative group cursor-pointer shadow-xl shadow-pink-500/10 overflow-hidden"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-zinc-950 rounded-xl">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">0.12ms Ping</span>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-1">
                  Edge Caching
                </h3>
                <p className="text-sm font-bold text-white/60">
                  Invisible Latency
                </p>
              </div>

              {/* Blended Image */}
              <div 
                className="absolute bottom-0 right-0 w-full h-full translate-x-1/4 translate-y-1/4 opacity-30 group-hover:translate-x-1/5 transition-transform duration-700 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at bottom right, black 20%, transparent 80%)'
                }}
              >
                <Image src="/edge_caching.png" alt="Speed" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover grayscale" />
              </div>

              <div className="mt-auto relative z-20">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-[#F272B6]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tall Card: Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 md:row-span-2 bg-[#ECFDF5] rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden group border border-emerald-100 shadow-xl shadow-emerald-500/5"
          >
            <div className="mb-10 relative z-20">
              <div className="p-4 bg-white rounded-2xl border border-emerald-200 shadow-sm w-fit mb-8">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-black text-emerald-950 tracking-tighter mb-2 leading-none">
                Safe &<br/>Secure
              </h3>
              <p className="text-base font-bold text-emerald-700/60 mb-8 mt-4">
                Industrial grade security as standard.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] border border-emerald-200">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Privacy First
              </div>
            </div>

            {/* Blended Security Image */}
            <div 
                className="mt-auto -mr-12 -mb-12 relative h-[55%] w-[140%] opacity-40 group-hover:scale-105 transition-transform duration-1000 pointer-events-none rounded-[3rem] overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to top right, black 30%, transparent 90%)',
                    WebkitMaskImage: 'linear-gradient(to top right, black 30%, transparent 90%)'
                }}
            >
               <Image 
                src="/security_protocols.png" 
                alt="Security Protocols" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-top grayscale"
              />
            </div>
            
            <div className="absolute bottom-8 right-8 z-30">
                <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer">
                <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
