'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, Clock, MapPin, AlertCircle, RotateCcw } from 'lucide-react';
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
  const [submitError, setSubmitError] = useState<string | null>(null);
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
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      } else {
        setSubmitError('We could not submit your inquiry right now. Please try again or reach us directly on WhatsApp.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network connection error. Please check your connection or message us directly on WhatsApp.');
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
        <div
          role="status"
          aria-live="polite"
          className="py-14 px-8 text-center rounded-3xl bg-zinc-50 border border-zinc-200/90 flex flex-col items-center justify-center shadow-xs"
        >
          <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-5 shadow-xs">
            <CheckCircle2 className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-950 mb-2">Inquiry Received!</h3>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed mb-6">
            Thank you for reaching out. A senior systems engineer will review your project requirements and contact you within <strong>15–30 minutes</strong> during working hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp Now</span>
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 text-xs font-semibold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send Another Inquiry</span>
            </button>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="space-y-8">
      {/* Fast WhatsApp Reach Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-zinc-950 flex items-center gap-2">
              <span>Need an immediate project scope?</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>
            <p className="text-xs text-zinc-600 mt-0.5">
              Chat directly with our senior engineering team on WhatsApp.
            </p>
          </div>
        </div>
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-2xs shrink-0 active:scale-98"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp (+91 60056 59527)</span>
        </a>
      </div>

      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Service Selection Pills */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
            What are you looking to build?
          </label>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Select service type">
            {serviceOptions.map((service) => {
              const isSelected = selectedService === service;
              return (
                <button
                  key={service}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleServiceSelect(service)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-semibold border transition-all ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-2xs'
                      : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
          <input type="hidden" {...register('service')} value={selectedService} />
        </div>

        {/* Name and Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Full Name <span className="text-emerald-600">*</span>
            </label>
            <input
              id="contact-name"
              {...register('name')}
              type="text"
              autoComplete="name"
              placeholder="e.g. Zahoor Ahmad"
              aria-invalid={!!errors.name}
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.name && <p className="text-red-600 text-xs font-medium mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Phone / WhatsApp Number <span className="text-emerald-600">*</span>
            </label>
            <input
              id="contact-phone"
              {...register('phone')}
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              aria-invalid={!!errors.phone}
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.phone && <p className="text-red-600 text-xs font-medium mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email and Organization */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
              Email Address <span className="text-emerald-600">*</span>
            </label>
            <input
              id="contact-email"
              {...register('email')}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium text-sm shadow-2xs"
            />
            {errors.email && <p className="text-red-600 text-xs font-medium mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="contact-company" className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                Company / Trade Name
              </label>
              <span className="text-[11px] text-zinc-500">Optional</span>
            </div>
            <input
              id="contact-company"
              {...register('company')}
              type="text"
              autoComplete="organization"
              placeholder="e.g. Valley Agro Logistics"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium text-sm shadow-2xs"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
            Project Description &amp; Requirements <span className="text-emerald-600">*</span>
          </label>
          <textarea
            id="contact-message"
            {...register('message')}
            rows={4}
            placeholder="Tell us about what you want to build, existing bottlenecks, timelines, or specific features..."
            aria-invalid={!!errors.message}
            className="w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all resize-none font-medium text-sm leading-relaxed shadow-2xs"
          />
          {errors.message && <p className="text-red-600 text-xs font-medium mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-zinc-950 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 rounded-2xl transition-all shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-100 text-xs text-zinc-600 font-medium">
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
            <span>Sopore &amp; Srinagar, J&amp;K</span>
          </div>
        </div>
      </form>
    </div>
  );
}
