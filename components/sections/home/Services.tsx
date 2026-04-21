'use client';

import { Palette, Code2, Globe, PenTool, BarChart3, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const services = [
  {
    title: "Brand Strategy",
    icon: <Palette className="w-8 h-8 md:w-10 md:h-10" />,
    color: "bg-zinc-50",
    textColor: "text-zinc-950",
    delay: 0.1
  },
  {
    title: "Web Engineering",
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
    color: "bg-zinc-50",
    textColor: "text-zinc-950",
    delay: 0.2
  },
  {
    title: "Growth Systems",
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
    color: "bg-zinc-50",
    textColor: "text-zinc-950",
    delay: 0.3
  },
  {
    title: "Experience Design",
    icon: <PenTool className="w-8 h-8 md:w-10 md:h-10" />,
    color: "bg-zinc-50",
    textColor: "text-zinc-950",
    delay: 0.4
  },
  {
    title: "Data Intelligence",
    icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />,
    color: "bg-zinc-50",
    textColor: "text-zinc-950",
    delay: 0.5
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-transparent" id="services">
      <div className="max-w-[1600px] mx-auto px-6">

        <div className="mb-20 md:mb-28 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">Core Capabilities</span>
            </div>
            <PremiumHeading 
               text="Sovereign solutions."
               highlightWords={["solutions."]}
               className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-950 leading-[0.8] mb-8"
               highlightClassName="font-serif italic text-zinc-300 block mt-2"
            />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((item, index) => (
            <FadeIn key={index} delay={index * 100} direction="up" className={index === 4 ? "col-span-2 md:col-span-1" : ""}>
              <div
                className={`relative aspect-[5/4] sm:aspect-square md:aspect-[3/4] lg:aspect-square bg-zinc-50/50 rounded-[1.25rem] md:rounded-[1.5rem] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-all border border-transparent 
                  ${index % 2 === 0 
                    ? 'hover:border-emerald-100 hover:bg-[#D1FAE5]/40 hover:shadow-emerald-200/20' 
                    : 'hover:border-yellow-100 hover:bg-[#FEF9C3]/40 hover:shadow-yellow-200/20'} 
                  hover:shadow-2xl h-full`}
              >
                <div className={`transition-all duration-300 mb-2 md:mb-4 scale-90 group-hover:scale-100 ${index % 2 === 0 ? 'text-emerald-500/60 group-hover:text-emerald-600' : 'text-yellow-500/60 group-hover:text-yellow-600'}`}>
                  {item.icon}
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="text-sm md:text-base font-bold text-zinc-950 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity hidden md:block mt-1 ${index % 2 === 0 ? 'text-emerald-600' : 'text-yellow-600'}`}>
                    VIEW SOLUTION
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
