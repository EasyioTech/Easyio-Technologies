'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit, ExternalLink } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { deleteProject } from '@/modules/admin/actions/projects';
import Link from 'next/link';

interface ProjectManagerProps {
  initialProjects: any[];
}

export function ProjectManager({ initialProjects }: ProjectManagerProps) {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Project Showcase" 
        description="Manage your portfolio and industrial case studies."
      >
        <Link href="/dashboard/projects/new" className="btn-primary !h-11 !px-6 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Link>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialProjects.length === 0 ? (
          <div className="col-span-full p-12 text-center border border-zinc-800 rounded-2xl">
            <p className="text-zinc-500">No projects registered in the archive.</p>
          </div>
        ) : (
          initialProjects.map((project) => (
            <div key={project.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
              <div className="aspect-video relative overflow-hidden bg-zinc-950">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-800">No Image</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                   <h3 className="font-bold text-lg text-zinc-100 uppercase italic tracking-tight">{project.title}</h3>
                   {project.featured === 'true' && <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">Featured</span>}
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 italic">{project.description}</p>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end gap-3">
                  <Link 
                    href={`/case-studies/${project.slug}`}
                    target="_blank"
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                    title="View Technical Vault"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link 
                    href={`/dashboard/projects/edit/${project.id}`}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={async () => {
                      if (confirm('Permanently remove this archive entry?')) {
                        await deleteProject(project.id);
                      }
                    }}
                    className="p-2 text-zinc-500 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
