'use client';

import { motion } from "framer-motion";
import { Palette, Code2, Rocket, Layout, BarChart3, ArrowUpRight } from "lucide-react";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const services = [
  {
    id: "01",
    title: "Branding",
    icon: Palette,
    description: "We define your voice and visual identity to turn your startup into a memorable brand that stands out.",
    color: "#10b981", // Emerald
    bgHover: "bg-emerald-50"
  },
  {
    id: "02",
    title: "Websites",
    icon: Code2,
    description: "High-performance, beautifully crafted websites built with the latest tech to deliver speed and reliability.",
    color: "#3b82f6", // Blue
    bgHover: "bg-blue-50"
  },
  {
    id: "03",
    title: "Growth",
    icon: Rocket,
    description: "Strategic marketing and acquisition systems designed to scale your business results sustainably.",
    color: "#a855f7", // Purple
    bgHover: "bg-purple-50"
  },
  {
    id: "04",
    title: "Design",
    icon: Layout,
    description: "Intuitive and stunning user interfaces that make interacting with your product feel natural and perfect.",
    color: "#f97316", // Orange
    bgHover: "bg-orange-50"
  },
  {
    id: "05",
    title: "Analytics",
    icon: BarChart3,
    description: "Clear, actionable insights from your data to help you make smarter business decisions faster.",
    color: "#f43f5e", // Rose
    bgHover: "bg-rose-50"
  }
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-40 bg-transparent overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section - Same as Hero Style */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
            <span className="text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase">
              What we offer
            </span>
          </div>
          <PremiumHeading
            text="Building the next big thing."
            highlightWords={["big", "thing."]}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-950 leading-none"
          />
        </div>

        {/* Services List - Clean & Editorial */}
        <div className="border-t border-zinc-100">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ '--hover-color': service.color } as any}
              className="group relative border-b border-zinc-100 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-zinc-50/50 transition-all duration-500 px-4 -mx-4 rounded-3xl md:rounded-none"
            >
              {/* Left: Index & Title */}
              <div className="flex items-center gap-8 md:gap-16 flex-1">
                <span className="text-sm font-black text-zinc-300 uppercase tracking-widest">
                  {service.id}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <h3 className="text-4xl md:text-7xl font-black text-zinc-950 tracking-tighter uppercase group-hover:translate-x-4 group-hover:text-[var(--hover-color)] transition-all duration-500">
                    {service.title}
                  </h3>
                  <div 
                    className="hidden md:block w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: 'var(--hover-color)' }}
                  />
                </div>
              </div>

              {/* Right: Description & Icon */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full md:w-auto">
                <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-sm leading-tight group-hover:text-zinc-900 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center justify-between w-full md:w-auto gap-12">
                   <div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg group-hover:bg-[var(--hover-color)] group-hover:border-[var(--hover-color)] transition-all duration-500">
                      <service.icon className="w-6 h-6 text-zinc-950 group-hover:text-white transition-colors duration-500" />
                   </div>
                   <ArrowUpRight 
                    className="w-8 h-8 text-zinc-200 group-hover:text-[var(--hover-color)] group-hover:rotate-45 transition-all duration-500" 
                   />
                </div>
              </div>

              {/* Background Glow on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"
                style={{ background: `linear-gradient(to right, ${service.color}08, transparent)` }} 
              />
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA - Optimized for Mobile & Desktop */}
        <div className="mt-20 md:mt-32 p-8 md:p-24 rounded-[2rem] md:rounded-[3.5rem] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 overflow-hidden relative group">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 leading-none">
              READY TO BUILD<br />YOUR VISION?
            </h3>
            <p className="text-zinc-400 font-medium text-base md:text-lg max-w-md">
              Let's create something extraordinary together. Start your project today.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 h-14 md:h-20 px-10 md:px-12 bg-white text-zinc-950 font-black tracking-widest text-[10px] md:text-sm rounded-full flex items-center gap-3 md:gap-4 hover:bg-[#FEF9C3] transition-colors"
          >
            GET STARTED <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Animated Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -mr-48 -mt-48 group-hover:bg-emerald-500/20 transition-colors" />
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-center text-zinc-300">
           <span className="text-[10px] font-black uppercase tracking-[0.5em]">Systems Engineering for the Modern Web</span>
        </div>

      </div>
    </section>
  );
}
