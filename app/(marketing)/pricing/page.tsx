'use client';

import { useState } from "react";
import { Check, ArrowUpRight, Shield, Zap, Globe, FileCode, Clock, Lock, Sparkles, HelpCircle, IndianRupee, DollarSign, Calculator } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Link from "next/link";

type Currency = 'INR' | 'USD';

interface Tier {
  name: string;
  badge: string;
  popular?: boolean;
  priceINR: string;
  priceUSD: string;
  period: string;
  desc: string;
  timeline: string;
  features: string[];
  cta: string;
  ctaHref: string;
}

const TIERS: Tier[] = [
  {
    name: "MVP Launchpad Sprint",
    badge: "RAPID DEPLOYMENT",
    priceINR: "₹85,000",
    priceUSD: "$3,400",
    period: "Fixed Milestone",
    timeline: "3–4 Weeks Delivery",
    desc: "For ambitious founders and businesses looking to validate, launch, and acquire initial users at maximum velocity.",
    features: [
      "Full Architecture & System Design",
      "Next.js 15 & React Server Components",
      "PostgreSQL with ACID Transaction Isolation",
      "Authentication & Role-Based Access Control",
      "Mobile-Responsive Pixel-Perfect UI",
      "Automated CI/CD Cloud Deployment",
      "100% Private GitHub Repository Transfer",
      "30-Day Free Post-Launch Bug Warranty",
    ],
    cta: "Launch Your MVP",
    ctaHref: "/project-estimator",
  },
  {
    name: "Enterprise Custom System / ERP",
    badge: "MOST POPULAR",
    popular: true,
    priceINR: "₹1,75,000",
    priceUSD: "$7,800",
    period: "Milestone-Based",
    timeline: "6–10 Weeks Delivery",
    desc: "End-to-end bespoke digital backbone for cold storage, fruit mandi, multi-branch retail, hospital, or logistics operations.",
    features: [
      "Custom Workflow Engine & Inventory Automation",
      "Multi-Branch & Ledger Billing Architecture",
      "Offline-First Local Sync Mode (Zero Downtime)",
      "Automated WhatsApp & SMS Alert Webhooks",
      "Payment Gateway (UPI, Razorpay, or Stripe)",
      "Role-Based Dashboards & Granular Audit Logs",
      "On-Site Training & Physical Onboarding (Kashmir)",
      "Dedicated Lead Systems Architect",
      "100% Code Ownership & Signed Mutual NDA",
      "60-Day Extended Stability Warranty",
    ],
    cta: "Build Enterprise System",
    ctaHref: "/project-estimator",
  },
  {
    name: "Dedicated Engineering Pod",
    badge: "GLOBAL TALENT",
    priceINR: "₹95,000",
    priceUSD: "$3,200",
    period: "Per Month (160 Hours)",
    timeline: "Immediate Start",
    desc: "Dedicated senior full-stack software engineers allocated full-time to augment your team with Silicon Valley standards.",
    features: [
      "Dedicated Senior Full-Stack Engineer / Pod",
      "4–5 Hours Guaranteed US Timezone Overlap",
      "Direct Slack & Daily Standups (No Middlemen)",
      "Full-Stack Next.js, Node.js, Python & Cloud",
      "Agile Bi-Weekly Sprints & Linear/Jira Cadence",
      "Zero Overhead, Equipment, or HR Hassle",
      "Cancel Anytime (No Long-Term Lock-In)",
      "2-Week Risk-Free Trial Sprint",
    ],
    cta: "Hire Dedicated Pod",
    ctaHref: "/contact",
  },
];

