import { ArrowRight, Clock, User, HardDrive, Terminal } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import Image from "next/image";

export default function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const hasImage = !!post.image;
  
  return (
    <div className="group h-full flex">
      <Link 
        href={`/blog/${post.slug}`} 
        className="flex flex-col h-full w-full bg-white rounded-3xl border border-zinc-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-200 hover:border-zinc-300"
      >
        {/* Featured Image Area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-50 border-b border-zinc-100">
          {hasImage ? (
            <Image 
              src={post.image!} 
              alt={post.title}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
               <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay absolute inset-0 pointer-events-none" />
               <Terminal className="w-10 h-10 text-zinc-300 relative z-10" />
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-zinc-200/50 text-[10px] font-bold uppercase tracking-widest text-zinc-800 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {post.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
             <div className="flex items-center gap-1.5">
               <Clock className="w-3.5 h-3.5" />
               <span>{post.readingTime}</span>
             </div>
             <span>•</span>
             <span>{post.date}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-sm md:text-base text-zinc-600 line-clamp-3 mb-8 leading-relaxed">
            {post.description}
          </p>

          <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200">
                 <Image 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                    alt={post.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-zinc-900 leading-none mb-1">{post.author}</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Author</span>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
