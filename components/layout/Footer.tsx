'use client';

import Link from "next/link";
import { Mail, ShieldCheck, Globe } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";
import { m } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-24 relative overflow-hidden border-t border-zinc-100">
      
      {/* Interactive Mountain Background SVG */}
      <m.div 
        className="absolute bottom-0 left-0 w-full pointer-events-none opacity-20"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-zinc-300">
          <path fill="currentColor" fillOpacity="0.5" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="currentColor" fillOpacity="0.3" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,112C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path fill="currentColor" fillOpacity="0.8" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          {/* Subtle pine trees */}
          <path fill="currentColor" d="M150,300 L160,270 L170,300 Z M250,310 L265,260 L280,310 Z M1200,310 L1215,260 L1230,310 Z M1050,320 L1060,280 L1070,320 Z"></path>
        </svg>
      </m.div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          
          {/* Brand Identity / Logo System */}
          <m.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left"
          >
            <Link href="/" className="mb-10 group block">
              <div className="relative">
                <span className="block text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 uppercase leading-none group-hover:scale-105 transition-transform origin-left">
                  EASYIO
                </span>
                <span className="block text-3xl md:text-4xl font-cursive text-zinc-400 -mt-2 ml-1 low-caps opacity-80 group-hover:text-[#FEF9C3] transition-colors" style={{ fontFamily: 'Sacramento, cursive' }}>
                  Technologies
                </span>
              </div>
            </Link>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-400 italic uppercase tracking-tight leading-tight mb-12 max-w-sm">
               Architecting high-performance <span className="text-zinc-950">business systems</span> with absolute precision.
            </h2>

            <div className="flex flex-col gap-6 w-full">
              <a href={`mailto:${siteConfig.email.contact}`} className="flex items-center gap-4 text-zinc-500 hover:text-emerald-600 transition-colors group">
                 <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all shadow-sm">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600" />
                 </div>
                 <span className="text-xl font-bold tracking-tight uppercase italic">{siteConfig.email.contact}</span>
              </a>
            </div>
          </m.div>

          {/* Navigation Systems */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([key, section], index) => (
                <m.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h4 className="text-[11px] font-bold text-zinc-950 uppercase tracking-[0.3em] mb-10">
                    {section.title}
                  </h4>
                  <ul className="space-y-5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-base font-bold text-zinc-400 hover:text-zinc-950 transition-all flex items-center gap-3 group relative w-fit">
                          <span className="absolute -inset-x-4 -inset-y-1 bg-[#FEF9C3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-10 rounded-lg" />
                          <span className="uppercase tracking-tight">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
          </div>
        </div>

        {/* Technical Footer Bar */}
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-10 bg-white/50 backdrop-blur-md rounded-3xl px-8 py-6"
        >
            <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-400">
                <div className="flex items-center gap-2 group hover:text-zinc-950 transition-colors">
                   <ShieldCheck className="w-4 h-4 text-zinc-950 group-hover:text-emerald-500 transition-colors" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Secure Protocol</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-zinc-950 transition-colors">
                   <Globe className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Global Infrastructure</span>
                </div>
            </div>

            <div className="flex flex-col md:items-end gap-3 text-center md:text-right">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">© 2026 Easyio Technologies // Sovereign Systems</span>
               <div className="flex items-center justify-center md:justify-end gap-8">
                  {[
                    { name: "Twitter", href: siteConfig.links.twitter },
                    { name: "LinkedIn", href: siteConfig.links.linkedin },
                    { name: "Github", href: siteConfig.links.github },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-zinc-400 hover:text-zinc-950 transition-colors tracking-widest uppercase hover:bg-zinc-100 px-3 py-1 rounded-md"
                    >
                      {social.name}
                    </a>
                  ))}
               </div>
            </div>
        </m.div>
      </div>
    </footer>
  );
}
