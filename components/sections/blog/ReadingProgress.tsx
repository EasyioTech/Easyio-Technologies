'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-zinc-100/50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        style={{ width: `${completion}%` }}
        role="progressbar"
        aria-valuenow={completion}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
