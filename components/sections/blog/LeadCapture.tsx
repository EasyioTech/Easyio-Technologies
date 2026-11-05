'use client';

import { useState } from 'react';
import { FadeIn } from "@/components/shared/Animations";
import { ArrowUpRight, MessageCircle, Phone, MapPin, CheckCircle2, ShieldCheck, Star, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const whatsappUrl = `https://wa.me/916005659527?text=${encodeURIComponent(
    'Hello Easyio Technologies, I want to discuss a software project for my company.'
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          service: 'Custom Software / Mandi ERP',
          message: message.trim() || `Inquiry from blog reader interested in discussing a software project for their business. Phone: ${phone.trim() || 'Not provided'}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit. Please contact us on WhatsApp.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please connect on WhatsApp.');
    }
  };

  return (
    <section className="mt-20 pt-10 border-t border-zinc-200 font-sans">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-50 via-white to-amber-50/20 border border-zinc-200/90 p-8 sm:p-12 md:p-14 text-zinc-950 shadow-xs">
          {/* Subtle Ambient Mesh Blur (Hero Design Style) */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-emerald-100/30 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-yellow-100/30 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Top Eyebrow with Social Proof */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200/80 text-zinc-800 text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Custom Software &bull; Sopore &amp; Srinagar</span>
              </span>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-2xs">
                      <img src={`/images/avatar_${i}.jpg`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-zinc-600">Rated 4.9/5 by Clients</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 mb-5 leading-[1.15]">
              Ready to automate your operations with custom software?
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed max-w-2xl font-normal">
              Whether you need an offline-first mandi ERP, custom billing system, high-speed Next.js web application, or a dedicated software engineering team in Kashmir—we build software tailored specifically to your workflows.
            </p>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-zinc-200/80 text-xs sm:text-sm text-zinc-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero recurring SaaS lock-in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On-site staff training in Kashmir</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>War Complex Sopore &amp; Srinagar</span>
              </div>
            </div>

            {/* Hero-Style Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-13 pl-7 pr-2 flex items-center justify-center bg-zinc-950 text-white font-medium text-sm rounded-full hover:bg-zinc-800 transition-all shadow-md active:scale-95 shrink-0"
              >
                <span>WhatsApp (+91 60056 59527)</span>
                <div className="w-9 h-9 ml-3 bg-white rounded-full flex items-center justify-center text-zinc-950 group-hover:bg-[#FEF9C3] group-hover:scale-105 transition-all duration-300 group-hover:rotate-45 -rotate-[22.5deg]">
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                </div>
              </a>

              <Link
                href="/project-estimator"
                className="h-13 px-7 flex items-center justify-center bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 font-semibold text-sm rounded-full transition-all shadow-2xs active:scale-95 shrink-0"
              >
                Calculate Cost in Estimator
              </Link>

              <a
                href="tel:+916005659527"
                className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 px-4 py-2 transition-colors shrink-0"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Clean, Light Quick Callback Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                  Request a Free Technical Consultation
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Leave your number or email and a senior engineer will get in touch within 24 hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! We received your details and will call or message you within 24 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <input
                      type="text"
                      placeholder="What are you building? (e.g., Apple Mandi software, Cold Storage ERP, Web App)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-zinc-900 transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 disabled:opacity-60 text-white font-medium px-7 py-3 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 shadow-sm active:scale-95"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-rose-600 mt-2">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
