'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-20 text-center"
      >
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-12 shadow-2xl">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-zinc-950 tracking-tight mb-6">Message sent!</h3>
        <p className="text-xl text-zinc-600 font-medium font-serif italic">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-[12px] font-bold uppercase tracking-widest text-zinc-950 block">
              Full Name
            </label>
          </div>
          <input
            {...register('name')}
            type="text"
            placeholder="e.g. John Doe"
            className="w-full h-16 px-8 rounded-2xl bg-white border-2 border-zinc-200 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all font-medium text-base shadow-sm"
          />
          {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-[12px] font-bold uppercase tracking-widest text-zinc-950 block">
              Email Address
            </label>
          </div>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full h-16 px-8 rounded-2xl bg-white border-2 border-zinc-200 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all font-medium text-base shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <label className="text-[12px] font-bold uppercase tracking-widest text-zinc-950 block">
            Organization
          </label>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Optional</span>
        </div>
        <input
          {...register('company')}
          type="text"
          placeholder="Your company name"
          className="w-full h-16 px-8 rounded-2xl bg-white border-2 border-zinc-200 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all font-medium text-base shadow-sm"
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <label className="text-[12px] font-bold uppercase tracking-widest text-zinc-950 block">
            What are you looking for?
          </label>
        </div>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="Tell us about your project or needs..."
          className="w-full p-8 rounded-2xl bg-white border-2 border-zinc-200 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-all resize-none font-medium text-lg leading-relaxed shadow-sm"
        />
        {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-18 py-6 bg-zinc-950 text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-blue-600 rounded-2xl transition-all shadow-xl shadow-zinc-200/50 group"
      >
        {isLoading ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
      
      <div className="pt-4 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global Support</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Fast Response</span>
        </div>
      </div>
    </form>
  );
}
