import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowDownRight, Globe, Shield, Zap, Terminal, 
  Cpu, HardDrive, Network, Code2, Layers, 
  ShieldCheck, Activity, Database, Fingerprint, ArrowRight
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

export const metadata = {
  title: "About | Easyio Technologies",
  description: "Discover our commitment to mission-critical engineering, high-performance architectures, and technical sovereignty.",
  keywords: "software company srinagar, it services kashmir, easyio team, software engineering india, high-performance systems"
};

const principles = [
  {
    index: "01",
    title: "Fast & Reliable Systems",
    desc: "We build systems that work instantly. We focus on speed at every level, ensuring your software is always fast and responsive.",
    icon: Zap,
    tag: "MAX_SPEED"
  },
  {
    index: "02",
    title: "You Own Everything",
    desc: "Software built for complete ownership. No hidden rules or vendor traps—just clean, custom tools made specifically for your business.",
    icon: ShieldCheck,
    tag: "FULL_OWNERSHIP"
  },
  {
    index: "03",
    title: "Built to Last",
    desc: "We build for the long term. Our software is designed to grow with you, staying modern and useful for years to come.",
    icon: HardDrive,
    tag: "LONG_TERM_VALUE"
  }
];

const infrastructureNodes = [
  { label: "Brain Layer", value: "Smart Computing", icon: Cpu },
  { label: "Data Storage", value: "Always-On Storage", icon: Database },
  { label: "Security", value: "Strong Encryption", icon: Fingerprint },
  { label: "Network", value: "Lightning Fast Delivery", icon: Network }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="w-full bg-white text-zinc-950 font-sans selection:bg-emerald-600 selection:text-white pb-20">
        
        {/* Hero Section - Standardized Premium Layout */}
        <section className="pt-32 md:pt-48 pb-20 relative overflow-hidden">
          {/* Elite Mesh Backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-50/40 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-50 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600/80">Who We Are</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Building your digital future."
                highlightWords={["future."]}
                className="text-5xl md:text-8xl lg:text-[110px] font-black tracking-tighter text-zinc-950 mb-8 leading-none max-w-[1200px]"
                highlightClassName="font-serif italic font-medium text-zinc-400"
              />

              <PremiumSubheading 
                delay={0.4}
                text="Based in the beautiful city of Srinagar, we build powerful digital tools that help businesses grow worldwide."
                className="text-zinc-500 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
            </div>
          </div>
        </section>

        {/* Narrative Section - Clean Grid */}
        <section className="py-24 border-y border-zinc-100 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-5">
                <FadeIn>
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden grayscale bg-zinc-100 border border-zinc-200 shadow-2xl relative group">
                    <Image 
                      src="/images/about_lab.png" 
                      alt="Operations" 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    fill />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-7">
                <FadeIn delay={0.2}>
                  <div className="mb-12">
                    <ArrowDownRight className="w-12 h-12 text-emerald-500 mb-8" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight">
                      Beyond the traditional <br /> <span className="text-zinc-400 font-serif italic">tech hub.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium mb-12 max-w-2xl">
                      We focus on deep work and great engineering. Our space is built for creators who care more about making things work perfectly than just following the latest trends. To see where the magic happens, <Link href="/contact" className="text-emerald-600 hover:underline">visit our STPI Srinagar office</Link> or return to the <Link href="/" className="text-emerald-600 hover:underline">Easyio Technologies homepage</Link> to view our services.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-zinc-100">
                      <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm group hover:border-emerald-200 transition-all">
                        <Code2 className="w-6 h-6 text-emerald-500 mb-4" />
                        <h4 className="text-lg font-bold text-zinc-950 mb-2">High-End Software</h4>
                        <p className="text-sm text-zinc-500">Premium design and architecture.</p>
                      </div>
                      <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm group hover:border-emerald-200 transition-all">
                        <Layers className="w-6 h-6 text-emerald-500 mb-4" />
                        <h4 className="text-lg font-bold text-zinc-950 mb-2">Smart Growth</h4>
                        <p className="text-sm text-zinc-500">Built to scale organically.</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section - Structural Cards */}
        <section className="py-32">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Core Values</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-none">
                  Our Core <br />
                  <span className="text-zinc-400 font-serif italic">Principles.</span>
                </h3>
              </div>
              <div className="md:text-right">
                <p className="text-lg font-medium text-zinc-500 max-w-sm">
                  Built for the next generation of the internet.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-sm h-full flex flex-col hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 group relative overflow-hidden">
                    
                    <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500">
                      <p.icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    
                    <h4 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">{p.title}</h4>
                    <p className="text-base text-zinc-500 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Nodes Section */}
        <section className="py-32 bg-zinc-950 rounded-[3rem] mx-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Infrastructure</h2>
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none">
                  Built for <br />
                  <span className="text-zinc-500 italic font-serif">Perfect Connection.</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {infrastructureNodes.map((node, i) => (
                    <FadeIn key={node.label} delay={i * 0.1}>
                      <div className="flex items-start gap-5">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <node.icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{node.label}</p>
                          <p className="text-lg font-bold text-white tracking-tight">{node.value}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              <div className="relative flex justify-center">
                 <div className="aspect-square w-full max-w-sm bg-zinc-900 border border-white/5 rounded-full p-12 flex items-center justify-center relative group">
                   <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                   <div className="text-center relative z-10">
                     <p className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-2">Uptime</p>
                     <p className="text-6xl font-black text-white tracking-tighter">99.9<span className="text-emerald-500 text-3xl">%</span></p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Ready to build</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-12 leading-none">
                  Start your digital <br />
                  <span className="text-zinc-400 italic font-serif">growth.</span>
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                  <a 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] rounded-full shadow-lg shadow-zinc-950/10"
                  >
                    <span className="relative z-10 transition-colors flex items-center gap-3">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  
                  <a 
                    href="/blog" 
                    className="inline-flex h-14 px-10 border border-zinc-200 bg-white text-zinc-950 font-bold text-sm items-center justify-center hover:bg-zinc-50 transition-all rounded-full"
                  >
                    Read our Journal
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
