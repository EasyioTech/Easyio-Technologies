'use client';

import { motion } from "framer-motion";
import { Zap, Shield, Heart, ArrowRight } from "lucide-react";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const features = [
  {
    id: "01",
    title: "Performance First",
    icon: Zap,
    description: "Sub-millisecond response times. Optimized databases. Code that doesn't waste CPU cycles. Your users notice the difference.",
    metric: "0.34s",
    label: "Load Time",
    color: "emerald"
  },
  {
    id: "02",
    title: "Built to Last",
    icon: Shield,
    description: "Clean architecture that survives rewrites. Testable, maintainable, future-proof. Technical debt is a choice we don't make.",
    metric: "99.98%",
    label: "Uptime",
    color: "blue"
  },
  {
    id: "03",
    title: "Real User Obsession",
    icon: Heart,
    description: "Every pixel, every interaction matters. We measure success by outcomes, not features shipped. Systems that scale with your vision.",
    metric: "12m 34s",
    label: "Engagement",
    color: "purple"
  }
];

export default function EngineFeatures() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-zinc-950" id="engine">
      {/* Technical Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #27272a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-emerald-500/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-500 uppercase">
              The Easyio Standard
            </span>
          </motion.div>
          
          <PremiumHeading
            text="Software that works the way you think."
            highlightWords={["works", "think."]}
            className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex flex-col p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden"
            >
              {/* Metric Background */}
              <div className="absolute -top-10 -right-10 text-[10rem] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none">
                {feature.id}
              </div>

              {/* Icon & Label */}
              <div className="flex items-center justify-between mb-12">
                <div className={`p-4 rounded-2xl bg-zinc-800/50 text-${feature.color}-500 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    {feature.metric}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {feature.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed mb-8">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                  Read Protocol <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Status */}
        <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Protocol</span>
              <span className="text-sm font-bold text-white">V2.4.0-Stable</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Latency</span>
              <span className="text-sm font-bold text-emerald-500">Nominal (12ms)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-800">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Natural extensions of your business
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
