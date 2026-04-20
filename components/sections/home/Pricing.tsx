'use client';

import { Check, ArrowRight, ShieldCheck, Zap, Activity, Globe } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard Protocol",
    price: "4.9k",
    description: "Ideal for high-growth startups requiring resilient MVP deployments.",
    features: ["Custom UI Architecture", "API Integration Level 1", "3 Months Support"],
    tag: "Growth"
  },
  {
    name: "Enterprise Node",
    price: "12.5k",
    description: "Mission-critical systems for established industrial organizations.",
    features: ["Full ERP Automation", "Multi-Region Shielding", "1 Year Support"],
    tag: "Scale",
    popular: true
  },
  {
    name: "Sovereign Layer",
    price: "Custom",
    description: "Bespoke engineering protocols for national-scale infrastructure.",
    features: ["Proprietary Algorithms", "Zero-Trust Protocol", "Lifetime Priority"],
    tag: "Elite"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Investment Model</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-950 uppercase leading-none italic mb-10">
            Build <span className="text-zinc-100">Smarter.</span>
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
             Transparent pricing for high-fidelity engineering deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${
                plan.popular 
                  ? 'bg-zinc-950 text-white border-zinc-800 scale-105 z-10 shadow-2xl' 
                  : 'bg-zinc-50 border-zinc-100 text-zinc-950'
              }`}
            >
               <div className="flex justify-between items-center mb-10">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${plan.popular ? 'bg-accent text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                    {plan.tag}
                  </span>
               </div>

               <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{plan.name}</h3>
               <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-xs opacity-40 font-bold uppercase tracking-widest">Base_Fee</span>}
               </div>

               <p className={plan.popular ? 'text-white/60 mb-10 leading-relaxed italic font-medium' : 'text-zinc-500 mb-10 leading-relaxed italic font-medium'}>
                  {plan.description}
               </p>

               <div className="space-y-6 mb-12 flex-1 font-medium">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                       <Check className={plan.popular ? 'w-4 h-4 text-accent' : 'w-4 h-4 text-accent'} />
                       {f}
                    </div>
                  ))}
               </div>

               <button className={`h-16 w-full rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                 plan.popular 
                   ? 'bg-white text-black hover:bg-accent hover:text-white' 
                   : 'bg-zinc-950 text-white hover:bg-accent hover:text-white'
               }`}>
                  Initialize_Project
               </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
