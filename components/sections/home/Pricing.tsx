'use client';

import { Check } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

const plans = [
  {
    name: "Standard Protocol",
    price: "$2,400",
    interval: "/mo",
    desc: "Foundational architecture for scaling startups and small laboratories.",
    features: [
      "Custom Software Engine",
      "Standard Latency (50ms)",
      "Weekly Architectural Syncs",
      "Standard Security Protocol",
      "Git-Based Deployment Flow"
    ],
    cta: "Initialize Protocol",
    popular: false
  },
  {
    name: "Frontier Engine",
    price: "$5,800",
    interval: "/mo",
    desc: "High-velocity systems for rapidly expanding agencies and growth firms.",
    features: [
      "Ultra-Low Latency (5ms)",
      "Daily Technical Sprints",
      "Advanced AI Integrations",
      "Hardened Security Perimeter",
      "24/7 Forensic Support",
      "Scalable Node Infrastructure"
    ],
    cta: "Deploy Frontier",
    popular: true
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    interval: "",
    desc: "Tailored infrastructure for global conglomerates and high-security sectors.",
    features: [
      "Zero-Latency Architecture",
      "Private Forge Access",
      "On-Premise Deployment",
      "Biometric Security Gates",
      "Dedicated Solution Architect",
      "Complete Source Visibility"
    ],
    cta: "Request Consultation",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-40 px-6 relative overflow-hidden bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="heading-2 mb-8">
            <TextReveal>SELECT YOUR PROTOCOL.</TextReveal>
          </h2>
          <div className="max-w-2xl mx-auto">
            <TextReveal delay={0.3} className="text-lg md:text-xl text-zinc-500 font-medium italic">
              Transparent engineering paths designed for maximum Architectural Velocity.
            </TextReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`card-base card-hover p-8 md:p-12 flex flex-col h-full relative ${plan.popular ? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-950 dark:border-zinc-200 z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 text-[10px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg">
                    MOST ACTIVE
                  </div>
                )}

                <div className="mb-8 md:mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-600 mb-4 block">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-6xl font-bold text-zinc-950 dark:text-white tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-lg text-zinc-400 dark:text-zinc-700 font-medium italic">
                      {plan.interval}
                    </span>
                  </div>
                  <p className="mt-6 md:mt-8 text-zinc-500 font-medium leading-relaxed italic">
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 flex-grow">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-zinc-950 dark:text-white" />
                      </div>
                      <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tight line-clamp-1">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-6 rounded-3xl text-xs font-black uppercase tracking-[0.3em] transition-all shadow-sm ${
                  plan.popular 
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:scale-[0.98]' 
                    : 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
