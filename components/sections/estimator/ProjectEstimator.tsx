'use client';

import { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
  Database,
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Send,
  Layers,
  Sparkles,
  HelpCircle,
  IndianRupee,
  DollarSign
} from 'lucide-react';

type Currency = 'INR' | 'USD';

interface ProjectType {
  id: string;
  name: string;
  description: string;
  icon: any;
  baseINR: number;
  baseUSD: number;
  baseWeeks: number;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'erp',
    name: 'Custom ERP & Business Software',
    description: 'Cold storage, apple mandi, retail distribution, hospital, or school management system.',
    icon: Database,
    baseINR: 120000,
    baseUSD: 4500,
    baseWeeks: 6,
  },
  {
    id: 'saas',
    name: 'Custom SaaS / Web Application',
    description: 'Full-stack cloud platform built with Next.js, PostgreSQL, Auth & API integrations.',
    icon: Globe,
    baseINR: 95000,
    baseUSD: 3800,
    baseWeeks: 5,
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    description: 'Native-feel cross-platform mobile application with offline sync and push notifications.',
    icon: Smartphone,
    baseINR: 110000,
    baseUSD: 4200,
    baseWeeks: 6,
  },
  {
    id: 'ai',
    name: 'AI Agent & Automation Pipeline',
    description: 'Autonomous LLM agents, automated data pipelines, WhatsApp bots, and intelligent workflows.',
    icon: Bot,
    baseINR: 85000,
    baseUSD: 3200,
    baseWeeks: 4,
  },
  {
    id: 'ecommerce',
    name: 'High-Performance E-Commerce',
    description: 'Headless global store with multi-currency checkout, UPI/Stripe, and inventory sync.',
    icon: ShoppingCart,
    baseINR: 75000,
    baseUSD: 2800,
    baseWeeks: 4,
  },
];

interface ScopeOption {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  weeksAdd: number;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: 'mvp',
    name: '0-to-1 MVP Launchpad',
    description: 'Fastest route to market. Core architecture, essential features, and clean production release.',
    multiplier: 1.0,
    weeksAdd: 0,
  },
  {
    id: 'scale',
    name: 'Full Scale & Modernization',
    description: 'Complete end-to-end system with advanced modules, third-party integrations, and automated testing.',
    multiplier: 1.6,
    weeksAdd: 3,
  },
  {
    id: 'pod',
    name: 'Dedicated Developer Pod (Monthly)',
    description: 'Dedicated senior engineers allocated full-time to your team with daily sync and sprint cadence.',
    multiplier: 2.2,
    weeksAdd: 6,
  },
];

interface Addon {
  id: string;
  name: string;
  priceINR: number;
  priceUSD: number;
  weeks: number;
}

const ADDONS: Addon[] = [
  { id: 'whatsapp', name: 'WhatsApp & SMS Automated Alerts', priceINR: 15000, priceUSD: 400, weeks: 1 },
  { id: 'offline', name: 'Offline-First Local Sync Architecture', priceINR: 25000, priceUSD: 700, weeks: 1 },
  { id: 'payment', name: 'Multi-Gateway Billing (UPI / Razorpay / Stripe)', priceINR: 18000, priceUSD: 500, weeks: 1 },
  { id: 'cloud', name: 'Automated CI/CD & Multi-Region Cloud Deploy', priceINR: 20000, priceUSD: 600, weeks: 1 },
];

