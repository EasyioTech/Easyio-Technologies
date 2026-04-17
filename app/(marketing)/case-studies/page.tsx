import { Terminal, ArrowUpRight, Cpu, Zap, Globe, Shield, Box } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Proof of Execution | Easyio Engineering",
  description: "Concrete outcomes for ambitious organizations. Explore our technical deployments in enterprise software, AI, and industrial automation.",
  keywords: "software case studies kashmir, it projects srinagar, easyio portfolio, enterprise automation results"
};

const iconMap: Record<string, any> = {
  INDUSTRIAL_LOGIC: Cpu,
  DISTRIBUTED_SYSTEMS: Globe,
  FINTECH_SECURITY: Shield,
  AI_INFRASTRUCTURE: Zap,
  CLOUD_ARCHITECTURE: Box,
};

// Cached query for projects
const getCachedProjects = cacheQuery(
  () => db.select().from(projects).orderBy(desc(projects.createdAt)),
  [CACHE_TAGS.PROJECTS],
  CACHE_DURATION.MEDIUM
);

export default async function CaseStudiesPage() {
  const deployments = await getCachedProjects();

  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Execution_Vault</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Proof of</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Execution</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                Concrete technical outcomes for the ambitious. We transform chaotic legacy logic into structured architectural clarity.
              </p>
            </FadeIn>
          </div>

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
             {deployments.map((p, i) => {
                const Icon = iconMap[p.category || ''] || Cpu;
                return (
                  <FadeIn key={p.slug} delay={0.1 * i}>
                     <div className="group border border-zinc-100 dark:border-zinc-900 rounded-[3rem] p-10 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm hover:border-zinc-950 dark:hover:border-white transition-all duration-700 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-12">
                           <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 group-hover:bg-zinc-950 dark:group-hover:bg-white transition-all duration-700">
                              <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                           </div>
                           <span className="text-[8px] font-mono font-black tracking-widest text-zinc-300 dark:text-zinc-700 uppercase">{p.category || 'PROJECT'}</span>
                        </div>
                        
                        {p.image && (
                          <div className="mb-8 rounded-2xl overflow-hidden aspect-video border border-zinc-100 dark:border-zinc-800">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        )}

                        <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 text-zinc-950 dark:text-white group-hover:translate-x-2 transition-transform duration-700">
                          {p.title}
                        </h3>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium italic mb-12 flex-grow leading-relaxed line-clamp-3">
                          {p.description}
                        </p>

                        <Link href={`/case-studies/${p.slug}`} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-all">
                          VIEW_FULL_MANIFEST <ArrowUpRight className="w-4 h-4 translate-x-1" />
                        </Link>
                     </div>
                  </FadeIn>
                );
             })}
          </div>

          {/* Bottom CTA */}
          <FadeIn>
            <div className="p-12 md:p-24 border border-zinc-100 dark:border-zinc-900 rounded-[3rem] text-center bg-zinc-50/20 dark:bg-zinc-950/20">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-12 text-zinc-950 dark:text-white">Ready to be the next <br /> <span className="text-zinc-400 dark:text-zinc-800">Operational Success?</span></h2>
               <a href="/contact" className="inline-flex items-center gap-4 text-2xl font-black uppercase italic tracking-tighter group text-zinc-950 dark:text-white">
                Initialize Consultation <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
