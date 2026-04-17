'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TextReveal } from "@/components/shared/Animations";
import Link from "next/link";
import { 
  ArrowUpRight, Terminal, Globe, Shield, Cpu, Activity, Box, 
  BookOpen, ShoppingCart, Building2, Landmark, Briefcase, 
  Layout, Pyramid, Truck, Users, Stethoscope, ChevronUp, ChevronDown
} from "lucide-react";

const iconMap: Record<string, any> = {
  Box, BookOpen, ShoppingCart, Building2, Landmark, Briefcase, Layout, Pyramid, Truck, Users, Stethoscope, Cpu
};

export default function Showcase({ initialProjects }: { initialProjects: any[] }) {
  const projectsData = initialProjects.map(p => ({
    ...p,
    short: p.metadata?.short || p.title,
    stats: p.metadata?.stats || {},
    icon: iconMap[p.metadata?.icon] || Box,
    tag: p.tags?.[0] || "Enterprise"
  }));

  const [active, setActive] = useState(0);
  const projects = projectsData;
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  const handleSidebarScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setShowTopArrow(scrollTop > 20);
    setShowBottomArrow(scrollTop + clientHeight < scrollHeight - 20);
  };

  return (
    <section className="relative py-16 md:py-40 overflow-hidden" id="builds">
      {/* Universal Grid Overlay */}
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dotPatternSmall" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-zinc-950 dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternSmall)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Scrollable Archive Registry */}
          <div className="lg:w-1/4 flex flex-col -ml-0 lg:-ml-6 relative">
            <div className="inline-flex items-center gap-4 mb-10 px-6">
               <span className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400 dark:text-zinc-600">PROJECT_ARCHIVE</span>
            </div>

            <AnimatePresence>
              {showTopArrow && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute -top-4 left-6 z-20 text-zinc-400"
                >
                  <ChevronUp className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>

            <div 
              className="h-[400px] lg:h-[650px] overflow-y-auto pr-4 space-y-2 scrollbar-hide mask-fade-bottom"
              onScroll={handleSidebarScroll}
            >
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left flex items-center justify-between p-6 rounded-l-none rounded-r-2xl transition-all duration-500 border-l-4 ${
                    active === i
                    ? "bg-zinc-950 dark:bg-zinc-800 border-zinc-950 dark:border-zinc-200 translate-x-3 shadow-xl"
                    : "bg-transparent border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-black font-mono transition-colors ${
                      active === i ? "text-white/40" : "text-zinc-400"
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-black italic uppercase transition-all tracking-tighter ${
                      active === i ? "text-white" : "text-zinc-400 dark:text-zinc-600"
                    }`}>
                      {p.short}
                    </h3>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {showBottomArrow && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute -bottom-4 left-6 z-20 text-zinc-400"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-12 opacity-20 px-6">
               <div className="flex gap-4 mb-4">
                  <Activity className="w-4 h-4" />
                  <span className="text-[8px] font-mono tracking-widest uppercase font-bold italic">REGISTRY_STREAM_..._CONNECTED</span>
               </div>
            </div>
          </div>

          {/* Right Side: Immersive HUD Window */}
          <div className="lg:flex-1 relative min-h-[500px] md:min-h-[650px] lg:h-[800px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex flex-col justify-center landscape:relative"
              >
                {/* Background Watermark - Responsive Scale */}
                {projects.length > 0 && projects[active] && (
                  <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.04, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute -top-4 md:-top-12 -right-10 lg:-right-40 pointer-events-none select-none whitespace-nowrap z-0 overflow-hidden"
                  >
                    <span className="text-[12vw] lg:text-[25vw] font-black italic uppercase leading-none tracking-tighter block">
                      {projects[active].short}
                    </span>
                  </motion.div>
                )}

                {/* Staggered HUD Content */}
                {projects.length > 0 && projects[active] ? (
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }
                    }}
                    className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 lg:p-20 overflow-hidden group/hud border border-zinc-100 dark:border-zinc-900 rounded-2xl md:rounded-3xl lg:rounded-[3rem] bg-white dark:bg-zinc-950/50 backdrop-blur-sm shadow-2xl dark:shadow-none"
                  >
                    {/* Floating Project Image */}
                    {projects[active].image && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute top-12 right-12 w-1/3 aspect-video hidden lg:block rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl z-0"
                      >
                        <img 
                          src={projects[active].image} 
                          alt={projects[active].title}
                          className="w-full h-full object-cover grayscale group-hover/hud:grayscale-0 transition-all duration-700"
                        />
                      </motion.div>
                    )}
                    {/* Corner Ornaments */}
                    <div className="absolute top-0 left-0 w-8 lg:w-12 h-8 lg:h-12 border-t-2 border-l-2 border-zinc-100 dark:border-zinc-900 rounded-tl-2xl lg:rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-8 lg:w-12 h-8 lg:h-12 border-b-2 border-r-2 border-zinc-100 dark:border-zinc-900 rounded-br-2xl lg:rounded-br-3xl" />

                    {/* Metadata Bar */}
                    <div className="absolute top-6 lg:top-12 left-6 lg:left-12 flex items-center gap-4 lg:gap-6">
                        <div className="flex items-center gap-2 lg:gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white animate-pulse" />
                           <span className="text-[8px] lg:text-[9px] font-black italic uppercase tracking-[0.5em] text-zinc-950 dark:text-white">{projects[active].id}</span>
                        </div>
                        <div className="h-[1px] w-8 lg:w-12 bg-zinc-100 dark:bg-zinc-900" />
                        <span className="text-[8px] lg:text-[9px] font-black italic uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-600">VERIFIED_SECURE</span>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mt-20 lg:mt-0">
                      <div className="lg:col-span-8">
                         <div className="flex items-center gap-4 lg:gap-8 mb-6 lg:mb-10">
                            <div className="w-12 lg:w-16 h-12 lg:h-16 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-100 dark:border-zinc-800 rounded-xl lg:rounded-2xl flex items-center justify-center text-zinc-950 dark:text-white">
                              {(() => {
                                const Icon = projects[active].icon;
                                return <Icon className="w-6 lg:w-8 h-6 lg:h-8" />;
                              })()}
                            </div>
                            <h4 className="text-xl lg:text-3xl font-black text-zinc-950 dark:text-white italic uppercase tracking-tighter leading-none">{projects[active].tag}</h4>
                         </div>

                         <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-[0.85] mb-4 md:mb-10 skew-x-[-4deg] break-words pr-4 lg:pr-12 max-w-full">
                           <TextReveal>{projects[active].title}</TextReveal>
                         </h2>
                         
                         <p className="text-base lg:text-lg text-zinc-400 dark:text-zinc-500 font-medium italic leading-relaxed lg:leading-tight max-w-2xl tracking-tight mb-8 lg:mb-12">
                           {projects[active].description}
                         </p>

                         {/* Action Button */}
                         <div className="flex flex-wrap gap-4">
                            <Link 
                              href={`/case-studies/${projects[active].slug}`}
                              className="group/btn relative px-6 lg:px-8 py-4 lg:py-5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black italic uppercase tracking-[0.3em] text-[10px] lg:text-xs flex items-center gap-6 hover:scale-105 transition-all shadow-2xl"
                            >
                               <span>VIEW CASE STUDY</span>
                               <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Link>
                            <Link 
                              href="/contact"
                              className="px-6 lg:px-8 py-4 lg:py-5 border border-zinc-200 dark:border-zinc-800 text-zinc-400 font-black italic uppercase tracking-[0.3em] text-[10px] lg:text-xs hover:border-zinc-950 dark:hover:border-white hover:text-zinc-950 dark:hover:text-white transition-all"
                            >
                               REQUEST QUOTE
                            </Link>
                         </div>
                      </div>

                      <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-12 border-t lg:border-t-0 lg:border-l border-zinc-100 dark:border-zinc-800 pt-8 lg:pt-0 lg:pl-12">
                         {projects[active].stats && Object.entries(projects[active].stats).map(([label, value]) => (
                          <div key={label} className="group/stat">
                            <div className="text-[8px] lg:text-[10px] font-black italic uppercase tracking-[0.5em] text-zinc-300 dark:text-zinc-700 mb-1 lg:mb-2">{label}</div>
                            <div className="text-xl lg:text-5xl font-black text-zinc-950 dark:text-white tabular-nums tracking-tighter italic uppercase transition-transform group-hover/stat:translate-x-2">{value as string}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Operational Footer Bar */}
                    <div className="hidden lg:flex absolute bottom-8 lg:bottom-12 left-12 right-12 justify-between items-center opacity-20 border-t border-zinc-100 dark:border-zinc-900 pt-6">
                      <span className="text-[8px] font-mono tracking-widest uppercase italic font-bold">ARC_V2_PROTOCOL_INITIALIZED</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full border border-dashed border-zinc-800 rounded-[3rem]">
                    <div className="text-center space-y-4">
                      <Terminal className="w-12 h-12 text-zinc-800 mx-auto" />
                      <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Awaiting system registration...</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
