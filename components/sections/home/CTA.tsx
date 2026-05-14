'use client';

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";



export default function CTA() {
  return (
    <section className="py-8 md:py-16 bg-transparent relative overflow-hidden" id="contact">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* The Premium Card - High Visibility "Vibe" Card */}
        <div 
          className="relative rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden group border border-emerald-200/50 shadow-[0_32px_64px_-16px_rgba(16,185,129,0.15)] bg-white backdrop-blur-md"
        >
          {/* High-Vibrancy Mesh Gradient Background */}
          <div className="absolute inset-0 transition-opacity duration-1000">
            {/* Emerald Primary Glow - More Intense */}
            <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[100%] bg-emerald-200/50 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '7s' }} />
            {/* Yellow Secondary Glow - More Intense */}
            <div className="absolute -bottom-[30%] -right-[10%] w-[80%] h-[100%] bg-yellow-200/40 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '9s', animationDelay: '1.5s' }} />
            {/* Center High-Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/80 blur-[80px] rounded-full" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
             
             {/* Tagline - Refined Scale */}
             <FadeIn delay={0.2}>
                <div className="flex items-center gap-2.5 mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600/80">Ready to start?</span>
                </div>
             </FadeIn>

             <PremiumHeading 
               text="Helping you build The Future."
               highlightWords={["Future."]}
               as="h2"
               className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-[-0.03em] leading-[1.1] mb-6 md:mb-8 max-w-2xl mx-auto"
               highlightClassName="font-serif italic font-medium text-zinc-400 mt-1 block"
             />

             <PremiumSubheading 
               delay={0.4}
               text="We work with ambitious founders and teams to build high-quality software that solves real problems and scales beautifully."
               className="text-sm md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed mb-8 md:mb-10 font-medium"
             />

             {/* Refined CTA Button - Psychological UI Scaling */}
             <div className="relative">
                   <Link 
                     href="/contact"
                     className="group flex items-center gap-1 h-12 md:h-14 bg-zinc-950 rounded-full pl-8 pr-1.5 transition-all duration-500 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                   >
                     <span className="text-white text-[11px] md:text-xs font-black tracking-[0.25em] uppercase pr-4 pl-3">
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
