import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, User, Share2, ArrowRight, List } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import LeadCapture from "./LeadCapture";
import Image from "next/image";

// Custom MDX components - Clean, readable editorial style
export const components = {
  h1: (props: any) => <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mt-16 mb-8 leading-tight" {...props} />,
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h2 id={id} className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mt-16 mb-6 pb-2 border-b border-zinc-100 scroll-mt-32" {...props} />;
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h3 id={id} className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 mt-12 mb-4 scroll-mt-32" {...props} />;
  },
  h4: (props: any) => <h4 className="text-lg font-bold tracking-tight text-zinc-900 mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-zinc-700 mb-8 leading-relaxed text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside space-y-3 mb-10 my-8 pl-6 text-zinc-700 text-lg marker:text-emerald-500" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside space-y-3 mb-10 my-8 pl-6 text-zinc-700 text-lg marker:text-zinc-400" {...props} />,
  li: (props: any) => <li className="text-zinc-700 text-lg leading-relaxed">{props.children}</li>,
  blockquote: (props: any) => (
    <blockquote className="my-10 pl-6 border-l-4 border-emerald-500 italic text-xl text-zinc-800 font-serif leading-relaxed">
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 px-1.5 py-0.5 rounded-md text-sm font-mono text-zinc-800 before:content-[''] after:content-['']" {...props} />
  ),
  pre: (props: any) => (
    <div className="relative my-10 overflow-hidden rounded-2xl shadow-sm border border-zinc-200">
      <pre className="p-6 bg-zinc-950 overflow-x-auto font-mono text-[13px] text-zinc-300 leading-relaxed" {...props} />
    </div>
  ),
  strong: (props: any) => <strong className="font-bold text-zinc-900" {...props} />,
  a: (props: any) => <a className="text-emerald-600 underline decoration-emerald-200 hover:decoration-emerald-500 transition-colors" {...props} />
};

interface PostLayoutProps {
  post: BlogPost;
}

export default function PostLayout({ post }: PostLayoutProps) {
  let tableOfContents = [];
  try {
    if (post.toc) {
      tableOfContents = typeof post.toc === 'string' ? JSON.parse(post.toc) : post.toc;
    }
  } catch (e) {
    console.error("Failed to parse TOC", e);
  }

  const hasImage = !!post.image;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 selection:bg-emerald-200 selection:text-zinc-900 font-sans">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-zinc-100">
        <div 
          className="h-full bg-emerald-500 transition-all duration-300" 
          style={{ width: '0%', animation: 'progress 1s ease-out forwards' }} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
          <article className="min-w-0">
            {/* Post Header */}
            <header className="mb-12">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-zinc-500">
                  <span className="text-emerald-600 font-semibold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    {post.readingTime}
                  </div>
                </div>
              </FadeIn>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                {post.title}
              </h1>

              <FadeIn delay={0.2}>
                <div className="flex items-center gap-4 py-6 border-y border-zinc-100">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200 shrink-0">
                    <Image 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                      alt={post.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-base font-bold text-zinc-900">{post.author}</div>
                    <div className="text-sm text-zinc-500">{post.date}</div>
                  </div>
                </div>
              </FadeIn>
            </header>

            {/* Featured Image */}
            <FadeIn delay={0.3}>
              <div className="relative w-full aspect-[16/9] mb-16 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                {hasImage ? (
                  <Image 
                    src={post.image!} 
                    alt={post.title}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 800px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
                     <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay absolute inset-0 pointer-events-none" />
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Article Content */}
            <main className="prose prose-zinc prose-lg max-w-none mb-24">
              <FadeIn delay={0.4}>
                <MDXRemote source={post.content} components={components} />
              </FadeIn>
            </main>
            
            <LeadCapture />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-32 space-y-8">
              
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <div className="flex items-center gap-2 mb-6">
                    <List className="w-4 h-4 text-zinc-900" />
                    <h4 className="text-sm font-bold text-zinc-900">In this article</h4>
                  </div>
                  <nav className="space-y-3">
                    {tableOfContents.map((item: any, index: number) => (
                      <a 
                        key={item.id || index} 
                        href={`#${item.id}`} 
                        className="block text-sm text-zinc-600 hover:text-emerald-600 transition-colors leading-relaxed"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share Action */}
              <button className="w-full group p-6 border border-zinc-200 rounded-3xl flex items-center justify-between hover:border-zinc-300 hover:shadow-sm transition-all bg-white">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                  <span className="text-sm font-semibold text-zinc-900">Share this article</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
