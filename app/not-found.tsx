import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-zinc-950 text-center selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black shadow-2xl">
          <Terminal className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocol Breach</span>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[12rem] font-bold tracking-tighter text-zinc-900 dark:text-white leading-none uppercase select-none opacity-50 italic">
          404.
        </h1>
        <h2 className="heading-2 mt-8 mb-12">SYSTEM VOID.</h2>
        <p className="text-2xl text-zinc-500 font-medium italic mb-20 max-w-xl mx-auto">
          The requested coordinate does not exist within our current architectural manifest.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Initialize Reset
        </Link>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 opacity-10 grayscale select-none">
          <div className="text-[8px] font-bold uppercase tracking-[1em]">Architecture</div>
          <div className="text-[8px] font-bold uppercase tracking-[1em]">Latency</div>
          <div className="text-[8px] font-bold uppercase tracking-[1em]">Scale</div>
      </div>
    </div>
  );
}
