'use client';

import { FadeIn, Marquee } from "@/components/shared/Animations";

const partners = [
  "NEXT INTELLIGENCE",
  "CORE PROTOCOL",
  "FRONTIER LABS",
  "STELLAR SYSTEMS",
  "QUANTUM FLOW",
  "AXON ARCHIVE",
];

export default function Logos() {
  return (
    <section className="py-20 px-6 relative overflow-hidden border-y border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-700 whitespace-nowrap">
            TRUSTED BY FRONTIER TEAMS
          </FadeIn>
          
          <div className="flex-1 w-full overflow-hidden relative group">
            <Marquee className="py-2 h-12" speed={30}>
              {partners.map((p, i) => (
                <div 
                  key={i}
                  className="mx-12 text-lg md:text-xl font-black uppercase tracking-tight text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-all cursor-default"
                >
                  {p}
                </div>
              ))}
            </Marquee>
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
