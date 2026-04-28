'use client';

import { motion } from "framer-motion";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const features = [
  {
    id: "01",
    title: "Performance First",
    description: "Sub-millisecond response times. Optimized databases. Code that doesn't waste CPU cycles. Your users notice the difference.",
    metric: "0.34s load time",
  },
  {
    id: "02",
    title: "Built to Last",
    description: "Clean architecture that survives rewrites. Testable, maintainable, future-proof. Technical debt is a choice we don't make.",
    metric: "99.98% uptime",
  },
  {
    id: "03",
    title: "Real User Obsession",
    description: "Every pixel, every interaction matters. We measure success by outcomes, not features shipped. Systems that scale with your vision.",
    metric: "12m 34s engagement",
  }
];

export default function EngineFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden mesh-gradient">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <span className="text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase block mb-8">
            What We Build
          </span>
          <PremiumHeading
            text="Software that works the way you think."
            highlightWords={["works", "think"]}
            className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-[0.95]"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-8 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Index */}
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">
                {feature.id}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-zinc-950 tracking-tighter mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base font-medium text-zinc-700 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Metric & Divider */}
              <div className="flex items-center gap-4 pt-4 border-t border-emerald-200">
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                  {feature.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom divider */}
        <div className="mt-24 pt-16 border-t border-emerald-100 flex justify-between items-center text-emerald-600">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-emerald-200 flex items-center justify-center">
              <div className="w-2 h-2 bg-zinc-950" />
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase">Engineered for Scale</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em]">Natural extensions of your business</span>
        </div>

      </div>
    </section>
  );
}
