'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, HardDrive, Terminal } from 'lucide-react';
import { FadeIn } from "@/components/shared/Animations";
import Link from 'next/link';

const blogs = [
  {
    id: "LOG_01",
    title: "Scaling Distributed Systems for Global High-Frequency Trading",
    category: "Architecture",
    author: "Arsalan K.",
    date: "2024.04.18",
    readTime: "08M_READ",
    image: "https://images.unsplash.com/photo-1551288049-bb848a55a175?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG_02",
    title: "The Zero-Trust Protocol: Moving Beyond Traditional Firewall Logic",
    category: "Security",
    author: "Zeeshan M.",
    date: "2024.04.12",
    readTime: "12M_READ",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "LOG_03",
    title: "Why Atomic Consistency is the New Standard for Enterprise Data",
    category: "Databases",
    author: "Faisal R.",
    date: "2024.04.05",
    readTime: "06M_READ",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blogs() {
  return (
    <section className="pt-24 pb-32 bg-transparent relative overflow-hidden" id="blog">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full bg-[radial-gradient(circle_at_50%_0%,#D1FAE5_0%,transparent_50%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 border-b border-zinc-100/50 pb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-950">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-950 mb-8 leading-tight">
              Latest <span className="font-serif italic font-medium text-zinc-400">Insights</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
               Deep dives into software development, security best practices, and building for the future.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mb-20">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <div className="flex justify-center">
          <FadeIn delay={0.4}>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-zinc-950 text-white rounded-2xl text-xs font-bold uppercase tracking-widest group hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-200/50"
            >
              Read more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group cursor-pointer flex flex-col h-full">
        {/* Modern Image Frame */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-zinc-50 border border-zinc-100 mb-8 transition-all group-hover:shadow-2xl group-hover:shadow-zinc-200/40">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6 flex gap-2">
             <span className="px-4 py-1.5 bg-white shadow-sm border border-zinc-100 rounded-full text-[10px] font-bold text-zinc-950 uppercase tracking-widest">
               {post.category}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                <Calendar className="w-3 h-3" />
                {post.date}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                {post.readTime.replace('0', '').replace('_', ' ')}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-zinc-950 tracking-tight leading-[1.2] mb-8 group-hover:text-emerald-600 transition-colors">
            {post.title}
          </h3>

          <div className="mt-auto pt-6 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 overflow-hidden">
                   <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                    alt={post.author}
                    className="w-full h-full"
                   />
                </div>
                <div className="flex flex-col gap-0.5">
                   <span className="text-[10px] font-bold text-zinc-950 uppercase tracking-wide">{post.author}</span>
                   <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Author</span>
                </div>
             </div>
             <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5" />
             </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
