import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
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
    title: "High-Throughput Architecture",
    desc: "Architecture is defined by its throughput. We optimize for millisecond latency at every layer of the stack, from database indexing to edge delivery.",
    icon: Zap,
    tag: "PERF_OPTIMIZATION"
  },
  {
    index: "02",
    title: "Technical Sovereignty",
    desc: "Systems built for total ownership. No vendor lock-in, no black boxes—just clean, auditable, and proprietary infrastructure tailored to your mission.",
    icon: ShieldCheck,
    tag: "SYSTEM_INTEGRITY"
  },
  {
    index: "03",
    title: "Operational Durability",
    desc: "We build for the long-term. Our systems are engineered to outlast market trends and legacy transitions with zero-debt architectural scaling.",
    icon: HardDrive,
    tag: "STABILITY_LAYER"
  }
];

const infrastructureNodes = [
  { label: "Logic Layer", value: "Distributed Computing", icon: Cpu },
  { label: "Data Persistence", value: "High-Availability DB", icon: Database },
  { label: "Security Protocol", value: "End-to-End Encryption", icon: Fingerprint },
  { label: "Network Edge", value: "Low-Latency CDNs", icon: Network }
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

          <div className="max-w-[1600px] mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <FadeIn>
                <div className="flex items-center gap-4 mb-12">
                  <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-950 text-white rounded-sm shadow-xl shadow-zinc-950/20">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em]">MISSION_PROFILE_01</span>
                  </div>
                  <div className="h-px w-12 bg-zinc-200" />
                  <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">v4.2.0_SECURE</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Architecting technical destiny."
                highlightWords={["destiny."]}
                className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter text-zinc-950 mb-10 leading-[0.85] uppercase"
                highlightClassName="font-serif italic font-medium text-zinc-300 block mt-4"
              />

              <div className="flex flex-col md:flex-row gap-12 items-end mt-20 pt-16 border-t border-zinc-100/80">
                <div className="flex-1">
                  <PremiumSubheading 
                    delay={0.4}
                    text="Easyio operates at the intersection of geographic serenity and technical intensity. Based in Srinagar, we transform the silence of the Himalayas into high-performance digital infrastructure."
                    className="text-zinc-500 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium"
                  />
                </div>
                <div className="text-left md:text-right">
                  <FadeIn delay={0.6}>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3">Base Operations</p>
                    <p className="text-sm font-black italic uppercase tracking-tighter text-zinc-950 flex items-center md:justify-end gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Srinagar, J&K // Global Transmission
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section - Dense Industrial Grid */}
        <section className="py-24 border-y border-zinc-100 bg-zinc-50/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-5">
                <FadeIn>
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden grayscale bg-zinc-100 border border-zinc-200 shadow-2xl relative group">
                    <img 
                      src="/images/about_lab.png" 
                      alt="Operations" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white uppercase tracking-widest rounded-sm">
                      Protocol_Visual_01 // SECURE_FACILITY
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">Realtime_Diagnostics</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-emerald-500" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-7">
                <FadeIn delay={0.2}>
                  <div className="mb-12">
                    <ArrowDownRight className="w-16 h-16 text-emerald-500 mb-10" />
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-950 mb-10 leading-[0.9]">
                      Beyond the traditional <span className="text-zinc-300 font-serif italic block mt-2">tech hub.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium mb-12 max-w-2xl">
                      We've eliminated the noise of conventional tech environments to focus on pure engineering. Our lab is a sovereign space for builders who prioritize technical excellence over market hype.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-zinc-100">
                      <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 group hover:border-emerald-200 transition-all">
                        <div className="flex items-center gap-3 mb-6">
                          <Code2 className="w-4 h-4 text-emerald-500" />
                          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400 leading-none group-hover:text-zinc-600">Focus_Area</h4>
                        </div>
                        <p className="text-xl font-black text-zinc-950 tracking-tight leading-tight uppercase">Mission Critical Architecture</p>
                      </div>
                      <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 group hover:border-emerald-200 transition-all">
                        <div className="flex items-center gap-3 mb-6">
                          <Layers className="w-4 h-4 text-emerald-500" />
                          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400 leading-none group-hover:text-zinc-600">Philosophy</h4>
                        </div>
                        <p className="text-xl font-black text-zinc-950 tracking-tight leading-tight uppercase">Zero-Debt Scaling Strategy</p>
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
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-600">Foundational_Logic_Registry</h2>
                </div>
                <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.85]">
                  Core Engineering <br />
                  <span className="text-zinc-300 font-serif italic">Protocols.</span>
                </h3>
              </div>
              <div className="md:text-right">
                <p className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-2">Registry_Status: Active</p>
                <p className="text-xs font-bold text-zinc-300 italic max-w-xs">
                  Built for the next decade of sovereign internet infrastructure.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {principles.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="p-12 bg-white border border-zinc-100 rounded-[3rem] shadow-[0_15px_40px_rgb(0,0,0,0.02)] h-full flex flex-col hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-700 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500">
                      <p.icon className="w-7 h-7 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-[11px] font-mono font-black text-emerald-600 tracking-[0.2em] uppercase">[{p.index}]</div>
                      <div className="h-px w-4 bg-zinc-100" />
                      <div className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-widest">{p.tag}</div>
                    </div>

                    <h4 className="text-3xl font-black uppercase tracking-tighter text-zinc-950 mb-8 leading-none">{p.title}</h4>
                    <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Nodes Section */}
        <section className="py-32 bg-zinc-950 rounded-[4rem] mx-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
              <div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-10">System_Infrastructure</h2>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-[0.9]">
                  Engineered for <br />
                  <span className="text-zinc-500 italic font-serif">Unfailing Connectivity.</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {infrastructureNodes.map((node, i) => (
                    <FadeIn key={node.label} delay={i * 0.1}>
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <node.icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest mb-3">{node.label}</p>
                          <p className="text-xl font-bold text-white tracking-tight">{node.value}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                 <div className="aspect-square bg-zinc-900 border border-white/5 rounded-full p-12 flex items-center justify-center relative group">
                   <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                   <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                   <div className="text-center relative z-10">
                     <p className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Uptime_Status</p>
                     <p className="text-8xl font-black text-white tracking-tighter">99.9<span className="text-emerald-500 text-4xl">%</span></p>
                     <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mt-4">SLA_CONFIRMED</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Technical Status */}
        <section className="py-48">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-3 bg-zinc-50 border border-zinc-100 px-6 py-3 rounded-full mb-12">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950">System_Initialization_Ready</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-black text-zinc-950 uppercase tracking-tighter mb-16 leading-[0.85]">
                  Initialize your technical <br />
                  <span className="text-zinc-300 italic font-serif lowercase">evolution.</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center mb-20">
                  <div className="space-y-3">
                     <p className="text-5xl font-black text-zinc-950 tracking-tighter">250+</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Nodes Active</p>
                  </div>
                  <div className="w-px h-16 bg-zinc-100 hidden md:block" />
                  <div className="space-y-3">
                     <p className="text-5xl font-black text-zinc-950 tracking-tighter">12ms</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Avg Latency</p>
                  </div>
                  <div className="w-px h-16 bg-zinc-100 hidden md:block" />
                  <div className="space-y-3">
                     <p className="text-5xl font-black text-zinc-950 tracking-tighter">Global</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Transmission</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
                  <a 
                    href="/contact" 
                    className="group relative inline-flex h-20 px-16 bg-zinc-950 text-white font-black uppercase tracking-[0.25em] text-[11px] items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.05] rounded-full shadow-2xl shadow-zinc-950/20"
                  >
                    <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-4">
                      Connect Protocol
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                  
                  <a 
                    href="/blog" 
                    className="inline-flex h-20 px-16 border-2 border-zinc-100 bg-white text-zinc-950 font-black uppercase tracking-[0.25em] text-[11px] items-center justify-center hover:bg-zinc-50 transition-all rounded-full"
                  >
                    Read Technical Journal
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
