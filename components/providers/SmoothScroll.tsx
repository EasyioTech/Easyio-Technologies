'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Native Scroll Manager.
 * Guarantees 100% instant, unhindered native browser scrolling with zero
 * wheel interception, zero momentum smoothing, and instant scroll-to-top on route changes.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasHash = window.location.hash;
      if (!hasHash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
