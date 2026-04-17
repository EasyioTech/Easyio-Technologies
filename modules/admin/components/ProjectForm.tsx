'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createProject, updateProject } from '@/modules/admin/actions/projects';
import { Save, X, Plus, Trash } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

const projectSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  content: z.string().min(20).optional(),
  category: z.string().optional(),
  image: z.string().min(1, 'Image is required'),
  link: z.string().optional(),
  featured: z.enum(['true', 'false']).default('false'),
  focusKeyword: z.string().optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
});

export function ProjectForm({ onClose, initialData, isModal = true }: { onClose: () => void, initialData?: any, isModal?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isEditing = !!initialData;
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData ? {
      ...initialData,
      link: initialData.link || '',
      featured: initialData.featured || 'false',
      content: initialData.content || '',
      category: initialData.category || '',
      focusKeyword: initialData.focusKeyword || '',
      seoTitle: initialData.seoTitle || '',
      seoDescription: initialData.seoDescription || '',
    } : { 
      featured: 'false', 
      image: '',
      content: '',
      category: '',
      focusKeyword: '',
      seoTitle: '',
      seoDescription: '',
    }
  });

  const imageUrl = watch('image');
  const seoTitle = watch('seoTitle');
  const seoDescription = watch('seoDescription');

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = isEditing 
        ? await updateProject(initialData.id, data)
        : await createProject(data);
      if (res.success) {
        if (!isModal) router.push('/dashboard/projects');
        else onClose();
      }
      else alert(res.error || "Failed to save project");
    } catch (err: any) {
      alert("System Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl ${!isModal ? 'border-none shadow-none bg-transparent' : ''}`}>
      {isModal && (
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-xl font-bold">{isEditing ? 'Update Project Archive' : 'Register New Project'}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white"><X /></button>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className={`p-8 space-y-6 ${isModal ? 'max-h-[80vh] overflow-y-auto scrollbar-hide' : ''}`}>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Project Title</label>
            <input {...register('title')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">URL Slug</label>
            <input {...register('slug')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Short Description</label>
          <textarea {...register('description')} rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
        </div>

        <ImageUpload 
          value={imageUrl} 
          onChange={(url) => setValue('image', url)}
          label="Project Thumbnail"
        />

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Main Content (Markdown)</label>
          <textarea {...register('content')} rows={10} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-zinc-100" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Category</label>
            <input {...register('category')} placeholder="e.g. ERP, AI, Cloud" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">External Link</label>
            <input {...register('link')} placeholder="https://..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100" />
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="border-t border-zinc-800 pt-6 space-y-4">
          <h3 className="text-sm font-bold text-zinc-300">SEO & Metadata</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">
                SEO Title <span className="text-zinc-600">{seoTitle?.length || 0}/60</span>
              </label>
              <input {...register('seoTitle')} maxLength={60} placeholder="≤60 chars" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Focus Keyword</label>
              <input {...register('focusKeyword')} placeholder="Primary keyword" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Meta Description <span className="text-zinc-600">{seoDescription?.length || 0}/160</span>
            </label>
            <textarea {...register('seoDescription')} maxLength={160} rows={2} placeholder="≤160 chars" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100" />
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-6 py-3 text-zinc-400 font-bold">Cancel</button>
          <button type="submit" disabled={loading} className="btn-primary !h-12 !px-8 flex items-center gap-2">
            <Save className="w-4 h-4" />
            {loading ? (isEditing ? 'Archiving...' : 'Launching...') : (isEditing ? 'Update Archive' : 'Launch Project')}
          </button>
        </div>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in backdrop-blur-sm">
        {formContent}
      </div>
    );
  }

  return formContent;
}
