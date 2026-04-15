'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const TextReveal = ({ children, delay = 0, className = "" }: { children: string; delay?: number; className?: string }) => {
  const words = children.split(' ');

  return (
    <span className={`text-reveal-container ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-1">
          <motion.span
            className="text-reveal-word"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Marquee = ({ children, reverse = false, pauseOnHover = true, className = "", speed = 30 }: { children: ReactNode, reverse?: boolean, pauseOnHover?: boolean, className?: string, speed?: number }) => {
  return (
    <div className={`overflow-hidden relative ${pauseOnHover ? 'pause-marquee' : ''} ${className}`}>
      <div 
        className={`flex w-max ${reverse ? 'flex-row-reverse' : 'flex-row'} animate-marquee`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
