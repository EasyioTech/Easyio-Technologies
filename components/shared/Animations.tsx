'use client';

import React from 'react';

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

export const FadeIn: React.FC<AnimationProps> = ({ 
  children, 
  className = "" 
}) => {
  return <div className={className}>{children}</div>;
};

export const TextReveal: React.FC<AnimationProps> = ({ 
  children, 
  className = "" 
}) => {
  return <div className={className}>{children}</div>;
};

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
