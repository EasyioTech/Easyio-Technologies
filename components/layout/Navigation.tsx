'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Hexagon, Phone, MessageSquare } from "lucide-react";
import { navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";

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
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-950 ml-1"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-24 left-6 right-6 lg:hidden bg-white/90 backdrop-blur-xl rounded-[2rem] border border-zinc-200 shadow-2xl p-8 z-[101]"
        >
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-zinc-950 tracking-tight py-2 border-b border-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center h-14 w-full border border-zinc-200 text-zinc-950 text-lg font-bold rounded-2xl gap-3"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Call
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-14 w-full bg-zinc-950 text-white text-lg font-bold rounded-2xl gap-3"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
