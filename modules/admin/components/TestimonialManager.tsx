'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit, Star } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { deleteTestimonial } from '@/modules/admin/actions/testimonials';
import Link from 'next/link';

interface TestimonialManagerProps {
  initialTestimonials: any[];
}

export function TestimonialManager({ initialTestimonials }: TestimonialManagerProps) {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Client Voices" 
        description="Amplify the impact of your successful partnerships."
      >
        <Link href="/dashboard/testimonials/new" className="btn-primary !h-11 !px-6 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimony
        </Link>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialTestimonials.length === 0 ? (
          <div className="col-span-full p-12 text-center border border-zinc-800 rounded-2xl">
            <p className="text-zinc-500">No client voices found in the database.</p>
          </div>
        ) : (
          initialTestimonials.map((t) => (
            <div key={t.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-zinc-800 overflow-hidden bg-zinc-950 flex-shrink-0">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-700">NA</div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-200 leading-tight">{t.name}</h3>
                  <p className="text-xs text-zinc-500 italic">{t.role} {t.company ? `@ ${t.company}` : ''}</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < parseInt(t.rating) ? 'text-amber-500 fill-amber-500' : 'text-zinc-700'}`} />
                ))}
              </div>

              <p className="text-sm text-zinc-400 italic flex-grow">"{t.content}"</p>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end gap-3">
                <Link 
                  href={`/dashboard/testimonials/edit/${t.id}`}
                  className="p-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </Link>
                <button 
                  onClick={async () => {
                    if (confirm('Delete this client testimony?')) {
                      await deleteTestimonial(t.id);
                    }
                  }}
                  className="p-2 text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
