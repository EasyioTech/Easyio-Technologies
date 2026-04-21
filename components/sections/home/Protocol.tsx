'use client';

import { motion } from "framer-motion";
import { Search, Activity, Zap, Binary, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "01",
    title: "Research & Discovery",
    sub: "STEP 1",
    desc: "We dive deep into your current systems to find hidden issues and identify exactly what needs to be improved.",
    metrics: ["Full System Audit", "Growth Audit"],
    icon: <Search className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-yellow-50/50"
  },
  {
    id: "02",
    title: "Design & Dev",
    sub: "STEP 2",
    desc: "Custom software engines designed to handle heavy use without ever slowing down.",
    metrics: ["High Stability", "Future-Proof"],
    icon: <Binary className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-zinc-50/50"
  },
  {
    id: "03",
    title: "Testing & Quality",
    sub: "STEP 3",
    desc: "Rigorous simulation to ensure stability for thousands of concurrent users.",
    metrics: ["Traffic Simulation", "Speed Optimization"],
    icon: <Activity className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-zinc-50/50"
  },
  {
    id: "04",
    title: "Launch & Support",
    sub: "STEP 4",
    desc: "Safe deployment and 24/7 monitoring to ensure smooth growth as you scale.",
    metrics: ["Safe Deployment", "24/7 Monitoring"],
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-emerald-50/50"
  }
];

import { PremiumHeading } from "@/components/shared/PremiumHeading";

export default function Protocol() {
  return (
    <section className="py-32 relative bg-transparent overflow-hidden" id="pipeline">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Superior Header */}
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-6 drop-shadow-sm">The Engineering Protocol</span>
            <PremiumHeading 
              text="How we build success"
              highlightWords={["success"]}
              as="h2"
              className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-950 mb-8 leading-[0.85]"
            />
            <p className="text-zinc-500 text-lg max-w-xl leading-relaxed font-medium italic">
                A high-velocity, structured approach to building reliable software systems.
            </p>
        </div>

        {/* Bento Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[340px]">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
              whileHover={{ scale: 1.01, y: -5 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border border-zinc-100 p-8 md:p-10 flex flex-col justify-between transition-shadow hover:shadow-2xl hover:shadow-zinc-200/50 bg-white min-h-[340px] md:min-h-0",
                stage.className
              )}
            >
              {/* Technical Backdrop */}
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700", stage.color)} />
              <div className="absolute top-0 right-0 p-8 md:p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110">
                {stage.icon}
              </div>

              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-zinc-950 transition-colors uppercase">{stage.sub}</span>
                     <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-[10px] font-bold">
                        {stage.id}
                     </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                    {stage.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-base leading-relaxed max-w-[280px]">
                    {stage.desc}
                  </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                {stage.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 text-[9px] font-bold uppercase tracking-wider text-zinc-400 group-hover:border-zinc-200 group-hover:text-zinc-900 transition-all">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
