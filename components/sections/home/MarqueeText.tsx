'use client';

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef } from "react";

export default function MarqueeText() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  const x1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const x2 = useTransform(smoothProgress, [0, 1], [-200, 0]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 overflow-hidden bg-transparent border-y border-zinc-100 dark:border-zinc-800 transition-colors relative">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="flex flex-col gap-10 md:gap-14 relative z-10">
        {/* Line 1 - High Level Systems */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <span className="text-[6vw] md:text-[4vw] font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-none px-4">
            Hyper-Scalable Systems <span className="text-emerald-500 mx-10">//</span>
            Precision Architecture <span className="text-emerald-500 mx-10">//</span>
            Real-time Data Integrity <span className="text-emerald-500 mx-10">//</span>
            Autonomous Logic
          </span>
        </motion.div>

        {/* Line 2 - Specializations */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          <span className="text-[6vw] md:text-[4vw] font-black tracking-tighter text-zinc-500 dark:text-zinc-400 uppercase leading-none px-4">
            Edge Intelligence <span className="text-zinc-300 dark:text-zinc-800 mx-10">❖</span>
            Cloud Native Infrastructure <span className="text-zinc-300 dark:text-zinc-800 mx-10">❖</span>
            Quantum-Safe Security <span className="text-zinc-300 dark:text-zinc-800 mx-10">❖</span>
            DevOps Excellence
          </span>
        </motion.div>

        {/* Line 3 - Corporate Value */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <span className="text-[3vw] md:text-[1.5vw] font-extrabold italic tracking-[0.4em] text-zinc-400/60 dark:text-zinc-600/50 uppercase leading-none px-4">
            Engineering Sovereignty <span className="mx-16">•</span>
            Scale Without Friction <span className="mx-16">•</span>
            Established MMXIV Kashmir
          </span>
        </motion.div>
      </div>
    </section>
  );
}
