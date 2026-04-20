'use client';

import { motion } from "framer-motion";
import { Marquee } from "@/components/shared/Animations";
import { Shield, Activity, Terminal } from "lucide-react";

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
    <section className="py-16 bg-white relative overflow-hidden border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-12">
          
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-accent" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Global Partners</span>
          </div>
          
          <div className="w-full overflow-hidden relative grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <Marquee className="h-12 md:h-16" speed={30}>
              {partners.map((p, i) => (
                <div 
                  key={i}
                  className="mx-12 md:mx-20 flex items-center gap-4"
                >
                   <span className="text-xl md:text-2xl font-black tracking-tight text-zinc-900 uppercase italic">
                      {p}
                   </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
