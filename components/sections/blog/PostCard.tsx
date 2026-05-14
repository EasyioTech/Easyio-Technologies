import { ArrowRight, Clock, User, HardDrive, Terminal } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <div className="group h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full bg-white border border-zinc-100 rounded-3xl p-6 transition-all duration-500 hover:border-emerald-200/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)]">
        {/* Featured Image - Technical Frame */}
        {post.image && (
          <div className="relative aspect-[16/10] mb-8 overflow-hidden bg-zinc-100 rounded-2xl border border-zinc-200">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Overlay Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-zinc-950/90 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2 border border-white/10 rounded-sm">
              <Terminal className="w-3 h-3 text-emerald-400" />
              BLOG_POST_{index + 1}
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                {post.category}
              </span>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5 text-zinc-300" />
                {post.readingTime}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-zinc-950 mb-4 group-hover:text-emerald-600 transition-colors leading-[1.1] tracking-tighter uppercase">
            {post.title}
          </h3>

          <p className="text-sm text-zinc-500 line-clamp-3 mb-8 leading-relaxed font-medium">
            {post.description}
          </p>

          <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-200 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                <User className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-zinc-950 uppercase tracking-tight">{post.author}</span>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">{post.date}</span>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-950 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
