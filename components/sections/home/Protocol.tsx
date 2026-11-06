'use client';

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { 
  Search, 
  PenTool, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Gauge, 
  Layers, 
  Cpu, 
  Lock, 
  Sparkles,
  GitBranch,
  Database,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Link from "next/link";

interface Stage {
  id: string;
  stepNum: string;
  title: string;
  tagline: string;
  duration: string;
  badge: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  icon: React.ElementType;
}

const stages: Stage[] = [
  {
    id: "01",
    stepNum: "PHASE 01",
    title: "Discovery & Blueprint",
    tagline: "Architecture First",
    duration: "Week 1",
    badge: "Foundation",
    description: "Before writing code, we map your business workflows, core data models, and bottlenecks into an unambiguous technical specification and clickable prototype.",
    deliverables: [
      "Technical Architecture Specification",
      "Interactive Figma Prototypes",
      "Database Schema & Entity Relations",
      "Fixed Milestone & Cost Roadmap"
    ],
    metrics: [
      { label: "Scope Certainty", value: "100%" },
      { label: "Surprise Cost", value: "Zero" }
    ],
    icon: Search
  },
  {
    id: "02",
    stepNum: "PHASE 02",
    title: "Agile Engineering",
    tagline: "Transparent Sprints",
    duration: "Weeks 2-5",
    badge: "Development",
    description: "Our senior software architects build your platform in focused two-week sprints. You test real, functioning software on private staging environments at every step.",
    deliverables: [
      "Modern Next.js / TypeScript Stack",
      "High-Throughput PostgreSQL Models",
      "Continuous Staging Previews",
      "Bi-Weekly Progress Demos"
    ],
    metrics: [
      { label: "Sprint Cadence", value: "14 Days" },
      { label: "Client Code Access", value: "Direct" }
    ],
    icon: PenTool
  },
  {
    id: "03",
    stepNum: "PHASE 03",
    title: "Stress-Test & Audit",
    tagline: "Quality Assurance",
    duration: "Week 6",
    badge: "Verification",
    description: "We subject every transaction, API route, and edge case to automated security scans, query profiling, and high-concurrency load testing before release.",
    deliverables: [
      "Bank-Grade Security & Auth Audit",
      "Lighthouse 95+ Performance Tuning",
      "Sub-100ms API Latency Validation",
      "Cross-Device & Browser Verification"
    ],
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Security Risk", value: "Zero" }
    ],
    icon: ShieldCheck
  },
  {
    id: "04",
    stepNum: "PHASE 04",
    title: "Launch & IP Transfer",
    tagline: "Total Ownership",
    duration: "Go-Live",
    badge: "Production",
    description: "We deploy to high-speed cloud infrastructure with zero downtime. You receive 100% intellectual property rights, full repository access, and our 30-day warranty.",
    deliverables: [
      "Zero-Downtime Cloud Deployment",
      "100% Private GitHub Repo Transfer",
      "Automated CI/CD & Docker Setup",
      "30-Day Post-Launch Bug Warranty"
    ],
    metrics: [
      { label: "IP Ownership", value: "100%" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    icon: Rocket
  }
];

export default function Protocol() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStage = stages[activeStep];

  return (
    <section 
      className="py-16 md:py-32 relative overflow-hidden mobile-section-content" 
      id="process"
    >
      {/* High-Performance Lightweight Ambient Mesh (Single GPU Layer) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 20%, rgba(209, 250, 229, 0.25), transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(254, 249, 195, 0.3), transparent 70%)
          `
        }}
      >
        {/* Soft dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #18181b 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Crisp Architectural Track Lines (Zero CPU Repaint) */}
        <svg className="w-full h-full absolute inset-0 opacity-40 hidden md:block" viewBox="0 0 1440 900" fill="none">
          {/* Master Horizontal Track */}
          <path 
            d="M 120 280 L 1320 280" 
            stroke="#E4E4E7" 
            strokeWidth="1.5" 
            strokeDasharray="4 6" 
          />

          {/* Connected Stage Drops */}
          {[270, 570, 870, 1170].map((x, idx) => (
            <g key={idx}>
              <line 
                x1={x} 
                y1={280} 
                x2={x} 
                y2={330} 
                stroke={activeStep === idx ? "#059669" : "#E4E4E7"} 
                strokeWidth={activeStep === idx ? "2" : "1"}
                className="transition-colors duration-200"
              />
              <circle 
                cx={x} 
                cy={280} 
                r={activeStep === idx ? 4.5 : 3} 
                fill={activeStep === idx ? "#059669" : "#D4D4D8"} 
                className="transition-all duration-200"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-18 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-zinc-200/90 shadow-2xs mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700">The Engineering Protocol</span>
          </div>

          <PremiumHeading 
            text="How we bring ideas to life"
            highlightWords={["ideas", "life"]}
            as="h2"
            className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 mb-4 md:mb-6 leading-tight md:leading-none"
          />
          <p className="text-zinc-600 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed font-medium">
            No black-box ambiguity or missed deadlines. A transparent, milestone-driven engineering pipeline crafted for predictable velocity and high code craftsmanship.
          </p>
        </div>

        {/* 1. Interactive Pipeline Timeline Track (Horizontal Ribbon) */}
        <div className="relative mb-8 md:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "relative text-left p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 group cursor-pointer focus:outline-hidden",
                    isActive
                      ? "bg-white text-zinc-950 border-zinc-950 shadow-xl shadow-zinc-950/5 ring-1 ring-zinc-950/10 md:scale-[1.02]"
                      : "bg-white/80 hover:bg-white text-zinc-800 border-zinc-200/80 hover:border-zinc-300 shadow-2xs"
                  )}
                >
                  {/* Subtle top indicator bar on active */}
                  {isActive && (
                    <m.div 
                      layoutId="activeBar"
                      className="absolute top-0 left-6 right-6 h-1 bg-zinc-950 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className={cn(
                      "text-[10px] md:text-xs font-bold uppercase tracking-widest",
                      isActive ? "text-emerald-700" : isPast ? "text-zinc-700" : "text-zinc-400"
                    )}>
                      {stage.stepNum}
                    </span>

                    <span className={cn(
                      "text-[10px] font-bold px-2.5 py-0.5 rounded-full border",
                      isActive 
                        ? "bg-[#FEF9C3] text-zinc-900 border-amber-200/80" 
                        : "bg-zinc-50 text-zinc-600 border-zinc-200/60"
                    )}>
                      {stage.duration}
                    </span>
                  </div>

                  <div className="font-bold text-base md:text-xl tracking-tight leading-snug text-zinc-950">
                    {stage.title}
                  </div>

                  <div className="text-xs mt-1 text-zinc-500 hidden sm:block">
                    {stage.tagline}
                  </div>

                  {/* Active Step Indicator Footer */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <span className={cn(
                      "text-[11px] font-semibold",
                      isActive ? "text-zinc-900" : "text-zinc-500"
                    )}>
                      {stage.badge}
                    </span>
                    <div className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      isActive ? "bg-emerald-600" : isPast ? "bg-zinc-800" : "bg-zinc-200"
                    )} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Master Architectural Stage Inspector (Clean Light Studio Deck - High Performance) */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] border border-zinc-200/90 bg-white shadow-xl shadow-zinc-950/5 overflow-hidden">
          {/* Studio Bar Header */}
          <div className="px-6 py-4 border-b border-zinc-100 bg-gradient-to-r from-emerald-50/40 via-yellow-50/30 to-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-[11px] text-zinc-500 hidden sm:inline-block">
                easyio://process/phase-{currentStage.id.toLowerCase()}-{currentStage.title.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>STAGE INSPECTOR</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <m.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Scope, Narrative & Verified Deliverables */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md">
                      <currentStage.icon className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                        {currentStage.stepNum} • {currentStage.duration}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
                        {currentStage.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    {currentStage.description}
                  </p>
                </div>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Phase Deliverables &amp; Artifacts
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.deliverables.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50/90 border border-zinc-200/80 text-xs sm:text-sm font-semibold text-zinc-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Metrics & Hero-Styled Action */}
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    {currentStage.metrics.map((mItem, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                          {mItem.value}
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                          {mItem.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="group h-12 pl-6 pr-1.5 flex items-center justify-center bg-zinc-950 text-white font-medium rounded-full hover:bg-zinc-800 transition-all shadow-md active:scale-95 text-xs"
                  >
                    <span>Start Project</span>
                    <div className="w-9 h-9 ml-3 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-300 group-hover:rotate-45 -rotate-[22.5deg]">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Light Studio Artifact per Phase (No Dark Hacker Card) */}
              <div className="lg:col-span-6 w-full">
                {activeStep === 0 && (
                  /* PHASE 1 ARTIFACT: Architectural Blueprint Graph (Clean Editorial Light Mode) */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-50/80 p-6 md:p-8 text-zinc-900 shadow-sm relative overflow-hidden border border-zinc-200/90">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6 font-mono text-xs text-zinc-600">
                      <div className="flex items-center gap-2 font-bold text-zinc-900">
                        <Cpu className="w-4 h-4 text-emerald-700" />
                        <span>SYSTEM BLUEPRINT // v1.4</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-zinc-900 font-bold border border-amber-200">
                        READY FOR SPRINT
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Domain Models &amp; Scopes</div>
                            <div className="text-[11px] text-zinc-500">Entities, Auth Roles &amp; Permissions</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-zinc-100 text-zinc-700 rounded-md">VERIFIED</span>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">PostgreSQL Schema Design</div>
                            <div className="text-[11px] text-zinc-500">Indexes, Foreign Keys &amp; Migrations</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-zinc-100 text-zinc-700 rounded-md">INDEXED</span>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                            <GitBranch className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">API Contract &amp; Endpoints</div>
                            <div className="text-[11px] text-zinc-500">Strict TypeScript Interfaces</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-md">100% TYPE-SAFE</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  /* PHASE 2 ARTIFACT: Clean Code Deck & Staging Pipeline */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-50/80 p-6 md:p-8 text-zinc-900 shadow-sm relative overflow-hidden border border-zinc-200/90">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-5 font-mono text-xs text-zinc-600">
                      <div className="flex items-center gap-2 font-bold text-zinc-900">
                        <Terminal className="w-4 h-4 text-emerald-700" />
                        <span>SPRINT PREVIEW // staging.easyio.tech</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-zinc-900 font-bold border border-amber-200">
                        2-WEEK SPRINTS
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-zinc-200/90 font-mono text-xs space-y-2 text-zinc-700 shadow-2xs">
                      <div className="text-zinc-400"># Building Next.js 16 Production Core</div>
                      <div className="text-emerald-700 font-bold">✓ TypeScript validation: 0 errors</div>
                      <div className="text-emerald-700 font-bold">✓ 39 routes compiled successfully</div>
                      <div className="text-zinc-600">▲ Server online on port 3000 (Ready in 0ms)</div>
                      <div className="text-zinc-500 pt-2 border-t border-zinc-100">
                        Latest commit: <span className="text-zinc-900 font-semibold">feat(core): high-throughput data layer</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 flex flex-wrap gap-2 text-[11px] font-semibold">
                      <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-800">Next.js 16</span>
                      <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-800">TypeScript 5</span>
                      <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-800">PostgreSQL 16</span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">Docker Standalone</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  /* PHASE 3 ARTIFACT: Performance & QA Cockpit */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-50/80 p-6 md:p-8 text-zinc-900 shadow-sm relative overflow-hidden border border-zinc-200/90">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6 font-mono text-xs text-zinc-600">
                      <div className="flex items-center gap-2 font-bold text-zinc-900">
                        <Gauge className="w-4 h-4 text-emerald-700" />
                        <span>QUALITY AUDIT &amp; BENCHMARKS</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                        PASSED 100%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 mb-5">
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 text-center shadow-2xs">
                        <div className="text-3xl font-black text-emerald-700 font-mono">100</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Lighthouse Score</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 text-center shadow-2xs">
                        <div className="text-3xl font-black text-zinc-900 font-mono">24ms</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">TTFB Latency</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 text-center shadow-2xs">
                        <div className="text-3xl font-black text-zinc-900 font-mono">0</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Security Vulnerabilities</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 text-center shadow-2xs">
                        <div className="text-3xl font-black text-emerald-700 font-mono">100%</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Responsive Certified</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-900 font-medium">
                      <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>OWASP Top 10 security standards verified. Zero SQL-injection vectors.</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  /* PHASE 4 ARTIFACT: Production Handover & Repository Release */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-50/80 p-6 md:p-8 text-zinc-900 shadow-sm relative overflow-hidden border border-zinc-200/90">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6 font-mono text-xs text-zinc-600">
                      <div className="flex items-center gap-2 font-bold text-zinc-900">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>PRODUCTION HANDOVER &amp; RELEASE</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-zinc-900 font-bold border border-amber-200">
                        100% OWNERSHIP
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <span className="text-zinc-800 font-sans font-semibold">GitHub Private Repository</span>
                        <span className="text-emerald-700 font-bold">TRANSFERRED ✓</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <span className="text-zinc-800 font-sans font-semibold">Automated Docker &amp; CI/CD</span>
                        <span className="text-emerald-700 font-bold">CONFIGURED ✓</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <span className="text-zinc-800 font-sans font-semibold">SSL &amp; Custom Domain Routing</span>
                        <span className="text-emerald-700 font-bold">ACTIVE ✓</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                        <span className="text-zinc-800 font-sans font-semibold">30-Day Post-Launch Warranty</span>
                        <span className="text-emerald-700 font-bold">INCLUDED ✓</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </m.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}