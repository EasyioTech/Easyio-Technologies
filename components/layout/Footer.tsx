'use client';

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";
import { m } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-10">
              <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
                EASYIO<span className="text-emerald-500">.</span>
              </span>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Architecting high-performance <span className="font-serif italic text-emerald-400 font-medium">business systems.</span>
            </h2>
            <a href={`mailto:${siteConfig.email.contact}`} className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group text-lg">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all">
                  <Mail className="w-4 h-4 text-white" />
               </div>
               {siteConfig.email.contact}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-zinc-500 text-sm font-semibold">
               <span className="text-zinc-300">© 2026 Easyio Technologies</span>
               <span>//</span>
               <span>Built in Kashmir</span>
            </div>

            <div className="flex items-center gap-8">
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
                    className="text-xs font-bold text-zinc-500 hover:text-white transition-colors tracking-wider uppercase"
                  >
                    {social.name}
                  </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
