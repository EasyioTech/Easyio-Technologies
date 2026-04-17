'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InfrastructureBackground from './InfrastructureBackground';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Infrastructure */}
      <InfrastructureBackground />

      <div className="relative z-10 w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