export default function ProjectEstimator({ className = '' }: { className?: string }) {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0].id);
  const [selectedScope, setSelectedScope] = useState<string>(SCOPE_OPTIONS[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Lead submission state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const calculation = useMemo(() => {
    const typeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
    const scopeObj = SCOPE_OPTIONS.find((s) => s.id === selectedScope) || SCOPE_OPTIONS[0];

    const baseCost = currency === 'INR' ? typeObj.baseINR : typeObj.baseUSD;
    let totalCost = baseCost * scopeObj.multiplier;
    let totalWeeks = typeObj.baseWeeks + scopeObj.weeksAdd;

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        totalCost += currency === 'INR' ? addon.priceINR : addon.priceUSD;
        totalWeeks += addon.weeks;
      }
    });

    const minCost = Math.round(totalCost * 0.9);
    const maxCost = Math.round(totalCost * 1.15);

    return {
      typeObj,
      scopeObj,
      minCost,
      maxCost,
      totalWeeks,
    };
  }, [selectedType, selectedScope, selectedAddons, currency]);

  const formatPrice = (val: number) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    try {
      const addonNames = selectedAddons
        .map((id) => ADDONS.find((a) => a.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      const formattedMessage =
        `📊 [PROJECT ESTIMATOR QUOTE REQUEST]\n\n` +
        `• System Type: ${calculation.typeObj.name}\n` +
        `• Development Scope: ${calculation.scopeObj.name}\n` +
        `• Add-Ons: ${addonNames || 'None selected'}\n` +
        `• Estimated Budget: ${formatPrice(calculation.minCost)} – ${formatPrice(calculation.maxCost)} (${currency})\n` +
        `• Estimated Timeline: ${calculation.totalWeeks} Weeks\n` +
        (notes ? `• Client Notes: ${notes}\n` : '');

      const payload = {
        name,
        email,
        phone,
        company: company || undefined,
        service: calculation.typeObj.name,
        message: formattedMessage,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Estimator submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Easyio Technologies! I generated an estimate for a ${calculation.typeObj.name} (${formatPrice(
      calculation.minCost
    )} - ${formatPrice(calculation.maxCost)}). I'd like to discuss the technical architecture and timeline.`
  );

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      {/* Container Card */}
      <div className="bg-white border border-zinc-200/90 rounded-[2.5rem] shadow-2xl shadow-zinc-200/40 overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-6 sm:px-10 sm:py-8 border-b border-zinc-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-zinc-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                Interactive Project Scope & Cost Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
              Instant Scope & Cost Calculator
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">
              Select your requirements below to calculate an immediate cost breakdown and delivery roadmap.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 p-1 bg-white border border-zinc-200 rounded-full shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              <span>INR (Kashmir & India)</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>USD (USA & Global)</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Interactive Selection (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-zinc-100">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Step 01 / Select Project Type
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-4 rounded-2xl border transition-all relative group flex flex-col justify-between ${
                        isSelected
                          ? 'border-zinc-950 bg-zinc-950 text-white shadow-md'
                          : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/50 text-zinc-900'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? 'bg-white/10 text-emerald-400'
                              : 'bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm tracking-tight mb-1">{type.name}</h4>
                        <p
                          className={`text-xs leading-relaxed ${
                            isSelected ? 'text-zinc-300' : 'text-zinc-500'
                          }`}
                        >
                          {type.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scope / Scale */}
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                Step 02 / Choose Development Scope
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCOPE_OPTIONS.map((scope) => {
                  const isSelected = selectedScope === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setSelectedScope(scope.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/40 text-zinc-950 shadow-xs ring-1 ring-emerald-500'
                          : 'border-zinc-200 bg-white hover:border-zinc-300 text-zinc-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-xs tracking-tight">{scope.name}</h4>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">{scope.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                Step 03 / Specialized Integrations & Add-Ons
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                          : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100/70 text-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-zinc-300 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-semibold">{addon.name}</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono font-bold shrink-0 ml-2 ${
                          isChecked ? 'text-emerald-400' : 'text-zinc-500'
                        }`}
                      >
                        +{formatPrice(currency === 'INR' ? addon.priceINR : addon.priceUSD)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate & Proposal Request (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-zinc-50/60 flex flex-col justify-between">
            
            {/* Live Pricing Breakdown Card */}
            <div>
              <div className="p-6 rounded-2xl bg-zinc-950 text-white shadow-xl shadow-zinc-950/15 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between text-xs text-zinc-400 uppercase font-mono tracking-wider mb-3">
                  <span>Estimated Investment</span>
                  <span className="text-emerald-400 font-bold">~{calculation.totalWeeks} WEEKS</span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  {formatPrice(calculation.minCost)}{' '}
                  <span className="text-xl sm:text-2xl font-medium text-zinc-400">
                    – {formatPrice(calculation.maxCost)}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-medium">
                  {currency === 'USD'
                    ? 'Includes full architecture, source code repository handover, and 4-5 hrs daily US timezone overlap.'
                    : 'Includes full local deployment, billing modules, offline-first local database, and on-site training in Kashmir.'}
                </p>

                {/* What is included in this estimate */}
                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Code & Intellectual Property Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>30-Day Free Post-Launch Bug Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Direct WhatsApp & Video Standups with Lead Architect</span>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Bridge */}
              <div className="mb-6 p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-950">Prefer direct WhatsApp?</h5>
                    <p className="text-[11px] text-zinc-500">Send this scope to our architects now</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/916005659527?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shrink-0 shadow-xs"
                >
                  Chat Now
                </a>
              </div>

              {/* Instant Proposal Request Form */}
              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-white border border-emerald-300 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950">Proposal Request Received!</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Our lead architect has received your specifications and estimate. We will deliver a formal milestone breakdown to your email and WhatsApp within <strong>15–30 minutes</strong>.
                  </p>
                  <a
                    href={`https://wa.me/916005659527?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-bold hover:bg-zinc-800 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-white border border-zinc-200 space-y-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    Get Formal Architecture Spec & Fixed Quote
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />

                  <input
                    type="text"
                    placeholder="Company or Organization (Optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />

                  <textarea
                    rows={2}
                    placeholder="Any specific features, deadlines, or existing systems to migrate? (Optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none leading-relaxed"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>Sending Scope to Architects...</span>
                      </div>
                    ) : (
                      <>
                        <span>Request Official Proposal</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-zinc-400 text-center font-medium">
                    Strict NDA Protected • Zero obligation • Guaranteed reply in 30 mins
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
