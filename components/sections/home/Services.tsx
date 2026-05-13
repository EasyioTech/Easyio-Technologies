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
    color: "emerald"
  },
  {
    id: "02",
    title: "Websites",
    icon: Code2,
    description: "High-performance, beautifully crafted websites built with the latest tech to deliver speed and reliability.",
    color: "blue"
  },
  {
    id: "03",
    title: "Growth",
    icon: Rocket,
    description: "Strategic marketing and acquisition systems designed to scale your business results sustainably.",
    color: "purple"
  },
  {
    id: "04",
    title: "Design",
    icon: Layout,
    description: "Intuitive and stunning user interfaces that make interacting with your product feel natural and perfect.",
    color: "orange"
  },
  {
    id: "05",
    title: "Analytics",
    icon: BarChart3,
    description: "Clear, actionable insights from your data to help you make smarter business decisions faster.",
    color: "rose"
  }
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-2 h-2 rounded-full bg-emerald-500" 
            />
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">
              Capabilities
            </span>
          </div>
          <PremiumHeading
            text="Building the next big thing."
            highlightWords={["big", "thing."]}
            className="text-4xl md:text-7xl font-black tracking-tight text-zinc-950 leading-[0.95]"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-200 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Service Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-${service.color}-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-7 h-7 text-${service.color}-600`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-950 transition-colors" />
                </div>
                
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Subtle Index */}
              <div className="absolute bottom-8 right-8 text-4xl font-black text-zinc-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {service.id}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-${service.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
          
          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative p-8 rounded-[2rem] bg-zinc-950 border border-zinc-900 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Launch Ready
              </h3>
              <p className="text-zinc-400 font-medium">
                We are ready to build your vision. Let's create something extraordinary together.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ x: 5 }}
              className="relative z-10 mt-12 flex items-center gap-3 text-white font-bold tracking-tight"
            >
              Start Project <ArrowUpRight className="w-5 h-5" />
            </motion.button>

            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[80px]" />
          </motion.div>
        </div>

        {/* Bottom Status */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Systems Active</span>
           </div>
           <span className="text-[10px] uppercase tracking-[0.2em] font-medium">© 2026 Easyio Technologies</span>
        </div>

      </div>
    </section>
  );
}
