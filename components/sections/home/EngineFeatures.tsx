'use client';

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/Animations";
import { motion } from "framer-motion";

const capabilities = [
  {
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    title: "Performance Scaling",
    description: "Fast, reliable systems built to handle your growth. We design infrastructure that remains snappy and efficient no matter how large you scale.",
    align: "left"
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    title: "Secure Foundation",
    description: "Security isn't an afterthought—it's built into every layer. We protect your data with modern standards that keep your business safe and compliant.",
    align: "right"
  },
  {
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80&w=1000",
    title: "Reliable Data",
    description: "Your information is your most valuable asset. We ensure it's always accurate, synced in real-time, and available whenever you need it.",
    align: "left"
  }
];

export default function EngineFeatures() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="features">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-6 font-serif italic">
               Engineering for <span className="font-sans italic-none">Human Growth</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              We build tools and infrastructure that work for people, 
              focusing on clarity, reliability, and long-term success.
            </p>
          </FadeIn>
        </div>

        {/* Simplified Layout with reduced spacing */}
        <div className="space-y-24 md:space-y-36">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                item.align === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Element */}
              <div className="flex-1 w-full">
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   viewport={{ once: true }}
                   className="relative group"
                >
                  <div className="aspect-[1.4/1] rounded-[2rem] overflow-hidden border border-zinc-100 shadow-xl bg-zinc-50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Text Element */}
              <div className={`flex-1 text-center md:text-left ${item.align === 'right' ? 'md:text-right md:items-end' : 'md:items-start'} flex flex-col`}>
                <FadeIn delay={0.2}>
                  <div className="inline-block px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">
                    Core Capability
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className={`text-zinc-500 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0 ${item.align === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {item.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group">
                    Learn more 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
