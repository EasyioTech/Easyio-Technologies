'use client';

import { Github, Database, Cloud, Share2, Globe, Lock, Cpu, Zap, Radio, Terminal, Shield, Workflow, Activity, Layers, Network } from "lucide-react";
import { motion } from "framer-motion";

const integrations = [
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "Kubernetes", icon: Cloud, color: "#326CE5" },
  { name: "GitHub CI", icon: Github, color: "#ffffff" },
  { name: "AWS Cloud", icon: Globe, color: "#FF9900" },
  { name: "Redis", icon: Share2, color: "#DC382D" },
  { name: "Security", icon: Lock, color: "#00A3E0" },
  { name: "Infrastructure", icon: Cpu, color: "#0071C5" },
  { name: "Mesh Networking", icon: Radio, color: "#00D1FF" },
  { name: "Development", icon: Workflow, color: "#7731F7" },
  { name: "Custom Protocols", icon: Terminal, color: "#4D4D4D" },
  { name: "Secrets Vault", icon: Shield, color: "#FFD700" },
  { name: "Cloud Sync", icon: Activity, color: "#FF3366" },
  { name: "System Layers", icon: Layers, color: "#00FFA3" },
  { name: "Networking", icon: Network, color: "#663399" },
  { name: "Optimization", icon: Zap, color: "#F0DB4F" },
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
        <span className="text-[20vw] font-black italic uppercase tracking-tighter leading-none whitespace-nowrap">ECOSYSTEM</span>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[40vh] md:min-h-[50vh]">
        {/* The GenZ Perspective Rail */}
        <div className="relative rotate-[-2deg] scale-105 perspective-2000">
          {/* Scan Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.02)_50%,transparent_100%)] dark:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] z-20 pointer-events-none animate-pulse" />

          <motion.div
            className="flex w-max gap-16 md:gap-24 items-center py-12 will-change-transform"
            style={{ transform: "translateZ(0)" }}
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear"
            }}
          >
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-6 group cursor-default [backface-visibility:hidden]">
                {/* Stylish Icon with Hidden Brand Color - Revealed on Hover */}
                <div
                  className="brand-icon-wrapper w-16 h-16 md:w-20 md:h-20 bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:border-white/20 shadow-lg text-zinc-500"
                  style={{ "--brand-color": item.color } as any}
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />
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

        {/* CSS for Brand Revelation */}
        <style jsx>{`
          .brand-icon-wrapper:hover {
            color: var(--brand-color) !important;
            box-shadow: 0 0 30px var(--brand-color) !important;
            border-color: var(--brand-color) !important;
          }
        `}</style>

        {/* HUD Subtitle / Status */}
        <div className="max-w-7xl mx-auto w-full px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400 dark:text-zinc-600">GLOBAL_NETWORK</span>
            <div className="w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-[10px] font-mono font-bold text-zinc-950 dark:text-white tracking-widest">v2.0_STABLE</span>
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-950 dark:text-white">SYSTEM_STATUS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">OPTIMIZED:</span>
              <span className="text-[10px] font-mono font-bold text-zinc-950 dark:text-white">TRUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
