'use client';

import { ShieldCheck, CheckCircle2, Lock, FileCode, RefreshCcw, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const guarantees = [
  {
    icon: FileCode,
    title: "100% Code & IP Ownership",
    tag: "PROPRIETARY FREEDOM",
    description: "Every commit, database schema, CI/CD script, and wireframe belongs exclusively to your company. We push directly to your private GitHub organization with zero vendor lock-in.",
  },
  {
    icon: RefreshCcw,
    title: "Milestone-Based Releases",
    tag: "PAY FOR TESTED WORK",
    description: "Never pay upfront for blind promises. Projects are structured in transparent two-week milestone sprints. You inspect and approve live staging demos before funds are unlocked.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Free Post-Launch Warranty",
    tag: "ZERO-DEFECT PLEDGE",
    description: "We don't disappear after launch. Every project includes 30 days of comprehensive monitoring, performance tuning, and free bug-fixing to ensure absolute stability under production load.",
  },
  {
    icon: Lock,
    title: "Strict Bilateral NDA",
    tag: "LEGAL CONFIDENTIALITY",
    description: "Before you share a single line of business logic, database specs, or trade secrets, we execute a legally enforceable mutual Non-Disclosure Agreement protecting your intellectual property.",
  },
];

export default function Guarantees() {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100 mobile-section-content" id="guarantees">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-Risk Engineering</span>
          </div>

          <PremiumHeading
            text="The Easyio 4-Pillar Client Guarantee"
            highlightWords={["Guarantee"]}
            as="h2"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 mb-4 leading-tight"
            highlightClassName="text-emerald-600"
          />

          <p className="text-zinc-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Software development shouldn't be a leap of faith. We eliminate financial, technical, and intellectual risk through rock-solid contractual guarantees.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 sm:p-10 rounded-[2.5rem] bg-zinc-50/70 border border-zinc-200/80 hover:border-zinc-950 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase bg-white border border-zinc-200 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-zinc-950 tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed in every client agreement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="text-center">
          <Link
            href="/project-estimator"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-zinc-950/15 active:scale-95"
          >
            <span>Calculate Your Project Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
