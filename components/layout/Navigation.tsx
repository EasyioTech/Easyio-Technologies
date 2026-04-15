'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, MoveRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-[100] w-full flex justify-center transition-all duration-700",
      scrolled ? "pt-4 px-4" : "pt-0 px-0"
    )}>
      <motion.div 
        className={cn(
          "w-full flex items-center justify-between transition-all duration-700",
          scrolled 
            ? "max-w-5xl h-14 px-4 md:px-8 rounded-full bg-white/80 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-3xl shadow-2xl shadow-zinc-200/5 dark:shadow-none" 
            : "max-w-7xl h-24 px-6 md:px-12 rounded-none bg-transparent border-b border-zinc-100 dark:border-zinc-900 backdrop-blur-sm"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center transition-all group-hover:scale-110 active:scale-95">
              <Terminal className="w-4 h-4 text-white dark:text-zinc-950" />
          </div>
          <span className="text-xl font-black tracking-tighter text-zinc-950 dark:text-white">
            EASYIO
          </span>
        </Link>

        {/* Centered Navigation Links - Perfectly Balanced */}
        <div className={cn(
          "hidden md:flex flex-1 items-center justify-center transition-all duration-700",
          scrolled ? "mx-0" : "mx-10"
        )}>
          {scrolled ? (
            <div className="flex items-center gap-1">
              {navigationLinks.map((link) => (
                <DockItem key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-10">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-all hover:translate-y-[-1px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right Section / Primary CTA */}
        <div className="flex items-center gap-6 shrink-0">
          {!scrolled && (
            <div className="hidden xl:flex items-center gap-6 mr-6 opacity-30">
               <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 tracking-[0.4em] uppercase">SYS_v2.0.42</span>
            </div>
          )}
          
          <Link 
            href="/contact" 
            className={cn(
              "flex items-center gap-2 transition-all group",
              scrolled 
                ? "h-10 px-6 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[10px] font-black uppercase tracking-widest shadow-lg"
                : "h-12 px-8 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:translate-y-[-2px]"
            )}
          >
            <span>Initialize</span>
            <MoveRight className={cn(
              "transition-transform",
              scrolled ? "w-3 h-3" : "w-4 h-4 group-hover:translate-x-1"
            )} />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-zinc-950 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-950 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Refined Island */}
        <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                className="md:hidden absolute top-20 left-4 right-4 bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-3xl z-[101]"
              >
                <div className="p-8 flex flex-col gap-6">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xl font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link 
                      href="/contact"
                      className="mt-2 p-6 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-center font-black uppercase tracking-widest shadow-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      Start Project
                    </Link>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}

function DockItem({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={cn(
          "relative h-10 md:h-11 px-4 md:px-6 flex items-center justify-center rounded-full transition-colors",
          hovered ? "bg-zinc-100 dark:bg-zinc-900" : "bg-transparent"
        )}
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className={cn(
          "text-[10px] md:text-xs font-black uppercase tracking-[0.1em] transition-all",
          hovered 
            ? "text-zinc-950 dark:text-white tracking-[0.15em]" 
            : "text-zinc-500 dark:text-zinc-400"
        )}>
          {label}
        </span>
        
        {/* Balanced Indicator */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              layoutId="nav-dot"
              className="absolute bottom-1.5 w-1 h-1 bg-zinc-950 dark:bg-white rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}



