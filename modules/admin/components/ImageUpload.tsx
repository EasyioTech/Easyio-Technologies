'use client';

import { useState } from 'react';
import { X, ImageIcon, Loader2, Link as LinkIcon, Camera } from 'lucide-react';


interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label }: ImageUploadProps) {
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const [isOptimizing, setIsOptimizing] = useState(false);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsOptimizing(true);
    try {
      // 1. Convert to Image object
      const reader = new FileReader();
      const imageData = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      });

      const img = new Image();
      await new Promise((resolve) => {
        img.onload = resolve;
        img.src = imageData;
      });

      // 2. Setup Canvas for Optimization (Max 1200px width, 80% quality)
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 1200;
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);

      // 3. Compress and Get Base64
      const optimizedBase64 = canvas.toDataURL('image/jpeg', 0.8);
      onChange(optimizedBase64);
    } catch (err) {
      console.error('Optimization failed:', err);
      alert('Failed to optimize image.');
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {label && <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">{label}</label>}
        
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg">
          <button 
            type="button"
            onClick={() => setMode('upload')}
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${mode === 'upload' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Camera className="w-3 h-3 inline-block mr-1" /> Local
          </button>
          <button 
            type="button"
            onClick={() => setMode('url')}
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${mode === 'url' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <LinkIcon className="w-3 h-3 inline-block mr-1" /> URL
          </button>
        </div>
      </div>
      
      <div className="relative group">
        {value ? (
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <button 
              type="button"
              onClick={() => onChange('')}
              className="absolute top-4 right-4 p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl backdrop-blur-xl border border-red-500/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              <p className="text-[10px] font-mono text-zinc-400 truncate bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 w-fit">
                Stored in Database
              </p>
            </div>
          </div>
        ) : (
          <>
            {mode === 'upload' ? (
              <label className="flex flex-col items-center justify-center h-48 md:h-64 border-2 border-dashed border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900/50 hover:border-zinc-700 rounded-2xl transition-all cursor-pointer group">
                {isOptimizing ? (
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 animate-pulse">Running Neural Optimization...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                      <ImageIcon className="w-8 h-8 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-zinc-400">Click to Select & Optimize</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mt-1">High-Precision Local Upload</span>
                  </div>
                )}
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isOptimizing}
                />
              </label>
            ) : (
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Paste image link here (https://...)"
                  className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-2xl py-4 pl-12 pr-6 text-sm focus:border-zinc-700 outline-none transition-all font-mono"
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

