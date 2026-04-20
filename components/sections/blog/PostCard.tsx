import { motion } from "framer-motion";
import { ArrowRight, Clock, User, HardDrive } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Featured Image - Technical Frame */}
        {post.image && (
          <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-zinc-100 border border-zinc-200">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Overlay Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-3 left-3 px-2 py-1 bg-zinc-950/80 backdrop-blur-md text-white text-[8px] font-mono uppercase tracking-[0.2em] flex items-center gap-1.5 border border-white/10">
              <HardDrive className="w-2.5 h-2.5 text-zinc-400" />
              SRC_IMG_{index + 1}
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-100">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
              {post.category}
            </span>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5 text-[9px] text-zinc-400 font-bold uppercase tracking-tight">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-zinc-950 mb-3 group-hover:text-zinc-600 transition-colors leading-[1.1] tracking-tighter uppercase">
            {post.title}
          </h3>

          <p className="text-xs text-zinc-500 line-clamp-3 mb-6 leading-relaxed font-medium">
            {post.description}
          </p>

          <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
                <User className="w-3 h-3 text-zinc-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-zinc-950 uppercase">{post.author}</span>
                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-tighter">{post.date}</span>
              </div>
            </div>
            
            <div className="text-zinc-950 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
