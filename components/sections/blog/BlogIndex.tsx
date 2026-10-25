'use client';

import { useState, useMemo } from 'react';
import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import PostCard from "./PostCard";
import { Search, X, Sparkles, SlidersHorizontal, BookOpen } from "lucide-react";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return ['All', ...Array.from(cats)];
  }, [posts]);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = post.title?.toLowerCase().includes(q);
      const inDesc = post.description?.toLowerCase().includes(q);
      const inKeywords = post.keywords?.toLowerCase().includes(q);
      const inCategory = post.category?.toLowerCase().includes(q);

      return inTitle || inDesc || inKeywords || inCategory;
    });
  }, [posts, selectedCategory, searchQuery]);

  const quickTags = [
    'Best Software Company',
    'Srinagar IT',
    'Sopore Mandi ERP',
    'Web Development',
    'Mobile Apps',
    'Kashmir Tech',
  ];

  return (
    <section className="pt-28 md:pt-40 pb-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-14 pb-12 border-b border-zinc-200/80 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Easyio Engineering & Technology Journal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-950 mb-6 leading-[0.95]">
            Engineering & <br className="hidden sm:block" />
            <span className="text-zinc-400 italic font-serif">Tech Insights.</span>
          </h1>

          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Practical guides, regional business architecture, and technical benchmarks from Kashmir&apos;s leading software engineering team.
            </p>
          </FadeIn>

          {/* Interactive Search Bar */}
          <FadeIn delay={0.2}>
            <div className="relative group w-full max-w-lg mx-auto mt-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or district (e.g. Sopore, ERP, Srinagar)..."
                className="w-full bg-zinc-50 border border-zinc-300/80 rounded-full py-3.5 pl-12 pr-10 text-sm font-medium text-zinc-900 outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-zinc-400 shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Tag Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-2xl mx-auto">
              <span className="text-xs text-zinc-400 font-medium">Quick search:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                    searchQuery.toLowerCase() === tag.toLowerCase()
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-600 border-zinc-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Categories / Filter Bar */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-100">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
              <SlidersHorizontal className="w-4 h-4 text-zinc-400 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold text-zinc-500">
              Showing <span className="text-zinc-900 font-bold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-x-10">
          {filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="py-24 text-center border border-zinc-200/80 rounded-3xl bg-zinc-50/50 max-w-lg mx-auto">
            <BookOpen className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-zinc-800 mb-1">No articles found</h3>
            <p className="text-xs text-zinc-500 mb-4">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another search term.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
