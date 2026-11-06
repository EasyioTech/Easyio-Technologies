'use client';

import React from "react";

export default function MarqueeText() {
  return (
    <section className="relative bg-transparent overflow-hidden py-8 md:py-24 border-y border-zinc-100/60 mobile-section-content">
      <div className="flex flex-col gap-4 md:gap-8">
        
        {/* Row 1 - High Contrast Professional (100% Native CSS GPU Marquee) */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
          </div>
        </div>

        {/* Row 2 - Subtle Support (Reverse Direction) */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform" style={{ animationDirection: 'reverse' }}>
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
          </div>
        </div>

      </div>
    </section>
  );
}

function MarqueeItem({ text, italicText, color }: { text: string; italicText: string; color: string }) {
  return (
    <div className="flex items-center gap-6 md:gap-10 px-8 md:px-16 select-none">
      <span className={`text-4xl md:text-9xl font-bold tracking-tighter ${color}`}>
        {text} <span className="font-serif italic font-medium opacity-90">{italicText}</span>
      </span>
      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${color === 'text-zinc-950' ? 'bg-emerald-600' : 'bg-zinc-200'}`} />
    </div>
  );
}
