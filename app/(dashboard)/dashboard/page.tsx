export const dynamic = 'force-dynamic';
import { Activity, Users, Database, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { db } from '@/lib/db';
import { blogPosts, projects, testimonials } from '@/lib/db/schema';
import { count, desc } from 'drizzle-orm';
import { Suspense } from 'react';

async function getStats() {
  try {
    const [blogCount] = await db.select({ value: count() }).from(blogPosts);
    const [projectCount] = await db.select({ value: count() }).from(projects);
    const [testimonialCount] = await db.select({ value: count() }).from(testimonials);

    return [
      { name: 'Blog Posts', value: (blogCount?.value ?? 0).toString(), icon: FileText, trend: 'Drafts', color: 'text-blue-500' },
      { name: 'Live Projects', value: (projectCount?.value ?? 0).toString(), icon: Activity, trend: 'Active', color: 'text-emerald-500' },
      { name: 'Testimonials', value: (testimonialCount?.value ?? 0).toString(), icon: Users, trend: 'Verified', color: 'text-purple-500' },
      { name: 'System Latency', value: '12ms', icon: Database, trend: 'Optimal', color: 'text-amber-500' },
    ];
  } catch (error) {
    console.error('Dashboard Stats Error:', error);
    return null;
  }
}

async function getRecentLogs() {
  try {
    const recentBlogs = await db.select().from(blogPosts).orderBy(desc(blogPosts.updatedAt)).limit(3);
    return recentBlogs.map(b => ({
      message: `Updated blog: "${b.title}"`,
      time: 'Recently'
    }));
  } catch (error) {
    return [];
  }
}

export default async function DashboardPage() {
  const stats = await getStats();
  const recentUpdates = await getRecentLogs();

  if (!stats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-zinc-950 rounded-[3rem] border border-zinc-900">
        <AlertCircle className="w-16 h-16 text-rose-500 mb-6 animate-pulse" />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic text-white mb-4">Core Offline</h2>
        <p className="text-zinc-500 max-w-md italic leading-relaxed">The database engine failed to respond. Check your connection string or cloud database status.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">System Overview</h1>
        <p className="text-zinc-500 mt-2 font-medium italic">High-performance management for Easyio Infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="p-8 rounded-[2rem] border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 ${stat.color.replace('text', 'bg')}`} />
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className={`p-4 rounded-2xl bg-zinc-900/50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-900 text-zinc-500">
                {stat.trend}
              </span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 relative z-10">{stat.name}</p>
            <p className="text-4xl font-black mt-2 text-white italic tracking-tighter relative z-10">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-10 rounded-[2.5rem] border border-zinc-900 bg-zinc-950/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold uppercase tracking-widest italic text-white mb-8 border-b border-zinc-900 pb-4">Recent Technical Updates</h2>
          <div className="space-y-6">
            {recentUpdates.length > 0 ? recentUpdates.map((log, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-zinc-900/50 last:border-0 text-sm group">
                <span className="text-zinc-400 group-hover:text-white transition-colors flex items-center gap-3 italic">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   {log.message}
                </span>
                <span className="text-zinc-600 font-mono text-[10px]">{log.time}</span>
              </div>
            )) : (
              <p className="text-zinc-600 italic">No recent activity logged in the central registry.</p>
            )}
          </div>
        </div>
        
        <div className="p-10 rounded-[2.5rem] border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px]" />
          <CheckCircle2 className="w-16 h-16 text-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-700" />
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">Postgres Engine</h2>
          <p className="text-zinc-500 text-sm mt-3 italic leading-relaxed">
            Operational Logic: <span className="text-emerald-500/50">DrizzleNode_V20</span><br/>
            Uptime: <span className="text-zinc-400">99.999%</span>
          </p>
          <div className="mt-10 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black text-emerald-500 uppercase tracking-widest">
            Protocol Stable
          </div>
        </div>
      </div>
    </div>
  );
}
