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
               <ShieldCheck className="w-4 h-4 text-blue-600" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                 CONSULTATION_PROTOCOL_ACTIVE
               </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] mb-8 uppercase text-zinc-950">
              Scale Your <span className="text-zinc-400 italic font-serif">Infrastructure</span> <br />
              With Sovereign Engineering.
            </h2>
            
            <p className="text-sm md:text-base text-zinc-500 mb-10 leading-relaxed max-w-lg font-medium">
              We specialize in Agentic AI, high-performance ERP systems, and secure localized infrastructure. 
              Deploy your next mission-critical system with Easyio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-zinc-950 text-white px-6 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all hover:bg-zinc-800 shadow-xl"
              >
                Initiate Protocol
                <MessageSquare className="w-3 h-3" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center gap-3 bg-white border border-zinc-200 px-6 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all hover:bg-zinc-50 text-zinc-950"
              >
                Inspect Portfolio
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          
          {/* Subtle Technical Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />
        </div>
      </FadeIn>
    </section>
  );
}
