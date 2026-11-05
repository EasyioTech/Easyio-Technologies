'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-white px-5 sm:px-6 pt-20 pb-14 relative overflow-hidden border-t border-zinc-200/80">
      {/* Subtle Mountain Silhouette */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-15">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-zinc-300" aria-hidden="true">
          <path fill="currentColor" fillOpacity="0.5" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="currentColor" fillOpacity="0.8" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-zinc-200/70">
          {/* Brand Identity & Direct Contact */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="mb-6 group inline-block">
              <span className="block text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-none">
                Easyio
              </span>
              <span
                className="block text-3xl md:text-4xl font-cursive text-zinc-600 -mt-1.5 ml-0.5"
                style={{ fontFamily: 'Sacramento, cursive' }}
              >
                Technologies
              </span>
            </Link>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8 max-w-sm">
              Architecting high-performance enterprise software, custom ERPs, and cloud applications with precision—from Kashmir for businesses worldwide.
            </p>

            <div className="space-y-3.5 w-full text-sm">
              <a
                href={`mailto:${siteConfig.email.contact}`}
                className="flex items-center gap-3 text-zinc-700 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-600 group-hover:text-emerald-700" />
                </div>
                <span className="font-semibold">{siteConfig.email.contact}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 text-zinc-700 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors">
                  <Phone className="w-4 h-4 text-zinc-600 group-hover:text-emerald-700" />
                </div>
                <span className="font-semibold">{siteConfig.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-zinc-600">
                <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                </div>
                <span className="text-xs sm:text-sm leading-snug pt-1">
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-emerald-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xs text-zinc-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% IP Ownership &amp; NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Sopore &bull; Srinagar &bull; Global Delivery</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-5">
              {[
                { name: "Twitter", href: siteConfig.links.twitter },
                { name: "LinkedIn", href: siteConfig.links.linkedin },
                { name: "GitHub", href: siteConfig.links.github },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <span className="text-xs text-zinc-500">
              &copy; {siteConfig.year} Easyio Technologies. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
