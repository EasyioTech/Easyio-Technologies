'use client';

import { FadeIn } from "@/components/shared/Animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  metrics: { label: string, value: string }[];
  href: string;
  index: number;
}

export const ProjectCard = ({ title, category, description, metrics, href, index }: ProjectCardProps) => {
  return (
    <FadeIn delay={0.1 * index}>
      <Link href={href} className="group block">
        <div className="card-base border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-0 overflow-hidden transition-all duration-500">
          <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
            {/* Visualizer Placeholder / Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-transparent dark:from-zinc-800/50 dark:to-transparent" />
            <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-950 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800">
                    {category}
                </span>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-zinc-900 dark:text-white" size={20} />
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4 tracking-tighter uppercase transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
              {title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-8 italic">
              {description}
            </p>
            
            <div className="flex gap-12 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              {metrics.map((metric, i) => (
                <div key={i}>
                    <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-1">{metric.label}</p>
                    <p className="text-lg font-bold text-zinc-950 dark:text-white tracking-tight">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};
