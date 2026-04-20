'use client';

import { Palette, Code2, Globe, PenTool, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/Animations";

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

        {/* Heading */}
        <div className="mb-20 md:mb-28 text-center md:text-left">
          <FadeIn>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">Core Capabilities</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-950 leading-[0.8] mb-8">
              Sovereign <br />
              <span className="font-serif italic text-zinc-300 block mt-2">solutions.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative aspect-[2/1] bg-zinc-50/50 rounded-[1.5rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-all border border-transparent 
                ${index % 2 === 0 
                  ? 'hover:border-emerald-100 hover:bg-[#D1FAE5]/40 hover:shadow-emerald-200/20' 
                  : 'hover:border-yellow-100 hover:bg-[#FEF9C3]/40 hover:shadow-yellow-200/20'} 
                hover:shadow-2xl`}
            >
              <div className={`transition-all duration-300 mb-4 scale-90 group-hover:scale-100 ${index % 2 === 0 ? 'text-emerald-500/60 group-hover:text-emerald-600' : 'text-yellow-500/60 group-hover:text-yellow-600'}`}>
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm md:text-base font-bold text-zinc-950 tracking-tight">
                  {item.title}
                </h3>
                <span className={`text-[10px] font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'text-emerald-600' : 'text-yellow-600'}`}>
                  VIEW SOLUTION
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
