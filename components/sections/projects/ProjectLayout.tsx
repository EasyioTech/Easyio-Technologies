'use client';

import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { ArrowLeft, ExternalLink, Cpu, Globe, Shield, Box, Zap } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { components } from "@/components/sections/blog/PostLayout"; // Reuse high-fidelity MDX components

const iconMap: Record<string, any> = {
  INDUSTRIAL_LOGIC: Cpu,
  DISTRIBUTED_SYSTEMS: Globe,
  FINTECH_SECURITY: Shield,
  AI_INFRASTRUCTURE: Zap,
  CLOUD_ARCHITECTURE: Box,
};

interface ProjectLayoutProps {
  project: any;
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
  const Icon = iconMap[project.category || ''] || Cpu;
  const tags = project.tags || [];

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-32 pb-24 transition-colors">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link href="/case-studies" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Execution Vault
        </Link>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
                  {project.category || 'CASE_STUDY'}
                </span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 leading-[0.85] uppercase italic">
              <TextReveal>{project.title}</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-2xl text-zinc-500 dark:text-zinc-400 font-medium italic leading-relaxed">
                {project.description}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="flex flex-col gap-8 lg:text-right lg:items-end">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Deployed Status</span>
                <p className="text-xs font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2 lg:justify-end">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   Fully Operational
                </p>
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
                >
                  Visit Live Protocol <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Hero Image */}
        {project.image && (
          <FadeIn delay={0.8}>
            <div className="relative aspect-[21/9] mb-24 rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-white/5 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
            </div>
          </FadeIn>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-20">
          <main className="prose prose-zinc dark:prose-invert max-w-none">
            <FadeIn delay={1}>
               {project.content ? (
                 <div className="prose-h2:italic prose-h2:uppercase prose-h2:font-black prose-h2:tracking-tighter prose-h2:text-4xl">
                   {/* In a real app we'd use MDXRemote, but for simplicity if content is just raw text we handle it */}
                   <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br/>') }} />
                 </div>
               ) : (
                 <div className="p-12 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 text-center">
                    <p className="text-zinc-500 italic">Technical manifest pending full architectural documentation.</p>
                 </div>
               )}
            </FadeIn>
          </main>

          {/* Sidebar / Specs */}
          <aside>
            <FadeIn delay={1.2}>
              <div className="sticky top-40 space-y-12">
                <div className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 border-b border-zinc-200 dark:border-white/5 pb-4">
                    Technical Specifications
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Architecture</span>
                      <p className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-tighter italic">Modern Microservices</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Stack</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                         {tags.map((tag: string) => (
                           <span key={tag} className="px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-lg text-[10px] font-mono text-zinc-500 uppercase">{tag}</span>
                         ))}
                         {!tags.length && ["TypeScript", "Next.js", "PostgreSQL"].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-lg text-[10px] font-mono text-zinc-500 uppercase">{tag}</span>
                         ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Core Outcome</span>
                      <p className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-tighter italic">Optimized Performance</p>
                    </div>
                  </div>
                </div>

                <div className="px-10 py-8">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Inquiry_Ready</h4>
                   <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-8 italic leading-relaxed">
                     Interested in a similar architectural deployment for your organization?
                   </p>
                   <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 dark:text-white border-b-2 border-zinc-950 dark:border-white pb-1 group flex items-center gap-2 w-fit">
                      Initialize Contact <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                   </Link>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </div>
  );
}
