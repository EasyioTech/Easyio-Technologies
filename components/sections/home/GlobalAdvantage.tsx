'use client';

import { m } from "framer-motion";
import { Globe, Clock, DollarSign, ShieldCheck, Zap, ArrowUpRight, CheckCircle2, Laptop } from "lucide-react";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const advantages = [
  {
    icon: DollarSign,
    title: "65% Cost Efficiency",
    subtitle: "High-Caliber Engineering",
    description: "Access elite senior engineers (Next.js, Python, PostgreSQL) at offshore rates ($30–$45/hr) without sacrificing code quality or velocity.",
    badge: "Maximum Runway"
  },
  {
    icon: Clock,
    title: "Guaranteed US Timezone Overlap",
    subtitle: "4–5 Hours Synchronous Daily",
    description: "We work directly alongside your team during US Eastern (EST) and Pacific (PST) hours for daily video standups, Slack, and sprint reviews.",
    badge: "Real-Time Comms"
  },
  {
    icon: ShieldCheck,
    title: "100% IP & Code Ownership",
    subtitle: "Zero Vendor Lock-In",
    description: "Every commit, Docker container, and architectural design is committed directly to your private GitHub repo under a signed mutual NDA.",
    badge: "Enterprise Safe"
  },
  {
    icon: Zap,
    title: "2-Week Risk-Free Pilot",
    subtitle: "Experience Our Speed First",
    description: "Kick off with a focused 2-week sprint. If you are not completely blown away by our technical speed and craftsmanship, you owe nothing.",
    badge: "Zero Downside"
  }
];

export default function GlobalAdvantage() {
  return (
    <section className="py-16 md:py-36 bg-zinc-950 text-white relative overflow-hidden mobile-section-content" id="global-advantage">
      {/* Mesh Accent Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>International Engineering Partnerships</span>
            </div>
            
            <PremiumHeading
              text="Why US & Global Founders Build With Easyio."
              highlightWords={["US", "Global", "Easyio."]}
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.05]"
              highlightClassName="text-emerald-400"
            />
          </div>

          <div className="lg:max-w-md">
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Scale your product roadmap faster without burning your seed round. We provide dedicated full-stack engineering pods and high-speed delivery for startups and scaleups across the United States, Europe, and the Middle East.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.08] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Conversion Bar */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
              Ready to Accelerate Your Roadmap?
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Calculate Your Project Scope or Book an Architecture Review
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Get an instant cost estimate in USD or connect with our lead architect to discuss your system requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/project-estimator"
              className="h-12 px-6 rounded-full bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Instant Cost Calculator</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/916005659527?text=Hi%20Easyio!%20I'm%20a%20US/Global%20founder%20interested%20in%20discussing%20a%20dedicated%20dev%20pod%20or%20MVP."
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>WhatsApp Us (+91 60056 59527)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
