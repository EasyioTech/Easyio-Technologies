import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import Image from "next/image";

export default function PostCard({ post }: { post: BlogPost; index: number }) {
  return (
    <article className="group h-full flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full w-full bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-400 justify-between"
      >
        {/* Content Area */}
        <div className="flex flex-col flex-1">
          {/* Category & Meta Header */}
          <div className="flex items-center justify-between gap-2 mb-3 text-xs">
            <span className="font-mono font-bold uppercase tracking-wider text-emerald-800 text-[11px] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
              {post.category || 'Engineering'}
            </span>
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-medium font-mono">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime || '8 min read'}</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 mb-3 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3 mb-6 leading-relaxed font-normal">
            {post.description}
          </p>
        </div>

        {/* Author & Footer */}
        <div className="pt-5 border-t border-zinc-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200 shrink-0">
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
                width={32}
                height={32}
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

          <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </article>
  );
}
