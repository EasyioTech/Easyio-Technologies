import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import Image from "next/image";

export default function PostCard({ post }: { post: BlogPost; index: number }) {
  const hasImage = !!post.image;

  return (
    <article className="group h-full flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full w-full bg-white rounded-2xl border border-zinc-200/90 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/50 hover:border-zinc-300"
      >
        {/* Featured Image / Media Area - Clean without floating capsule pill */}
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
            <div className="absolute inset-0 bg-zinc-100 flex flex-col justify-end p-5 transition-transform duration-500 group-hover:scale-105">
              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  Easyio Engineering
                </span>
                <p className="text-xs text-zinc-600 line-clamp-2 font-medium">
                  {post.focusKeyword || post.category}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Clean Category & Meta Header - No Capsule Pill */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs">
            <span className="font-mono font-bold uppercase tracking-wider text-emerald-800 text-[11px]">
              {post.category || 'Engineering'}
            </span>
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-medium">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime || '8 min read'}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-950 mb-2 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 mb-6 leading-relaxed font-normal">
            {post.description}
          </p>

          {/* Author & Footer */}
          <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200 shrink-0">
                <Image
                  src={
                    post.author?.toLowerCase().includes('arsalan')
                      ? '/images/avatar_1.jpg'
                      : post.author?.toLowerCase().includes('suhaib')
                      ? '/images/avatar_2.jpg'
                      : post.author?.toLowerCase().includes('shariq')
                      ? '/images/avatar_3.jpg'
                      : '/images/avatar_4.jpg'
                  }
                  alt={post.author || 'Author'}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-900 leading-tight">
                  {post.author || 'Easyio Team'}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {post.date}
                </span>
              </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
