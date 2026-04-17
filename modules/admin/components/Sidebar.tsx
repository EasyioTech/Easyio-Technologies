import Link from 'next/link';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Users, 
  Activity,
  ChevronLeft
} from 'lucide-react';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/dashboard/blog', icon: FileText },
  { name: 'Projects', href: '/dashboard/projects', icon: Activity },
  { name: 'Testimonials', href: '/dashboard/testimonials', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 flex flex-col">
      <div className="p-6 flex items-center justify-between border-b border-zinc-800">
        <span className="font-bold tracking-tight text-xl">EasyIO Admin</span>
        <ChevronLeft className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white transition-colors" />
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all group"
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-4 py-3 text-zinc-500 text-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Postgres: Connected</span>
        </div>
      </div>
    </aside>
  );
}
