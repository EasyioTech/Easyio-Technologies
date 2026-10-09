'use client';

import PageWrapper from "@/components/layout/PageWrapper";
import { m } from "framer-motion";
import Link from "next/link";
import { 
  ArrowDownRight, Shield, Zap, Terminal, 
  Cpu, HardDrive, Network, Code2, Layers, 
  ShieldCheck, Database, Fingerprint, ArrowRight,
  ArrowUpRight, Globe
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="w-full bg-white text-zinc-900 font-sans pb-20">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-20 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <PremiumHeading 
                text="Building your digital future."
                highlightWords={["future."]}
                className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-zinc-950 mb-8 leading-[0.95] max-w-[1000px]"
                highlightClassName="text-emerald-600"
              />

              <PremiumSubheading 
                delay={0.4}
                text="Based in Kashmir, we build powerful digital tools and software infrastructure that help businesses scale securely worldwide."
                className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mt-6"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid: Narrative & Identity */}
        <section className="py-16 md:py-24 border-y border-zinc-100 bg-zinc-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[500px]">
              
              {/* Narrative Main Card */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-7 bg-white border border-zinc-200 rounded-[2.5rem] p-10 md:p-12 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:border-emerald-200 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-tight mb-6">
                  Beyond the traditional tech hub.
                </h3>
                <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-lg mb-8">
                  We focus on deep work and great engineering. Our space in Sopore is built for creators who care more about making things work perfectly than just following the latest trends.
                </p>
                <div className="mt-auto">
                   <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors">
                     View Headquarters
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </m.div>

              {/* Stacked Cards */}
              <div className="md:col-span-5 flex flex-col gap-6">
                
                {/* Yellow High End Software */}
                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 bg-[#FDE047] rounded-[2.5rem] p-8 md:p-10 flex flex-col relative group overflow-hidden shadow-xl shadow-yellow-500/10 border border-yellow-200 hover:shadow-2xl transition-all"
                >
                  <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                     <Code2 className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-950 tracking-tight mb-2">High-End Software</h3>
                  <p className="text-sm font-semibold text-zinc-900/60 leading-relaxed max-w-[240px]">
                    Premium design and architecture engineered for exceptional performance.
                  </p>
                </m.div>

                {/* Dark Smart Growth */}
                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-zinc-950 rounded-[2.5rem] p-8 md:p-10 flex flex-col relative group overflow-hidden shadow-xl shadow-zinc-950/10 hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/10 group-hover:scale-110 transition-transform">
                       <Layers className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">Smart Growth</h3>
                    <p className="text-sm font-semibold text-zinc-400 leading-relaxed max-w-[240px]">
                      Built to scale organically without bloated dependencies or lock-ins.
                    </p>
                  </div>
                </m.div>

              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Core Principles */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">Values</span>
              </div>
              <PremiumHeading 
                text="Our Core Principles."
                highlightWords={["Principles."]}
                className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 leading-[0.95]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 group hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Zap className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">Fast & Reliable</h4>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                  We build systems that work instantly. We focus on speed at every level, ensuring your software is always fast and responsive.
                </p>
              </m.div>

              {/* Card 2 */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 group hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">You Own Everything</h4>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                  Software built for complete ownership. No hidden rules or vendor traps—just clean, custom tools made specifically for your business.
                </p>
              </m.div>

              {/* Card 3 */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 group hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <HardDrive className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">Built to Last</h4>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                  We build for the long term. Our software is designed to grow with you, staying modern and useful for years to come.
                </p>
              </m.div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 border-t border-zinc-100 bg-zinc-50/30">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                  Start your digital growth.
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 px-8 bg-emerald-500 text-white font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 border border-white/20 bg-white/5 backdrop-blur-md text-white font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all rounded-full"
                  >
                    Read our Journal
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
