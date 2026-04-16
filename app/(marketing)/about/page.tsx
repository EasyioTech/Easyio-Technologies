import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { Terminal, Cpu, Shield, Zap, Globe, Activity } from "lucide-react";

export const metadata = {
  title: "About | Easyio Engineering",
  description: "Learn about Easyio's commitment to high-fidelity engineering and sovereign technical infrastructure.",
  keywords: "software company srinagar, it services kashmir, easyio team, software engineering india"
};

const values = [
  {
    title: "Precision Engineering",
    desc: "We don't tolerate debt. Every line of code is architected for zero-latency and maximum throughput.",
    icon: Cpu
  },
  {
    title: "Sovereign Infrastructure",
    desc: "We build systems that give you total control over your data, free from vendor lock-in and legacy lag.",
    icon: Shield
  },
  {
    title: "Recursive Growth",
    desc: "Our systems are designed to self-optimize and scale alongside your enterprise's complex needs.",
    icon: Activity
  }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-16 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16 md:mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">The_Protocol</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-8 md:mb-12 uppercase italic leading-[0.85]">
              <TextReveal>We Engineer</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Operational Destiny</TextReveal>
            </h1>
            
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                Easyio is a frontier software lab founded on the principle that business software should be as resilient as a bridge and as fast as light. We serve the enterprises that refuse to settle for generic solutions.
              </p>
            </FadeIn>
          </div>

          {/* Core Values / Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-20 md:mb-40">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.2 * i}>
                <div className="group border-t border-zinc-100 dark:border-zinc-900 pt-12">
                  <v.icon className="w-10 h-10 text-zinc-950 dark:text-white mb-8 transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic text-zinc-950 dark:text-white mb-6">
                    {v.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Secondary Content - The Srinagar Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center border-t border-zinc-100 dark:border-zinc-900 pt-16 md:pt-24">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none text-zinc-950 dark:text-white">
                Operating from the Valley of Deep Work.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Headquartered in Srinagar, Easyio leverages the geographic serenity of the region to foster "Deep Work"—uninterrupted states of intense engineering focus. This allows our team to solve architectural challenges that traditional, noise-heavy city labs often miss.
                </p>
                <div className="flex gap-12">
                   <div>
                      <div className="text-3xl font-black text-zinc-950 dark:text-white italic">2026</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Founded_Reg</div>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-zinc-950 dark:text-white italic">99.9%</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">SLA_Commit</div>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
