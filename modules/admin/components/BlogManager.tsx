'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit, ExternalLink } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { deleteBlogPost } from '@/modules/admin/actions/blog';
import Link from 'next/link';

interface BlogManagerProps {
  initialPosts: any[];
}

export function BlogManager({ initialPosts }: BlogManagerProps) {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Blog Management" 
        description="Write and optimize your latest industry perspectives."
      >
        <Link href="/dashboard/blog/new" className="btn-primary !h-11 !px-6 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Link>
      </PageHeader>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
        {initialPosts.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-zinc-500">No blog posts found. Start by creating your first story.</p>
          </div>
        ) : (
          <table className="w-full text-left bg-transparent text-sm">
            <thead className="bg-zinc-800/50 text-zinc-400 font-medium border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {initialPosts.map((post) => (
                <tr key={post.id} className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-6 py-4 font-medium text-zinc-200">{post.title}</td>
                  <td className="px-6 py-4 text-zinc-400">{post.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${post.published === 'true' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-800 text-zinc-500'}`}>
                      {post.published === 'true' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-zinc-500 hover:text-white transition-colors p-1"
                      title="View Live"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link 
                      href={`/dashboard/blog/edit/${post.id}`}
                      className="text-zinc-400 hover:text-white transition-colors p-1"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button 
                      onClick={async () => {
                        if (confirm('Are you sure you want to delete this post?')) {
                          await deleteBlogPost(post.id);
                        }
                      }}
                      className="text-zinc-500 hover:text-rose-500 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}
