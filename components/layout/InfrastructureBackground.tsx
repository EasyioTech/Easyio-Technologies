'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function InfrastructureBackground() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  
  const { scrollYProgress } = useScroll();

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background transition-colors duration-700">
      {/* 1. Base Noise Texture (High-End Film Grain) */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-[100]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Global Scanline Effect */}
      <motion.div 
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 h-[10vh] bg-gradient-to-b from-transparent via-zinc-500/[0.03] dark:via-white/[0.01] to-transparent z-10 pointer-events-none"
      />

      {/* 3. Interactive Cursor Spotlight (Automatic Theme Sync via CSS Variable) */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            (pos) => `radial-gradient(800px circle at ${pos[0]}px ${pos[1]}px, var(--infra-glow), transparent 80%)`
          ),
        }}
      />

      {/* 4. Infrastructure Layers - Parallax Architecture */}
      
      {/* Layer 1: Fine Precision Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--infra-grid)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--infra-grid)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Layer 2: Structural Braces (Mid-depth parallax) */}
      <motion.div
        style={{ 
          y: y1,
          backgroundImage: `linear-gradient(to right, hsl(var(--infra-grid)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--infra-grid)) 1px, transparent 1px)`,
          backgroundSize: '200px 200px'
        }}
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
      />

      {/* Layer 3: Industrial Framework (Deep parallax) */}
      <motion.div
        style={{ 
          y: y2,
          backgroundImage: `linear-gradient(to right, hsl(var(--infra-grid)) 2px, transparent 2px), linear-gradient(to bottom, hsl(var(--infra-grid)) 2px, transparent 2px)`,
          backgroundSize: '800px 800px'
        }}
        className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]"
      />

      {/* Dynamic Elements (Only rendered on client to prevent hydration mismatch) */}
      {mounted && (
        <>
          {/* 5. Floating Data Nodes (Schematic Particles) */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: 0,
                }}
                animate={{ 
                  y: [null, (Math.random() * 10 - 5) + "%"],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-zinc-200 dark:bg-white rounded-full blur-[1px]"
              />
            ))}
          </div>

          {/* 6. Vertical "Information Flux" Beams */}
          <div className="absolute inset-0">
            {[15, 30, 45, 60, 75, 90].map((left, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0, top: "0%" }}
                animate={{ 
                  height: ["0%", "40%", "0%"],
                  opacity: [0, 0.1, 0],
                  top: ["0%", "100%", "100%"]
                }}
                transition={{ 
                  duration: Math.random() * 4 + 4, 
                  repeat: Infinity, 
                  delay: Math.random() * 10,
                  ease: "linear"
                }}
                className="absolute w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--infra-beam))] to-transparent"
                style={{ left: `${left}%` }}
              />
            ))}
          </div>
        </>
      )}

      {/* 7. Horizon Atmosphere (Fog) - Synced via CSS Variable */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-all duration-700" 
        style={{ background: 'var(--infra-fog)' }}
      />
      
      {/* 8. Vignette for Focus - Only active in dark mode explicitly */}
      <div className="absolute inset-0 shadow-inner-vignette z-30 pointer-events-none transition-opacity duration-700" />
    </div>
  );
}
