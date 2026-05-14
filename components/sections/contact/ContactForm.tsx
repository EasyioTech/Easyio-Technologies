'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div 
        className="py-20 text-center"
      >
        <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/20">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-4xl font-black text-zinc-950 tracking-tight mb-6 uppercase">Protocol Complete</h3>
        <p className="text-xl text-zinc-600 font-medium font-serif italic">Your message has been successfully transmitted. We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 block">
              Full Name
            </label>
          </div>
          <input
            {...register('name')}
            type="text"
            placeholder="e.g. John Doe"
            className="w-full h-16 px-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200/60 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all font-medium text-base"
          />
          {errors.name && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 block">
              Email Address
            </label>
          </div>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full h-16 px-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200/60 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all font-medium text-base"
          />
          {errors.email && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 block">
            Organization
          </label>
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Optional</span>
        </div>
        <input
          {...register('company')}
          type="text"
          placeholder="Your company name"
          className="w-full h-16 px-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200/60 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all font-medium text-base"
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 block">
            Project Brief
          </label>
        </div>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="Tell us about your technical requirements or mission-critical needs..."
          className="w-full p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200/60 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none font-medium text-lg leading-relaxed"
        />
        {errors.message && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-20 bg-zinc-950 text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-emerald-600 rounded-2xl transition-all shadow-2xl shadow-emerald-500/10 group active:scale-[0.98]"
      >
        {isLoading ? (
          <span className="animate-pulse">Initializing...</span>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
      
      <div className="pt-6 flex items-center justify-center gap-12">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Global Support</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Priority Queue</span>
        </div>
      </div>
    </form>
  );
}
