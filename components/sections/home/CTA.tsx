'use client';

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

import Magnetic from "@/components/shared/Magnetic";

export default function CTA() {
  return (
    <section className="py-8 md:py-16 bg-transparent relative overflow-hidden" id="contact">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* The Premium Card - Adjusted for Horizontal Profile */}
        <div 
          className="relative rounded-[3rem] p-10 md:p-16 overflow-hidden group border border-yellow-100 shadow-2xl shadow-yellow-200/20 bg-[#FEF9C3]/40 backdrop-blur-sm"
        >
          {/* Abstract Texture Background - Yellowish Glow */}
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow-100/30 blur-[120px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
             
             {/* Tagline */}
             <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-950">Ready to start?</span>
                </div>
             </FadeIn>

             <PremiumHeading 
               text="Helping you build The Future."
               highlightWords={["Future."]}
               as="h2"
               className="text-4xl md:text-6xl lg:text-[72px] font-bold text-zinc-950 tracking-tight leading-[0.9] mb-8 md:mb-12 max-w-4xl mx-auto"
               highlightClassName="font-serif italic font-medium text-zinc-400 mt-4 block"
             />

             <PremiumSubheading 
               delay={0.4}
               text="We work with ambitious founders and teams to build high-quality software that solves real problems and scales beautifully."
               className="text-sm md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-medium"
             />

             {/* The Unique Pixel-Perfect Button */}
             <div className="relative">
                <Magnetic>
                  <Link 
                    href="/contact"
                    className="group flex items-center gap-1 h-12 md:h-16 bg-zinc-950 rounded-full pl-8 pr-2 transition-all duration-500 shadow-2xl shadow-emerald-500/10"
                  >
                    <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase pr-6 pl-2">
                      Connect With Us
                    </span>
                    
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#FEF9C3] shadow-lg -rotate-[22.5deg]">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-950 stroke-[2.5px]" />
                    </div>
                  </Link>
                </Magnetic>
             </div>
          </div>

          {/* Abstract Texture - Psychological depth */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>
      </div>
    </section>
  );
}
