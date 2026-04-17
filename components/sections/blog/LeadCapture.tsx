import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  return (
    <section className="mt-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 dark:bg-white p-8 md:p-16 text-white dark:text-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent dark:from-black/20" />
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-black/5 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Work with Easyio
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-8 italic">
              Ready to build the future of your enterprise?
            </h2>
            
            <p className="text-lg md:text-xl opacity-70 mb-12 leading-relaxed tracking-tight">
              We specialize in Agentic AI, high-performance ERP systems, and Sovereign Engineering. Let's discuss how we can scale your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-white dark:bg-zinc-950 text-black dark:text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a consultation
                <MessageSquare className="w-4 h-4" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center gap-3 bg-white/10 dark:bg-black/5 border border-white/10 dark:border-black/10 px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-white/20 dark:hover:bg-black/10"
              >
                View our work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
