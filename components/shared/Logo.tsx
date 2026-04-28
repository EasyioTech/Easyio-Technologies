'use client';

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  scrolled?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className, iconClassName, scrolled, iconOnly }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className={cn(
        "w-10 h-10 bg-zinc-950 text-white flex items-center justify-center rounded-xl shadow-lg transition-all group-hover:bg-zinc-900 group-hover:scale-105",
        iconClassName
      )}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <defs>
            <linearGradient id="logo-green" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="logo-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="logo-deep-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          <g transform="rotate(45 50 50)">
            {/* Left Link Segment (Green) */}
            <path
              d="M50 32 H28 V68 H50"
              stroke="url(#logo-green)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Link Segment (Blue) */}
            <path
              d="M50 68 H72 V32 H50"
              stroke="url(#logo-blue)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      {!iconOnly && (
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
      )}
    </div>
  );
}
