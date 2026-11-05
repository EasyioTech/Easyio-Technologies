'use client';

import { Code2, ArrowUpRight, Database, Smartphone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const services = [
  {
    id: "01",
    title: "SaaS Applications",
    href: "/saas-application-development-kashmir",
    icon: Code2,
    description: "Transform your startup vision into a scalable, multi-tenant SaaS product.",
    tag: "Cloud Native"
  },
  {
    id: "02",
    title: "Custom ERP",
    href: "/custom-erp-software-development-kashmir",
    icon: Database,
    description: "Tailored operational & billing software for enterprises in Jammu & Kashmir.",
    tag: "Enterprise"
  },
  {
    id: "03",
    title: "Mobile Apps",
    href: "/mobile-app-development-company-kashmir",
    icon: Smartphone,
    description: "High-performance iOS and Android applications engineered for offline resilience.",
    tag: "iOS & Android"
  },
  {
    id: "04",
    title: "E-Commerce",
    href: "/ecommerce-website-development-srinagar",
    icon: ShoppingCart,
    description: "Launch a high-conversion online storefront and sell globally with instant checkout.",
    tag: "Global Commerce"
  }
];

export default function Services() {
  return (
    <section className="relative py-16 md:py-28 bg-transparent overflow-hidden mobile-section-content" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                What We Offer
              </span>
            </div>
            <PremiumHeading
              text="Building the next big thing."
              highlightWords={["big", "thing."]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-zinc-950 leading-tight"
            />
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-emerald-600 transition-colors shrink-0"
          >
            <span>View All Technical Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services List - Editorial & Cohesive */}
        <div className="border-t border-zinc-200/80">
          {services.map((service) => (
            <Link href={service.href} key={service.id} className="block group">
              <div className="relative border-b border-zinc-200/80 py-7 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 hover:bg-white/80 transition-all duration-300 px-4 -mx-4 rounded-2xl">
                {/* Left: Index & Title */}
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 flex-1">
                  <span className="text-xs sm:text-sm font-mono font-bold text-zinc-400 group-hover:text-emerald-600 transition-colors">
                    {service.id}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight group-hover:translate-x-1.5 group-hover:text-emerald-700 transition-all duration-300">
                      {service.title}
                    </h3>
                    <span className="w-fit text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/70">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Right: Description & Icon */}
                <div className="flex items-center justify-between gap-6 md:gap-10 w-full md:w-auto pl-8 sm:pl-12 md:pl-0">
                  <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-sm leading-relaxed group-hover:text-zinc-900 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-end shrink-0 gap-3 md:gap-6">
                    <div className="w-11 h-11 md:w-13 md:h-13 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-center shadow-2xs group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-zinc-800 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Focused CTA Banner */}
        <div className="mt-16 md:mt-24 p-8 sm:p-12 md:p-16 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Custom Architecture &amp; Delivery
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-3 leading-tight">
              Ready to build your vision?
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Partner with our senior engineering team to design, build, and launch your custom software system.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="h-12 sm:h-14 px-7 sm:px-8 bg-white text-zinc-950 font-bold tracking-wide text-xs sm:text-sm rounded-full flex items-center gap-2.5 hover:bg-emerald-400 transition-colors shadow-lg active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/project-estimator"
              className="h-12 sm:h-14 px-6 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 font-semibold text-xs sm:text-sm rounded-full flex items-center transition-colors"
            >
              <span>Cost Calculator</span>
            </Link>
          </div>

          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
