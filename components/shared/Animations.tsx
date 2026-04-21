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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
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
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
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
