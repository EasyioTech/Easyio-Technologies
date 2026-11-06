'use client';

import { Users, Clock, ShieldCheck, GitBranch, ArrowUpRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const partnershipPillars = [
  {
    icon: Users,
    title: "Direct Engineer Access",
    subtitle: "No Middlemen",
    description: "Collaborate directly with senior full-stack architects and systems engineers. Daily communication with the people actually writing your code.",
    badge: "Senior Pods"
  },
  {
    icon: Clock,
    title: "Synchronous Timezone Overlap",
    subtitle: "Real-Time Collaboration",
    description: "4 to 5 hours of guaranteed daily overlap with US (EST/PST), European, and Gulf working hours for live standups, Slack, and sprint demos.",
    badge: "Global Teams"
  },
  {
    icon: ShieldCheck,
    title: "100% IP & Code Ownership",
    subtitle: "Zero Lock-In",
    description: "Every commit, Docker container, and architecture config is pushed directly to your company's private GitHub repository from day one.",
    badge: "Client Freedom"
  },
  {
    icon: GitBranch,
    title: "Transparent Sprints",
    subtitle: "Verified Delivery",
    description: "Two-week agile milestones with live preview deployments on staging servers. You review and approve tangible progress every single sprint.",
    badge: "Bi-Weekly Demos"
  }
];

export default function GlobalAdvantage() {
  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    "Hi Easyio! I'm interested in discussing custom software development for our product roadmap."
  )}`;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-zinc-50/40 to-white text-zinc-950 relative overflow-hidden mobile-section-content" id="global-advantage">
      {/* Soft Ambient Mesh Background (High-Performance GPU Radial) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 50% 35%, rgba(209, 250, 229, 0.2), transparent 70%),
            radial-gradient(ellipse 45% 35% at 85% 85%, rgba(254, 249, 195, 0.25), transparent 70%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-800 text-xs font-semibold shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Global Engineering Standards</span>
            </div>
            
            <PremiumHeading
              text="Built for Founders Who Value Speed and Craftsmanship"
              highlightWords={["Speed", "Craftsmanship"]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]"
              highlightClassName="text-emerald-700"
            />
          </div>

          <div className="lg:max-w-md">
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              We partner with founders and technical leaders across India, the United States, Europe, and the Middle East to deliver high-performance web applications, enterprise ERPs, and cloud systems.
            </p>
          </div>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {partnershipPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 hover:border-zinc-950 hover:shadow-xl hover:shadow-zinc-200/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-600 bg-zinc-100/80 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-950 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-emerald-700 font-semibold mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard on every contract</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conversion Banner (Hero Section Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-white bg-zinc-100 overflow-hidden shadow-2xs">
                    <img src={`/images/avatar_${i}.jpg`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-600 font-medium">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>Trusted by growing businesses</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight mb-2">
              Have an upcoming product or system to build?
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Calculate your budget estimate in 60 seconds or speak directly with our engineering team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/project-estimator"
              className="group h-12 pl-6 pr-2.5 flex items-center justify-center bg-zinc-950 text-white font-medium text-xs sm:text-sm rounded-full hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            >
              <span>Instant Cost Estimator</span>
              <div className="w-8 h-8 ml-3 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-300 group-hover:rotate-45 -rotate-[22.5deg]">
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </div>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 flex items-center justify-center bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 font-semibold text-xs sm:text-sm rounded-full transition-all shadow-2xs active:scale-95"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
