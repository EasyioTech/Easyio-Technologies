'use client';

import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

// Custom MDX components to maintain the high-fidelity design
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold tracking-tighter text-zinc-950 dark:text-white mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 dark:text-white mt-12 mb-6 pb-2 border-b border-zinc-100 dark:border-white/5" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white mt-8 mb-4 border-l-2 border-zinc-950 dark:border-white pl-4" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-lg" {...props} />,
  ul: (props: any) => <ul className="list-none space-y-4 mb-8 my-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal space-y-4 mb-8 my-6 pl-6 text-zinc-600 dark:text-zinc-400" {...props} />,
  li: (props: any) => (
    <li className="flex gap-4 text-zinc-600 dark:text-zinc-400">
      <span className="text-zinc-300 dark:text-zinc-700 font-mono">/</span>
      <span className="flex-1">{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="my-12 p-8 bg-zinc-50 dark:bg-white/5 rounded-3xl border border-zinc-200 dark:border-white/10 italic text-xl text-zinc-950 dark:text-zinc-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-950 dark:bg-white" />
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-950 dark:text-white" {...props} />
  ),
  pre: (props: any) => (
    <pre className="my-8 p-6 bg-zinc-950 dark:bg-zinc-900 rounded-2xl border border-white/5 overflow-x-auto font-mono text-sm text-zinc-300" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold text-zinc-950 dark:text-white" {...props} />,
};

interface PostLayoutProps {
  post: BlogPost;
  mdxSource: any;
}

export default function PostLayout({ post, mdxSource }: PostLayoutProps) {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-32 pb-24 transition-colors">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link href="/blog" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Archive
        </Link>

        {/* Header */}
        <header className="max-w-4xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1 rounded-full bg-zinc-950 dark:bg-white text-[10px] font-black uppercase tracking-widest text-white dark:text-black">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-zinc-400 tracking-tighter">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </FadeIn>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 dark:text-white mb-12 leading-[0.9]">
            <TextReveal>{post.title.toUpperCase()}</TextReveal>
          </h1>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider">{post.author}</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase">Lead Engineer</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider">Published</span>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">{post.date}</span>
              </div>
              <button className="ml-auto w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-20">
          <main className="prose prose-zinc dark:prose-invert max-w-none">
            <FadeIn delay={0.6}>
              <MDXRemote {...mdxSource} components={components} />
            </FadeIn>
          </main>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-40 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Archive Menu</h4>
                <nav className="space-y-4">
                  <a href="#overview" className="block text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">Architecture Overview</a>
                  <a href="#modular" className="block text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">Modular Framework</a>
                  <a href="#data" className="block text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">Data Resilience</a>
                </nav>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-4">Easyio Weekly</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  Join 10,000+ engineers receiving our weekly architectural breakdowns.
                </p>
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl py-2 px-4 text-xs outline-none mb-4"
                />
                <button className="w-full bg-zinc-950 dark:bg-white text-white dark:text-black py-2 rounded-xl text-xs font-bold uppercase tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
