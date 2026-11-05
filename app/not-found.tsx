import Link from 'next/link';
import { ArrowLeft, Compass, MessageSquare } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC] text-center">
      <div className="max-w-xl mx-auto bg-white border border-zinc-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-zinc-200/40">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-zinc-950 leading-none mb-4">
          Page not found.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or doesn&apos;t exist. Use the links below to get back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Explore Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-zinc-500" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
