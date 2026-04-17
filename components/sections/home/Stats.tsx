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
    <section className="py-20 md:py-40 px-6 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-base card-hover p-12 text-center group">
                <div className="text-6xl md:text-7xl font-bold text-zinc-950 dark:text-white mb-6 uppercase tracking-tighter leading-none group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-[0.4em] transition-colors group-hover:text-zinc-950 dark:group-hover:text-zinc-200">
                  {stat.label}
                </p>
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <div className="w-1 h-1 bg-zinc-950 dark:bg-zinc-200 rounded-full" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
