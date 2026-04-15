import { JobPosting } from '@/config/jobs';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  job: JobPosting;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="card-base group">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black">
              {job.level}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
              {job.department}
            </span>
          </div>
          <h3 className="heading-3 text-zinc-950 dark:text-white group-hover:italic transition-all duration-700">{job.title}</h3>
        </div>
        
        <Link
          href={`/careers/${job.id}`}
          className="btn-secondary group/btn"
        >
          View Protocol <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

      <p className="text-xl text-zinc-500 font-medium italic mb-12 leading-relaxed max-w-3xl">
        {job.description}
      </p>

      <div className="flex flex-wrap items-center gap-12 pt-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-zinc-400 dark:text-zinc-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">{job.type}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-zinc-400 dark:text-zinc-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
