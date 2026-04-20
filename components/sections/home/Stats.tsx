'use client';

import { FadeIn } from "@/components/shared/Animations";

const stats = [
  { label: "Systems Deployed", value: "250+" },
  { label: "Uptime Protocol", value: "99.9%" },
  { label: "Active Nodes", value: "1.2k" },
  { label: "Global Reach", value: "15+" }
];

export default function Stats() {
  return (
    <section className="py-32 md:py-56 px-6 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-base p-16 text-center group bg-white border-2 border-slate-100 hover:border-blue-100 hover:bg-slate-50/50 transition-all duration-500">
                <div className="text-6xl md:text-8xl font-black text-primary mb-6 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700 tabular-nums">
                  {stat.value}
                </div>
                <p className="text-[12px] text-slate-500 font-black uppercase tracking-[0.25em] transition-colors group-hover:text-blue-600">
                  {stat.label}
                </p>
                {/* Industrial Divider */}
                <div className="w-16 h-[3px] bg-blue-100 mx-auto mt-10 rounded-full group-hover:w-24 group-hover:bg-blue-400 transition-all duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
