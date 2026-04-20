import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, User, Share2, HardDrive, Cpu, Terminal } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import LeadCapture from "./LeadCapture";

// Custom MDX components - High Density Technical Style
export const components = {
  h1: (props: any) => <h1 className="text-3xl font-black tracking-tighter text-zinc-950 mt-12 mb-6 uppercase" {...props} />,
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h2 id={id} className="text-2xl font-black tracking-tighter text-zinc-950 mt-12 mb-6 pb-2 border-b border-zinc-200 scroll-mt-32 uppercase" {...props} />;
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h3 id={id} className="text-xl font-bold tracking-tight text-zinc-950 mt-8 mb-4 border-l-4 border-zinc-950 pl-4 scroll-mt-32 uppercase" {...props} />;
  },
  h4: (props: any) => <h4 className="text-lg font-bold tracking-tight text-zinc-950 mt-6 mb-3 uppercase" {...props} />,
  p: (props: any) => <p className="text-zinc-600 mb-6 leading-relaxed text-base" {...props} />,
  ul: (props: any) => <ul className="list-none space-y-4 mb-8 my-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal space-y-4 mb-8 my-6 pl-6 text-zinc-600 text-sm" {...props} />,
  li: (props: any) => (
    <li className="flex gap-4 text-zinc-600 text-base">
      <span className="text-zinc-300 font-mono text-xs mt-1">●</span>
      <span className="flex-1">{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="my-10 p-8 bg-zinc-50 rounded-sm border border-zinc-200 italic text-lg text-zinc-950 relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-950" />
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs font-mono text-zinc-950" {...props} />
  ),
  pre: (props: any) => (
    <pre className="my-8 p-6 bg-zinc-950 rounded-sm border border-white/5 overflow-x-auto font-mono text-xs text-zinc-300 leading-relaxed" {...props} />
  ),
  strong: (props: any) => <strong className="font-black text-zinc-950" {...props} />,
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

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-48 pb-20 transition-colors">
      {/* Reading Progress Bar - Technical Style */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-[100] bg-zinc-100">
        <div 
          className="h-full bg-zinc-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)]" 
          style={{ width: '0%', animation: 'progress 1s ease-out forwards' }} 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-4 mb-12 py-4 border-b border-zinc-100">
          <Link href="/blog" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Registry
          </Link>
          <span className="text-zinc-200">/</span>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest truncate max-w-[200px]">{post.slug}</span>
        </div>

        {/* Content Section - Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
          <article>
            {/* Header */}
            <header className="mb-12">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="px-2 py-1 bg-zinc-950 text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-[2px] flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-auto">
                    ID: {post.slug.substring(0, 8).toUpperCase()}
                  </div>
                </div>
              </FadeIn>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-[0.95] uppercase border-b-8 border-zinc-950 pb-8">
                {post.title}
              </h1>

              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-zinc-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                      <User className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-zinc-950 uppercase tracking-wider">{post.author}</span>
                      <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Author_Lead_Eng</span>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-black text-zinc-950 uppercase tracking-wider">{post.date}</span>
                    <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Release_Date</span>
                  </div>
                </div>
              </FadeIn>
            </header>

            {/* Hero Image */}
            {post.image && (
              <FadeIn delay={0.3}>
                <div className="relative aspect-[21/9] mb-16 overflow-hidden border border-zinc-200 rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-mono text-white/70 uppercase tracking-widest">
                    Fig_01: Technical_Overview
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Markdown Content */}
            <main className="prose prose-zinc max-w-none mb-24">
              <FadeIn delay={0.4}>
                <MDXRemote source={post.content} components={components} />
              </FadeIn>
            </main>
            
            <LeadCapture />
          </article>

          {/* Technical Constraints Sidebar */}
          <aside>
            <div className="sticky top-32 space-y-8">
              {tableOfContents.length > 0 && (
                <div className="p-8 border border-zinc-200 rounded-sm">
                  <div className="flex items-center gap-2 mb-8 pb-4 border-b border-zinc-100">
                    <Cpu className="w-3 h-3 text-zinc-400" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Navigation_Map</h4>
                  </div>
                  <nav className="space-y-4">
                    {tableOfContents.map((item: any, index: number) => (
                      <a 
                        key={item.id || index} 
                        href={`#${item.id}`} 
                        className="group flex gap-3 text-[10px] font-bold text-zinc-400 hover:text-zinc-950 transition-all uppercase tracking-widest"
                      >
                        <span className="text-zinc-200">/</span>
                        <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Technical Authority Badge */}
              <div className="p-8 border border-zinc-200 rounded-sm bg-zinc-50/30">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">Security_Protocol</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    <span>Source</span>
                    <span className="text-zinc-950">Easyio_Labs</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    <span>Integrity</span>
                    <span className="text-emerald-500">Verified</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    <span>Encryption</span>
                    <span className="text-zinc-950">AES_256</span>
                  </div>
                </div>
              </div>

              {/* Sharing Interface */}
              <div className="flex gap-2">
                 <button className="flex-1 px-4 py-4 border border-zinc-200 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-950 hover:text-white transition-all rounded-sm flex items-center justify-center gap-3">
                   <Share2 className="w-3 h-3" />
                   Share_Article
                 </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
