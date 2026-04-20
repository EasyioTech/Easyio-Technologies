'use client';

import { Layers, Zap, Shield, Globe, Terminal, ArrowDownRight } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="section-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Elite Header: Asymmetric Focal Point */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block">Capabilities & Protocols</span>
            <h2 className="heading-1">
              Industrial Grade <br />
              <span className="text-slate-400">System Architectures.</span>
            </h2>
          </div>
          <div className="lg:mb-4 lg:max-w-sm">
             <p className="text-sm font-semibold text-slate-500 leading-relaxed border-l-4 border-accent pl-8 py-2">
                Mission-critical infrastructure engineered to eliminate technical debt and maximize operational sovereignty.
             </p>
          </div>
        </div>

        {/* The Elite Asymmetric Matrix - No Generic Grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Big Feature 1: Software Engines (Col Span 7) */}
          <div 
            className="md:col-span-7 card-base !p-12 md:!p-16 group hover:border-accent/40 bg-white shadow-2xl shadow-slate-200/50"
          >
            <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white mb-12 shadow-xl shadow-blue-600/30">
                    <Terminal className="w-10 h-10" />
                </div>
                <h3 className="heading-3 mb-6">Custom Enterprise Software Engines</h3>
                <p className="body-text text-slate-500 mb-12">
                   We don't build apps; we architect high-performance engines. Optimized for logic-intensive workflows, our systems handle complexity with sub-millisecond precision.
                </p>
                <div className="mt-auto grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                    <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Core Efficiency</div>
                        <div className="text-3xl font-black text-primary tabular-nums">98.4%</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Stack Status</div>
                        <div className="text-3xl font-black text-accent uppercase tracking-tighter">Verified</div>
                    </div>
                </div>
            </div>
          </div>

          {/* Big Feature 2: Infrastructure (Col Span 5) */}
          <div 
            className="md:col-span-5 card-base !p-12 md:!p-16 bg-dark-section text-white group"
          >
            <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-10 border border-white/20">
                    <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase">Scalable <br /> Cloud Mesh</h3>
                <p className="text-white/60 font-medium leading-relaxed mb-10">
                   Resilient infrastructure designed to expand across global nodes. Built for 99.999% availability under peak traffic loads.
                </p>
                <div className="mt-auto">
                    <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-blue-400">
                        <span>Cluster: active</span>
                        <ArrowDownRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
          </div>

          {/* Small Feature 1 (Col Span 4) */}
          <div 
            className="md:col-span-4 card-base !p-10 group hover:bg-slate-50 border-slate-100"
          >
            <Zap className="w-8 h-8 text-accent mb-6" />
            <h4 className="text-xl font-black mb-3">Extreme Speed</h4>
            <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-6">Database tuning and edge-caching protocols for instant interaction.</p>
            <div className="bg-white rounded-xl p-4 border border-slate-100 font-mono text-[10px] text-accent">PING: 0.12ms // CACHE: HIT</div>
          </div>

          {/* Small Feature 2 (Col Span 4) */}
          <div 
            className="md:col-span-4 card-base !p-10 group hover:bg-slate-50 border-slate-100"
          >
            <Shield className="w-8 h-8 text-blue-800 mb-6" />
            <h4 className="text-xl font-black mb-3">Hardened Security</h4>
            <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-6">Advanced encryption layers and privacy-first engineering protocols.</p>
            <div className="bg-white rounded-xl p-4 border border-slate-100 font-mono text-[10px] text-blue-800">ENCRYPT: AES-512-GCM</div>
          </div>

          {/* Small Feature 3 (Col Span 4) */}
          <div 
            className="md:col-span-4 card-base !p-10 bg-accent text-white"
          >
            <Globe className="w-8 h-8 text-white mb-6" />
            <h4 className="text-xl font-black mb-3">Global Sync</h4>
            <p className="text-sm font-bold text-white/80 leading-relaxed mb-6">Masterized data replication across multi-region enterprise nodes.</p>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 font-mono text-[10px] text-white">NODES: 42 // REGION: AS-1, EU-3</div>
          </div>

        </div>
      </div>
    </section>
  );
}
