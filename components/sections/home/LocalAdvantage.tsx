'use client';

import { m } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Briefcase, MapPin, Code2, Layers, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

export default function LocalAdvantage() {
  return (
    <section className="py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-zinc-950" />
            <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">Local Partner</span>
          </div>
          <PremiumHeading 
            text="Your Technology Partner in Kashmir."
            highlightWords={["Partner", "Kashmir."]}
            className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 leading-[0.95] max-w-2xl"
            highlightClassName="text-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px]">
          
          {/* Main Hero Card */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 bg-zinc-950 rounded-[2.5rem] p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[400px]"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-20 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-12">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-widest rounded-full border border-white/10">
                  Global Standards
                </span>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                  Silicon Valley Tech.<br/>
                  <span className="text-zinc-400 italic font-serif font-medium">Built in Sopore.</span>
                </h3>
                <p className="text-zinc-400 text-base md:text-lg font-medium max-w-md leading-relaxed mb-10">
                  We don't rely on outdated legacy systems. We utilize modern enterprise frameworks like Next.js, Node.js, and Python to ensure your digital solutions are future-proof.
                </p>
                
                <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 text-xs font-black uppercase tracking-widest py-4 px-8 rounded-full hover:scale-105 transition-all shadow-xl hover:bg-emerald-50">
                  Work With Us
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
               <Code2 className="w-48 h-48 text-emerald-500" />
            </div>
          </m.div>

          {/* Right Column Stack */}
          <div className="md:col-span-4 md:row-span-2 flex flex-col gap-6">
            
            {/* Top Right Card */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-[#FDE047] rounded-[2.5rem] p-8 flex flex-col relative group cursor-pointer shadow-xl shadow-yellow-500/5 overflow-hidden border border-yellow-200"
            >
              <div className="relative z-20 h-full flex flex-col">
                <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-black text-zinc-950 tracking-tight mb-3 leading-tight">
                  Direct<br/>Communication
                </h3>
                <p className="text-sm font-semibold text-zinc-900/60 leading-relaxed mt-auto">
                  Working with a local team means no extreme time-zone differences.
                </p>
              </div>
            </m.div>

            {/* Bottom Right Card */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-[#ECFDF5] rounded-[2.5rem] p-8 flex flex-col relative group cursor-pointer shadow-xl shadow-emerald-500/5 overflow-hidden border border-emerald-100"
            >
              <div className="relative z-20 h-full flex flex-col">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform shadow-emerald-600/20">
                   <Network className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight mb-3 leading-tight">
                  Local<br/>Understanding
                </h3>
                <p className="text-sm font-semibold text-emerald-900/60 leading-relaxed mt-auto">
                  Software engineered to perform exceptionally well on intermittent local networks.
                </p>
              </div>
            </m.div>

          </div>
        </div>
        
        {/* HQ Banner */}
        <m.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-6 bg-white border border-zinc-200 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
              <MapPin className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
            </div>
            <div>
              <h4 className="text-lg font-black text-zinc-950 tracking-tight mb-1">Easyio Technologies HQ</h4>
              <p className="text-sm font-medium text-zinc-500">First floor, War complex, Block B, Main chowk Tehsil Road, Sopore, J&K 193201</p>
            </div>
          </div>
          
          <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all shrink-0">
             <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
        </m.div>

      </div>
    </section>
  );
}
