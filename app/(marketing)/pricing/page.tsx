import { Terminal, Check, ArrowUpRight, Shield, Zap, Globe } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Investment Protocols | Easyio Engineering",
  description: "Transparent engagement models for high-fidelity software engineering. From rapid prototyping to enterprise-scale architectural dominance.",
  keywords: "software pricing kashmir, easyio engagement models, custom software cost india, enterprise software investment"
};

const tiers = [
  {
    name: "Prototype_Stream",
    price: "Custom",
    desc: "Initial architectural validation and rapid POC development for startup-speed validation.",
    features: ["System Architecture Design", "Core Protocol Dev", "High-Fidelity UI Mockups", "Feasibility Audit"],
    tag: "SPEED_PRIORITY"
  },
  {
    name: "Enterprise_Vault",
    price: "Retainer",
    desc: "Full-scale sovereign digital infrastructure for organizations requiring zero-downtime reliability.",
    features: ["Dedicated Lead Architect", "24/7 Ops Support", "Unlimited Recursive Scalability", "Strict SLA Guarantee"],
    tag: "STABILITY_PRIORITY"
  }
];

export default function PricingPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Value_Audit</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Investment</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Protocols</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                We don't charge for hours. We charge for outcomes. Every engagement is a commitment to sovereign engineering excellence.
              </p>
            </FadeIn>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
            {tiers.map((t, i) => (
              <FadeIn key={t.name} delay={0.2 * i}>
                <div className="group p-12 md:p-16 border border-zinc-100 dark:border-zinc-900 rounded-[3rem] bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm hover:border-zinc-950 dark:hover:border-white transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                     <span className="text-[8px] font-mono font-black tracking-widest text-zinc-300 dark:text-zinc-700 uppercase">{t.tag}</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4 text-zinc-950 dark:text-white">{t.name}</h3>
                  <div className="text-5xl font-black text-zinc-950 dark:text-white mb-8 italic tracking-tighter">{t.price}</div>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium italic mb-12 leading-relaxed h-20">
                    {t.desc}
                  </p>
                  
                  <ul className="space-y-6 mb-16">
                     {t.features.map(f => (
                       <li key={f} className="flex items-center gap-4 text-zinc-950 dark:text-white uppercase font-black tracking-tighter text-sm italic">
                         <Check className="w-5 h-5 text-zinc-400" /> {f}
                       </li>
                     ))}
                  </ul>

                  <a href="/contact" className="btn-primary w-full group">
                    Initialize Protocol <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-24 text-center">
             <FadeIn delay={0.1}>
                <Shield className="w-8 h-8 mx-auto mb-6 text-zinc-400" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-zinc-950 dark:text-white">Security-First</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-tight italic">Built-in hardening at no extra cost.</p>
             </FadeIn>
             <FadeIn delay={0.2}>
                <Zap className="w-8 h-8 mx-auto mb-6 text-zinc-400" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-zinc-950 dark:text-white">Zero Debt</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-tight italic">Every delivery is documented and optimized.</p>
             </FadeIn>
             <FadeIn delay={0.3}>
                <Globe className="w-8 h-8 mx-auto mb-6 text-zinc-400" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-zinc-950 dark:text-white">Sovereign Control</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-tight italic">You own the code, the keys, and the future.</p>
             </FadeIn>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
