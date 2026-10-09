import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Link from "next/link";
import { 
  ArrowDownRight, Shield, Zap, Terminal, 
  Cpu, HardDrive, Network, Code2, Layers, 
  ShieldCheck, Database, Fingerprint, ArrowRight
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

export const metadata = {
  title: "About | Easyio Technologies",
  description: "Discover our commitment to mission-critical engineering, high-performance architectures, and technical sovereignty.",
  keywords: "software company kashmir, it services sopore, easyio team, software engineering india, high-performance systems"
};

const principles = [
  {
    index: "01",
    title: "Fast & Reliable Systems",
    desc: "We build systems that work instantly. We focus on speed at every level, ensuring your software is always fast and responsive.",
    icon: Zap,
  },
  {
    index: "02",
    title: "You Own Everything",
    desc: "Software built for complete ownership. No hidden rules or vendor traps—just clean, custom tools made specifically for your business.",
    icon: ShieldCheck,
  },
  {
    index: "03",
    title: "Built to Last",
    desc: "We build for the long term. Our software is designed to grow with you, staying modern and useful for years to come.",
    icon: HardDrive,
  }
];

const infrastructureNodes = [
  { label: "Smart Computing", value: "Built for scale and rapid execution", icon: Cpu },
  { label: "Data Storage", value: "Always-on, distributed databases", icon: Database },
  { label: "Security", value: "Enterprise-grade strong encryption", icon: Fingerprint },
  { label: "Network", value: "Lightning-fast global delivery", icon: Network }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="w-full bg-white text-zinc-900 font-sans pb-20">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-20 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <PremiumHeading 
                text="Building your digital future."
                highlightWords={["future."]}
                className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1] max-w-[1000px]"
                highlightClassName="text-emerald-600"
              />

              <PremiumSubheading 
                delay={0.4}
                text="Based in Kashmir, we build powerful digital tools and software infrastructure that help businesses scale securely worldwide."
                className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed mt-6"
              />
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 border-y border-zinc-100 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn delay={0.2}>
                <div className="text-center mb-16">
                  <ArrowDownRight className="w-10 h-10 text-emerald-500 mx-auto mb-8" />
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
                    Beyond the traditional tech hub.
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-12">
                    We focus on deep work and great engineering. Our space in Sopore is built for creators who care more about making things work perfectly than just following the latest trends. We believe world-class software can be built from anywhere when you have the right team.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                    <Code2 className="w-8 h-8 text-emerald-500 mb-6" />
                    <h4 className="text-xl font-bold text-zinc-900 mb-3">High-End Software</h4>
                    <p className="text-zinc-600 leading-relaxed">Premium design and architecture engineered for exceptional performance.</p>
                  </div>
                  <div className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                    <Layers className="w-8 h-8 text-emerald-500 mb-6" />
                    <h4 className="text-xl font-bold text-zinc-900 mb-3">Smart Growth</h4>
                    <p className="text-zinc-600 leading-relaxed">Built to scale organically without bloated dependencies or lock-ins.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Core Values</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Our Core Principles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm h-full flex flex-col hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center justify-center mb-8">
                      <p.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-4">{p.title}</h4>
                    <p className="text-zinc-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-6">Infrastructure</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-8 leading-tight">
                  Built for perfect connection.
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                  {infrastructureNodes.map((node, i) => (
                    <FadeIn key={node.label} delay={i * 0.1}>
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                          <node.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-zinc-900 mb-1">{node.label}</h4>
                          <p className="text-sm text-zinc-600">{node.value}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              <div className="relative w-full max-w-md flex justify-center lg:justify-end">
                 <div className="aspect-square w-full max-w-sm bg-white border border-zinc-200 rounded-[3rem] p-12 flex items-center justify-center shadow-sm relative overflow-hidden">
                   <div className="text-center relative z-10">
                     <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">Target Uptime</p>
                     <p className="text-6xl font-bold text-zinc-900 tracking-tight">99.9<span className="text-emerald-500">%</span></p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-10 leading-tight">
                  Start your digital growth.
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-8 bg-zinc-900 text-white font-bold text-sm rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-md"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="w-full sm:w-auto flex items-center justify-center h-14 px-8 border border-zinc-200 bg-white text-zinc-900 font-bold text-sm hover:bg-zinc-50 transition-all rounded-full shadow-sm"
                  >
                    Read our Journal
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
