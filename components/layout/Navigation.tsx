'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldScroll = currentScrollY > 60;

      // Only update state if scroll threshold changed
      if ((lastScrollY <= 60 && currentScrollY > 60) || (lastScrollY > 60 && currentScrollY <= 60)) {
        setScrolled(shouldScroll);
      }
      lastScrollY = currentScrollY;
    };

    // Throttle scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-[100] w-full">
      {/* Top Navigation Bar */}
      <motion.div
        className={cn(
          "w-full flex items-center justify-between px-6 md:px-12 h-20 border-b fixed-nav",
          scrolled
            ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-3xl shadow-sm border-zinc-300/50 dark:border-white/5"
            : "bg-transparent backdrop-blur-sm border-transparent"
        )}
        style={{
          willChange: "background-color, border-color, box-shadow",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo - Always Prominent */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-zinc-950 to-zinc-800 dark:from-white dark:to-zinc-200 flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Terminal className="w-4.5 h-4.5 text-white dark:text-zinc-950" />
            </motion.div>
            <motion.span
              className="text-lg font-black tracking-tight text-zinc-950 dark:text-white hidden sm:inline"
              whileHover={{ letterSpacing: "0.05em" }}
              transition={{ duration: 0.3 }}
            >
              EASYIO
            </motion.span>
          </Link>
        </motion.div>

        {/* Center Navigation - Smart Visibility */}
        <motion.div
          className="hidden lg:flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navigationLinks.map((link, idx) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              delay={idx * 0.05}
              isActive={pathname === link.href || pathname.startsWith(link.href + '/')}
            />
          ))}
        </motion.div>

        {/* Right Section - CTA Focus */}
        <motion.div
          className="flex items-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.span
            className="hidden md:inline text-[10px] font-bold text-zinc-500 dark:text-zinc-500 tracking-[0.3em] uppercase"
            animate={{ opacity: scrolled ? 0 : [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: scrolled ? undefined : Infinity }}
            style={{ pointerEvents: scrolled ? "none" : "auto" }}
          >
            v2.0
          </motion.span>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center min-w-[40px] min-h-[40px] border border-transparent active:scale-95 z-50"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme ? (
              resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-900" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-2 font-semibold uppercase tracking-[0.15em] h-10 px-5 rounded-lg text-[9px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                willChange: "transform",
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 dark:from-white dark:via-zinc-100 dark:to-white rounded-lg"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <span className="relative text-white dark:text-zinc-950 flex items-center gap-1.5">
                Start Project
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.span>
              </span>
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X className="w-5 h-5 text-zinc-950 dark:text-white" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Menu className="w-5 h-5 text-zinc-950 dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Mobile Menu - Elevated Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl border-b border-zinc-200/50 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navigationLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="block text-sm font-black uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-3 border-b border-zinc-200/30 dark:border-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationLinks.length * 0.08 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full p-4 rounded-lg bg-gradient-to-r from-zinc-950 to-zinc-900 dark:from-white dark:to-zinc-100 text-white dark:text-zinc-950 text-center font-black uppercase tracking-widest text-sm shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({
  href,
  label,
  delay,
  isActive = false,
}: {
  href: string;
  label: string;
  delay: number;
  isActive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div
        className="relative px-5 py-2 rounded-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      >
        {/* Snap animated background pill */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-zinc-950 dark:bg-white/10 rounded-full border border-zinc-950 dark:border-white/20"
            layoutId="active-nav-pill"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}

        {/* Hover background */}
        {!isActive && hovered && (
          <motion.div
            className="absolute inset-0 bg-zinc-950/40 dark:bg-white/5 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}

        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.13em] block whitespace-nowrap relative transition-colors duration-200",
            isActive
              ? "text-white dark:text-white font-bold"
              : hovered
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400"
          )}
        >
          {label}
        </span>
      </motion.div>
    </Link>
  );
}



