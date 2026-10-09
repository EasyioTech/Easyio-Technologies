'use client';

import PageWrapper from "@/components/layout/PageWrapper";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Zap, ShieldCheck, HardDrive, Target, Code2, Rocket } from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";

const values = [
  {
    title: "Engineering Excellence",
    desc: "We don't cut corners. Every line of code is written with scale, security, and performance in mind.",
    icon: Code2,
  },
  {
    title: "Absolute Ownership",
    desc: "No vendor lock-ins. We build custom intellectual property that your business owns completely.",
    icon: ShieldCheck,
  },
  {
    title: "Radical Transparency",
    desc: "Clear communication, direct access to developers, and honest timelines. No corporate jargon.",
    icon: Target,
  },
  {
    title: "Built for Speed",
    desc: "From execution to application runtime, we optimize for speed to keep you ahead of the market.",
    icon: Rocket,
  }
];

const team = [
  { name: "Arsalan K.", role: "Founder & Lead Architect", image: "/images/avatar_1.jpg" },
  { name: "Suhaib M.", role: "Senior Engineer", image: "/images/avatar_2.jpg" },
  { name: "Shariq B.", role: "Product Designer", image: "/images/avatar_3.jpg" },
  { name: "Ayaan R.", role: "Full Stack Developer", image: "/images/avatar_4.jpg" }
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="w-full bg-white text-zinc-900 font-sans pb-20">
        
        {/* Editorial Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 relative overflow-hidden border-b border-zinc-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Our Story</span>
                </div>
                <PremiumHeading 
                  text="Building digital infrastructure from the Valley."
                  highlightWords={["infrastructure", "Valley."]}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 mb-6 leading-[1.05]"
                  highlightClassName="text-emerald-600"
                />
              </div>
              
              <div className="pb-4">
                <PremiumSubheading 
                  delay={0.2}
                  text="Easyio Technologies was founded with a singular mission: to prove that world-class software engineering and scalable enterprise architecture can be built from anywhere."
                  className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Sticky Scroll Section */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 relative">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6">
                    We engineer for the long term.
                  </h2>
                  <p className="text-zinc-500 leading-relaxed font-medium mb-8">
                    In a market flooded with templated solutions and bloated agencies, we stand as a dedicated technical partner. We don't just write code; we build the foundational systems that allow your business to scale without friction.
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm font-bold text-zinc-900">
                     <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                       <MapPin className="w-4 h-4 text-emerald-600" />
                     </div>
                     HQ: Sopore, Kashmir
                  </div>
                </div>
              </div>

              {/* Scrolling Content */}
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-12">
                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-12 bg-zinc-50 border border-zinc-100 rounded-3xl"
                  >
                    <span className="text-4xl font-serif italic text-zinc-300 mb-6 block">01</span>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Deep Technical Roots</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      We are engineers first. Our team specializes in complex backend architectures, high-performance web applications, and resilient cloud infrastructure. We obsess over the details that others ignore.
                    </p>
                  </m.div>

                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-12 bg-zinc-950 text-white rounded-3xl"
                  >
                    <span className="text-4xl font-serif italic text-emerald-500/50 mb-6 block">02</span>
                    <h3 className="text-2xl font-bold text-white mb-4">The Kashmir Advantage</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Operating from Sopore gives us a unique perspective on building resilient software. We architect systems that work flawlessly under pressure, optimizing for speed, efficiency, and reliability regardless of network conditions.
                    </p>
                  </m.div>

                  <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-12 bg-emerald-50 border border-emerald-100 rounded-3xl"
                  >
                    <span className="text-4xl font-serif italic text-emerald-300 mb-6 block">03</span>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-4">Boutique Approach</h3>
                    <p className="text-emerald-900/70 leading-relaxed">
                      We intentionally take on a limited number of clients. This allows us to integrate deeply with your team, acting as your dedicated CTO and engineering department rather than just an outsourced agency.
                    </p>
                  </m.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                  Meet the team.
                </h2>
                <p className="text-zinc-500 font-medium">
                  A tight-knit group of engineers, designers, and problem solvers dedicated to pushing the boundaries of what's possible.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <m.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 mb-6 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900">{member.name}</h4>
                  <p className="text-sm font-medium text-emerald-600 mt-1">{member.role}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid - Minimal List Style */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6">
                Our Operating Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((value, i) => (
                <m.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                    <value.icon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h4>
                    <p className="text-zinc-600 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Refined Minimal CTA */}
        <section className="py-24 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-8">
              Ready to build something great?
            </h2>
            <div className="flex items-center justify-center gap-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-semibold text-sm rounded-xl hover:bg-emerald-600 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 border border-zinc-200 font-semibold text-sm rounded-xl hover:bg-zinc-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
