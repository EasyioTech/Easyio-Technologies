import { FadeIn } from "@/components/shared/Animations";
import { BlogPost } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar, CheckCircle, ShieldCheck, MapPin, Tag, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import LeadCapture from "./LeadCapture";
import Image from "next/image";
import ReadingProgress from "./ReadingProgress";
import ShareButton from "./ShareButton";
import SidebarCta from "./SidebarCta";
import PostCard from "./PostCard";

// Helper to extract text from React children safely
function getTextContent(children: any): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return children.toString();
  }
  if (Array.isArray(children)) {
    return children.map(getTextContent).join('');
  }
  if (children && typeof children === 'object' && children.props && children.props.children) {
    return getTextContent(children.props.children);
  }
  return '';
}

function generateSlug(children: any): string {
  const text = getTextContent(children);
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function sanitizeMdxContent(content: string): string {
  if (!content) return '';
  return content.replace(/<(?![a-zA-Z/!_?])/g, '&lt;');
}

// Custom MDX Components - Tailored, editorial, completely un-AI
export const customComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mt-16 mb-8 leading-[1.15]" {...props} />
  ),
  h2: (props: any) => {
    const id = generateSlug(props.children);
    return (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-16 mb-6 pb-3 border-b border-zinc-200/80 scroll-mt-28 flex items-center gap-2 group"
        {...props}
      >
        <span className="text-emerald-500 font-mono text-sm opacity-60">#</span>
        <span>{props.children}</span>
      </h2>
    );
  },
  h3: (props: any) => {
    const id = generateSlug(props.children);
    return (
      <h3
        id={id}
        className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mt-10 mb-4 scroll-mt-28"
        {...props}
      />
    );
  },
  h4: (props: any) => (
    <h4 className="text-lg font-bold tracking-tight text-zinc-900 mt-8 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-zinc-700 mb-6 leading-[1.8] text-[17px] font-normal" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside space-y-2.5 mb-8 my-6 pl-6 text-zinc-700 text-[17px] leading-relaxed marker:text-emerald-600" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside space-y-2.5 mb-8 my-6 pl-6 text-zinc-700 text-[17px] leading-relaxed marker:text-zinc-500 marker:font-semibold" {...props} />
  ),
  li: (props: any) => <li className="text-zinc-700 text-[17px] leading-relaxed">{props.children}</li>,
  blockquote: (props: any) => (
    <blockquote className="my-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-zinc-50 to-white border-l-4 border-emerald-500 text-zinc-800 text-lg leading-relaxed shadow-xs italic font-serif">
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 text-zinc-900 px-1.5 py-0.5 rounded-md text-[13px] font-mono border border-zinc-200/80 before:content-[''] after:content-['']" {...props} />
  ),
  pre: (props: any) => (
    <div className="relative my-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] uppercase tracking-wider text-zinc-500">Terminal / Code</span>
      </div>
      <pre className="p-5 overflow-x-auto font-mono text-[13px] text-zinc-200 leading-relaxed" {...props} />
    </div>
  ),
  table: (props: any) => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-zinc-200/80 shadow-xs bg-white">
      <table className="w-full text-left text-sm text-zinc-700 border-collapse min-w-[600px]" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-zinc-100/80 border-b border-zinc-200 text-xs uppercase font-bold text-zinc-900 tracking-wider" {...props} />
  ),
  tbody: (props: any) => <tbody className="divide-y divide-zinc-100" {...props} />,
  tr: (props: any) => <tr className="hover:bg-zinc-50/70 transition-colors" {...props} />,
  th: (props: any) => <th className="px-5 py-3.5 font-bold tracking-wider" {...props} />,
  td: (props: any) => <td className="px-5 py-3.5 leading-relaxed align-top" {...props} />,
  strong: (props: any) => <strong className="font-bold text-zinc-950" {...props} />,
  a: (props: any) => (
    <a
      className="text-emerald-700 font-medium underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800 hover:decoration-emerald-600 transition-colors"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-zinc-200/80" />,
};

export const components = customComponents;

interface PostLayoutProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function PostLayout({ post, relatedPosts = [] }: PostLayoutProps) {
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
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-24 selection:bg-emerald-100 selection:text-emerald-950 font-sans">
      {/* Real-time reading progress bar */}
      <ReadingProgress />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <Link href="/blog" className="hover:text-zinc-900 transition-colors">
            Engineering Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-900 font-semibold truncate max-w-[240px] sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Main Grid: Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          <article className="min-w-0 max-w-full">
            {/* Post Header */}
            <header className="mb-10 pb-8 border-b border-zinc-100">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-xs text-zinc-500">
                  <span className="font-mono font-bold uppercase tracking-wider text-emerald-800 text-[11px]">
                    {post.category}
                  </span>

