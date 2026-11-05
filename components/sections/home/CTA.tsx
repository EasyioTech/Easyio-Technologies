'use client';

import { ArrowUpRight, Calculator } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 bg-transparent relative overflow-hidden mobile-section-content" id="contact">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Editorial Conversion Card */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden border border-zinc-200/90 shadow-xl shadow-zinc-200/40 bg-white">
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-emerald-100/30 blur-[100px] rounded-full" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[70%] bg-zinc-200/30 blur-[100px] rounded-full" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-zinc-700">
                  Ready When You Are
                </span>
              </div>
            </FadeIn>

            <PremiumHeading 
              text="Helping you build the future."
              highlightWords={["future."]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight leading-tight mb-5 max-w-2xl mx-auto"
              highlightClassName="font-serif italic font-medium text-emerald-700"
            />

            <PremiumSubheading 
              delay={0.25}
              text="We partner with ambitious founders and enterprises to engineer reliable software that solves real operational challenges and scales effortlessly."
              className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed mb-8 md:mb-10"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="group flex items-center gap-3 h-13 sm:h-14 bg-zinc-950 hover:bg-zinc-800 rounded-full pl-7 pr-2 transition-all duration-300 shadow-lg shadow-zinc-950/10 active:scale-95"
              >
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Start Your Project
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-400">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950" />
                </div>
              </Link>

              <Link
                href="/project-estimator"
                className="h-13 sm:h-14 px-6 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 text-zinc-900 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Calculate Cost in 60s</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
