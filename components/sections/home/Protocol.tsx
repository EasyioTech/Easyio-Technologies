'use client';

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { Search, Globe, Activity, ArrowRight, Zap, Target, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/Animations";

interface Stage {
  id: string;
  title: string;
  sub: string;
  desc: string;
  metrics: string[];
  icon: React.ReactNode;
}

const stages = [
  {
    id: "01",
    title: "Research & Discovery",
    sub: "STEP 1",
    desc: "We dive deep into your current systems to find hidden issues and identify exactly what needs to be improved for your success.",
    metrics: ["Full System Audit", "Growth Audit"],
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Design & Development",
    sub: "STEP 2",
    desc: "Our engineers build custom software and reliable tools designed to handle heavy use without ever slowing down.",
    metrics: ["High Stability", "Future-Proof Code"],
    icon: <Binary className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Testing & Quality",
    sub: "STEP 3",
    desc: "We put your system through rigorous testing to make sure it stays fast and stable even when you have thousands of users at once.",
    metrics: ["Traffic Simulation", "Speed Optimization"],
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Launch & Support",
    sub: "STEP 4",
    desc: "We launch your project safely and provide ongoing support to help your business grow smoothly as you get more customers.",
    metrics: ["Safe Deployment", "24/7 Monitoring"],
    icon: <Zap className="w-6 h-6" />
  }
];

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 md:py-64 relative bg-transparent" id="pipeline">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header - Sovereign Alignment */}
        <div className="mb-48 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-12 h-px bg-zinc-200" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">The Engineering Protocol</span>
            </div>
            <FadeIn>
              <h2 
                className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-950 mb-12"
                style={{ fontFamily: 'Instrument Serif, serif' }}
              >
                How we build <br />
                <span className="italic font-medium text-zinc-400">your success</span>
              </h2>
            </FadeIn>
            <div className="flex gap-4">
               <div className="w-2 h-2 rounded-full bg-[#FEF9C3]" />
               <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                 A high-velocity, structured approach to building reliable software systems that grow 
                 seamlessly with your industrial needs.
               </p>
            </div>
          </div>
          
          <div className="hidden lg:block pb-12">
             <div className="w-32 h-32 rounded-full border border-zinc-100 flex items-center justify-center relative">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-200"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Phase Sequential</span>
             </div>
          </div>
        </div>

        {/* Timeline Infrastructure */}
        <div className="relative">
          
          {/* High-Precision Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-100 -translate-x-1/2 rounded-full">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 bottom-0 w-full bg-zinc-950 origin-top shadow-[0_0_20px_rgba(224,242,254,0.8)]"
            />
          </div>

          {/* Timeline Stages */}
          <div className="space-y-64">
            {stages.map((stage, i) => (
              <TimelineStage 
                key={i} 
                stage={stage} 
                index={i} 
                total={stages.length} 
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineStage({ 
  stage, 
  index, 
  total, 
  scrollYProgress 
}: { 
  stage: Stage; 
  index: number; 
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isEven = index % 2 === 0;
  const start = index / total;
  const end = (index + 0.8) / total;

  // Reveal logic with 0.05 base opacity for 'fainted' look
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.15, start, end, end + 0.1],
    [0.05, 1, 1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [start - 0.1, start],
    [40, 0]
  );

  const accentColor = index % 2 === 0 ? "#FEF9C3" : "#D1FAE5";

  return (
    <motion.div 
      style={{ opacity }}
      className={cn(
        "relative flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-32",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      
      {/* Visual Indicator Layer */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div 
          className="w-12 h-12 md:w-20 md:h-20 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-950 shadow-xl transition-all duration-700"
          style={{ 
            backgroundColor: useTransform(scrollYProgress, [start - 0.05, start], ["#FFFFFF", accentColor]),
            rotate: useTransform(scrollYProgress, [start - 0.05, start], [0, 45])
          }}
        >
          <div className="text-[12px] md:text-xl font-black tracking-tighter" style={{ transform: "rotate(-45deg)" }}>
             {stage.id}
          </div>
          
          {/* Pulse Signal */}
          <AnimatePresence>
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [start - 0.05, start], [0, 1]) }}
              className="absolute inset-x-[-12px] h-[1px] bg-zinc-950 opacity-20"
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Narrative Container */}
      <div className="flex-1 w-full pl-16 md:pl-0">
        <motion.div 
          style={{ y }}
          className={cn(
            "flex flex-col gap-6",
            isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
          )}
        >
          <div className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
            {stage.sub}
          </div>
          
          <h3 className="text-4xl md:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.1]">
            {stage.title}
          </h3>
          
          <p className={cn(
            "text-zinc-500 text-lg md:text-xl leading-relaxed max-w-xl",
            isEven ? "md:ml-auto" : "md:mr-auto"
          )}>
            {stage.desc}
          </p>
          
          <div className={cn(
            "flex flex-wrap gap-3",
            isEven ? "justify-end" : "justify-start"
          )}>
            {stage.metrics.map((m: string, idx: number) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-950 bg-white border border-zinc-100 px-5 py-2.5 rounded-xl shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {m}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Architectural Spacer */}
      <div className="flex-1 hidden md:block" />

    </motion.div>
  );
}
