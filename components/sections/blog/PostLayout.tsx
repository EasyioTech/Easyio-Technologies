import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import LeadCapture from "./LeadCapture";

// Custom MDX components to maintain the high-fidelity design
export const components = {
  h1: (props: any) => <h1 className="text-5xl font-bold tracking-tighter text-zinc-950 dark:text-white mt-12 mb-6" {...props} />,
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h2 id={id} className="text-4xl font-bold tracking-tighter text-zinc-950 dark:text-white mt-12 mb-6 pb-2 border-b border-zinc-100 dark:border-white/5 scroll-mt-32" {...props} />;
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
    return <h3 id={id} className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mt-8 mb-4 border-l-2 border-zinc-950 dark:border-white pl-4 scroll-mt-32" {...props} />;
  },
  h4: (props: any) => <h4 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-xl" {...props} />,
  ul: (props: any) => <ul className="list-none space-y-4 mb-8 my-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal space-y-4 mb-8 my-6 pl-6 text-zinc-600 dark:text-zinc-400" {...props} />,
  li: (props: any) => (
    <li className="flex gap-4 text-zinc-600 dark:text-zinc-400 text-xl">
      <span className="text-zinc-300 dark:text-zinc-700 font-mono">/</span>
      <span className="flex-1">{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="my-12 p-10 bg-zinc-50 dark:bg-white/5 rounded-3xl border border-zinc-200 dark:border-white/10 italic text-2xl text-zinc-950 dark:text-zinc-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-950 dark:bg-white" />
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-base font-mono text-zinc-950 dark:text-white" {...props} />
  ),
  pre: (props: any) => (
    <pre className="my-8 p-6 bg-zinc-950 dark:bg-zinc-900 rounded-2xl border border-white/5 overflow-x-auto font-mono text-sm text-zinc-300" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold text-zinc-950 dark:text-white" {...props} />,
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
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-32 pb-24 transition-colors">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-zinc-100 dark:bg-white/5">
        <div 
          className="h-full bg-zinc-950 dark:bg-white transition-all duration-300" 
          style={{ width: '0%', animation: 'progress 1s ease-out forwards' }} 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto w-full">
          <Link href="/blog" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Archive
          </Link>
        </div>

        {/* Header - Centered */}
        <header className="max-w-5xl mx-auto mb-20 w-full">
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

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-zinc-950 dark:text-white mb-12 leading-[0.85] uppercase">
            <TextReveal>{post.title}</TextReveal>
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

        {/* Hero Image - Centered and constrained */}
        {post.image && (
          <div className="max-w-6xl mx-auto w-full mb-20">
            <FadeIn delay={0.5}>
              <div className="relative aspect-[21/7] max-h-[500px] rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        )}

        {/* Content Section - Balanced Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-20">
          <div className="space-y-20">
            <main className="prose prose-zinc dark:prose-invert max-w-none">
              <FadeIn delay={0.6}>
                <MDXRemote source={post.content} components={components} />
              </FadeIn>
            </main>
            
            <LeadCapture />
          </div>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-40 space-y-12">
              {tableOfContents.length > 0 && (
                <div className="p-8 rounded-3xl bg-zinc-50/50 dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 font-mono">/ Navigation</h4>
                  <nav className="space-y-4">
                    {tableOfContents.map((item: any) => (
                      <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        className="block text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-all transform hover:translate-x-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Newsletter / Lead Magnet */}
              <div className="p-8 rounded-3xl bg-zinc-950 dark:bg-white text-white dark:text-black shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 dark:bg-black/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                <h4 className="text-xl font-bold mb-4 tracking-tighter leading-none italic relative z-10">Join the Collective.</h4>
                <p className="text-[10px] opacity-60 mb-8 leading-relaxed uppercase tracking-widest relative z-10">
                  Weekly intelligence for modern technology leaders.
                </p>
                <div className="space-y-3 relative z-10">
                  <input 
                    type="email" 
                    placeholder="architect@enterprise.com"
                    className="w-full bg-white/10 dark:bg-black/5 border border-white/20 dark:border-black/10 rounded-xl py-3 px-4 text-xs outline-none focus:border-white/40 transition-colors"
                  />
                  <button className="w-full bg-white dark:bg-zinc-950 text-black dark:text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                    Join Newsletter
                  </button>
                </div>
              </div>

              {/* Social Proof Site Badge */}
              <div className="p-8 rounded-3xl border border-dashed border-zinc-200 dark:border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center mb-6">
                   <User className="w-5 h-5 text-zinc-400" />
                </div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Technical Authority</h5>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">"Verified architectural insights from the engineering team at Easyio."</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

  );
}
