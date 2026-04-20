'use client';

import React from 'react';

export default function InfrastructureBackground() {
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

      {/* 3. Fine Grain Texture */}
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
