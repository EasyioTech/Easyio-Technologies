'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { Send, CheckCircle2, MessageCircle, Phone, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { FadeIn } from "@/components/shared/Animations";

const serviceOptions = [
  "Custom ERP & Mandi Software",
  "High-Speed Next.js Website",
  "Mobile App (iOS & Android)",
  "Dedicated Developer Pod",
  "Cloud & API Architecture",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: serviceOptions[0],
    },
  });

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setValue('service', service);
  };

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
        setTimeout(() => setSubmitted(false), 7000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hi Easyio team, I would like to discuss a custom software or web development project.'
  )}`;

  if (submitted) {
    return (
      <FadeIn>
        <div className="py-16 px-8 text-center rounded-3xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col items-center justify-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5 shadow-xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-950 mb-2">Inquiry Received!</h3>
          <p className="text-zinc-600 text-base max-w-md leading-relaxed mb-6">
            Thank you for reaching out. A senior systems engineer will review your project requirements and contact you within <strong>15–30 minutes</strong>.
          </p>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp for Instant Response</span>
          </a>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="space-y-8">
      {/* Fast WhatsApp Reach Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center gap-1.5">
              <span>Need a faster project scope?</span>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                Active
              </span>
            </div>
            <p className="text-xs text-zinc-600">
              Chat directly with our engineering team on WhatsApp.
            </p>
          </div>
        </div>
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp (+91 60056 59527)</span>
        </a>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Service Selection Pills */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
            What are you looking to build?
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceSelect(service)}
                className={`text-xs px-3.5 py-2 rounded-xl font-semibold border transition-all ${
                  selectedService === service
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          <input type="hidden" {...register('service')} value={selectedService} />
        </div>

        {/* Name and Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Full Name <span className="text-emerald-600">*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              placeholder="e.g. Zahoor Ahmad"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.name && <p className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Phone / WhatsApp Number <span className="text-emerald-600">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="e.g. +91 98765 43210"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.phone && <p className="text-red-500 text-xs font-medium mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email and Organization */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Email Address <span className="text-emerald-600">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@company.com"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                Company / Trade Name
              </label>
              <span className="text-[11px] text-zinc-400">Optional</span>
            </div>
            <input
              {...register('company')}
              type="text"
              placeholder="e.g. Valley Agro Logistics"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-sm shadow-2xs"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
            Project Description & Requirements <span className="text-emerald-600">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us about what you want to build, existing bottlenecks, timelines, or specific features..."
            className="w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none font-medium text-sm leading-relaxed shadow-2xs"
          />
          {errors.message && <p className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-zinc-950 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 rounded-2xl transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Submitting Your Requirements...</span>
            </div>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>

        {/* Trust Badges under Form */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Response in 15–30 mins</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Code IP Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>War Complex, Sopore & Srinagar</span>
          </div>
        </div>
      </form>
    </div>
  );
}
