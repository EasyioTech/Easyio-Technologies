import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  return (
    <section className="mt-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-sm bg-zinc-50 p-8 md:p-12 text-zinc-950 border border-zinc-200">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                 CONSULTATION_PROTOCOL_ACTIVE
               </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] mb-8 uppercase text-zinc-950">
              Grow Your <span className="text-zinc-300 italic font-serif lowercase">Business</span> <br />
              With Professional Software.
            </h2>
            
            <p className="text-sm md:text-base text-zinc-500 mb-10 leading-relaxed max-w-lg font-medium">
              We build smart AI tools, powerful business systems, and secure websites. 
              Let's build your next big project together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-zinc-950 text-white px-8 py-5 rounded-sm text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:bg-emerald-600 shadow-2xl shadow-zinc-950/20 active:scale-[0.98]"
              >
                Contact Us
                <MessageSquare className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-zinc-100 px-8 py-5 rounded-sm text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:bg-zinc-50 text-zinc-950 active:scale-[0.98]"
              >
                Our Work
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          
          {/* Subtle Technical Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -mr-32 -mt-32 opacity-60" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
        </div>
      </FadeIn>
    </section>
  );
}
