import { JobPosting } from "@/config/jobs";
import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, Signal } from "lucide-react";

interface JobCardProps {
  job: JobPosting;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="p-6 md:p-12 border border-zinc-100 dark:border-zinc-900 rounded-3xl md:rounded-[2rem] bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm group hover:border-zinc-950 dark:hover:border-white transition-all duration-700">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 mb-8 md:mb-12">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <Signal className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{job.level}</span>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 italic">{job.department}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-zinc-950 dark:text-white leading-none group-hover:translate-x-2 transition-transform duration-700">
            {job.title}
          </h3>
        </div>
        
        <Link
          href={`/careers/${job.id}`}
          className="w-10 h-10 md:w-16 md:h-16 shrink-0 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-950 dark:group-hover:bg-white transition-all duration-700"
        >
          <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-zinc-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
        </Link>
      </div>

      <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium italic mb-8 md:mb-12 leading-relaxed max-w-2xl">
        {job.description}
      </p>

      <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-6 md:pt-10 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-zinc-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{job.type}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-zinc-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
