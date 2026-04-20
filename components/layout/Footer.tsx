'use client';

import Link from "next/link";
import { Mail, MapPin, Terminal, Activity, ShieldCheck, Globe, Zap, ArrowUpRight, Lock, Shield } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-transparent px-6 py-24 relative overflow-hidden border-t border-zinc-100/50">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          
          {/* Brand Identity / Logo System */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left">
            <Link href="/" className="mb-10 group block">
              <div className="relative">
                <span className="block text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 uppercase leading-none">
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
              <a href={`mailto:${siteConfig.email.contact}`} className="flex items-center gap-4 text-zinc-500 hover:text-zinc-950 transition-colors group">
                 <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-zinc-200 group-hover:bg-zinc-100/50 transition-all">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-950" />
                 </div>
                 <span className="text-xl font-bold tracking-tight uppercase italic">{siteConfig.email.contact}</span>
              </a>
            </div>
          </div>

          {/* Navigation Systems */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
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
                </div>
              ))}
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="pt-12 border-t border-zinc-100/50 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-400">
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4 text-zinc-950" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Secure Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                   <Globe className="w-4 h-4 text-emerald-500" />
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
        </div>
      </div>
    </footer>
  );
}
