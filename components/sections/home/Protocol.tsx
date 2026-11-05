'use client';

import { Search, PenTool, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const stages = [
  {
    id: "01",
    title: "Discovery & Architecture",
    sub: "STEP 01",
    desc: "We start by listening. We map your business workflows, data models, and operational bottlenecks into a clear technical specification.",
    highlights: ["System Blueprint", "Scope & Milestones"],
    icon: Search,
    className: "md:col-span-2",
  },
  {
    id: "02",
    title: "Design & Engineering",
    sub: "STEP 02",
    desc: "Our designers and systems engineers build your platform in transparent two-week sprints with live staging previews.",
    highlights: ["Clean UI/UX", "Modular Code"],
    icon: PenTool,
    className: "md:col-span-1",
  },
  {
    id: "03",
    title: "QA & Security Audit",
    sub: "STEP 03",
    desc: "We stress-test every transaction, API endpoint, and edge case to ensure sub-second speed and bank-grade reliability.",
    highlights: ["Load Testing", "Security Review"],
    icon: Code,
    className: "md:col-span-1",
  },
  {
    id: "04",
    title: "Deployment & Handover",
    sub: "STEP 04",
    desc: "We launch with zero downtime, transfer 100% of the source code to your repository, and back it with a 30-day warranty.",
    highlights: ["100% IP Transfer", "30-Day Warranty"],
    icon: Rocket,
    className: "md:col-span-2",
  }
];

export default function Protocol() {
  return (
    <section className="py-16 md:py-28 relative bg-transparent overflow-hidden mobile-section-content" id="process">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Our Engineering Process</span>
          </div>
          <PremiumHeading 
            text="How we bring ideas to life"
            highlightWords={["ideas", "life"]}
            as="h2"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 mb-4 leading-tight"
          />
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            A predictable, milestone-driven process designed for speed, transparency, and zero surprises.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative z-10">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.id}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-zinc-200/90 hover:border-zinc-950 p-7 sm:p-8 md:p-10 flex flex-col justify-between bg-white transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/40",
                  stage.className
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full">
                      {stage.sub}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-emerald-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-zinc-950">
                    {stage.title}
                  </h3>
                  
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg">
                    {stage.desc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-8 pt-6 border-t border-zinc-100">
                  {stage.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-50 rounded-full border border-zinc-200/70 text-xs font-semibold text-zinc-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
