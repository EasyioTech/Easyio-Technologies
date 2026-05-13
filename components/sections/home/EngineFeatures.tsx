'use client';

import { motion } from "framer-motion";
import { Zap, Shield, Heart, ArrowUpRight } from "lucide-react";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const features = [
  {
    id: "01",
    title: "Performance First",
    icon: Zap,
    description: "Sub-millisecond response times. Optimized databases. Code that doesn't waste CPU cycles. Your users notice the difference.",
    metric: "0.34s",
    label: "Average Load Time",
    color: "emerald"
  },
  {
    id: "02",
    title: "Built to Last",
    icon: Shield,
    description: "Clean architecture that survives rewrites. Testable, maintainable, future-proof. Technical debt is a choice we don't make.",
    metric: "99.98%",
    label: "System Uptime",
    color: "blue"
  },
  {
    id: "03",
    title: "Real User Obsession",
    icon: Heart,
    description: "Every pixel, every interaction matters. We measure success by outcomes, not features shipped. Systems that scale with your vision.",
    metric: "12m 34s",
    label: "User Engagement",
    color: "purple"
  }
];

export default function EngineFeatures() {
  return (
    <section className="relative py-24 md:py-40 bg-white" id="engine">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Huge & Minimal */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-zinc-200" />
            <span className="text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase">
              The Engineering Standard
            </span>
          </div>
          <PremiumHeading
            text="Software that works the way you think."
            highlightWords={["works", "think."]}
            className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 leading-[0.9] max-w-4xl"
          />
        </div>

        {/* Features - Editorial Layout */}
        <div className="space-y-32 md:space-y-48">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Metric Column */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className={`text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none opacity-[0.03] select-none text-${feature.color}-500 absolute -top-12 -left-8`}>
                    {feature.id}
                  </div>
                  <div className="relative z-10">
                    <h4 className={`text-6xl md:text-9xl font-black tracking-tighter text-zinc-950 mb-4`}>
                      {feature.metric}
                    </h4>
                    <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400">
                      {feature.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 pt-4">
                <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-8`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-zinc-950 mb-6 tracking-tighter uppercase">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-tight mb-10 max-w-lg">
                  {feature.description}
                </p>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-950 group">
                  View Protocol <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-40 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Natural Extension</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Zero Debt</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Global Scale</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-950">Systems Optimal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
