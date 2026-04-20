'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function InfrastructureBackground() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      {/* 1. Subtle Base Mesh */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
        style={{
          background: `
            radial-gradient(at 10% 10%, rgba(209, 250, 229, 0.1) 0px, transparent 50%),
            radial-gradient(at 90% 10%, rgba(254, 249, 195, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(244, 244, 245, 0.05) 0px, transparent 50%),
            radial-gradient(at 10% 90%, rgba(254, 249, 195, 0.1) 0px, transparent 50%),
            radial-gradient(at 90% 90%, rgba(244, 244, 245, 0.15) 0px, transparent 50%)
          `
        }}
      />

      {/* 2. Precision Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #09090b 1px, transparent 1px), linear-gradient(to bottom, #09090b 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* 3. Interactive Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            (pos) => `radial-gradient(600px circle at ${pos[0]}px ${pos[1]}px, rgba(244, 244, 245, 0.08), transparent 85%)`
          ),
        }}
      />

      {/* 4. Fine Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: 'contrast(120%) brightness(100%)'
        }}
      />
    </div>
  );
}
