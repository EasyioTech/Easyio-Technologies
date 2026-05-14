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
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-24 mb-16 items-end pb-12 border-b border-zinc-200/60">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-950 text-white rounded-[2px] shadow-lg shadow-zinc-950/10">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-mono font-black tracking-[0.2em] uppercase">SYSTEM.INTEL.JOURNAL</span>
                </div>
                <div className="h-px w-8 bg-zinc-200" />
                <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">v4.0.0_STABLE</span>
              </div>
            </FadeIn>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 mb-8 leading-[0.9] uppercase">
              Technical <span className="text-zinc-400 italic font-serif lowercase">Intelligence</span> <br />
              <span className="flex items-center gap-4">
                Registry
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse hidden md:block" />
              </span>
            </h1>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-medium">
                Deep-cycle documentation on sovereign engineering, high-concurrency 
                architectures, and proprietary AI transmission protocols.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap lg:justify-end gap-3">
                <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full flex items-center gap-2 text-[10px] font-black text-emerald-900 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Node_Kashmir_Active
                </div>
                <div className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full flex items-center gap-2 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                  Active_Entries: {posts.length.toString().padStart(2, '0')}
                </div>
              </div>
            </FadeIn>

            <div className="relative group w-full lg:max-w-sm">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="EXECUTE REGISTRY SEARCH..."
                className="w-full bg-white/50 backdrop-blur-sm border-2 border-zinc-100 rounded-xl py-4 pl-14 pr-8 text-[11px] font-mono font-bold outline-none focus:border-emerald-500/50 focus:bg-white transition-all placeholder:text-zinc-300 tracking-wider shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories / Filter Bar - High Fidelity Line */}
        <FadeIn delay={0.4}>
          <div className="flex items-center gap-10 mb-20 py-6 border-b border-zinc-100 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-3 text-zinc-950">
              <Filter className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Filter_Gate:</span>
            </div>
            
            <div className="flex items-center gap-10">
              {["All", "Architecture", "Engineering", "AI_Infra", "Sovereignty", "Performance"].map((cat) => (
                <button 
                  key={cat} 
                  className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-emerald-600 transition-all whitespace-nowrap relative"
                >
                  <Hash className="w-3 h-3 text-zinc-200 group-hover:text-emerald-400 transition-colors" />
                  {cat}
                  <span className="absolute -bottom-[26px] left-0 w-0 h-1 bg-emerald-500 transition-all group-hover:w-full" />
                </button>
              ))}
            </div>
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
          <div className="py-32 text-center border-2 border-dashed border-zinc-100 rounded-[2.5rem] bg-zinc-50/30">
            <Terminal className="w-12 h-12 text-zinc-200 mx-auto mb-6" />
            <p className="text-zinc-400 text-xs font-mono font-bold uppercase tracking-[0.4em]">Status: Null_Data_Return // Sector_Empty</p>
          </div>
        )}

        {/* Footer Reference */}
        <div className="mt-32 pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
               Public_Access
             </div>
             <div className="w-px h-4 bg-zinc-200" />
             <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
               Encryption: AES_256_GCM
             </div>
           </div>
           <p className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-zinc-300">End_Of_Registry_Stream</p>
        </div>
      </div>
    </section>
  );
}
