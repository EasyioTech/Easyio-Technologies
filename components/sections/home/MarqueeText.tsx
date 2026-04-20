'use client';

import React from "react";

export default function MarqueeText() {
  return (
    <section className="bg-white overflow-hidden py-10 md:py-16 border-y border-zinc-100/60">
      <div className="flex flex-col gap-4">
        
        {/* Row 1 - High Contrast Professional */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap" style={{ '--duration': '60s' } as React.CSSProperties}>
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            
            {/* Duplicate for seamless loop */}
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
            <MarqueeItem text="Mission" italicText="Critical" color="text-zinc-950" />
            <MarqueeItem text="Industrial" italicText="Architecture" color="text-zinc-950" />
            <MarqueeItem text="Engineering" italicText="Excellence" color="text-zinc-950" />
            <MarqueeItem text="Technical" italicText="Sovereignty" color="text-zinc-950" />
          </div>
        </div>

        {/* Row 2 - Subtle Support */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap" style={{ '--duration': '60s' } as React.CSSProperties}>
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />

            {/* Duplicate for seamless loop */}
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
            <MarqueeItem text="Future" italicText="Proof" color="text-zinc-400" />
            <MarqueeItem text="Atomic" italicText="Consistency" color="text-zinc-400" />
            <MarqueeItem text="Resilient" italicText="Infrastructure" color="text-zinc-400" />
            <MarqueeItem text="Adaptive" italicText="Protocols" color="text-zinc-400" />
          </div>
        </div>

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
      <div className={`w-2 h-2 rounded-full ${color === 'text-zinc-950' ? 'bg-emerald-600' : 'bg-zinc-200'}`} />
    </div>
  );
}
