'use client';

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";



export default function CTA() {
  return (
    <section className="py-8 md:py-16 bg-transparent relative overflow-hidden mobile-section-content" id="contact">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 relative z-10">
        
        {/* The Premium Card - High Visibility Editorial Card */}
        <div 
          className="relative rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden group border border-zinc-200/90 shadow-xl shadow-zinc-200/40 bg-zinc-50/70"
        >
          {/* Subtle Warm Gradient Accent - desktop only */}
          <div className="hidden md:block absolute inset-0 transition-opacity duration-1000">
            <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[80%] bg-zinc-200/40 blur-[100px] rounded-full" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[80%] bg-zinc-200/30 blur-[100px] rounded-full" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
             
             {/* Tagline - Clean Typographic Eyebrow without capsule */}
             <FadeIn delay={0.2}>
                <div className="flex items-center gap-2.5 mb-4 md:mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                   <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500">The Best Tech Company in Kashmir</span>
                </div>
             </FadeIn>

             <PremiumHeading 
               text="Helping you build The Future."
               highlightWords={["Future."]}
               as="h2"
               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-[-0.03em] leading-tight md:leading-[1.1] mb-4 md:mb-8 max-w-2xl mx-auto"
               highlightClassName="font-serif italic font-medium text-zinc-400 mt-1 block"
             />

             <PremiumSubheading 
               delay={0.4}
               text="We work with ambitious founders and teams to build high-quality software that solves real problems and scales beautifully."
               className="text-xs sm:text-sm md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed mb-6 md:mb-10 font-medium"
             />

             {/* Refined CTA Button - Psychological UI Scaling */}
             <div className="relative">
                   <Link 
                     href="/contact"
                     className="group flex items-center gap-1 h-12 md:h-14 bg-zinc-950 rounded-full pl-6 md:pl-8 pr-1.5 transition-all duration-300 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                   >
                     <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.25em] uppercase pr-3 md:pr-4 pl-2 md:pl-3">
                       Get Started
                     </span>
                     
                     <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:bg-emerald-500 group-hover:text-white shadow-sm -rotate-[15deg]">
                       <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-950 stroke-[2.5px] group-hover:text-white transition-colors duration-300" />
                     </div>
                   </Link>
             </div>
          </div>

          {/* Subtle Abstract Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      </div>
    </section>
  );
}
