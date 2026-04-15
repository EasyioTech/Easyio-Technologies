'use client';

import Link from "next/link";
import { Mail, MapPin, Terminal, Cpu } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-40 pb-20 px-6 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Brand Identity */}
          <div className="md:col-span-4 flex flex-col items-start gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-zinc-950 dark:bg-white flex items-center justify-center transition-all duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Terminal className="w-5 h-5 text-white dark:text-black" />
              </div>
              <span className="font-black text-3xl uppercase tracking-tighter text-zinc-950 dark:text-white transition-colors">
                {siteConfig.shortName}
              </span>
            </Link>

            <p className="text-xl text-zinc-500 dark:text-zinc-500 font-medium italic transition-colors leading-relaxed max-w-sm">
                Architecting high-fidelity business systems with absolute precision. We don't build software; we engineer destiny.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700">
                <Mail className="w-3 h-3" />
                <a href={`mailto:${siteConfig.email.contact}`} className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  {siteConfig.email.contact}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700">
                <MapPin className="w-3 h-3" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-[10px] font-black text-zinc-950 dark:text-white uppercase tracking-[0.4em] mb-12">
                    {section.title}
                  </h4>
                  <ul className="space-y-6">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:italic transition-all inline-block hover:translate-x-1">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Tactical Base */}
        <div className="mt-40 pt-20 border-t border-zinc-100 dark:border-zinc-900 transition-colors flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700 italic">
                <span>&copy; {siteConfig.year} Easyio Systems Portfolio</span>
                <span className="w-1 h-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <span>Active Build: v.2.0.4</span>
            </div>

            <div className="flex items-center gap-8">
                {[
                { name: "Twitter", href: siteConfig.links.twitter },
                { name: "LinkedIn", href: siteConfig.links.linkedin },
                { name: "Github", href: siteConfig.links.instagram },
                ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-all underline decoration-transparent group-hover:decoration-current">
                    {social.name}
                  </span>
                </a>
                ))}
            </div>
        </div>

        {/* Big Background Visual */}
        <div className="mt-20 flex justify-center opacity-[0.03] dark:opacity-[0.01] pointer-events-none scale-150 transition-all select-none">
            <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none italic select-none">EASYIO.</h2>
        </div>
      </div>
    </footer>
  );
}
