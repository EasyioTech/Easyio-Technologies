'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { navigationLinks, siteConfig } from "@/config/site";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 z-[100] w-full px-6 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-5xl mx-auto rounded-[2rem] border transition-all duration-700 backdrop-blur-3xl ${
        scrolled 
        ? 'bg-white/80 dark:bg-zinc-950/80 border-zinc-200 dark:border-zinc-800 shadow-xl' 
        : 'bg-white/40 dark:bg-zinc-950/20 border-white/20 dark:border-zinc-900/50 shadow-none'
      }`}>
        <div className="px-8 flex justify-between items-center h-16">
          {/* Logo Cluster */}
          <Link href="/" className="flex items-center gap-4 group">
            

            <span className="text-2xl font-black tracking-tighter text-zinc-950 dark:text-white transition-colors">
              EASYIO<span className="text-zinc-500 dark:text-zinc-400 italic">.TECH</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-all hover:tracking-[0.4em]"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Action Group */}
            <div className="flex items-center gap-4 pl-6 border-l border-zinc-100 dark:border-zinc-900 transition-colors">
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white"
                >
                    {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <Link href="/contact" className="px-5 py-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-wider hover:opacity-80 transition-opacity">
                    Initialize
                </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-zinc-950 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-950 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-zinc-100 dark:border-zinc-900 overflow-hidden"
              >
                <div className="p-8 flex flex-col gap-6">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <button 
                        onClick={toggleTheme}
                        className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500"
                    >
                        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                          <>
                            <Sun className="w-4 h-4" />
                            <span>Light Mode</span>
                          </>
                        ) : (
                          <>
                            <Moon className="w-4 h-4" />
                            <span>Dark Mode</span>
                          </>
                        )}
                    </button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
