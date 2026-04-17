'use client';

import { motion } from "framer-motion";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import PostCard from "./PostCard";
import { Terminal, Search } from "lucide-react";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-6">
        {/* Header - Centered */}
        <div className="max-w-4xl mx-auto mb-24 text-center flex flex-col items-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
              <Terminal className="w-4 h-4 text-zinc-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Engineering Journal</span>
            </div>
          </FadeIn>
          
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-[-0.05em] text-zinc-950 dark:text-white mb-8 leading-[0.8] uppercase">
            <TextReveal>JOURNAL OF</TextReveal> <br />
            <TextReveal delay={0.2} className="text-zinc-500 dark:text-zinc-700 italic">ARCHITECTURE</TextReveal>
          </h1>
          
          <FadeIn delay={0.4}>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Deep dives into ERP architecture, high-concurrency LMS design, and the frontier of agentic AI infrastructure.
            </p>
          </FadeIn>
        </div>

        {/* Categories / Search Bar (Placholder for now) */}
        <FadeIn delay={0.6}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 pb-8 border-b border-zinc-100 dark:border-white/5">
            <div className="flex items-center gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {["All Posts", "Case Study", "Enterprise", "Architecture", "Engineering"].map((cat) => (
                <button key={cat} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative group max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-950 dark:group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search archive..."
                className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm outline-none focus:border-zinc-400 dark:focus:border-white/20 transition-all"
              />
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-500 dark:text-zinc-400">No logs found in registry.</p>
          </div>
        )}
      </div>
    </section>
  );
}
