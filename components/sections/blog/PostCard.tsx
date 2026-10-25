import { ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import Image from "next/image";

export default function PostCard({ post }: { post: BlogPost; index: number }) {
  const hasImage = !!post.image;

  return (
    <article className="group h-full flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full w-full bg-white rounded-3xl border border-zinc-200/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300"
      >
        {/* Featured Image / Media Area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-zinc-100">
          {hasImage ? (
            <Image
              src={post.image!}
              alt={post.title}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 flex flex-col justify-end p-6 transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-[url('/noise.svg')] opacity-20 mix-blend-overlay absolute inset-0 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  // EASYIO ENGINEERING
                </span>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {post.focusKeyword || post.category}
                </p>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/70 text-[10px] font-bold uppercase tracking-wider text-zinc-800 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {post.category || 'Engineering'}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-zinc-400">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime || '8 min read'}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 mb-3 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-zinc-600 line-clamp-3 mb-6 leading-relaxed font-normal">
            {post.description}
          </p>

          {/* Author & Footer */}
          <div className="mt-auto pt-5 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200 shrink-0">
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
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-900 leading-tight">
                  {post.author}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Author
                </span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
