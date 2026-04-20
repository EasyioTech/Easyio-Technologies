'use client';

import { motion } from "framer-motion";
import { Search, Globe, Activity, Terminal, Shield, Network } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/shared/Animations";

export default function Connectivity() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="connectivity">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05]">
          <div 
            className="w-[1200px] h-[1200px] bg-no-repeat bg-center bg-contain animate-pulse"
            style={{ 
              backgroundImage: 'url("/images/hero-bg.png")',
              transform: 'rotate(45deg)'
            }}
          />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-12 text-center max-w-3xl mx-auto mb-20">
             <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Global Integration</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-950 uppercase italic leading-tight">
                Mesh <span className="text-zinc-100">Intelligence.</span>
             </h2>
             <p className="mt-8 text-lg text-zinc-500 font-medium italic">
                Decentralized architectures connecting mission-critical nodes across the globe.
             </p>
          </div>

          <div className="lg:col-span-12 relative h-[500px] md:h-[600px] bg-zinc-50 rounded-[4rem] border border-zinc-100 overflow-hidden shadow-inner">
             {/* Simplified Map Visualization */}
             <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                   <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-accent/10 animate-ping absolute" />
                   <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-zinc-950 flex items-center justify-center relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-110">
                      <Globe className="w-16 h-16 md:w-24 md:h-24 text-white" />
                   </div>
                   
                   {/* Data Flow Rings */}
                   <div className="absolute inset-0 -m-8 border border-zinc-200 rounded-full animate-[spin_20s_linear_infinite]" />
                   <div className="absolute inset-0 -m-16 border border-zinc-100 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                </div>
             </div>

             {/* Orbital Nodes */}
             {[
               { top: '20%', left: '25%', label: 'LDN_01', delay: 0.1 },
               { top: '15%', left: '70%', label: 'NYC_04', delay: 0.4 },
               { top: '65%', left: '20%', label: 'SXR_09', delay: 0.7 },
               { top: '75%', left: '75%', label: 'TKY_12', delay: 1.0 },
               { top: '40%', left: '10%', label: 'BER_02', delay: 1.2 },
               { top: '45%', left: '85%', label: 'SYD_07', delay: 1.5 },
             ].map((node, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: node.delay, duration: 0.5 }}
                  className="absolute flex flex-col items-center gap-3" 
                  style={{ top: node.top, left: node.left }}
                >
                   <div className="w-4 h-4 rounded-full bg-white border-2 border-accent shadow-xl shadow-accent/20" />
                   <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl border border-zinc-100 shadow-sm">
                      <Network className="w-3 h-3 text-accent" />
                      <span className="text-[10px] font-black font-mono text-zinc-950 uppercase">{node.label}</span>
                   </div>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
