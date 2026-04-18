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
  const [aiProvider, setAiProvider] = useState<'auto' | 'gemini' | 'groq' | 'sambanova' | 'cerebras'>('auto');
  const [aiMeta, setAiMeta] = useState<{ groundingEnabled?: boolean; searchQueriesUsed?: string[]; contentFlagged?: boolean; modelUsed?: string } | null>(null);
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
        body: JSON.stringify({ command: aiCommand, provider: aiProvider }),
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
            
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-700 ${aiLoading ? 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                      <Wand2 className={`w-4 h-4 ${aiLoading ? 'text-white' : 'text-emerald-400'}`} />
                    </div>
                    {aiLoading && (
                      <div className="absolute -inset-1 rounded-full border border-emerald-500/50 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">Autonomous Content Architect</h3>
                    <p className="text-[9px] font-black text-emerald-500/70 uppercase tracking-[0.1em] mt-0.5">Free Production Matrix</p>
                  </div>
                </div>
                
                <div className="flex gap-1.5">
                  <div className={`h-1 w-1 rounded-full ${aiLoading ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-800'}`} />
                  <div className={`h-1 w-1 rounded-full ${aiLoading ? 'bg-emerald-500/60 animate-pulse delay-75' : 'bg-zinc-800'}`} />
                  <div className={`h-1 w-1 rounded-full ${aiLoading ? 'bg-emerald-500/30 animate-pulse delay-150' : 'bg-zinc-800'}`} />
                </div>
              </div>

              <div className="relative group/textarea">
                <textarea
                  value={aiCommand}
                  onChange={(e) => setAiCommand(e.target.value)}
                  placeholder="Define Technical Objective..."
                  rows={2}
                  className={`w-full bg-zinc-950/60 border border-zinc-800/50 focus:border-emerald-500/30 rounded-xl px-5 py-4 text-sm text-zinc-100 placeholder:text-zinc-700 transition-all outline-none resize-none ${aiLoading ? 'opacity-50' : ''}`}
                />
                {aiLoading && (
                  <div className="absolute inset-x-5 top-0 h-[1.5px] bg-emerald-500/40 blur-[1px] animate-scan pointer-events-none" />
                )}
              </div>
              
              <div className="flex flex-col gap-4 pt-1">
                {/* Custom Provider Selector */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: 'auto', name: 'Auto' },
                    { id: 'gemini', name: 'Gemini' },
                    { id: 'groq', name: 'Groq' },
                    { id: 'sambanova', name: 'SambaNova' },
                    { id: 'cerebras', name: 'Cerebras' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setAiProvider(p.id as any)}
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest transition-all ${
                        aiProvider === p.id 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                          : 'bg-zinc-950/40 border-zinc-800 text-zinc-600 hover:border-zinc-700'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handleAiGenerate}
                      disabled={aiLoading}
                      className="group relative flex items-center gap-4 px-6 py-2.5 bg-white text-black rounded-full transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-white/5"
                    >
                      <div className="flex flex-col items-start leading-none text-left">
                        <span className="text-[9px] font-black uppercase tracking-widest">{aiLoading ? 'Protocol Active' : 'Execute Generation'}</span>
                        <span className="text-[8px] opacity-40 mt-0.5 font-bold uppercase tracking-widest">{aiLoading ? 'Synthesizing...' : `${aiProvider.toUpperCase()} INTERFACE`}</span>
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${aiLoading ? 'bg-emerald-500 animate-pulse' : 'bg-black/20'}`} />
                    </button>
                    
                    {aiLoading && (
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-bold text-emerald-500 animate-pulse uppercase tracking-[0.2em]">
                          Processing Synthesis...
                        </span>
                        <div className="h-0.5 w-20 bg-zinc-900 overflow-hidden rounded-full">
                          <div className="h-full bg-emerald-500 animate-shimmer w-1/2" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-right hidden sm:block">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-800">Protocol v2.5</p>
                  </div>
                </div>
              </div>
              
              {aiError && (
                <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                  <p className="text-rose-400 text-[10px] font-bold tracking-tight">{aiError}</p>
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
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Article Title</label>
            <input {...register('title')} placeholder="Protocol Identifier..." className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-5 py-3 text-base font-bold tracking-tight transition-all" />
            {errors.title && <p className="text-rose-500 text-[10px] uppercase font-black">{errors.title.message as string}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">URL Slug</label>
            <input {...register('slug')} placeholder="slug-path..." className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-5 py-3 text-sm font-mono transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Expert Excerpt</label>
          <textarea {...register('excerpt')} rows={2} placeholder="Brief executive summary..." className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-5 py-3 text-sm leading-relaxed transition-all resize-none" />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Main Manuscript (Markdown)</label>
          <textarea {...register('content')} rows={12} className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-6 py-4 font-mono text-sm leading-relaxed transition-all" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Primary Author</label>
            <input {...register('author')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-5 py-3 text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Subject Category</label>
            <input {...register('category')} className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/30 rounded-xl px-5 py-3 text-sm" />
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
