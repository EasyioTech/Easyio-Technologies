'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950/50 backdrop-blur-sm transition-all duration-500 hover:border-zinc-400 dark:hover:border-white/20 hover:translate-y-[-4px] overflow-hidden">
          {/* Grainy Gradient Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 to-transparent dark:from-white/5 dark:to-transparent" />
          </div>

          {/* Featured Image - Scaled Down for Authority */}
          {post.image && (
            <div className="relative h-32 -mx-8 -mt-8 mb-6 overflow-hidden border-b border-zinc-100 dark:border-white/5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-80" />
            </div>
          )}

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-tight">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-zinc-950 dark:text-white mb-4 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors line-clamp-2 leading-[1.1] tracking-tighter">
              {post.title}
            </h3>

            <p className="text-base text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-6 leading-relaxed font-medium">
              {post.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center text-white dark:text-black">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-950 dark:text-white">{post.author}</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">{post.date}</span>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-zinc-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
