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
        <div className="w-24 h-24 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center mx-auto mb-12 shadow-2xl">
          <CheckCircle2 className="w-10 h-10 text-white dark:text-black" />
        </div>
        <h3 className="heading-2 mb-6">TRANSMISSION RECEIVED.</h3>
        <p className="text-xl text-zinc-500 font-medium italic">We'll initialize communication within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700 block pl-1">
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="OPERATOR NAME"
            className="w-full h-16 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 text-zinc-950 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-all font-bold uppercase tracking-tight"
          />
          {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700 block pl-1">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="PROTOCOL@DOMAIN.COM"
            className="w-full h-16 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 text-zinc-950 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-all font-bold uppercase tracking-tight"
          />
          {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700 block pl-1">
          Company (Optional)
        </label>
        <input
          {...register('company')}
          type="text"
          placeholder="ORGANIZATION"
          className="w-full h-16 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 text-zinc-950 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-all font-bold uppercase tracking-tight"
        />
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-700 block pl-1">
          Project Details
        </label>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="DESCRIBE THE ARCHITECTURAL CHALLENGE..."
          className="w-full p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 text-zinc-950 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-800 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-all resize-none font-bold uppercase tracking-tight text-xl leading-relaxed"
        />
        {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full group"
      >
        {isLoading ? 'EXECUTING...' : 'INITIALIZE TRANSMISSION'}
        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}
