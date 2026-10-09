'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star, ArrowRight, Activity, Cloud, Database, Layout, Hexagon, Zap } from "lucide-react";
import { FadeIn, Marquee } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";



export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-32 overflow-hidden flex flex-col items-center justify-center">

      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          
          <PremiumHeading 
            text="Building products people actually love"
            highlightWords={["products", "love"]}
            className="text-5xl md:text-8xl lg:text-[110px] font-bold tracking-tight text-zinc-900 mb-8 leading-none max-w-[1200px]"
          />

          <FadeIn delay={0.6}>
            <p className="text-zinc-400 text-base md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-tight">
              We engineer scalable <Link href="/software-development-company-in-kashmir" className="text-zinc-950 underline decoration-zinc-300 hover:decoration-emerald-500 hover:text-emerald-600 transition-colors">custom software development</Link> and <Link href="/web-development-company-in-srinagar" className="text-zinc-950 underline decoration-zinc-300 hover:decoration-emerald-500 hover:text-emerald-600 transition-colors">high-performance web development</Link> solutions. From MVPs to global scale, view our <Link href="/case-studies" className="text-zinc-950 underline decoration-zinc-300 hover:decoration-emerald-500 hover:text-emerald-600 transition-colors">recent engineering projects</Link> to see how we help businesses move faster. Read <Link href="/about" className="text-zinc-950 underline decoration-zinc-300 hover:decoration-emerald-500 hover:text-emerald-600 transition-colors">about us</Link> to learn more.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                <Link 
                  href="/contact" 
                  className="group h-14 pl-8 pr-2 flex items-center justify-center bg-zinc-950 text-white font-medium rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-emerald-500/10 active:scale-95"
                >
                  Get Started 
                    <div className="w-10 h-10 ml-4 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-500 group-hover:rotate-45 -rotate-[22.5deg]">
                      <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                    </div>
                </Link>
              

            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