                  <span className="text-zinc-300">•</span>
                  
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    {post.readingTime || "8 min read"}
                  </span>

                  <span className="text-zinc-300">•</span>

                  <span className="inline-flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {post.date}
                  </span>

                  <span className="text-zinc-300 hidden sm:inline">•</span>

                  <span className="hidden sm:inline-flex items-center gap-1 font-semibold text-zinc-600">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Architecture Guide
                  </span>
                </div>
              </FadeIn>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.12]">
                {post.title}
              </h1>

              {post.description && (
                <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed mb-8">
                  {post.description}
                </p>
              )}

              {/* Author & Verification Bar */}
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200 shrink-0">
                      <Image
                        src={
                          post.author.toLowerCase().includes('arsalan')
                            ? '/images/avatar_1.jpg'
                            : post.author.toLowerCase().includes('suhaib')
                            ? '/images/avatar_2.jpg'
                            : post.author.toLowerCase().includes('shariq')
                            ? '/images/avatar_3.jpg'
                            : '/images/avatar_4.jpg'
                        }
                        alt={post.author}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                        <span>{post.author}</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-xs text-zinc-500 font-medium">
                        Engineering Lead • Easyio Technologies (J&K)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Sopore & Srinagar, Kashmir</span>
                  </div>
                </div>
              </FadeIn>
            </header>

            {/* Featured Image */}
            {hasImage && (
              <FadeIn delay={0.2}>
                <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm bg-zinc-50">
                  <Image
                    src={post.image!}
                    alt={post.title}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 800px"
                  />
                </div>
              </FadeIn>
            )}

            {/* Quick Executive Highlight Box */}
            <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Key Takeaway for Decision Makers
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                Modern Kashmiri enterprises are shifting from slow WordPress templates and expensive recurring SaaS tools to custom, offline-first software architectures with permanent 100% intellectual property ownership.
              </p>
            </div>

            {/* Article Content */}
            <main className="prose prose-zinc prose-lg max-w-none mb-16">
              <FadeIn delay={0.3}>
                <MDXRemote source={sanitizeMdxContent(post.content)} components={customComponents} />
              </FadeIn>
            </main>

            {/* Keywords / Topic Tags */}
            {post.keywords && (
              <div className="mb-12 pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Related Topics & Search Terms</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.split(',').map((kw: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 text-xs font-medium transition-colors"
                    >
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Lead Capture Form/CTA */}
            <LeadCapture />

          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-28 space-y-6">
              {/* Sidebar CTA */}
              <SidebarCta />

              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="p-6 bg-zinc-50/80 rounded-3xl border border-zinc-200/70 shadow-xs">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200/60">
                    <span className="w-1 h-3.5 rounded-sm bg-emerald-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      On This Page
                    </h4>
                  </div>
                  <nav className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                    {tableOfContents.map((item: any, index: number) => (
                      <a
                        key={item.id || index}
                        href={`#${item.id}`}
                        className="block text-xs font-medium text-zinc-600 hover:text-emerald-700 transition-colors leading-relaxed py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share Component */}
              <ShareButton title={post.title} />

              {/* Quick Regional Links */}
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 text-xs">
                <span className="block font-bold text-zinc-900 uppercase tracking-wider mb-2.5">
                  Regional Solutions:
                </span>
                <ul className="space-y-1.5 text-zinc-600">
                  <li>
                    <Link href="/software-development-company-in-kashmir" className="hover:text-emerald-700 transition-colors">
                      • Software Development in Kashmir
                    </Link>
                  </li>
                  <li>
                    <Link href="/software-development-company-in-sopore" className="hover:text-emerald-700 transition-colors">
                      • Tech & Mandi ERPs in Sopore
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development-company-in-srinagar" className="hover:text-emerald-700 transition-colors">
                      • Web & App Engineering in Srinagar
                    </Link>
                  </li>
                  <li>
                    <Link href="/custom-erp-software-development-kashmir" className="hover:text-emerald-700 transition-colors">
                      • Custom ERPs for J&K Enterprises
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Recommended Engineering Articles - Full Width Responsive Grid */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase mb-2">
                  Further Reading
                </p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950">
                  Recommended Engineering Articles
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  More technical breakdowns and regional business guides from our engineering team.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors shrink-0"
              >
                <span>View all articles</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((rPost, idx) => (
                <PostCard key={rPost.slug} post={rPost} index={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
