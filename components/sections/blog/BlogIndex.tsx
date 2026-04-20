'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import PostCard from "./PostCard";
import { Terminal, Search, Filter, Hash } from "lucide-react";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Editorial Header - Asymmetric & Dense */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 mb-16 items-end pb-12 border-b border-zinc-200/60">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-2 py-1 bg-zinc-950 text-white rounded-[2px]">
                  <Terminal className="w-3 h-3" />
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase">EASYIO.CORE.JOURNAL</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-widest">v4.0.0_PRODUCTION</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 mb-6 leading-[0.9] uppercase">
              Technical <span className="text-zinc-400 italic font-serif">Intelligence</span> <br />
              & Architectural Protocols
            </h1>
            
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed font-medium">
                Documenting the evolution of sovereign engineering systems, high-concurrency 
                architectures, and proprietary AI infrastructure.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap lg:justify-end gap-3">
                <div className="px-4 py-2 border border-zinc-200 rounded-full flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Node_Kashmir_01
                </div>
                <div className="px-4 py-2 border border-zinc-200 rounded-full flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  Active_Logs: {posts.length}
                </div>
              </div>
            </FadeIn>

            <div className="relative group w-full lg:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-950 transition-colors" />
              <input 
                type="text" 
                placeholder="Query registry..."
                className="w-full bg-zinc-50 border border-zinc-200 rounded-[4px] py-3 pl-12 pr-6 text-xs font-mono outline-none focus:border-zinc-950 transition-all transition-colors placeholder:text-zinc-400"
              />
            </div>
          </div>
        </div>

        {/* Categories / Filter Bar - Dense System Line */}
        <FadeIn delay={0.4}>
          <div className="flex items-center gap-8 mb-12 py-4 border-b border-zinc-100 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-zinc-950">
              <Filter className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Selector:</span>
            </div>
            
            <div className="flex items-center gap-8">
              {["All", "Architecture", "Engineering", "AI_Infra", "LMS", "Case_Studies"].map((cat) => (
                <button 
                  key={cat} 
                  className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors whitespace-nowrap"
                >
                  <Hash className="w-3 h-3 text-zinc-200 group-hover:text-zinc-950 transition-colors" />
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid - Dense Variable Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-zinc-200 rounded-xl">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-[0.3em]">Status: No logs found in specified sector.</p>
          </div>
        )}

        {/* Footer Reference */}
        <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400">
           <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-widest">
             <span>Access_Level: PUBLIC</span>
             <span className="w-1 h-1 rounded-full bg-zinc-200" />
             <span>Transmission: ENCRYPTED_SSL</span>
           </div>
           <p className="text-[9px] font-mono uppercase tracking-widest">End_Of_Document</p>
        </div>
      </div>
    </section>
  );
}
