'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-50 transition-colors duration-300">
      {/* Background Infrastructure */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.02] text-zinc-50"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Ambient Velocity Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[-5%] left-[-5%] md:top-[-10%] md:left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-zinc-900/10 blur-[80px] md:blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-5%] right-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-zinc-900/10 blur-[60px] md:blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
