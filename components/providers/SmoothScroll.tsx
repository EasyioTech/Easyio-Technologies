'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Lightweight ScrollManager replacing heavy Lenis virtual scrolling.
 * Restores 100% native, instant, zero-lag browser scrolling while ensuring
 * clean scroll-to-top on route transitions.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Reset scroll position on route change without hijacking scroll wheel
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // Check if URL has a hash link (e.g. #faq or #features)
      const hasHash = window.location.hash;
      if (!hasHash) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
