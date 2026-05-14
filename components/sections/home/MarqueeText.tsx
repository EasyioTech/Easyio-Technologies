'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function MarqueeText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  
  const springX1 = useSpring(x1, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springX2 = useSpring(x2, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="relative bg-transparent overflow-hidden py-10 md:py-24 border-y border-zinc-100/60">
      <div className="flex flex-col gap-8">
        
        {/* Row 1 - High Contrast Professional */}
        <div className="flex overflow-hidden">
          <motion.div style={{ x: springX1 }} className="flex whitespace-nowrap">
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
          </motion.div>
        </div>

        {/* Row 2 - Subtle Support */}
        <div className="flex overflow-hidden">
          <motion.div style={{ x: springX2 }} className="flex whitespace-nowrap">
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function MarqueeItem({ text, italicText, color }: { text: string; italicText: string; color: string }) {
  return (
    <div className={`flex items-center gap-6 md:gap-10 px-8 md:px-16 select-none`}>
      <span className={`text-4xl md:text-9xl font-bold tracking-tighter ${color}`}>
        {text} <span className="font-serif italic font-medium opacity-90">{italicText}</span>
      </span>
      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${color === 'text-zinc-950' ? 'bg-emerald-600' : 'bg-zinc-200'}`} />
    </div>
  );
}
