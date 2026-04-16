import { Terminal, Lightbulb, Zap, Cpu, Shield, Network } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Roadmap | Future Nodes",
  description: "The architectural trajectory of Easyio. Scaling sovereign engineering across the regional and international landscape.",
  keywords: "easyio roadmap, software future kashmir, tech vision srinagar, AI roadmap india"
};

const nodes = [
  {
    phase: "PHASE_01",
    status: "ACTIVE",
    title: "Regional Domination",
    desc: "Establishing the primary engineering authority in the Kashmir valley. Focus on enterprise digital transformation and high-fidelity SEO.",
    icon: Network
  },
  {
    phase: "PHASE_02",
    status: "QUEUED",
    title: "AI Ecosystem Pulse",
    desc: "Deployment of proprietary LLM fine-tuning protocols for localized business intelligence and automated industrial logic.",
    icon: Cpu
  },
  {
    phase: "PHASE_03",
    status: "PLANNED",
    title: "Sovereign Cloud Hub",
    desc: "Launch of independent, zero-latency cloud nodes specifically architected for the regional connectivity landscape.",
    icon: Shield
  }
];

export default function RoadmapPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Future_Nodes</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Operational</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Trajectory</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                A non-linear vision for technical superiority and regional empowerment.
              </p>
            </FadeIn>
          </div>

          {/* Roadmap Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {nodes.map((n, i) => (
              <FadeIn key={n.phase} delay={0.1 * i}>
                <div className={`p-10 border ${n.status === 'ACTIVE' ? 'border-zinc-950 dark:border-white' : 'border-zinc-100 dark:border-zinc-900'} rounded-[2.5rem] bg-white dark:bg-zinc-950 flex flex-col h-full group relative overflow-hidden transition-all duration-700`}>
                  {n.status === 'ACTIVE' && (
                     <div className="absolute top-0 right-0 p-6">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white animate-pulse" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-zinc-950 dark:text-white">LIVE_TRAJECTORY</span>
                        </div>
                     </div>
                  )}
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8 italic">{n.phase}</div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-8 text-zinc-950 dark:text-white group-hover:translate-x-2 transition-transform">{n.title}</h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic flex-grow">
                    {n.desc}
                  </p>
                  <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center opacity-40">
                     <span className="text-[8px] font-mono tracking-widest uppercase">{n.status}</span>
                     {n.icon && <n.icon className="w-4 h-4" />}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Deep Vision Section */}
          <FadeIn>
             <div className="p-12 md:p-24 border border-zinc-100 dark:border-zinc-900 rounded-[3rem] text-center border-dashed">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-8 text-zinc-400 dark:text-zinc-600">Beyond the Visible Horizon.</h2>
                <p className="text-lg text-zinc-500 max-w-2xl mx-auto italic font-medium leading-relaxed">
                  Our roadmap is an evolving organism. As the technical landscape shift, Easyio recalibrates its trajectory to ensure maximum impact for our partners and the regional ecosystem.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
