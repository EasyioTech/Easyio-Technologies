'use client';

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef } from "react";

export default function MarqueeText() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const x1 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const x2 = useTransform(smoothProgress, [0, 1], [-400, 0]);

  return (
    <section ref={containerRef} className="bg-white overflow-hidden py-10 md:py-16 border-y border-zinc-100/60">
      <div className="flex flex-col gap-4">
        
        {/* Row 1 - High Contrast Professional */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
          <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
          <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
          <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
          <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
          <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
        </motion.div>

        {/* Row 2 - Subtle Support */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
          <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
          <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
          <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
          <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
          <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
        </motion.div>

      </div>
    </section>
  );
}

function MarqueeItem({ text, italicText, color }: { text: string; italicText: string; color: string }) {
  return (
    <div className={`flex items-center gap-6 px-12 select-none`}>
      <span className={`text-4xl md:text-6xl font-bold tracking-tight ${color}`}>
        {text} <span className="font-serif italic font-medium opacity-90">{italicText}</span>
      </span>
      <div className={`w-2 h-2 rounded-full ${color === 'text-zinc-950' ? 'bg-blue-600' : 'bg-zinc-200'}`} />
    </div>
  );
}
