import { Terminal, GitBranch, Zap, Cpu, Sparkles } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Changelog | Easyio Pulse",
  description: "Operational updates and architectural breakthroughs from the Easyio frontier lab.",
  keywords: "easyio updates, software changelog, technical breakthroughs, srinagar tech updates"
};

const updates = [
  {
    version: "v2.4.0",
    date: "APRIL 2026",
    title: "Sovereign UI Core Alpha",
    desc: "Migrated full infrastructure to high-fidelity monochromatic design system. Optimized for millisecond-level interaction responses across all marketing segments.",
    icon: Sparkles
  },
  {
    version: "v2.3.5",
    date: "MARCH 2026",
    title: "Kashmir SEO Cluster Initialization",
    desc: "Deployed comprehensive topic cluster strategy for regional search dominance. Improved AI crawler indexing for core services in the Srinagar sector.",
    icon: Zap
  },
  {
    version: "v2.2.0",
    date: "FEBRUARY 2026",
    title: "Case Study Protocol Deployment",
    desc: "Integrated recursive project deep-dives to showcase large-scale technical deployments in healthcare and industrial automation.",
    icon: Cpu
  }
];

export default function ChangelogPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">System_Pulse</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Operational</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Changelog</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                A recursive history of mathematical precision and architectural breakthroughs at Easyio.
              </p>
            </FadeIn>
          </div>

          {/* Timeline */}
          <div className="space-y-1px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 rounded-[2rem] overflow-hidden mb-40">
            {updates.map((u, i) => (
              <FadeIn key={u.version} delay={0.1 * i} className="bg-white dark:bg-zinc-950 p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start group">
                <div className="md:w-1/4">
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-2 italic">{u.date}</div>
                   <div className="text-2xl font-black text-zinc-950 dark:text-white italic tracking-tighter">{u.version}</div>
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-4 mb-6">
                      <u.icon className="w-6 h-6 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
                      <h3 className="text-2xl font-black uppercase tracking-tighter italic text-zinc-950 dark:text-white">{u.title}</h3>
                   </div>
                   <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                     {u.desc}
                   </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Footer */}
          <FadeIn>
            <div className="p-12 text-center border-t border-zinc-100 dark:border-zinc-900">
               <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Stream_End_Reached</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
