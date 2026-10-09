import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  return (
    <section className="mt-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-50 p-8 md:p-12 text-zinc-900 border border-zinc-100 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
               <Zap className="w-4 h-4 text-emerald-500" />
               <span className="text-sm font-semibold text-emerald-600">
                 Work with us
               </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-zinc-900">
              Ready to scale your business with professional software?
            </h2>
            
            <p className="text-base text-zinc-600 mb-10 leading-relaxed max-w-lg">
              We build smart AI tools, powerful business systems, and scalable web applications. 
              Let's build your next big project together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-4 rounded-full text-sm font-bold transition-all hover:bg-emerald-600 shadow-md active:scale-95"
              >
                Get in touch
                <MessageSquare className="w-4 h-4" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center justify-center gap-2 bg-white border border-zinc-200 px-6 py-4 rounded-full text-sm font-bold transition-all hover:bg-zinc-50 hover:border-zinc-300 text-zinc-900 active:scale-95"
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
