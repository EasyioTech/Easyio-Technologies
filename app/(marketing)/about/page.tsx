'use client';

import PageWrapper from "@/components/layout/PageWrapper";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Target, Code2, Rocket } from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

const values = [
  {
    title: "Engineering Excellence",
    desc: "We don't cut corners. Every line of code is written with scale, security, and long-term maintainability in mind.",
    icon: Code2,
  },
  {
    title: "Absolute Ownership",
    desc: "No vendor lock-ins. We build custom intellectual property that your business owns 100% from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Radical Transparency",
    desc: "Clear communication, direct access to senior developers, and honest milestone timelines. No corporate jargon.",
    icon: Target,
  },
  {
    title: "Built for Speed",
    desc: "From sprint execution to application runtime, we optimize for speed to keep your business ahead of the market.",
    icon: Rocket,
  }
];

const team = [
  { name: "Mohammad Faheem", role: "Chief Executive Officer (CEO)", image: "/images/avatar_4.jpg" },
  { name: "Burhan Ali", role: "Chief Technology Officer (CTO)", image: "/images/avatar_1.jpg" },
  { name: "Mohammad Ayoob", role: "Chief Financial Officer (CFO)", image: "/images/avatar_3.jpg" }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="w-full bg-white text-zinc-900 font-sans pb-20">
        
        {/* Editorial Hero Section */}
        <section className="pt-32 md:pt-44 pb-20 relative overflow-hidden border-b border-zinc-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-xs font-semibold text-zinc-700">About Easyio Technologies</span>
                </div>
                <PremiumHeading 
                  text="Architecting the premier software company in Kashmir."
                  highlightWords={["premier", "Kashmir."]}
                  className="text-4xl md:text-6xl font-black tracking-tight text-zinc-950 mb-4 leading-[1.06]"
                  highlightClassName="font-serif italic text-emerald-700 font-medium tracking-normal"
                />
              </div>
              
              <div className="pb-2">
                <PremiumSubheading 
                  delay={0.2}
                  text="Easyio Technologies was founded with a singular mission: to prove that world-class software engineering and scalable enterprise architecture can be built from Kashmir for organizations everywhere."
                  className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Sticky Scroll Section */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 relative">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-5">
                    We engineer for the long term.
                  </h2>
                  <p className="text-zinc-600 leading-relaxed mb-8">
                    In a market flooded with templated solutions and bloated agencies, we stand as a dedicated technical partner. We don&apos;t just write code; we build the foundational systems that allow your business to scale without friction.
                  </p>
                  
                  <div className="flex items-center gap-3.5 text-sm font-bold text-zinc-900">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>HQ: War Complex, Sopore, Kashmir</span>
                  </div>
                </div>
              </div>

              {/* Scrolling Content */}
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-10 bg-zinc-50 border border-zinc-200/80 rounded-3xl"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-3 block">01 / Foundation</span>
                    <h3 className="text-2xl font-bold text-zinc-950 mb-3">Deep Technical Roots</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      We are engineers first. Our team specializes in complex backend architectures, high-performance web applications, and resilient cloud infrastructure. We obsess over the details that others ignore.
                    </p>
                  </m.div>

                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-10 bg-zinc-950 text-white rounded-3xl"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3 block">02 / Resilience</span>
                    <h3 className="text-2xl font-bold text-white mb-3">The Kashmir Advantage</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Operating from Sopore and Srinagar gives us a unique perspective on building resilient software. We architect systems that work flawlessly under pressure—optimizing for speed, offline capability, and reliability regardless of network conditions.
                    </p>
                  </m.div>

                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-10 bg-emerald-50/70 border border-emerald-200/80 rounded-3xl"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest mb-3 block">03 / Partnership</span>
                    <h3 className="text-2xl font-bold text-zinc-950 mb-3">Boutique Engineering Pods</h3>
                    <p className="text-zinc-700 leading-relaxed">
                      We intentionally partner with a focused number of clients at a time. This allows our senior architects to integrate deeply with your team, acting as your dedicated engineering department rather than a distant agency.
                    </p>
                  </m.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership Team Section (Balanced 3-Column Grid for 3 Members) */}
        <section className="py-20 md:py-24 bg-zinc-50 border-y border-zinc-200/70">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="max-w-xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-4">
                Meet the <span className="font-serif italic text-emerald-700 font-medium tracking-normal">leadership.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                A dedicated team of engineers, architects, and problem solvers committed to delivering reliable software systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {team.map((member, i) => (
                <m.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-4 rounded-3xl border border-zinc-200/80 shadow-2xs"
                >
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-5 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="text-xl font-bold text-zinc-950">{member.name}</h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-1">{member.role}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-4">
                Our Operating Principles
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base">
                The non-negotiable standards that guide every line of code and client partnership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <m.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-7 sm:p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 flex gap-5 items-start group hover:bg-white hover:border-zinc-950 transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center group-hover:bg-zinc-950 transition-colors">
                    <value.icon className="w-5 h-5 text-zinc-700 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-2">{value.title}</h3>
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Refined Minimal CTA */}
        <section className="pt-16 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-6">
              Ready to build something great?
            </h2>
            <p className="text-zinc-600 text-base mb-8 max-w-xl mx-auto">
              Speak directly with our lead engineers or calculate a ballpark estimate for your project in 60 seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-white font-semibold text-sm rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-zinc-900 border border-zinc-200 font-semibold text-sm rounded-full hover:bg-zinc-50 transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
  );
}
