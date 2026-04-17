'use client';

import { Layers, Zap, Shield, Globe, Terminal, ArrowDownRight, Activity } from "lucide-react";
import { TextReveal } from "@/components/shared/Animations";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const nodes = [
  {
    id: "01",
    label: "ENTERPRISE_SOFTWARE",
    title: "Custom Solutions",
    desc: "Mission-critical systems built to handle your unique business logic with absolute reliability.",
    icon: Terminal,
    side: "left",
    stats: "CORE: STABLE // AUTH: VERIFIED"
  },
  {
    id: "02",
    label: "CLOUD_ARCHITECTURE",
    title: "Scalable Infrastructure",
    desc: "Resilient systems designed to scale seamlessly as your user base grows across the globe.",
    icon: Layers,
    side: "right",
    stats: "NODES: 42k+ // MESH: ACTIVE"
  },
  {
    id: "03",
    label: "PERFORMANCE_TUNING",
    title: "Speed Optimization",
    desc: "Optimizing code and databases to ensure sub-millisecond response times under peak load.",
    icon: Zap,
    side: "left",
    stats: "LAG: 0.12ms // CPU: OPTIMIZED"
  },
  {
    id: "04",
    label: "DATA_SECURITY",
    title: "Secure Engineering",
    desc: "Privacy-first logic and advanced encryption to protect your most sensitive business data.",
    icon: Shield,
    side: "right",
    stats: "ENCRYPT: AES-512-E2EE"
  },
  {
    id: "05",
    label: "SYSTEM_MODERNIZATION",
    title: "Modern Migration",
    desc: "Transitioning legacy systems into modern high-performance architectures without the downtime.",
    icon: Globe,
    side: "left",
    stats: "UPTIME: 99.999% // NODES: GLOBAL"
  }
];

export default function BentoFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-60 px-6 relative bg-transparent overflow-hidden transition-colors"
      id="matrix"
    >
      {/* Blueprint Canvas */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, hsl(var(--infra-grid)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--infra-grid)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* The Core Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 dark:bg-zinc-800 -translate-x-1/2 hidden md:block">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute inset-0 bg-zinc-950 dark:bg-white origin-top shadow-[0_0_15px_rgba(0,0,0,0.02)] dark:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </div>

        <div className="mb-16 md:mb-40 text-center relative z-10">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 dark:text-zinc-500">OUR CAPABILITIES</span>
          </div>
          <h2 className="heading-1 md:text-[10rem]">
            <TextReveal delay={0.1}>OUR</TextReveal> <br />
            <TextReveal delay={0.3}>MATRIX.</TextReveal>
          </h2>
        </div>

        {/* Logical Mapping Nodes */}
        <div className="space-y-24 md:space-y-64 relative z-10">
          {nodes.map((node, i) => (
            <div key={node.id} className="relative group">
              <div className={`flex flex-col ${node.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}>

                {/* Visual Branch (Desktop Only) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-[1px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ x: node.side === 'right' ? "100%" : "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`w-full h-full bg-zinc-950 dark:bg-white ${node.side === 'right' ? 'origin-right' : 'origin-left'}`}
                  />
                </div>

                {/* Content Node */}
                <div className={`w-full md:w-[45%] ${node.side === 'right' ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: node.side === 'right' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${node.side === 'right' ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">#_0{node.id}</span>
                      <div className="w-10 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                      <span className="text-[9px] font-black text-zinc-500 dark:text-zinc-500 tracking-widest uppercase">{node.label}</span>
                    </div>

                    <h3 className="heading-3 md:text-6xl mb-4 md:mb-8 group-hover:text-primary transition-colors duration-500">
                      {node.title}
                    </h3>

                    <p className={`text-lg md:text-2xl text-zinc-500 dark:text-zinc-500 font-medium italic max-w-xl ${node.side === 'left' ? 'ml-auto' : ''} leading-relaxed group-hover:text-zinc-950 dark:group-hover:text-zinc-300 transition-colors duration-700`}>
                      {node.desc}
                    </p>

                    {/* Floating HUD Info */}
                    <div className={`mt-10 flex items-center gap-6 ${node.side === 'right' ? 'justify-start' : 'justify-start md:justify-end'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                      <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-600">
                        <node.icon className="w-4 h-4" />
                      </div>
                      <div className="font-mono text-[9px] text-zinc-500 dark:text-zinc-600 tracking-wider font-bold">
                        {node.stats}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Technical Visualizer */}
                <div className="w-full md:w-[30%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="aspect-square relative flex items-center justify-center"
                  >
                    {/* Kinetic Ring */}
                    <div className="absolute inset-0 border border-zinc-200 dark:border-zinc-800 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-10 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    <div className="relative z-10 w-20 h-20 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      <ArrowDownRight className={`w-8 h-8 transition-transform duration-700 ${node.side === 'right' ? 'rotate-180' : ''}`} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Coordinate Footer */}
        <div className="mt-20 md:mt-80 flex justify-between items-center text-[8px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[1em]">
          <span>ARCH_SYS_MAPPING</span>
          <div className="flex gap-4 md:gap-10">
            <span>L: -12.0494</span>
            <span>R: +4.9213</span>
          </div>
          <Activity className="w-3 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
