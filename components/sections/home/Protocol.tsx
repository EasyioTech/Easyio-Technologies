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
  Database
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
    description: "Before writing a single line of code, we map your business workflows, core data models, and performance bottlenecks into a crystal-clear technical specification.",
    deliverables: [
      "Technical Architecture Specification",
      "Interactive Figma Prototypes",
      "Database Schema & Entity Relations",
      "Fixed Milestone & Cost Roadmap"
    ],
    metrics: [
      { label: "Scope Clarity", value: "100%" },
      { label: "Surprise Fees", value: "Zero" }
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
    description: "Our senior systems engineers build your application in focused two-week sprints. You get private staging environments to test real, functioning software every step of the way.",
    deliverables: [
      "Modern Next.js / TypeScript Codebase",
      "High-Throughput PostgreSQL Database",
      "Live Staging Deployments",
      "Bi-Weekly Progress Demos"
    ],
    metrics: [
      { label: "Sprint Cadence", value: "14 Days" },
      { label: "Client Code Access", value: "Instant" }
    ],
    icon: PenTool
  },
  {
    id: "03",
    stepNum: "PHASE 03",
    title: "Stress-Test & Audit",
    tagline: "Zero-Compromise QA",
    duration: "Week 6",
    badge: "Hardening",
    description: "We subject every transaction, API route, and edge case to automated security scans, database query profiling, and high-concurrency load testing.",
    deliverables: [
      "Bank-Grade Security & Auth Audit",
      "Lighthouse 95+ Performance Tuning",
      "Sub-100ms API Latency Validation",
      "Cross-Device & Browser Verification"
    ],
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Vulnerabilities", value: "0 Detected" }
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
      "Zero-Downtime Production Deployment",
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
  const [isPaused, setIsPaused] = useState(false);

  // Auto-progress stages every 6.5 seconds unless user hovers/interacts
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentStage = stages[activeStep];

  return (
    <section 
      className="py-16 md:py-36 relative bg-gradient-to-b from-transparent via-zinc-50/50 to-transparent overflow-hidden mobile-section-content" 
      id="process"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Animated Circuit Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid mesh */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09090b 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient atmospheric glows synced to active stage */}
        <div 
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/5 blur-[140px] rounded-full transition-all duration-1000"
          style={{
            transform: `translate(${activeStep * 15}%, -50%)`
          }}
        />

        {/* Crisp SVG Circuit Traces across background */}
        <svg className="w-full h-full absolute inset-0 opacity-40 hidden md:block" viewBox="0 0 1440 900" fill="none">
          <defs>
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Master Circuit Horizontal Trunk */}
          <path 
            d="M 120 280 L 1320 280" 
            stroke="#E4E4E7" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
          />
          
          {/* Animated Energy Pulse along trunk */}
          <m.path 
            d="M 120 280 L 1320 280" 
            stroke="url(#traceGrad)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            initial={{ strokeDashoffset: 1200, strokeDasharray: "200 1200" }}
            animate={{ strokeDashoffset: -1200 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Node Drops into Content */}
          {[270, 570, 870, 1170].map((x, idx) => (
            <g key={idx}>
              <line 
                x1={x} 
                y1={280} 
                x2={x} 
                y2={330} 
                stroke={activeStep === idx ? "#10B981" : "#E4E4E7"} 
                strokeWidth={activeStep === idx ? "2" : "1"}
                className="transition-colors duration-500"
              />
              <circle 
                cx={x} 
                cy={280} 
                r={activeStep === idx ? 5 : 3} 
                fill={activeStep === idx ? "#10B981" : "#A1A1AA"} 
                className="transition-all duration-500"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-600">The Easyio Protocol</span>
          </div>

          <PremiumHeading 
            text="How we bring ideas to life"
            highlightWords={["ideas", "life"]}
            as="h2"
            className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 mb-4 md:mb-6 leading-tight md:leading-none"
          />
          <p className="text-zinc-500 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed font-medium">
            No endless guesswork or black-box delays. A structured 4-phase engineering pipeline designed for transparent velocity and guaranteed code quality.
          </p>
        </div>

        {/* 1. Interactive Pipeline Timeline Track (Horizontal Ribbon) */}
        <div className="relative mb-8 md:mb-14">
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
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xl shadow-zinc-950/10 md:scale-[1.02]"
                      : "bg-white/90 hover:bg-white text-zinc-900 border-zinc-200/80 hover:border-zinc-300 shadow-xs"
                  )}
                >
                  {/* Progress Line for Active Item */}
                  {isActive && (
                    <m.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-emerald-500/40 pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className={cn(
                      "text-[10px] md:text-xs font-black uppercase tracking-widest",
                      isActive ? "text-emerald-400" : isPast ? "text-zinc-900" : "text-zinc-400"
                    )}>
                      {stage.stepNum}
                    </span>

                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                      isActive 
                        ? "bg-zinc-800/80 text-zinc-200 border-zinc-700" 
                        : "bg-zinc-50 text-zinc-500 border-zinc-100"
                    )}>
                      {stage.duration}
                    </span>
                  </div>

                  <div className="font-bold text-base md:text-xl tracking-tight leading-snug">
                    {stage.title}
                  </div>

                  <div className={cn(
                    "text-xs mt-1 hidden sm:block",
                    isActive ? "text-zinc-400" : "text-zinc-500"
                  )}>
                    {stage.tagline}
                  </div>

                  {/* Active Step Indicator Pill */}
                  <div className="mt-4 pt-3 border-t border-zinc-100/10 flex items-center justify-between">
                    <span className={cn(
                      "text-[11px] font-semibold",
                      isActive ? "text-zinc-300" : "text-zinc-400"
                    )}>
                      {stage.badge}
                    </span>
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      isActive ? "bg-emerald-400 animate-ping" : isPast ? "bg-zinc-900" : "bg-zinc-200"
                    )} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Master Architectural Stage Inspector (NOT 4 Generic Bento Cards) */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] border border-zinc-200/90 bg-white/80 backdrop-blur-xl shadow-2xl shadow-zinc-950/5 overflow-hidden">
          {/* Decorative Window Bar */}
          <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-[11px] text-zinc-500 hidden sm:inline-block">
                easyio://protocol/phase-{currentStage.id.toLowerCase()}-{currentStage.title.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE INSPECTION</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <m.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Scope, Narrative & Verified Deliverables */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-md">
                      <currentStage.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
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
                  <div className="text-xs font-black uppercase tracking-wider text-zinc-400">
                    Phase Deliverables &amp; Artifacts
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.deliverables.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50/80 border border-zinc-200/60 text-xs sm:text-sm font-semibold text-zinc-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Metrics & CTA */}
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    {currentStage.metrics.map((mItem, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                          {mItem.value}
                        </div>
                        <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                          {mItem.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-md active:scale-95 group"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Unique Visual Artifact per Phase */}
              <div className="lg:col-span-6 w-full">
                {activeStep === 0 && (
                  /* PHASE 1 ARTIFACT: Architectural Blueprint Graph */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-950 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 font-mono text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span>SYSTEM BLUEPRINT // v1.4</span>
                      </div>
                      <span className="text-emerald-400 font-bold">READY FOR SPRINT</span>
                    </div>

                    <div className="space-y-4">
                      {/* Interactive Schema Block 1 */}
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-zinc-200">Domain Models &amp; Scopes</div>
                            <div className="text-[11px] text-zinc-500">Entities, Auth Roles &amp; Perms</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-md">VERIFIED</span>
                      </div>

                      {/* Interactive Schema Block 2 */}
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-zinc-200">PostgreSQL Schema Design</div>
                            <div className="text-[11px] text-zinc-500">Indexes, Foreign Keys &amp; Migrations</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-md">INDEXED</span>
                      </div>

                      {/* Interactive Schema Block 3 */}
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <GitBranch className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-zinc-200">API Contract &amp; Endpoints</div>
                            <div className="text-[11px] text-zinc-500">Strict TypeScript Interfaces</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-md">100% TYPE-SAFE</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  /* PHASE 2 ARTIFACT: Code Terminal & Staging Environment */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-950 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5 font-mono text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span>SPRINT PREVIEW // staging.easyio.tech</span>
                      </div>
                      <span className="text-emerald-400 font-bold">2-WEEK SPRINTS</span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 font-mono text-xs space-y-2 text-zinc-300">
                      <div className="text-zinc-500"># Compiling Next.js 16 Production Core</div>
                      <div className="text-emerald-400">✓ Typecheck completed in 32ms</div>
                      <div className="text-emerald-400">✓ 39 routes compiled successfully</div>
                      <div className="text-zinc-400">▲ Server running on port 3000 (0ms ready)</div>
                      <div className="text-zinc-500 pt-2 border-t border-zinc-800">
                        Commit: <span className="text-zinc-200">feat(core): high-throughput data layer</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 flex flex-wrap gap-2 font-mono text-[11px]">
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">Next.js 16</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">TypeScript 5</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">PostgreSQL 16</span>
                      <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400">Docker</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  /* PHASE 3 ARTIFACT: Performance & QA Cockpit */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-950 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 font-mono text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-emerald-400" />
                        <span>SYSTEM AUDIT &amp; QUALITY METRICS</span>
                      </div>
                      <span className="text-emerald-400 font-bold">PASSED 100%</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 mb-5">
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                        <div className="text-3xl font-black text-emerald-400 font-mono">100</div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Lighthouse Performance</div>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                        <div className="text-3xl font-black text-emerald-400 font-mono">24ms</div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Global TTFB Latency</div>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                        <div className="text-3xl font-black text-emerald-400 font-mono">0</div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Security Vulnerabilities</div>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                        <div className="text-3xl font-black text-emerald-400 font-mono">100%</div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Cross-Device Responsive</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 flex items-center gap-2.5 text-xs text-emerald-300">
                      <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>OWASP Security standards verified. Zero SQL-injection vectors.</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  /* PHASE 4 ARTIFACT: Production Deployment & Transfer */
                  <div className="rounded-2xl md:rounded-3xl bg-zinc-950 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 font-mono text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>PRODUCTION HANDOVER &amp; RELEASE</span>
                      </div>
                      <span className="text-emerald-400 font-bold">100% OWNERSHIP</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <span className="text-zinc-300">GitHub Private Repository</span>
                        <span className="text-emerald-400 font-bold">TRANSFERRED ✓</span>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <span className="text-zinc-300">Automated Docker &amp; CI/CD</span>
                        <span className="text-emerald-400 font-bold">CONFIGURED ✓</span>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <span className="text-zinc-300">SSL &amp; Domain DNS Routing</span>
                        <span className="text-emerald-400 font-bold">ACTIVE ✓</span>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                        <span className="text-zinc-300">30-Day Post-Launch Warranty</span>
                        <span className="text-emerald-400 font-bold">INCLUDED ✓</span>
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