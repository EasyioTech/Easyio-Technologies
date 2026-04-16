'use client';

import { Terminal, Code2, Cpu, Activity, ArrowDownRight, LucideIcon } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "System Audit",
    desc: "We perform a deep analysis of your current architecture to pinpoint performance gaps and technical debt.",
    icon: Terminal,
    side: "left",
  },
  {
    title: "Strategy & Design",
    desc: "We map out a tailored engineering roadmap focused on scalability and long-term stability.",
    icon: Code2,
    side: "right",
  },
  {
    title: "Precision Build",
    desc: "Our senior engineers implement the core infrastructure using modern, high-performance standards.",
    icon: Cpu,
    side: "left",
  },
  {
    title: "Scale & Monitor",
    desc: "We integrate continuous monitoring to ensure your systems remain fast and reliable as you grow.",
    icon: Activity,
    side: "right",
  }
];

function ProtocolStep({ step, index, total, scrollYProgress }: { 
  step: typeof steps[0], 
  index: number, 
  total: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const stepStart = index / total;
  const colorProgress = useTransform(scrollYProgress, [stepStart - 0.1, stepStart + 0.1], [0.3, 1]);
  const opacityProgress = useTransform(scrollYProgress, [stepStart - 0.1, stepStart + 0.1], [0, 1]);

  return (
    <div className={`flex flex-col ${step.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-24 lg:mb-12 will-change-transform`}>
      <div className={`w-full lg:w-1/2 ${step.side === 'right' ? 'lg:pl-20' : 'lg:pr-20'}`}>
        <div className="group relative">
          <div className="absolute -top-12 -left-8 lg:-top-24 lg:-left-20 text-[6rem] lg:text-[18rem] font-black text-zinc-100 dark:text-zinc-900/40 select-none pointer-events-none group-hover:text-zinc-200 dark:group-hover:text-zinc-900 transition-colors duration-1000">
            0{index + 1}
          </div>

          <motion.div style={{ opacity: opacityProgress }} className="relative z-10 translate-z-0">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-xl">
                <step.icon className="w-8 h-8" />
              </div>
              <div className="h-[2px] w-20 bg-zinc-100 dark:bg-zinc-900" />
              <ArrowDownRight className="w-8 h-8 text-zinc-200 dark:text-zinc-800" />
            </div>

            <motion.h3 
              style={{ opacity: colorProgress }}
              className="text-3xl md:text-6xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter mb-4 md:mb-6"
            >
              {step.title}
            </motion.h3>
            <motion.p 
              style={{ opacity: colorProgress }}
              className="max-w-md text-lg md:text-xl text-zinc-500 dark:text-zinc-500 font-medium italic leading-relaxed"
            >
              {step.desc}
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2" />
    </div>
  );
}

export default function Protocol() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 md:py-60 px-6 relative bg-white dark:bg-zinc-950 overflow-hidden transform-gpu">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-[1px] border-dashed border-zinc-950 dark:border-white rotate-12 scale-150" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20 items-end mb-12 md:mb-40">
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400 dark:text-zinc-600 mb-6 block">
                OUR METHODOLOGY
              </span>
            </FadeIn>
            <h2 className="text-4xl md:text-9xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-[0.85]">
              <TextReveal>HOW WE</TextReveal> <br />
              <span className="text-zinc-400 dark:text-zinc-800 italic underline decoration-zinc-200 dark:decoration-zinc-900 underline-offset-[10px] md:underline-offset-[20px]">
                <TextReveal delay={0.4}>DELIVER.</TextReveal>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-4">
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium italic leading-relaxed">
                We follow a rigorous engineering methodology to move your project from initial discovery to production-grade excellence.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="relative">
          {steps.map((step, i) => (
            <ProtocolStep 
              key={i} 
              step={step} 
              index={i} 
              total={steps.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}

          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-zinc-50 dark:bg-zinc-900 hidden lg:block translate-z-0">
             <motion.div 
               style={{ top: dotY }}
               className="absolute -left-[4px] w-[10px] h-[10px] rounded-full bg-zinc-950 dark:bg-white z-20 will-change-[top]"
             />
             <motion.div 
              style={{ height: dotY }}
              className="absolute top-0 left-0 w-full bg-zinc-950 dark:bg-white opacity-20 z-10"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
