'use client';

import { ArrowRight, Calendar, Clock, User, HardDrive, Terminal } from 'lucide-react';
import { FadeIn } from "@/components/shared/Animations";
import Link from 'next/link';
import Image from 'next/image';
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Magnetic from "@/components/shared/Magnetic";
import { m } from "framer-motion";

const blogs = [
  {
    id: "LOG_01",
    title: "Smart City Srinagar: The Role of IoT and Data Analytics",
    category: "Smart City",
    author: "Burhan Ali",
    date: "2026.09.16",
    readTime: "06M_READ",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/smart-city-srinagar-iot-analytics"
  },
  {
    id: "LOG_02",
    title: "Building Resilient Software for Kashmir's Digital Divide",
    category: "Architecture",
    author: "Burhan Ali",
    date: "2026.09.16",
    readTime: "08M_READ",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/offline-first-software-architecture-kashmir"
  },
  {
    id: "LOG_03",
    title: "Production LLMOps: Beyond Chatbots to Agentic Workflows",
    category: "AI & ML",
    author: "Burhan Ali",
    date: "2024.04.15",
    readTime: "10M_READ",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/production-llmops-agentic-workflows"
  }
];

export default function Blogs() {
  return (
    <section className="pt-14 pb-20 md:pt-24 md:pb-32 bg-transparent relative overflow-hidden mobile-section-content" id="blog">
      {/* Background Subtle Gradient - desktop only */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full bg-[radial-gradient(circle_at_50%_0%,#D1FAE5_0%,transparent_50%)] opacity-20" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-4xl mb-8 md:mb-16">
            <PremiumHeading 
              text="Latest Insights"
              highlightWords={["Insights"]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-4 md:mb-8 leading-tight"
            />
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
               Expert-led analysis on software engineering, security protocols, and enterprise infrastructure.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-20 gap-x-8 md:gap-x-12 mb-12 md:mb-20">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <div className="flex justify-center">
            <Magnetic>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 px-8 py-3.5 md:px-10 md:py-4 bg-zinc-950 text-white rounded-2xl text-xs font-bold uppercase tracking-widest group hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-200/50"
              >
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
        </div>
      </div>
    </section>
  );
}
function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <Link 
        href={post.slug || "#"} 
        className="flex flex-col h-full bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 justify-between"
      >
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-lg text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              {post.readTime.replace('0', '').replace('_', ' ')}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-zinc-950 tracking-tight leading-[1.25] mb-4 group-hover:text-emerald-600 transition-colors">
            {post.title}
          </h3>
        </div>

        <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 overflow-hidden shrink-0">
              <Image 
                src="/images/avatar_1.jpg"
                alt={post.author}
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-zinc-950">{post.author}</span>
              <span className="text-[10px] text-zinc-400 font-mono">{post.date}</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
