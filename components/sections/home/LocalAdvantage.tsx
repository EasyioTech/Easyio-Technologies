'use client';

import { m } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, Network } from "lucide-react";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

export default function LocalAdvantage() {
  return (
    <section className="py-14 md:py-32 bg-zinc-50 overflow-hidden border-y border-zinc-100 mobile-section-content">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-12 md:mb-24">
          <div className="flex-1 lg:max-w-xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-zinc-500 uppercase">Local Partner</span>
            </div>
            <PremiumHeading 
              text="The Best Tech Company in Kashmir."
              highlightWords={["Best", "Tech", "Kashmir."]}
              className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-zinc-950 leading-[1.1]"
              highlightClassName="text-emerald-600"
            />
          </div>

          <div className="flex-1 lg:pt-12">
            <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-12">
              Recognized across Jammu & Kashmir for software excellence. We don't rely on fragile CMS templates. We engineer enterprise-grade web applications, custom ERPs, and mobile platforms utilizing Next.js, Node.js, and Python—engineered specifically to maintain blazing speed and offline resilience across Srinagar, Sopore, and the entire valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex items-start gap-3.5 sm:gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 mb-0.5 sm:mb-1">Direct Communication</h4>
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed">No extreme time-zone differences. We work when you work.</p>
                 </div>
              </div>
              <div className="flex items-start gap-3.5 sm:gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Network className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 mb-0.5 sm:mb-1">Local Understanding</h4>
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed">Deep understanding of the J&K business landscape and supply chains.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* HQ Banner Minimal */}
        <div 
           className="bg-white border border-zinc-200 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 hover:shadow-xl hover:shadow-zinc-200/40 transition-all group"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
              <MapPin className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
            </div>
            <div>
              <h4 className="text-xl font-black text-zinc-950 tracking-tight mb-2">Easyio Technologies HQ</h4>
              <p className="text-sm font-medium text-zinc-500 max-w-md leading-relaxed">First floor, War complex, Block B, Main chowk Tehsil Road, Sopore, J&K 193201</p>
            </div>
          </div>
          
          <Link href="/contact" className="inline-flex items-center gap-3 bg-zinc-950 text-white text-xs font-black uppercase tracking-widest py-3.5 px-7 md:py-4 md:px-8 rounded-full hover:bg-emerald-600 transition-colors shrink-0">
             Work With Us
             <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
