'use client';

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

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
  return (
    <section className="py-32 md:py-48 relative bg-transparent overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simple & Focused */}
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6 uppercase">Our Process</span>
            <PremiumHeading 
              text="How we bring ideas to life"
              highlightWords={["ideas", "life"]}
              as="h2"
              className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 mb-8 leading-[0.85]"
            />
            <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                A simple, effective way to build products that people love.
            </p>
        </div>

        {/* Clean Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[340px]">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-[3rem] border border-zinc-100 p-10 flex flex-col justify-between bg-white/50 backdrop-blur-sm transition-all hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50 min-h-[340px] md:min-h-0",
                stage.className
              )}
            >
              {/* Subtle Gradient Hover */}
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000", stage.color)} />
              
              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-950 transition-colors">{stage.sub}</span>
                     <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-xs font-black text-zinc-300 group-hover:text-zinc-950 group-hover:border-zinc-200 transition-all">
                        {stage.id}
                     </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-zinc-950 mb-6 tracking-tighter">
                    {stage.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-base md:text-lg leading-snug max-w-[320px]">
                    {stage.desc}
                  </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                {stage.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-900 transition-all">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:rotate-12">
                {stage.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
