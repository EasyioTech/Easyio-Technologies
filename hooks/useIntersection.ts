'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions {
  threshold?: number | number[];
  margin?: string;
  once?: boolean;
}

export function useIntersection(
  options: UseIntersectionOptions = {}
) {
  const { threshold = 0.1, margin = '0px', once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin: margin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, margin, once]);

  return { ref, isInView };
}
