'use client';

import Link from "next/link";
import { ArrowUpRight, Star, Calculator, Activity, Cloud, Database, Layout, Hexagon, Zap } from "lucide-react";
import { FadeIn, Marquee } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-24 overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle Ambient Mesh Background - Desktop only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-emerald-100/25 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-zinc-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          {/* Contextual Eyebrow Pill */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold shadow-2xs mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Software Engineering &amp; Enterprise Systems Lab</span>
            </div>
          </FadeIn>

          <PremiumHeading
            text="Building products people actually love"
            highlightWords={["products", "love"]}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black tracking-tighter text-zinc-950 mb-6 md:mb-8 leading-[1.04] max-w-5xl"
          />

          <PremiumSubheading
            delay={0.4}
            text="We design and build clean, scalable digital products. From MVPs to enterprise scale, we are the engineering partner you need to move faster."
            className="text-zinc-600 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          />

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-14">
              <Link
                href="/contact"
                className="group h-13 sm:h-14 pl-7 pr-2 flex items-center justify-center bg-zinc-950 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-950/10 active:scale-95"
              >
                <span>Start a Project</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 ml-3.5 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-emerald-400 group-hover:scale-105 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </div>
              </Link>

              <Link
                href="/project-estimator"
                className="h-13 sm:h-14 px-6 flex items-center justify-center gap-2.5 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200/90 hover:border-zinc-300 text-sm font-semibold rounded-full transition-all shadow-2xs active:scale-95"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Estimate Project Cost</span>
              </Link>
            </div>

            {/* Social Proof Indicator */}
            <div className="flex items-center justify-center gap-3.5 text-left bg-white/80 backdrop-blur-xs border border-zinc-200/70 px-4 py-2.5 rounded-full shadow-2xs">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                    <img src={`/images/avatar_${i}.jpg`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="pr-1">
                <div className="flex items-center gap-0.5 mb-0.5" aria-label="Rated 5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-zinc-600 tracking-tight">
                  50+ Systems Delivered Across Kashmir &amp; Beyond
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <div className="w-full mt-14 pt-10 pb-4 overflow-hidden border-t border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em]">
            Trusted by innovative startups and fast-growing teams
          </p>
        </div>
        <div className="w-full opacity-75 hover:opacity-100 transition-opacity duration-500 pause-marquee">
          <Marquee className="h-12 md:h-14" speed={30}>
            <div className="flex items-center">
              <LogoItem name="FlowBank" icon={<Layout className="w-5 h-5" />} />
            </div>
            <div className="flex items-center">
              <LogoItem name="DataGrid" icon={<Database className="w-5 h-5" />} />
            </div>
            <div className="flex items-center">
              <LogoItem name="Nexus" icon={<Hexagon className="w-5 h-5" />} />
            </div>
            <div className="flex items-center">
              <LogoItem name="CloudNine" icon={<Cloud className="w-5 h-5" />} />
            </div>
            <div className="flex items-center">
              <LogoItem name="Pulse" icon={<Activity className="w-5 h-5" />} />
            </div>
            <div className="flex items-center">
              <LogoItem name="Apex" icon={<Zap className="w-5 h-5" />} />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mx-8 md:mx-14 select-none">
      <div className="text-zinc-500">
        {icon}
      </div>
      <span className="font-bold tracking-tight text-zinc-600 text-lg md:text-xl">{name}</span>
    </div>
  );
}
