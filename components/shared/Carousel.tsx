'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setProgress(0);
  }, [items.length]);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / autoPlayInterval) * 100;
      
      if (newProgress >= 100) {
        next();
      } else {
        setProgress(newProgress);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval, next]);

  return (
    <div className="relative w-full group">
      <div className="relative overflow-hidden min-h-[400px] flex items-center">
        <div className="w-full">
          {items[currentIndex]}
        </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
         <button 
           onClick={(e) => { e.stopPropagation(); prev(); }}
           className="w-12 h-12 rounded-full bg-white/80 border border-zinc-100 flex items-center justify-center text-zinc-950 pointer-events-auto hover:bg-black hover:text-white transition-all shadow-xl"
         >
            <ChevronLeft className="w-5 h-5" />
         </button>
         <button 
           onClick={(e) => { e.stopPropagation(); next(); }}
           className="w-12 h-12 rounded-full bg-white/80 border border-zinc-100 flex items-center justify-center text-zinc-950 pointer-events-auto hover:bg-black hover:text-white transition-all shadow-xl"
         >
            <ChevronRight className="w-5 h-5" />
         </button>
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-4 mt-12 justify-center">
        {items.map((_, i) => (
          <div 
            key={i} 
            className="flex-1 max-w-[120px] h-1.5 bg-zinc-100 rounded-full overflow-hidden cursor-pointer"
            onClick={() => { setCurrentIndex(i); setProgress(0); }}
          >
            {i === currentIndex && (
              <div 
                className="h-full bg-accent transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
            {i < currentIndex && <div className="h-full w-full bg-zinc-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}
