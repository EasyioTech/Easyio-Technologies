'use client';

import { Github, Database, Cloud, Share2, Globe, Lock, Cpu, Zap, Radio, Terminal, Shield, Workflow, Activity, Layers, Network } from "lucide-react";
import { motion } from "framer-motion";

const integrations = [
  { name: "PostgreSQL", icon: Database },
  { name: "Kubernetes", icon: Cloud },
  { name: "GitHub_CI", icon: Github },
  { name: "AWS_Cloud", icon: Globe },
  { name: "Redis_Mem", icon: Share2 },
  { name: "SSL_Sec", icon: Lock },
  { name: "NPU_Core", icon: Cpu },
  { name: "Mesh_Net", icon: Radio },
  { name: "Dev_Flow", icon: Workflow },
  { name: "Protocol_X", icon: Terminal },
  { name: "Vault_S", icon: Shield },
  { name: "Sync_Node", icon: Activity },
  { name: "Mesh_H", icon: Layers },
  { name: "Net_L", icon: Network },
  { name: "I/O_Pipe", icon: Zap },
];

// Triple duplicate for ultra-seamless loop
const marqueeItems = [...integrations, ...integrations, ...integrations];

export default function Connectivity() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden relative" id="connectivity">
      {/* Structural HUD Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      {/* Background Label */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-[0.03] dark:opacity-[0.07] pointer-events-none select-none">
         <span className="text-[20vw] font-black italic uppercase tracking-tighter leading-none whitespace-nowrap">CONNECTIVITY_CORE</span>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[40vh] md:min-h-[50vh]">
        {/* The GenZ Perspective Rail */}
        <div className="relative rotate-[-2deg] scale-105 perspective-2000">
           {/* Scan Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.02)_50%,transparent_100%)] dark:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] z-20 pointer-events-none animate-pulse" />

           <motion.div 
             className="flex gap-16 md:gap-24 items-center whitespace-nowrap py-12 will-change-transform"
             style={{ transform: "translateZ(0)" }}
             animate={{ x: ["0%", "-33.333%"] }}
             transition={{ 
               repeat: Infinity, 
               duration: 35, 
               ease: "linear" 
             }}
           >
             {marqueeItems.map((item, i) => (
               <div key={i} className="flex items-center gap-6 group cursor-default [backface-visibility:hidden]">
                  {/* Stylish Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg dark:shadow-white/5">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  
                  {/* GenZ Styled Text */}
                  <span className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-zinc-950 dark:text-white transition-all duration-500 group-hover:translate-x-4 antialiased">
                    {item.name}
                  </span>

                  {/* Separator Bullet */}
                  <div className="w-4 h-4 md:w-6 md:h-6 rotate-45 border-4 border-zinc-200 dark:border-zinc-800 ml-8 md:ml-12 group-hover:border-zinc-950 dark:group-hover:border-white transition-colors" />
               </div>
             ))}
           </motion.div>
        </div>

        {/* HUD Subtitle / Status */}
        <div className="max-w-7xl mx-auto w-full px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400 dark:text-zinc-600">LIVE_DATA_RAIL</span>
                <div className="w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                <span className="text-[10px] font-mono font-bold text-zinc-950 dark:text-white tracking-widest">v2.0.42_STABLE</span>
             </div>
             
             <div className="flex gap-8">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-950 dark:text-white">NODES_OPTIMIZED</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">LATENCY:</span>
                   <span className="text-[10px] font-mono font-bold text-zinc-950 dark:text-white">0.02ms</span>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
