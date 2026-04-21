'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Hexagon, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
      "fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-7xl transition-all duration-500 rounded-[2rem]",
      scrolled 
        ? "bg-white/80 backdrop-blur-xl border border-zinc-200/50 shadow-2xl shadow-zinc-200/50 py-2.5" 
        : "bg-transparent py-6"
    )}>
      <div className="px-8 flex items-center justify-between">
        {/* Logo Systems */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center rounded-xl shadow-lg transition-all group-hover:bg-zinc-900 group-hover:scale-105">
            <Hexagon className="w-6 h-6 fill-current" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[101] lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[90%] sm:w-[400px] bg-zinc-950 text-white z-[102] lg:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 pt-8">
                <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 bg-white text-zinc-950 flex items-center justify-center rounded-xl shadow-sm">
                    <Hexagon className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold tracking-tighter text-white uppercase text-lg">
                      EASYIO
                    </span>
                    <span className="font-cursive text-zinc-400 opacity-80 text-base -mt-1" style={{ fontFamily: 'Sacramento, cursive' }}>
                      Technologies
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex flex-col h-full overflow-y-auto px-6 pb-10 pt-4">
                <div className="flex flex-col gap-2 mb-10">
                  {navigationLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between w-full py-4 px-5 rounded-2xl transition-all duration-300 group",
                          pathname === link.href 
                            ? "bg-white/10 text-white" 
                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-xl font-medium tracking-tight">
                          {link.label}
                        </span>
                        {pathname !== link.href && (
                          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="tel:+919596418226"
                        className="flex flex-col items-center justify-center h-28 w-full border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl gap-3 font-medium active:scale-95 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <Phone className="w-5 h-5 text-emerald-400" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400">Support</span>
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Link
                        href="/contact"
                        className="flex flex-col items-center justify-center h-28 w-full bg-white text-zinc-950 rounded-2xl gap-3 font-bold active:scale-95 hover:bg-zinc-200 transition-all shadow-xl"
                        onClick={() => setIsOpen(false)}
                      >
                        <MessageSquare className="w-5 h-5 text-zinc-950" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-900">Contact</span>
                      </Link>
                    </motion.div>
                  </div>

                  <div className="flex flex-col items-center gap-4 py-8 border-t border-white/10">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                         Sovereign Engineering
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
