'use client';

import { useEffect, useRef } from "react";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description: "We help you define your voice and stand out in the noise. Strategic positioning and visual identities that turn startups into iconic brands.",
  },
  {
    id: "02",
    title: "Web Engineering",
    description: "Fast, reliable, and beautifully crafted websites. We use the latest tech to build high-performance products that your users will love.",
  },
  {
    id: "03",
    title: "Growth Systems",
    description: "Smart acquisition and marketing strategies to scale your business. We focus on results, not just numbers, to help you grow sustainably.",
  },
  {
    id: "04",
    title: "Product Design",
    description: "Intuitive user interfaces that look amazing and work perfectly. We design with your users in mind, making every interaction feel natural.",
  },
  {
    id: "05",
    title: "Data Insights",
    description: "Simple, actionable analytics to help you make better decisions. No complex jargon, just the insights you need to move forward faster.",
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".service-row");
        
        panels.forEach((panel) => {
          const title = panel.querySelector(".service-title");
          const description = panel.querySelector(".service-desc");
          const index = panel.querySelector(".service-index");

          gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            }
          })
          .fromTo(index, { opacity: 0, x: -20 }, { opacity: 0.05, x: 0, duration: 1 })
          .fromTo(title, { opacity: 0.2, color: "#a1a1aa" }, { opacity: 1, color: "#09090b", duration: 1 }, "-=0.8")
          .fromTo(description, { opacity: 0.1, color: "#d4d4d8", y: 10 }, { opacity: 1, color: "#52525b", y: 0, duration: 1.2 }, "-=0.8");
        });
      }, sectionRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-64 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simple & Clean */}
        <div className="mb-40 max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-1.5 bg-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase">
              Our Services
            </span>
          </div>
          <PremiumHeading
            text="Building the next big thing."
            highlightWords={["big", "thing."]}
            className="text-5xl md:text-9xl font-black tracking-tighter text-zinc-950 leading-[0.85]"
          />
        </div>

        {/* Narrative Paragraph Flow */}
        <div className="space-y-40 md:space-y-72">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-row relative grid grid-cols-1 md:grid-cols-12 gap-12"
            >
              {/* Index Number */}
              <div className="service-index absolute -left-4 md:-left-20 top-0 text-[18vw] md:text-[14vw] font-black text-zinc-950 opacity-0 pointer-events-none select-none tracking-tighter">
                {service.id}
              </div>

              {/* Title Section */}
              <div className="md:col-span-4 relative z-10 pt-4">
                <h3 className="service-title text-3xl md:text-6xl font-black text-zinc-300 tracking-tighter leading-[0.9] uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Description Section */}
              <div className="md:col-span-8 relative z-10">
                <p className="service-desc text-2xl md:text-5xl font-medium text-zinc-200 leading-[1.1] tracking-tight">
                  {service.description}
                </p>
                
                <div className="mt-16 flex items-center gap-6">
                   <div className="h-px flex-1 bg-zinc-100" />
                   <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest">
                     Built for you
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Outro */}
        <div className="mt-80 pt-20 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 border border-zinc-200 flex items-center justify-center">
                 <div className="w-2 h-2 bg-zinc-950" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase">Launch Ready</span>
           </div>
           <span className="text-[10px] uppercase tracking-[0.2em]">Ready to build your vision</span>
        </div>

      </div>
    </section>
  );
}
