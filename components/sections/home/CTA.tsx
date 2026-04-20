'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/Animations";

export default function CTA() {
  return (
    <section className="py-8 md:py-16 bg-transparent relative overflow-hidden" id="contact">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* The Premium Card - Adjusted for Horizontal Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] p-10 md:p-16 overflow-hidden group border border-yellow-100 shadow-2xl shadow-yellow-200/20 bg-[#FEF9C3]/40 backdrop-blur-sm"
        >
          {/* Abstract Texture Background - Yellowish Glow */}
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow-100/30 blur-[120px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
             
             {/* Tagline */}
             <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-950">Ready to start?</span>
                </div>
             </FadeIn>

             {/* Headline - Bold + Display Serif Combination */}
             <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-zinc-950 tracking-tight leading-[0.9] mb-12 max-w-4xl mx-auto">
                Helping you build <br />
                <span className="font-serif italic font-medium text-zinc-400 mt-4 block">
                  The Future.
                </span>
              </h2>

             {/* Subtext */}
             <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
                We work with ambitious founders and teams to build high-quality software that solves real problems and scales beautifully.
             </p>

             {/* The Unique Pixel-Perfect Button */}
             <motion.div
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="relative"
             >
                <Link 
                  href="/contact"
                  className="group flex items-center gap-1 h-12 md:h-16 bg-zinc-950 rounded-full pl-8 pr-2 transition-all duration-500 shadow-2xl shadow-emerald-500/10"
                >
                  <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase pr-6 pl-2">
                    Connect With Us
                  </span>
                  
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-[#D1FAE5] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-950 stroke-[2.5px]" />
                  </div>
                </Link>
             </motion.div>
          </div>

          {/* Abstract Texture - Psychological depth */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </motion.div>
      </div>
    </section>
  );
}
