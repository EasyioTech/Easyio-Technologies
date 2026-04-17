'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createBlogPost, updateBlogPost } from '@/modules/admin/actions/blog';
import { Save, X, Wand2 } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

const blogSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  author: z.string().min(2),
  category: z.string().min(2),
  image: z.string().optional(),
  published: z.enum(['true', 'false']).default('false'),
  focusKeyword: z.string().optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  keywords: z.string().optional(),
  readingTime: z.string().optional(),
  toc: z.string().optional(),
});

export function BlogForm({ onClose, initialData, isModal = true }: { onClose: () => void, initialData?: any, isModal?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiCommand, setAiCommand] = useState('');
  const [aiError, setAiError] = useState('');
  const [aiMeta, setAiMeta] = useState<{ groundingEnabled?: boolean; searchQueriesUsed?: string[]; contentFlagged?: boolean } | null>(null);
  const router = useRouter();
  const isEditing = !!initialData;

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData ? {
      ...initialData,
      image: initialData.image || '',
      published: initialData.published || 'false',
      focusKeyword: initialData.focusKeyword || '',
      seoTitle: initialData.seoTitle || '',
      seoDescription: initialData.seoDescription || '',
      keywords: initialData.keywords || '',
      readingTime: initialData.readingTime || '',
      toc: initialData.toc || '',
    } : {
      published: 'false',
      image: '',
      focusKeyword: '',
      seoTitle: '',
      seoDescription: '',
      keywords: '',
      readingTime: '',
      toc: '',
    }
  });

  const imageUrl = watch('image');
  const seoTitle = watch('seoTitle');
  const seoDescription = watch('seoDescription');
  const content = watch('content');

  // Auto-calculate reading time
  useEffect(() => {
    if (content) {
      const words = content.trim().split(/\s+/).length;
      const minutes = Math.ceil(words / 225); // average reading speed
      setValue('readingTime', `${minutes} min read`);
    }
  }, [content, setValue]);

  const handleAiGenerate = async () => {
    if (!aiCommand.trim() || aiCommand.length < 10) {
      setAiError('Command must be at least 10 characters');
      return;
    }

    setAiLoading(true);
    setAiError('');
    setAiMeta(null);

    try {
      const res = await fetch('/api/ai/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: aiCommand }),
      });

      const json = await res.json();

      if (!json.success) {
        setAiError(json.error || 'Generation failed');
        return;
      }

      const d = json.data;
      setValue('title', d.title);
      setValue('slug', d.slug);
      setValue('excerpt', d.excerpt);
      setValue('content', d.content);
      setValue('category', d.category);
      setValue('focusKeyword', d.focusKeyword);
      setValue('seoTitle', d.seoTitle);
      setValue('seoDescription', d.seoDescription);
      // lsiKeywords is the new field name; fall back to keywords for older responses
      setValue('keywords', d.lsiKeywords || d.keywords || '');
      setValue('readingTime', d.readingTime);
      setValue('toc', d.toc);

      if (json.meta) {
        setAiMeta(json.meta);
      }

      setAiCommand('');
    } catch (err: any) {
      setAiError('Network error: ' + err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = isEditing 
        ? await updateBlogPost(initialData.id, data)
        : await createBlogPost(data);
      if (res.success) {
        if (!isModal) router.push('/dashboard/blog');
        else onClose();
      } else {
        alert(res.error || "Failed to save post");
      }
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
          <h2 className="text-xl font-bold">{isEditing ? 'Edit Post' : 'Compose New Post'}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white"><X /></button>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className={`p-8 space-y-6 ${isModal ? 'max-h-[80vh] overflow-y-auto scrollbar-hide' : ''}`}>
        {/* SOVEREIGN AI STRATEGIST MODULAR INTERFACE */}
        {!isEditing && (
          <div className="relative overflow-hidden border border-zinc-800 rounded-[2.5rem] bg-zinc-950/40 backdrop-blur-3xl">
            {/* HUD Status Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            
            <div className="p-10 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Wand2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    {aiLoading && (
                      <div className="absolute inset-0 rounded-full border border-emerald-500 animate-[ping_1.5s_linear_infinite]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-[-0.03em]">Autonomous Content Architect</h3>
                    <p className="text-xs font-medium text-emerald-500/60 uppercase tracking-[0.15em] mt-0.5">Gemini 2.5 Flash Implementation</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${aiLoading ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-800'}`} />
                  <div className={`h-1.5 w-1.5 rounded-full ${aiLoading ? 'bg-emerald-500/60 animate-pulse delay-75' : 'bg-zinc-800'}`} />
                  <div className={`h-1.5 w-1.5 rounded-full ${aiLoading ? 'bg-emerald-500/30 animate-pulse delay-150' : 'bg-zinc-800'}`} />
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={aiCommand}
                  onChange={(e) => setAiCommand(e.target.value)}
                  placeholder="Define Technical Objective (e.g. 'Case study on building highly available microservices in Rust')..."
                  rows={2}
                  className="w-full bg-zinc-950/60 border border-zinc-800/50 focus:border-emerald-500/30 rounded-2xl px-8 py-6 text-lg text-zinc-100 placeholder:text-zinc-700 transition-all outline-none resize-none"
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={handleAiGenerate}
                    disabled={aiLoading}
                    className="group relative flex items-center gap-3 px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span>{aiLoading ? 'Processing Matrix...' : 'Execute Generation'}</span>
                    <Wand2 className={`w-4 h-4 transition-transform ${aiLoading ? 'animate-spin' : 'group-hover:rotate-12'}`} />
                  </button>
                  
                  {aiLoading && (
                    <span className="text-[10px] font-bold text-emerald-500 animate-pulse uppercase tracking-widest">
                      Synthesizing Level 4 Article...
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-700">Protocol v2.5.Stable</p>
                </div>
              </div>
              
              {aiError && (
                <div className="p-5 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                  <p className="text-rose-400 text-xs font-bold leading-relaxed">{aiError}</p>
                </div>
              )}

              {/* Grounding metadata */}
              {aiMeta && (
                <div className="space-y-3">
                  {aiMeta.groundingEnabled && aiMeta.searchQueriesUsed && aiMeta.searchQueriesUsed.length > 0 && (
                    <div className="p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-3">🔍 Google Search Grounding Active</p>
                      <div className="space-y-1">
                        {aiMeta.searchQueriesUsed.map((q, i) => (
                          <p key={i} className="text-xs text-zinc-400 font-mono">→ {q}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {aiMeta.groundingEnabled === false && (
                    <div className="p-5 bg-zinc-800/40 border border-zinc-700/30 rounded-2xl">
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">📚 Training Data Mode</p>
                      <p className="text-xs text-zinc-500">Grounding unavailable on this API tier. Content is based on training knowledge — verify any statistics before publishing.</p>
                    </div>
                  )}
                  {aiMeta.contentFlagged && (
                    <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                      <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-1">⚠️ Content Review Recommended</p>
                      <p className="text-xs text-amber-400/70">The AI may have included company-specific language or unverified metrics. Please review the content before publishing.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Manual Override Divider */}
            <div className="px-10 pb-10">
              <div className="flex items-center gap-6 opacity-20">
                <div className="h-[1px] flex-1 bg-zinc-700" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">Manual Entry Override</span>
                <div className="h-[1px] flex-1 bg-zinc-700" />
              </div>
            </div>
          </div>
        )}

        {/* BASIC FIELDS */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Article Title</label>
            <input {...register('title')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 text-xl font-bold tracking-tight transition-all" />
            {errors.title && <p className="text-rose-500 text-xs">{errors.title.message as string}</p>}
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">URL Slug</label>
            <input {...register('slug')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 text-lg font-mono transition-all" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Expert Excerpt</label>
          <textarea {...register('excerpt')} rows={3} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 text-lg leading-relaxed transition-all" />
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Main Manuscript (Markdown)</label>
          <textarea {...register('content')} rows={15} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-8 py-6 font-mono text-lg leading-relaxed transition-all" />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Primary Author</label>
            <input {...register('author')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 text-lg transition-all" />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Subject Category</label>
            <input {...register('category')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 text-lg transition-all" />
          </div>
        </div>

        <ImageUpload
          value={imageUrl}
          onChange={(url) => setValue('image', url)}
          label="Hero Identification Image"
        />

        {/* PUBLISH TOGGLE */}
        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Status</label>
          <select {...register('published')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100">
            <option value="false">Draft</option>
            <option value="true">Published</option>
          </select>
        </div>

        {/* SEO & METADATA SECTION */}
        <div className="border-t border-zinc-800 pt-6 space-y-4">
          <h3 className="text-sm font-bold text-zinc-300">SEO & Metadata</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">
                SEO Title <span className="text-zinc-600">{seoTitle?.length || 0}/60</span>
              </label>
              <input {...register('seoTitle')} maxLength={60} placeholder="≤60 chars" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Focus Keyword</label>
              <input {...register('focusKeyword')} placeholder="Primary keyword" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Meta Description <span className="text-zinc-600">{seoDescription?.length || 0}/160</span>
            </label>
            <textarea {...register('seoDescription')} maxLength={160} rows={2} placeholder="≤160 chars" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Keywords</label>
            <input {...register('keywords')} placeholder="comma-separated keywords" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">Reading Time</label>
              <input {...register('readingTime')} placeholder="e.g. 8 min read" readOnly className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 opacity-60" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">TOC JSON/Markdown</label>
              <input {...register('toc')} placeholder='e.g. [{"id":"overview", "title":"Overview"}]' className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800/50 flex justify-end items-center gap-8">
          <button type="button" onClick={onClose} className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
            Discard Changes
          </button>
          <button type="submit" disabled={loading} className="group relative flex items-center gap-3 px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50">
            <Save className="w-4 h-4" />
            {loading ? 'Committing...' : (isEditing ? 'Sync Authority Data' : 'Execute Batch Upload')}
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
