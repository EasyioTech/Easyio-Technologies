'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface PremiumHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const PremiumHeading: React.FC<PremiumHeadingProps> = ({
  text,
  className = "",
  as: Tag = 'h1',
  delay = 0,
  highlightWords = [],
  highlightClassName = "font-serif italic font-medium text-zinc-900"
}) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: delay + (i * 0.1),
        ease: [0.2, 0.65, 0.3, 0.9] as const
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 45,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={`${className} perspective-1000`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {words.map((word, index) => {
          const isHighlighted = highlightWords.some(h => word.toLowerCase().includes(h.toLowerCase()));
          const isLast = index === words.length - 1;
          
          return (
            <span key={index} className="inline-block overflow-hidden pb-2 mr-[0.25em] last:mr-0">
              <motion.span
                variants={child}
                className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </Tag>
  );
};

export const PremiumSubheading: React.FC<{ text: string; className?: string; delay?: number }> = ({ 
  text, 
  className = "", 
  delay = 0.5 
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 0.9] as const 
      }}
      className={className}
    >
      {text}
    </motion.p>
  );
};
