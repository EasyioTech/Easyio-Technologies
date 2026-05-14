'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { Send, CheckCircle2 } from 'lucide-react';
import { FadeIn } from "@/components/shared/Animations";

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
      <FadeIn>
        <div className="py-24 text-center border-2 border-dashed border-emerald-100 rounded-[3rem] bg-emerald-50/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/20 relative z-10">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-4xl font-black text-zinc-950 tracking-tight mb-6 uppercase relative z-10">Protocol Complete</h3>
          <p className="text-xl text-zinc-600 font-medium font-serif italic relative z-10">Your message has been successfully transmitted. <br /> Our team will respond within 24 hours.</p>
          
          <div className="mt-12 pt-8 border-t border-emerald-100/50 flex items-center justify-center gap-10 opacity-60">
             <div className="text-[10px] font-mono font-black text-emerald-700 uppercase tracking-widest">SEQ_ID: {Math.random().toString(36).substring(7).toUpperCase()}</div>
             <div className="text-[10px] font-mono font-black text-emerald-700 uppercase tracking-widest">STATUS: DELIVERED</div>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950 block">
              Full Name
            </label>
            <span className="text-[9px] font-mono text-zinc-300">PROTO_01</span>
          </div>
          <input
            {...register('name')}
            type="text"
            placeholder="e.g. John Doe"
            className="w-full h-16 px-8 rounded-2xl bg-zinc-50 border-2 border-transparent text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-base shadow-sm"
          />
          {errors.name && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950 block">
              Email Address
            </label>
            <span className="text-[9px] font-mono text-zinc-300">PROTO_02</span>
          </div>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full h-16 px-8 rounded-2xl bg-zinc-50 border-2 border-transparent text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-base shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950 block">
            Organization
          </label>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-zinc-300 uppercase">Optional</span>
            <span className="text-[9px] font-mono text-zinc-300">PROTO_03</span>
          </div>
        </div>
        <input
          {...register('company')}
          type="text"
          placeholder="Your company name"
          className="w-full h-16 px-8 rounded-2xl bg-zinc-50 border-2 border-transparent text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-base shadow-sm"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950 block">
            Project Brief
          </label>
          <span className="text-[9px] font-mono text-zinc-300">PROTO_04</span>
        </div>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="Tell us about your technical requirements or mission-critical needs..."
          className="w-full p-8 rounded-2xl bg-zinc-50 border-2 border-transparent text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none font-medium text-lg leading-relaxed shadow-sm"
        />
        {errors.message && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider pl-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-20 bg-zinc-950 text-white text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-emerald-600 rounded-2xl transition-all shadow-2xl shadow-emerald-500/10 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="animate-pulse">Initializing Transmission...</span>
          </div>
        ) : (
          <>
            Send Mission Profile
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
      
      <div className="pt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">End-to-End Encryption</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Priority SLA Response</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Global Ops Ready</span>
        </div>
      </div>
    </form>
  );
}
