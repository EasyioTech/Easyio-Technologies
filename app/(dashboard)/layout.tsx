'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/modules/admin/components/Sidebar';
import { Menu, Box } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Box className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold tracking-tighter text-lg uppercase">EasyIO <span className="text-zinc-500 font-light">HUD</span></span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto scrollbar-hide p-4 md:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
