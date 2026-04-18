'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit, ExternalLink, FileText } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { deleteBlogPost } from '@/modules/admin/actions/blog';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BlogManagerProps {
  initialPosts: any[];
}

export function BlogManager({ initialPosts }: BlogManagerProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Blog Management" 
        description="Write and optimize your latest industry perspectives."
      >
        <Link href="/dashboard/blog/new" className="btn-primary flex items-center shadow-lg shadow-white/5">
          <Plus className="w-4 h-4 mr-2" />
          New Manuscript
        </Link>
      </PageHeader>

      <div className="rounded-[2.5rem] border border-zinc-800 bg-zinc-950/40 backdrop-blur-3xl overflow-hidden">
        {initialPosts.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <FileText className="w-6 h-6 text-zinc-700" />
            </div>
            <p className="text-zinc-500 font-medium italic text-sm">The archive is currently empty. Initialize your first protocol.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left bg-transparent text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/20">
                    <th className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[9px] text-zinc-600">Document Title</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[9px] text-zinc-600">Category</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[9px] text-zinc-600">Protocol Status</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[9px] text-zinc-600">Creation Date</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.2em] text-[9px] text-zinc-600 text-right">Execution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/30">
                  {initialPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-white/[0.02] transition-all duration-300 group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-zinc-100 text-sm tracking-tight mb-0.5">{post.title}</span>
                          <span className="text-[9px] font-mono text-zinc-600 truncate max-w-[150px]">{post.slug}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className={cn(
                            "w-1 h-1 rounded-full",
                            post.published === 'true' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-700"
                          )} />
                          <span className={cn(
                            "text-[9px] font-black uppercase tracking-tighter",
                            post.published === 'true' ? "text-emerald-500" : "text-zinc-600"
                          )}>
                            {post.published === 'true' ? 'Live Protocol' : 'Draft Protocol'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-zinc-600 font-medium text-[11px]">
                        {new Date(post.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link 
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all"
                            title="View Deployment"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <Link 
                            href={`/dashboard/blog/edit/${post.id}`}
                            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all"
                            title="Edit Manuscript"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Link>
                          <button 
                            onClick={async () => {
                              if (confirm('Initiate deletion protocol for this manuscript?')) {
                                await deleteBlogPost(post.id);
                              }
                            }}
                            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-600 hover:text-rose-500 hover:border-rose-500/50 transition-all"
                            title="Delete Document"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-zinc-800">
              {initialPosts.map((post) => (
                <div key={post.id} className="p-5 space-y-4 bg-zinc-900/20 active:bg-zinc-900/40 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-600 border border-zinc-700/50">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <div className={cn("w-1 h-1 rounded-full", post.published === 'true' ? "bg-emerald-500" : "bg-zinc-700")} />
                        <span className="text-[8px] font-black uppercase tracking-tighter text-zinc-600">
                          {post.published === 'true' ? 'Live' : 'Draft'}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base text-white leading-tight">{post.title}</h3>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest font-mono">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Link 
                        href={`/dashboard/blog/edit/${post.id}`}
                        className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </Link>
                      <button 
                        onClick={async () => {
                          if (confirm('Delete this manuscript?')) {
                            await deleteBlogPost(post.id);
                          }
                        }}
                        className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-rose-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
