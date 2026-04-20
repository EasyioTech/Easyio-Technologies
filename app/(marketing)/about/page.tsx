import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, ArrowDownRight } from "lucide-react";

export const metadata = {
  title: "About | Easyio Engineering",
  description: "Learn about Easyio's commitment to high-fidelity engineering and sovereign technical infrastructure.",
  keywords: "software company srinagar, it services kashmir, easyio team, software engineering india"
};

const principles = [
  {
    index: "01",
    title: "Performance First",
    desc: "Architecture is defined by its throughput. We optimize for millisecond latency at every layer of the stack."
  },
  {
    index: "02",
    title: "Technical Sovereignty",
    desc: "Systems built for total ownership. No vendor lock-in, no black boxes, just clean, auditable infrastructure."
  },
  {
    index: "03",
    title: "Operational Durability",
    desc: "We build for the long-term. Our systems are engineered to outlast market trends and legacy transitions."
  }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="w-full bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* Editorial Header */}
        <header className="pt-32 md:pt-48 pb-12 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <FadeIn>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">The_Engineering_Collective</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.9] max-w-2xl">
                    Architecting <br />
                    <span className="text-zinc-400">Technical Destiny.</span>
                  </h1>
                </FadeIn>
              </div>
              <div className="md:col-span-4 text-left md:text-right pb-1">
                <FadeIn delay={0.2}>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Location</p>
                  <p className="text-sm font-bold italic uppercase tracking-tighter">Srinagar, J&K // Global Reach</p>
                </FadeIn>
              </div>
            </div>
          </div>
        </header>

        {/* Narrative Section - Dense Grid Layout */}
        <section className="py-12 md:py-16 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <FadeIn>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale bg-zinc-50 border border-zinc-100">
                    <img 
                      src="/images/about_lab.png" 
                      alt="Operations" 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2">
                     <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Protocol_Visual_01</span>
                     <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">v2.0.26</span>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-8 flex flex-col justify-end">
                <FadeIn delay={0.2} className="max-w-xl">
                  <div className="mb-8">
                    <ArrowDownRight className="w-6 h-6 text-blue-600 mb-4" />
                    <h2 className="text-xl font-black uppercase tracking-tight italic mb-4">Beyond the traditional tech hub.</h2>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
                      Easyio operates from the intersection of geographic serenity and technical intensity. Based in Srinagar, we leverage the environment for focused execution—transforming the silence of the Himalayas into high-performance digital infrastructure for global enterprises.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                    <div>
                      <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Focus_Area</h4>
                      <p className="text-xs font-bold uppercase tracking-tight">Mission Critical Backend Systems</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Philosophy</h4>
                      <p className="text-xs font-bold uppercase tracking-tight">Zero-Debt Architectural Scaling</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section - Ultra-Dense Layout */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-900">Foundational_Logic</h2>
              <span className="text-[10px] font-bold text-zinc-400 italic">Built for the next decade of internet architecture.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100 divide-y md:divide-y-0 md:divide-x divide-zinc-100 rounded-3xl overflow-hidden">
              {principles.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="p-8 hover:bg-zinc-50 transition-colors group h-full">
                    <div className="text-[10px] font-bold text-blue-600 mb-6 font-mono">[{p.index}]</div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-zinc-950 mb-3">{p.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Visual & Metadata - Side by Side */}
        <section className="py-12 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-7">
                  <FadeIn>
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden grayscale bg-zinc-50 border border-zinc-100">
                      <img 
                        src="/images/about_abstract.png" 
                        alt="Infrastructure" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </FadeIn>
               </div>
               <div className="lg:col-span-5 space-y-6">
                  <FadeIn delay={0.2}>
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Technical_Sovereignty</h5>
                      <p className="text-xs font-medium text-zinc-500 leading-relaxed mb-4">
                        We build protocols that ensure you own every byte of your operational data. Our stack is optimized for performance, security, and long-term maintainability.
                      </p>
                      <a href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 group">
                        Inquire About Systems <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </FadeIn>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="text-center p-4 border border-zinc-100 rounded-2xl">
                        <div className="text-lg font-black italic">250+</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Nodes</div>
                     </div>
                     <div className="text-center p-4 border border-zinc-100 rounded-2xl">
                        <div className="text-lg font-black italic">99.9%</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mt-1">SLA</div>
                     </div>
                     <div className="text-center p-4 border border-zinc-100 rounded-2xl">
                        <div className="text-lg font-black italic">Global</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Service</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Minimal Final CTA */}
        <footer className="py-20 text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic mb-8">
              Start your <span className="text-zinc-400">Technical Evolution.</span>
            </h2>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-zinc-950 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-95"
            >
              Initialize Contact
            </a>
          </FadeIn>
        </footer>

      </main>
    </PageWrapper>
  );
}



