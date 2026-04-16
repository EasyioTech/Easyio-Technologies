'use client';

import { Activity, Cpu, Terminal, Globe, Shield, Zap, Info, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroDashboard() {
  return (
    <div className="w-full h-full rounded-[1.8rem] md:rounded-[2.8rem] bg-zinc-50 dark:bg-zinc-900/10 border border-zinc-200/50 dark:border-white/5 relative overflow-hidden flex flex-col">
      {/* HUD Header Bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5 border-b border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:border-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:border-zinc-800" />
          </div>
          <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          <div className="hidden md:flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-950 dark:text-zinc-400">System_Active // Session: 0x4F2A</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-4 text-[8px] font-mono text-zinc-400">
             <span>CPU_LOAD: 12.4%</span>
             <span>MEM_USAGE: 2.1GB</span>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black text-[8px] font-black uppercase tracking-[0.2em] shadow-lg">
            Operational
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Technical Sidebar */}
        <div className="w-20 md:w-64 border-r border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/20 backdrop-blur-sm p-4 hidden md:flex flex-col gap-8">
          <div className="space-y-6">
             <div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest px-4">Navigation</div>
             <div className="space-y-1">
                {[
                  { icon: Activity, label: "Realtime_Feed", active: true },
                  { icon: Cpu, label: "Core_Architect", active: false },
                  { icon: Globe, label: "Edge_Network", active: false },
                  { icon: Shield, label: "Security_Prot", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${item.active ? 'bg-zinc-950 dark:bg-white text-white dark:text-black' : 'text-zinc-500 hover:bg-zinc-200/50 dark:hover:bg-white/5'}`}>
                    <item.icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="mt-auto p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5">
            <div className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-3">Live_Logs</div>
            <div className="space-y-2 font-mono text-[7px] text-zinc-500 dark:text-zinc-400">
               <div className="flex gap-2">
                 <span className="text-emerald-500">&gt;</span>
                 <span>INIT_CORE_SUCCESS</span>
               </div>
               <div className="flex gap-2">
                 <span className="text-emerald-500">&gt;</span>
                 <span>PULL_REMOTE_0x7</span>
               </div>
               <div className="flex gap-2">
                 <span className="text-zinc-400 animate-pulse">_</span>
               </div>
            </div>
          </div>
        </div>

        {/* Main Workspace Area */}
        <div className="flex-1 p-6 md:p-10 flex flex-col gap-10 overflow-y-auto scrollbar-hide">
           {/* Top Grid - Functional Cards */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 p-6 md:p-10 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-white/5 shadow-xl shadow-zinc-200/20 dark:shadow-none relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20">
                    <Activity className="w-16 h-16 text-zinc-200 dark:text-zinc-800" />
                 </div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6 md:mb-10">
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white dark:text-black" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-950 dark:text-white">Core_Analytics_Stream</span>
                        <span className="text-[8px] text-zinc-500 font-mono tracking-tighter uppercase">Source: INTERNAL_BUS_01</span>
                      </div>
                   </div>
 
                   <h4 className="text-2xl md:text-5xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter italic leading-[0.9] mb-8 md:mb-12">
                     Precision <br />
                     <span className="text-zinc-400 dark:text-zinc-800">Intelligence.</span>
                   </h4>
 
                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                      {[
                        { label: "LATENCY", value: "0.08", unit: "ms" },
                        { label: "UPTIME", value: "99.99", unit: "%" },
                        { label: "BW_UT", value: "1.2", unit: "TB/s" },
                        { label: "NODES", value: "862", unit: "unit" },
                      ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                          <span className="text-xl md:text-2xl font-black text-zinc-950 dark:text-white tabular-nums">
                            {stat.value}
                            <span className="text-[10px] ml-1 text-zinc-500">{stat.unit}</span>
                          </span>
                        </div>
                      ))}
                   </div>
                 </div>
              </div>

              <div className="lg:col-span-4 p-8 rounded-3xl bg-zinc-950 dark:bg-white md:bg-white dark:md:bg-zinc-900/40 border border-zinc-900/10 transition-colors flex flex-col justify-between group">
                 <div>
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Security_Status</span>
                       <Shield className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-4xl font-black text-white md:text-zinc-950 dark:text-white uppercase tracking-tighter mb-4">
                       Active <br />
                       Protocols.
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-1 w-full bg-zinc-800 dark:bg-zinc-800 md:bg-zinc-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-white md:bg-zinc-950 dark:bg-white rounded-full" 
                       />
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
                       <span>Threat Level: Null</span>
                       <span>Protection: 100%</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Content Area */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-12 p-8 rounded-3xl border border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/50 relative overflow-hidden group/viz h-64 md:h-80">
                 {/* Neural Visualizer Mockup */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="grid grid-cols-8 md:grid-cols-12 gap-1 md:gap-6 opacity-[0.03] dark:opacity-[0.08]">
                           {Array.from({ length: 48 }).map((_, i) => (
                             <div key={i} className="text-[6px] font-mono text-zinc-950 dark:text-white uppercase">
                                0x{Math.random().toString(16).substring(2, 6)}<br />
                                [STABLE_{i}]
                             </div>
                           ))}
                        </div>
                       
                       {/* Animated Topological Core */}
                       <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-zinc-200/20 dark:border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                       <div className="absolute w-40 h-40 md:w-56 md:h-56 border border-dashed border-zinc-200/30 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                       
                       <div className="absolute flex flex-col items-center">
                          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center shadow-2xl transition-transform duration-700 group-hover/viz:scale-110">
                             <Globe className="w-10 h-10 text-white dark:text-black animate-pulse" />
                          </div>
                          <div className="mt-8 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[9px] font-black tracking-[0.4em] text-zinc-950 dark:text-white uppercase">
                            Global_Node_Cluster:ACTIVE
                          </div>
                       </div>

                       {/* HUD Corner Accents */}
                       <div className="absolute top-8 left-8 border-l border-t border-zinc-400 dark:border-zinc-600 w-10 h-10 opacity-30" />
                       <div className="absolute top-8 right-8 border-r border-t border-zinc-400 dark:border-zinc-600 w-10 h-10 opacity-30" />
                       <div className="absolute bottom-8 left-8 border-l border-b border-zinc-400 dark:border-zinc-600 w-10 h-10 opacity-30" />
                       <div className="absolute bottom-8 right-8 border-r border-b border-zinc-400 dark:border-zinc-600 w-10 h-10 opacity-30" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
