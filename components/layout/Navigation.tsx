'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { navigationLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { m, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
      "fixed top-0 left-0 right-0 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto z-[100] w-full lg:w-[calc(100%-3rem)] lg:max-w-7xl transition-all duration-300 lg:rounded-[2rem]",
      scrolled 
        ? "bg-white/90 backdrop-blur-xl border-b lg:border border-zinc-200/50 shadow-sm lg:shadow-2xl py-3.5 lg:py-2.5" 
        : "bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b lg:border-b-0 border-zinc-100/80 py-4 lg:py-6"
    )}>
      <div className="px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Systems */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md transition-all group-hover:scale-105 border border-zinc-200/50">
            <Image
              src="/easyio_logo.png"
              alt="Easyio Technologies"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "font-bold tracking-tighter text-zinc-950 uppercase transition-all duration-500",
              scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}>
              EASYIO
            </span>
            <span 
              className={cn(
                "font-cursive text-zinc-400 opacity-80 transition-all duration-500",
                scrolled ? "text-base -mt-1" : "text-lg -mt-1.5"
              )} 
              style={{ fontFamily: 'Sacramento, cursive' }}
            >
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Capsule Style */}
        <div className="hidden lg:flex items-center bg-zinc-100/50 p-1.5 rounded-full border border-zinc-200/50 backdrop-blur-md">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-6 py-2 text-sm font-bold transition-all rounded-full uppercase tracking-tight",
                pathname === link.href
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-950"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions Infrastructure */}
        <div className="flex items-center gap-3">
          <Link
            href="tel:+919596418226"
            className="hidden sm:flex items-center justify-center h-10 px-3 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-50 transition-all gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            
          </Link>
          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center h-10 px-6 bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-950/10 gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors relative z-[102] active:scale-95 bg-white/50 backdrop-blur-sm border border-zinc-200/50"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

    </nav>

      {/* Mobile Menu - Premium Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[101] lg:hidden"
            />
            
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white text-zinc-950 z-[102] lg:hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
                <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm border border-zinc-200/50">
                    <Image
                      src="/easyio_logo.png"
                      alt="Easyio Technologies"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold tracking-tight text-zinc-950 uppercase text-base">
                      EASYIO
                    </span>
                    <span className="font-cursive text-zinc-400 opacity-90 text-sm -mt-0.5" style={{ fontFamily: 'Sacramento, cursive' }}>
                      Technologies
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="flex flex-col gap-1.5">
                  {navigationLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <m.div
                        key={link.href}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 + 0.08 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between w-full py-3.5 px-4 rounded-xl transition-all font-semibold text-base",
                            isActive
                              ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/10"
                              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{link.label}</span>
                          <ChevronRight className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "text-white/60" : "text-zinc-300"
                          )} />
                        </Link>
                      </m.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Actions & Info */}
              <div className="p-5 border-t border-zinc-100 bg-zinc-50/50 space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-bold transition-all active:scale-95 shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call Us</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-bold transition-all active:scale-95 shadow-md shadow-zinc-950/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Contact</span>
                  </Link>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Sopore, Kashmir</span>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
