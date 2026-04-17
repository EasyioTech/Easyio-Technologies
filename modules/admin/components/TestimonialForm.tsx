'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createTestimonial, updateTestimonial } from '@/modules/admin/actions/testimonials';
import { Save, X, Star } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

const testimonialSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  content: z.string().min(10),
  avatar: z.string().optional(),
  company: z.string().optional(),
  rating: z.string().default('5'),
});

export function TestimonialForm({ onClose, initialData, isModal = true }: { onClose: () => void, initialData?: any, isModal?: boolean }) {
  const [loading, setLoading] = useState(false);
  const isEditing = !!initialData;
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: initialData ? {
      ...initialData,
      avatar: initialData.avatar || '',
      company: initialData.company || '',
      rating: initialData.rating || '5',
    } : { rating: '5', avatar: '' }
  });

  const avatarUrl = watch('avatar');

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = isEditing 
        ? await updateTestimonial(initialData.id, data)
        : await createTestimonial(data);
      if (res.success) onClose();
      else alert(res.error || "Failed to save testimonial");
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
          <h2 className="text-xl font-bold">{isEditing ? 'Modify Client Testimony' : 'Record New Testimony'}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white"><X /></button>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className={`p-8 space-y-6 ${isModal ? 'max-h-[80vh] overflow-y-auto scrollbar-hide' : ''}`}>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Client Name</label>
            <input {...register('name')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Company</label>
            <input {...register('company')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Role / Designation</label>
          <input {...register('role')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-400">Feedback Content</label>
          <textarea {...register('content')} rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3" />
        </div>

        <div className="grid grid-cols-2 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">Rating (1-5)</label>
            <select {...register('rating')} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3">
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>
          <ImageUpload 
            value={avatarUrl} 
            onChange={(url) => setValue('avatar', url)}
            label="Client Avatar"
          />
        </div>

        <div className="pt-6 border-t border-zinc-800 flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-6 py-3 text-zinc-400 font-bold">Cancel</button>
          <button type="submit" disabled={loading} className="btn-primary !h-12 !px-8 flex items-center gap-2">
            <Save className="w-4 h-4" />
            {loading ? (isEditing ? 'Updating...' : 'Recording...') : (isEditing ? 'Save Testimony' : 'Record Testimony')}
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