const PRICING_FAQS = [
  {
    q: "How do your milestone-based payments work?",
    a: "We break every project into 3 or 4 clear milestone sprints (e.g., Architecture & UI, Core Logic, Integration, and Production Deployment). You only release milestone payments after testing and approving live staging demos.",
  },
  {
    q: "Are there any hidden or recurring licensing costs?",
    a: "Zero hidden costs. You own the code 100%. We deploy directly to your chosen cloud account (AWS, DigitalOcean, Vercel, or on-premise VPS) so you only pay base infrastructure costs with no vendor markups.",
  },
  {
    q: "Can I customize the features and get a tailored quote?",
    a: "Yes! Use our interactive Project Scope & Cost Estimator to pick your exact modules (ERP, mobile, payment gateways, WhatsApp bots) and receive a personalized proposal within 30 minutes.",
  },
  {
    q: "What is your 2-Week Risk-Free Pilot for US & international clients?",
    a: "If you are engaging a dedicated developer or engineering pod, we kick off with a 2-week pilot. If you are not completely thrilled with the velocity and technical execution, you can walk away with zero further commitment.",
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>('INR');

  return (
    <PageWrapper>
      <section className="py-24 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Transparent Investment Models</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 mb-6 uppercase italic leading-[0.88]">
              <TextReveal>Predictable</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400">Engineering.</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-2xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
                We believe in outcomes, not vague hourly billing. Transparent milestone pricing for local enterprises in Kashmir &amp; India, and high-efficiency offshore engineering for US and global startups.
              </p>
            </FadeIn>

            {/* Currency Selector */}
            <div className="mt-10 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Currency:</span>
              <div className="flex items-center p-1 bg-zinc-100 rounded-full border border-zinc-200">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    currency === 'INR'
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>INR (Kashmir &amp; India)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    currency === 'USD'
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>USD (USA &amp; Global)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {TIERS.map((t, i) => {
              const price = currency === 'INR' ? t.priceINR : t.priceUSD;
              return (
                <FadeIn key={t.name} delay={0.15 * i}>
                  <div
                    className={`h-full p-8 md:p-10 rounded-[2.5rem] border transition-all flex flex-col justify-between relative group ${
                      t.popular
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-2xl shadow-zinc-950/20'
                        : 'bg-white text-zinc-950 border-zinc-200 hover:border-zinc-400 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Top Header Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                            t.popular
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-zinc-100 text-zinc-500 border border-zinc-200'
                          }`}
                        >
                          {t.badge}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold ${
                            t.popular ? 'text-zinc-400' : 'text-zinc-500'
                          }`}
                        >
                          {t.timeline}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl font-black tracking-tight mb-2 ${
                          t.popular ? 'text-white' : 'text-zinc-950'
                        }`}
                      >
                        {t.name}
                      </h3>

                      <p
                        className={`text-xs leading-relaxed mb-8 min-h-[44px] ${
                          t.popular ? 'text-zinc-400' : 'text-zinc-500'
                        }`}
                      >
                        {t.desc}
                      </p>

                      {/* Price Display */}
                      <div className="mb-8 pb-6 border-b border-zinc-100/10">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-black tracking-tight">
                            {price}
                          </span>
                          <span
                            className={`text-xs font-mono font-bold uppercase ${
                              t.popular ? 'text-zinc-400' : 'text-zinc-500'
                            }`}
                          >
                            / {t.period}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <ul className="space-y-3.5 mb-10 text-xs font-medium">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                t.popular ? 'text-emerald-400' : 'text-emerald-600'
                              }`}
                            />
                            <span
                              className={
                                t.popular ? 'text-zinc-300' : 'text-zinc-700'
                              }
                            >
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={t.ctaHref}
                      className={`w-full h-12 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-98 ${
                        t.popular
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg'
                          : 'bg-zinc-950 hover:bg-zinc-800 text-white'
                      }`}
                    >
                      <span>{t.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Interactive Calculator Promotion Banner */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-200/90 flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Calculator className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  Need a custom scope or feature breakdown?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-lg">
                  Use our interactive project calculator to select exact modules, databases, integrations, and get an immediate ballpark estimate.
                </p>
              </div>
            </div>

            <Link
              href="/project-estimator"
              className="h-12 px-7 rounded-full bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>Launch Calculator</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-zinc-100 pt-16 mb-24">
            <div>
              <FileCode className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-zinc-950 mb-1">100% IP Ownership</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Full source code transfer to your private repo upon completion.
              </p>
            </div>
            <div>
              <Shield className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-zinc-950 mb-1">30-Day Free Warranty</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Complimentary post-launch bug fixing and performance tuning.
              </p>
            </div>
            <div>
              <Clock className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-zinc-950 mb-1">Milestone Payments</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Pay progressively only as deliverables are reviewed and tested.
              </p>
            </div>
            <div>
              <Lock className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-zinc-950 mb-1">Signed Mutual NDA</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Legal protection for your proprietary workflows and business data.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                Frequently Asked Investment Questions
              </h3>
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200">
                  <h4 className="text-sm font-bold text-zinc-950 mb-2">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
