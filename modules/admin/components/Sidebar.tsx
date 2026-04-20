'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Users, 
  Activity,
  ChevronLeft,
  X,
  Box
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/dashboard/blog', icon: FileText },
  { name: 'Projects', href: '/dashboard/projects', icon: Activity },
  { name: 'Testimonials', href: '/dashboard/testimonials', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) {
  const pathname = usePathname();
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    if (onClose) onClose();
  }, [pathname, onClose]);

  const sidebarContent = (
    <div className={cn(
      "h-full flex flex-col bg-zinc-950 border-r border-zinc-700/50 transition-all duration-300 relative",
      isDesktopCollapsed ? "w-20" : "w-72"
    )}>
      {/* Branding HUD */}
      <div className="p-6 flex items-center justify-between border-b border-zinc-800/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Box className="w-5 h-5 text-black" />
          </div>
          {!isDesktopCollapsed && (
            <span className="font-bold tracking-tighter text-lg text-white">EASYIO <span className="text-zinc-500 font-light">HUD</span></span>
          )}
        </Link>
        <button 
          onClick={onClose || (() => setIsDesktopCollapsed(!isDesktopCollapsed))}
          className="p-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-white"
        >
          {isOpen ? <X className="w-4 h-4" /> : <ChevronLeft className={cn("w-4 h-4 transition-transform", isDesktopCollapsed && "rotate-180")} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group relative",
                isActive 
                  ? "bg-white text-black font-black" 
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900",
                isDesktopCollapsed && "justify-center px-0"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-transform",
                isActive ? "scale-110" : "group-hover:scale-110"
              )} />
              {!isDesktopCollapsed && (
                <span className="text-[11px] uppercase tracking-widest">{item.name}</span>
              )}
              {isActive && !isDesktopCollapsed && (
                <div className="absolute left-0 w-1 h-6 bg-black rounded-r-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Connection Indicator */}
      <div className="p-6 border-t border-zinc-800/50">
        <div className={cn(
          "flex items-center gap-4 px-4 py-3 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl",
          isDesktopCollapsed && "justify-center px-0 bg-transparent border-none"
        )}>
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
          </div>
          {!isDesktopCollapsed && (
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-white uppercase tracking-tighter">System Online</span>
              <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-[0.1em]">Postgres Connect</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          <div 
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          />
          <aside
            className="fixed inset-y-0 left-0 w-72 z-50 lg:hidden transition-transform duration-300 translate-x-0"
          >
            {sidebarContent}
          </aside>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex shrink-0 sticky top-0 h-screen overflow-hidden">
        {sidebarContent}
      </aside>
    </>
  );
}
