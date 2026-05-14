'use client';

import Link from "next/link";
import { ArrowUpRight, Star, ArrowRight, Activity, Cloud, Database, Layout, Hexagon, Zap } from "lucide-react";
import { FadeIn, Marquee } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";



export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Enhanced Mesh Gradient Background - Matches CTA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-emerald-100/30 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-yellow-100/30 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-white/40 blur-[100px] rounded-full" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          
          <PremiumHeading 
            text="Building products people actually love"
            highlightWords={["products", "love"]}
            className="text-5xl md:text-8xl lg:text-[110px] font-black tracking-tighter text-zinc-950 mb-8 leading-none max-w-[1200px]"
          />

          <PremiumSubheading 
            delay={0.6}
            text="We design and build clean, scalable digital products. From mvps to global scale, we're the partner you need to move faster."
            className="text-zinc-400 text-base md:text-xl font-medium max-w-xl mx-auto mb-12 leading-tight"
          />

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <Link 
                  href="/contact" 
                  className="group h-14 pl-8 pr-2 flex items-center justify-center bg-zinc-950 text-white font-medium rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-emerald-500/10 active:scale-95"
                >
                  Get Started 
                    <div className="w-10 h-10 ml-4 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-500 group-hover:rotate-45 -rotate-[22.5deg]">
                      <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                    </div>
                </Link>
              
              <div className="flex items-center gap-4 text-left">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FEF9C3] bg-zinc-100 overflow-hidden shadow-sm">
                       <img src={`/images/avatar_${i}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <Star className="w-3.5 h-3.5 text-zinc-200 fill-zinc-200" />
                  </div>
                  <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                    Trusted by 1000+ clients
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <div className="w-full mt-10 pt-10 pb-12 overflow-hidden border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">
            Trusted by innovative startups and fast-growing teams
          </p>
        </div>
        <div className="w-full opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <Marquee className="h-12 md:h-16" speed={30}>
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
    <div className="flex items-center gap-3 mx-8 md:mx-16">
      <div className="text-zinc-500">
        {icon}
      </div>
      <span className="font-bold tracking-tight text-zinc-500 text-xl md:text-2xl">{name}</span>
    </div>
  );
}
