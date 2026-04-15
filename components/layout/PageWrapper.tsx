'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Infrastructure */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
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
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-zinc-100/30 dark:bg-zinc-900/10 blur-[120px] transition-colors duration-1000" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-zinc-100/20 dark:bg-zinc-900/10 blur-[100px] transition-colors duration-1000" 
        />
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
