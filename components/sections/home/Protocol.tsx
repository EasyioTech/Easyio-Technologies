'use client';

import { m } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import { useState, useEffect } from "react";

const stages = [
  {
    id: "01",
    title: "Understanding",
    sub: "STEP 1",
    desc: "We start by listening. We dive into your goals, your users, and your vision to build a solid foundation for the project.",
    highlights: ["Goal Alignment", "User Research"],
    icon: <Search className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-yellow-50/30"
  },
  {
    id: "02",
    title: "Crafting",
    sub: "STEP 2",
    desc: "Our designers and engineers work together to create a seamless, beautiful product that works perfectly on every device.",
    highlights: ["Modern Design", "Clean Code"],
    icon: <PenTool className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-zinc-50/50"
  },
  {
    id: "03",
    title: "Perfecting",
    sub: "STEP 3",
    desc: "We test every interaction and optimize every line of code to ensure your product is fast, stable, and ready for the world.",
    highlights: ["Speed Testing", "QA Audit"],
    icon: <Code className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-zinc-50/50"
  },
  {
    id: "04",
    title: "Scaling",
    sub: "STEP 4",
    desc: "We help you launch with confidence and provide the support you need to scale your product as your business grows.",
    highlights: ["Launch Strategy", "Ongoing Growth"],
    icon: <Rocket className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-emerald-50/30"
  }
];

export default function Protocol() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    
    const runCycle = () => {
      setActiveStep(0); // Line starts at Node 0
      t1 = setTimeout(() => setActiveStep(1), 2000); // Line reaches Node 1
      t2 = setTimeout(() => setActiveStep(2), 6000); // Line reaches Node 2
      t3 = setTimeout(() => setActiveStep(3), 8000); // Line reaches Node 3
    };

    runCycle();
    const interval = setInterval(runCycle, 9000); // 9s total loop (8s draw + 1s hold)
    
    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="py-32 md:py-48 relative bg-transparent overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Background Vein/Line Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block" style={{ top: '250px', height: 'calc(100% - 250px)' }}>
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* Subtle base track */}
            <path 
              d="M 333 250 L 833 250 C 833 500, 166 500, 166 750 L 666 750" 
              stroke="rgba(16,185,129,0.1)" 
              strokeWidth="2" 
              fill="none" 
            />
            {/* Glowing line perfectly synced with React state */}
            <m.path 
              d="M 333 250 L 833 250 C 833 500, 166 500, 166 750 L 666 750" 
              stroke="rgba(16,185,129,1)" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray="2000 2000"
              animate={{ strokeDashoffset: [2000, 0, 0] }}
              transition={{ duration: 9, times: [0, 8/9, 1], repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.8))" }}
            />
          </svg>
        </div>

        {/* Header - Simple & Focused */}
        <div className="mb-24 flex flex-col items-center text-center relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6">Our Process</span>
            <PremiumHeading 
              text="How we bring ideas to life"
              highlightWords={["ideas", "life"]}
              as="h2"
              className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 mb-8 leading-none"
            />
            <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                A simple, effective way to build products that people love.
            </p>
        </div>

        {/* Clean Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[340px] relative z-10">
          {stages.map((stage, i) => {
            const isActive = activeStep === i;
            return (
              <m.div
                key={stage.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-[3rem] border p-10 flex flex-col justify-between bg-white/70 backdrop-blur-md transition-all duration-700 min-h-[340px] md:min-h-0",
                  isActive ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.02]" : "border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50",
                  stage.className
                )}
              >
                {/* Subtle Gradient Hover */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000", stage.color)} />
                
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-950 transition-colors">{stage.sub}</span>
                       <div className={cn(
                         "w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black transition-all duration-500",
                         isActive 
                          ? "border-emerald-500 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] bg-emerald-50" 
                          : "border-zinc-100 text-zinc-300 group-hover:text-zinc-950 group-hover:border-zinc-200"
                       )}>
                          {stage.id}
                       </div>
                    </div>
                    
                    <h3 className={cn(
                      "text-3xl md:text-4xl font-black mb-6 tracking-tighter transition-all duration-500",
                      isActive 
                        ? "text-emerald-600 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]" 
                        : "text-zinc-950"
                    )}>
                      {stage.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-base md:text-lg leading-snug max-w-[320px] transition-colors duration-500">
                      {stage.desc}
                    </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                  {stage.highlights.map((item, idx) => (
                    <div key={idx} className={cn(
                      "flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all duration-500",
                      isActive ? "border-emerald-200 text-emerald-700 shadow-sm" : "border-zinc-100 text-zinc-400 group-hover:text-zinc-900"
                    )}>
                      <div className={cn("w-1 h-1 rounded-full", isActive ? "bg-emerald-500 animate-pulse" : "bg-emerald-500/50")} />
                      {item}
                    </div>
                  ))}
                </div>

                <div className={cn(
                  "absolute top-10 right-10 transition-all duration-700",
                  isActive ? "opacity-30 text-emerald-500 scale-110 rotate-12" : "opacity-5 group-hover:opacity-20 group-hover:rotate-12"
                )}>
                  {stage.icon}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
