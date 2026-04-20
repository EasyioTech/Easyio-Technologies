'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll component integrates Lenis for high-performance 60fps scrolling.
 * It's optimized to fall back to native scrolling on touch devices (phones) 
 * to ensure zero lag, while providing a premium feel on desktop.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // Initialize Lenis with optimized settings for performance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Strong easing for "premium" feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly snappier
      syncTouch: false,    // CRITICAL: Disable smooth touch on phones to avoid lag/jitter
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Use requestAnimationFrame for 60fps synchronization
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync with ScrollTrigger if we were using GSAP, but here we use Framer Motion
    // which is already optimized.

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
