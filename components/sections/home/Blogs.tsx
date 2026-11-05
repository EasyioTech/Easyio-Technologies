'use client';

import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const blogs = [
  {
    id: "blog-1",
    title: "Smart City Srinagar: The Role of IoT and Data Analytics",
    category: "Smart City",
    author: "Burhan Ali",
    date: "Sep 16, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/smart-city-srinagar-iot-analytics"
  },
  {
    id: "blog-2",
    title: "Building Resilient Software for Kashmir's Digital Divide",
    category: "Architecture",
    author: "Burhan Ali",
    date: "Sep 16, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/offline-first-software-architecture-kashmir"
  },
  {
    id: "blog-3",
    title: "Production LLMOps: Beyond Chatbots to Agentic Workflows",
    category: "AI & ML",
    author: "Burhan Ali",
    date: "Apr 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/production-llmops-agentic-workflows"
  }
];

export default function Blogs() {
  return (
    <section className="py-16 md:py-28 bg-transparent relative overflow-hidden mobile-section-content" id="blog">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Engineering Journal</span>
            </div>
            <PremiumHeading 
              text="Latest Insights"
              highlightWords={["Insights"]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 mb-3 leading-tight"
            />
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Expert-led analysis on software architecture, security protocols, and enterprise infrastructure.
            </p>
          </div>

          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-zinc-950 text-white rounded-full text-xs font-bold uppercase tracking-wider group hover:bg-emerald-600 transition-colors shadow-sm shrink-0 w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: (typeof blogs)[number] }) {
  return (
    <article className="group flex flex-col h-full">
      <Link 
        href={post.slug || "#"} 
        className="flex flex-col h-full bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-zinc-950 justify-between"
      >
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-5">
            <span className="px-3 py-1 bg-emerald-50 border border-emerald-200/70 rounded-full text-xs font-semibold text-emerald-800">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-zinc-950 tracking-tight leading-snug mb-4 group-hover:text-emerald-700 transition-colors">
            {post.title}
          </h3>
        </div>

        <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
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
              <span className="text-xs text-zinc-500">{post.date}</span>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </article>
  );
}
