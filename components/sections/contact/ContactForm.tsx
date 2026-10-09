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
        <div className="py-20 text-center rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-3">Message Sent</h3>
          <p className="text-zinc-600 text-lg max-w-sm">
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-900 block">
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Doe"
            className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
          />
          {errors.name && <p className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-900 block">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
          />
          {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-zinc-900 block">
            Organization
          </label>
          <span className="text-xs text-zinc-500">Optional</span>
        </div>
        <input
          {...register('company')}
          type="text"
          placeholder="Your company name"
          className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-zinc-900 block">
          Project Details
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us what you need..."
          className="w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none font-medium leading-relaxed"
        />
        {errors.message && <p className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-14 bg-zinc-900 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 rounded-xl transition-all shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Sending...</span>
          </div>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
