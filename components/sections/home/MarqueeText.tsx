'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function MarqueeText() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-white/5 transition-colors">
      <div className="flex flex-col gap-4">
        {/* Line 1 - GenZ Vibe / High Energy */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <span className="text-[8vw] font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-none">
            Zero Tolerance for Mid Code <span className="text-zinc-400 dark:text-zinc-800 ml-10">/</span>
            Architecting Lethal Efficiency <span className="text-zinc-400 dark:text-zinc-800 ml-10">/</span>
            Zero Tolerance for Mid Code <span className="text-zinc-400 dark:text-zinc-800 ml-10">/</span>
            Architecting Lethal Efficiency
          </span>
        </motion.div>

        {/* Line 2 - Unique Color / Opposite Direction */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          <span className="text-[8vw] font-black tracking-tighter text-zinc-500 dark:text-zinc-400 uppercase leading-none">
            Shipping Protocols at Lightspeed <span className="text-zinc-300 dark:text-zinc-800 ml-10">/</span>
            No Compromise on Velocity <span className="text-zinc-300 dark:text-zinc-800 ml-10">/</span>
            Shipping Protocols at Lightspeed <span className="text-zinc-300 dark:text-zinc-800 ml-10">/</span>
            No Compromise on Velocity
          </span>
        </motion.div>

        {/* Line 3 - Tagline / Same as Line 1 */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <span className="text-[4vw] font-bold italic tracking-widest text-zinc-400/60 dark:text-zinc-600/50 uppercase leading-none">
            Built for those who build the future <span className="mx-20">//</span>
            EASYIO TECH v.2.0.4 <span className="mx-20">//</span>
            Built for those who build the future <span className="mx-20">//</span>
            EASYIO TECH v.2.0.4
          </span>
        </motion.div>
      </div>


    </section>
  );
}
