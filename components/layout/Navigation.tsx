'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ChevronRight, Calculator } from "lucide-react";
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

  // Close mobile menu on Escape key and lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto z-[100] w-full lg:w-[calc(100%-3rem)] lg:max-w-7xl transition-all duration-300 lg:rounded-full",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b lg:border border-zinc-200/80 shadow-sm lg:shadow-lg lg:shadow-zinc-950/5 py-3 lg:py-2.5"
            : "bg-white/85 lg:bg-white/70 backdrop-blur-md border-b lg:border border-zinc-200/50 py-3.5 lg:py-3"
        )}
      >
        <div className="px-5 sm:px-6 lg:px-6 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-xs transition-transform group-hover:scale-105 border border-zinc-200/60">
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
              <span className="font-bold tracking-tight text-zinc-950 text-lg md:text-xl">
                Easyio
              </span>
              <span
                className="font-cursive text-zinc-600 text-lg md:text-xl -mt-1"
                style={{ fontFamily: 'Sacramento, cursive' }}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Capsule */}
          <div className="hidden lg:flex items-center bg-zinc-100/80 p-1 rounded-full border border-zinc-200/60">
            {navigationLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-4 xl:px-5 py-1.5 text-xs font-semibold transition-all rounded-full tracking-tight",
                    active
                      ? "bg-zinc-950 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Primary Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden xl:flex items-center justify-center h-10 px-4 border border-zinc-200 bg-white text-zinc-800 text-xs font-semibold rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all gap-2"
              title="Call Easyio Engineering"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-zinc-700">{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="hidden sm:flex items-center justify-center h-10 px-5 bg-zinc-950 text-white text-xs font-semibold tracking-wide rounded-full hover:bg-emerald-600 transition-colors shadow-sm gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start a Project</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors relative z-[102] active:scale-95 bg-white border border-zinc-200/80"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-[101] lg:hidden"
              aria-hidden="true"
            />

            <m.div
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white text-zinc-950 z-[102] lg:hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
                <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-2xs border border-zinc-200/60">
                    <Image
                      src="/easyio_logo.png"
                      alt="Easyio Technologies"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold tracking-tight text-zinc-950 text-base">
                      Easyio
                    </span>
                    <span className="font-cursive text-zinc-600 text-base -mt-0.5" style={{ fontFamily: 'Sacramento, cursive' }}>
                      Technologies
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="flex flex-col gap-1.5">
                  {navigationLinks.map((link, i) => {
                    const isActive = isLinkActive(link.href);
                    return (
                      <m.div
                        key={link.href}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.05 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between w-full py-3 px-4 rounded-xl transition-all font-semibold text-sm",
                            isActive
                              ? "bg-zinc-950 text-white shadow-xs"
                              : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{link.label}</span>
                          <ChevronRight className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "text-white/70" : "text-zinc-400"
                          )} />
                        </Link>
                      </m.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Actions & Info */}
              <div className="p-5 border-t border-zinc-100 bg-zinc-50/70 space-y-3">
                <Link
                  href="/project-estimator"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-semibold transition-all shadow-2xs"
                  onClick={() => setIsOpen(false)}
                >
                  <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Calculate Project Cost (60s)</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-semibold transition-all active:scale-95 shadow-2xs"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call Us</span>
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Contact</span>
                  </Link>
                </div>

                <div className="pt-1 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sopore &amp; Srinagar, Kashmir</span>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
