'use client';

import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import PostCard from "./PostCard";
import { Terminal, Search, Filter, Hash } from "lucide-react";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-20 bg-white relative overflow-hidden">
      {/* Premium Mesh Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-50 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] contrast-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header - Standardized with Emerald Accents */}
        <div className="flex flex-col items-center text-center mb-16 pb-12 border-b border-zinc-200/60 max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600/80 uppercase">Our Journal</span>
            </div>
          </FadeIn>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 mb-6 leading-[0.9]">
            Insights & <br className="hidden md:block" />
            <span className="text-zinc-400 italic font-serif">Thoughts.</span>
          </h1>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Read our latest articles on software engineering, product design, and business growth. We share what we learn from building for modern startups and enterprises.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="relative group w-full max-w-md mx-auto mt-10">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full bg-white/50 backdrop-blur-sm border border-zinc-200 rounded-full py-3.5 pl-12 pr-6 text-sm font-medium outline-none focus:border-emerald-500/50 focus:bg-white transition-all placeholder:text-zinc-400 tracking-wide shadow-sm"
              />
            </div>
          </FadeIn>
        </div>

        {/* Categories / Filter Bar */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-20 overflow-x-auto scrollbar-hide">
            {["All", "Architecture", "Engineering", "Design", "Business"].map((cat) => (
              <button 
                key={cat} 
                className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-zinc-500 hover:text-emerald-600 transition-all whitespace-nowrap relative pb-2"
              >
                {cat}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid - Refined Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="py-32 text-center border border-zinc-100 rounded-[2.5rem] bg-zinc-50/30">
            <Search className="w-8 h-8 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500 font-medium">No articles found at the moment.</p>
          </div>
        )}

      </div>
    </section>
  );
}
