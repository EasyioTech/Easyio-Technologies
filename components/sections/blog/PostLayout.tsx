import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, User, Share2, HardDrive, Cpu, Terminal, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import LeadCapture from "./LeadCapture";

// Custom MDX components - Standardized High Density Technical Style
export const components = {
  h1: (props: any) => <h1 className="text-4xl font-black tracking-tighter text-zinc-950 mt-16 mb-8 uppercase" {...props} />,
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h2 id={id} className="text-3xl font-black tracking-tighter text-zinc-950 mt-16 mb-8 pb-4 border-b-4 border-zinc-950 scroll-mt-32 uppercase" {...props} />;
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h3 id={id} className="text-2xl font-black tracking-tighter text-zinc-950 mt-12 mb-6 border-l-8 border-emerald-500 pl-6 scroll-mt-32 uppercase" {...props} />;
  },
  h4: (props: any) => <h4 className="text-xl font-bold tracking-tight text-zinc-950 mt-8 mb-4 uppercase" {...props} />,
  p: (props: any) => <p className="text-zinc-600 mb-8 leading-relaxed text-lg font-medium" {...props} />,
  ul: (props: any) => <ul className="list-none space-y-6 mb-10 my-8" {...props} />,
  ol: (props: any) => <ol className="list-decimal space-y-6 mb-10 my-8 pl-8 text-zinc-600 text-lg" {...props} />,
  li: (props: any) => (
    <li className="flex gap-5 text-zinc-600 text-lg">
      <span className="text-emerald-500 font-black text-sm mt-1.5">»</span>
      <span className="flex-1 font-medium">{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="my-12 p-10 bg-zinc-50 rounded-3xl border border-zinc-100 italic text-xl text-zinc-900 relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 rounded-l-3xl" />
      <Zap className="w-8 h-8 text-emerald-500/20 absolute top-6 right-8" />
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 px-2 py-0.5 rounded text-sm font-mono font-bold text-emerald-700" {...props} />
  ),
  pre: (props: any) => (
    <div className="relative group my-10">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-zinc-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <pre className="relative p-8 bg-zinc-950 rounded-xl border border-white/10 overflow-x-auto font-mono text-xs text-zinc-300 leading-relaxed shadow-2xl" {...props} />
    </div>
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
    <div className="bg-white min-h-screen pt-32 md:pt-48 pb-24 selection:bg-emerald-500 selection:text-white">
      {/* Reading Progress - Emerald Precision */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-zinc-100/50 backdrop-blur-sm">
        <div 
          className="h-full bg-emerald-500 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
          style={{ width: '0%', animation: 'progress 1s ease-out forwards' }} 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Navigation / Header Sector */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 py-6 border-b border-zinc-100">
          <Link href="/blog" className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-950 transition-all">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Registry_Return
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest hidden md:block">Sector_ID: {post.slug.substring(0, 12).toUpperCase()}</span>
            <div className="h-4 w-px bg-zinc-200 hidden md:block" />
            <span className="text-[10px] font-mono text-emerald-500 font-black uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live_Transmission
            </span>
          </div>
        </div>

        {/* Main Content Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-32">
          <article>
            {/* Post Metadata */}
            <header className="mb-16">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-6 mb-10">
                  <div className="px-3 py-1.5 bg-zinc-950 text-white text-[10px] font-mono font-black tracking-[0.2em] uppercase rounded-sm flex items-center gap-2 shadow-lg shadow-zinc-950/20">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-2.5 text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                    <Clock className="w-4 h-4 text-zinc-300" />
                    {post.readingTime}
                  </div>
                </div>
              </FadeIn>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 mb-12 leading-[0.9] uppercase">
                {post.title}
              </h1>

              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:border-emerald-200 transition-colors">
                      <User className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-zinc-950 uppercase tracking-wider">{post.author}</span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Lead_Architect</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <span className="text-xs font-black text-zinc-950 uppercase tracking-wider">{post.date}</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">Registry_Timestamp</span>
                  </div>
                </div>
              </FadeIn>
            </header>

            {/* Featured Visual */}
            {post.image && (
              <FadeIn delay={0.3}>
                <div className="relative aspect-[21/10] mb-20 overflow-hidden rounded-[2.5rem] border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-95"
                  />
                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/70 uppercase tracking-[0.3em] rounded-full">
                    Visual_Ref_01 // SECURE_ASSET
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Technical Body Content */}
            <main className="prose prose-zinc max-w-none mb-32">
              <FadeIn delay={0.4}>
                <MDXRemote source={post.content} components={components} />
              </FadeIn>
            </main>
            
            <LeadCapture />
          </article>

          {/* Fixed Side Navigation / Protocols */}
          <aside>
            <div className="sticky top-32 space-y-12">
              {tableOfContents.length > 0 && (
                <div className="p-10 bg-zinc-50/50 border border-zinc-100 rounded-[2.5rem] backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-10 pb-5 border-b border-zinc-200">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500">Navigation_Map</h4>
                  </div>
                  <nav className="space-y-6">
                    {tableOfContents.map((item: any, index: number) => (
                      <a 
                        key={item.id || index} 
                        href={`#${item.id}`} 
                        className="group flex gap-4 text-[11px] font-black text-zinc-400 hover:text-emerald-600 transition-all uppercase tracking-[0.2em]"
                      >
                        <span className="text-zinc-200 font-mono">[{index.toString().padStart(2, '0')}]</span>
                        <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Protocol Status Badge */}
              <div className="p-10 border-2 border-zinc-950 rounded-[2.5rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400">Security_Manifest</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                      <span>Origin</span>
                      <span className="text-white">Easyio_Engineering</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                      <span>Verification</span>
                      <span className="text-emerald-400">Validated_Auth</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                      <span>Protocol</span>
                      <span className="text-white">HTTPS_TLS_1.3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Sectors */}
              <button className="w-full group p-8 border border-zinc-200 rounded-[2.5rem] flex items-center justify-between hover:bg-zinc-50 transition-all">
                <div className="flex items-center gap-4">
                  <Share2 className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-950">Share_Registry</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
