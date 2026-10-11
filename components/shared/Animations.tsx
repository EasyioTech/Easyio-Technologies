'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

const Reveal: React.FC<AnimationProps> = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0,
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On small screens (< 768px), immediately mark visible to avoid scroll-driven lag and jitter
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const animationClass = direction === 'up' ? 'animate-fade-up' 
    : direction === 'down' ? 'animate-fade-down'
    : direction === 'left' ? 'animate-fade-left'
    : 'animate-fade-right';

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? `md:${animationClass}` : 'opacity-100 md:opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeIn: React.FC<AnimationProps> = (props) => <Reveal {...props} />;
export const TextReveal: React.FC<AnimationProps> = (props) => <Reveal {...props} direction="up" {...props} />;

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return <div className={className}>{children}</div>;
};

export const Marquee: React.FC<{ children: React.ReactNode; className?: string; speed?: number }> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {children}
        {children}
      </div>
    </div>
  );
};
