'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Database, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "01",
    title: "Performance Scaling",
    tagline: "VELOCITY PROTOCOL",
    description: "Architected for extreme load. We design infrastructure that remains snappy and efficient no matter how large you scale.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    metrics: ["< 20ms Latency", "Horizontal Scaling", "99.99% Uptime"],
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Secure Foundation",
    tagline: "DEFENSE ARCHITECTURE",
    description: "Security isn't an afterthought—it's built into every layer. We protect your data with modern standards.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    metrics: ["End-to-End Encryption", "Hardened Kernel", "ISO 27001 Ready"],
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Reliable Intelligence",
    tagline: "DATA INTEGRITY",
    description: "Your information is your most valuable asset. We ensure it's always accurate and synced in real-time.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000",
    metrics: ["Real-time Sync", "Fault Tolerance", "Atomic Ops"],
    icon: <Database className="w-5 h-5" />
  }
];

export default function EngineFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 md:py-64 relative bg-white overflow-hidden" id="features">
      
      {/* High-Precision Vertical Progress Beam */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 -translate-x-1/2" />
      <motion.div 
        style={{ scaleY }}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-emerald-500 -translate-x-1/2 origin-top shadow-[0_0_15px_#10B981]" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-48 text-center md:text-left">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Capabilities</span>
           <h2 className="text-5xl md:text-9xl font-bold tracking-tighter text-zinc-950 leading-[0.8] mb-12">
             Industrial <br />
             <span className="font-serif italic font-medium text-zinc-300">Stabilization</span>
           </h2>
        </div>

        <div className="space-y-48 md:space-y-96">
          {capabilities.map((item, i) => (
            <CapabilityItem 
              key={i} 
              item={item} 
              isEven={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityItem({ item, isEven }: { item: any, isEven: boolean }) {
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-center gap-12 md:gap-32",
      isEven ? "md:flex-row-reverse" : ""
    )}>
      
      {/* Background Big Number - Psychological Hierarchy */}
      <div className={cn(
        "absolute -top-16 md:-top-32 font-black text-[100px] md:text-[240px] text-zinc-50 opacity-10 select-none",
        isEven ? "left-0" : "right-0"
      )}>
        {item.id}
      </div>

      {/* Visual Component */}
      <div className="flex-1 w-full relative">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-[3rem] overflow-hidden aspect-[1.2/1] border border-zinc-100 shadow-2xl bg-zinc-50 group"
         >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
         </motion.div>
      </div>

      {/* Content Component */}
      <div className={cn(
        "flex-1 z-10 flex flex-col",
        isEven ? "items-start text-left" : "md:items-end md:text-right"
      )}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
                {!isEven && <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.tagline}</span>}
                <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-xl">
                    {item.icon}
                </div>
                {isEven && <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.tagline}</span>}
            </div>

            <h3 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-8 tracking-tighter leading-tight">
              {item.title}
            </h3>

            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium italic">
              {item.description}
            </p>

            <div className={cn("flex flex-wrap gap-3", isEven ? "justify-start" : "md:justify-end")}>
                {item.metrics.map((m: string, idx: number) => (
                  <div key={idx} className="px-4 py-2 bg-white border border-zinc-100 rounded-xl text-[9px] font-black uppercase tracking-widest text-zinc-950 flex items-center gap-2 shadow-sm">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    {m}
                  </div>
                ))}
            </div>
          </motion.div>
      </div>
    </div>
  );
}
