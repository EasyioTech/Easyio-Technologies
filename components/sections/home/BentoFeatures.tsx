'use client';

import { useEffect, useRef } from "react";
import { PremiumHeading } from "@/components/shared/PremiumHeading";

const solutions = [
  {
    id: "01",
    name: "Custom Business Software",
    highlightWords: ["Custom", "Business", "Software"],
    paragraph:
      "We build powerful software that solves complex business problems. Our systems are fast, reliable, and built to handle your unique needs perfectly.",
    metric: "High efficiency",
  },
  {
    id: "02",
    name: "Fast & Reliable Cloud",
    highlightWords: ["Fast", "Reliable", "Cloud"],
    paragraph:
      "Modern cloud systems designed to grow with your business. We ensure your data is always safe and your website stays online even during busy times.",
    metric: "99.999% uptime",
  },
  {
    id: "03",
    name: "Extreme Speed",
    highlightWords: ["Extreme", "Speed"],
    paragraph:
      "We optimize every second of your user's journey. By removing lag and improving loading times, we make sure your customers never have to wait.",
    metric: "Instant loading",
  },
  {
    id: "04",
    name: "Safe & Secure",
    highlightWords: ["Safe", "Secure"],
    paragraph:
      "Security is at the heart of everything we build. We use industry-leading encryption to keep your customer data private and protected.",
    metric: "Enterprise Grade",
  },
  {
    id: "05",
    name: "Global Sync",
    highlightWords: ["Global", "Sync"],
    paragraph:
      "Your data stays in sync across the world. No matter where your customers are, they get the same fast and consistent experience.",
    metric: "Global Network",
  },
];

export default function BentoFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const rows = gsap.utils.toArray<HTMLElement>(".sovereign-row");

        rows.forEach((row) => {
          const index = row.querySelector(".sovereign-index");
          const name = row.querySelector(".sovereign-name");
          const words = row.querySelectorAll<HTMLElement>(".sovereign-word");
          const metric = row.querySelector(".sovereign-metric");
          const divider = row.querySelector(".sovereign-divider");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              end: "bottom 30%",
              scrub: 1.2,
            },
          });

          // Index number fades in
          tl.fromTo(
            index,
            { opacity: 0, x: -16 },
            { opacity: 0.06, x: 0, duration: 0.8 },
            0
          );

          // Section name reveals
          tl.fromTo(
            name,
            { opacity: 0.15, y: 12, color: "#a1a1aa" },
            { opacity: 1, y: 0, color: "#09090b", duration: 1 },
            0.1
          );

          // Each word in the paragraph animates in sequence
          words.forEach((word, i) => {
            const isHighlighted = word.dataset.highlight === "true";
            tl.fromTo(
              word,
              { opacity: 0.08, color: "#d4d4d8", y: 8 },
              {
                opacity: 1,
                color: isHighlighted ? "#2563eb" : "#3f3f46",
                y: 0,
                duration: 0.6,
              },
              0.2 + i * 0.04
            );
          });

          // Metric + divider
          tl.fromTo(
            [metric, divider],
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.5 },
            0.5
          );
        });
      }, sectionRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-64 overflow-hidden bg-white"
      id="capabilities"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-40 max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase">
              Capabilities & Protocols
            </span>
          </div>
          <PremiumHeading
            text="Industrial Grade System Architectures."
            highlightWords={["Industrial", "Grade"]}
            className="text-5xl md:text-9xl font-black tracking-tighter text-zinc-950 leading-none"
          />
        </div>

        {/* Narrative paragraph flow */}
        <div className="space-y-40 md:space-y-72">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="sovereign-row relative grid grid-cols-1 md:grid-cols-12 gap-12"
            >
              {/* Ghost index number */}
              <div className="sovereign-index absolute -left-4 md:-left-20 top-0 text-[18vw] md:text-[14vw] font-black text-zinc-950 opacity-0 pointer-events-none select-none tracking-tighter leading-none">
                {sol.id}
              </div>

              {/* Name column */}
              <div className="md:col-span-4 relative z-10 pt-4">
                <h3 className="sovereign-name text-3xl md:text-5xl font-black text-zinc-300 tracking-tighter leading-none uppercase">
                  {sol.name}
                </h3>
              </div>

              {/* Paragraph column */}
              <div className="md:col-span-8 relative z-10">
                <p className="text-2xl md:text-5xl font-medium leading-[1.15] tracking-tight">
                  {sol.paragraph.split(" ").map((word, i) => {
                    const clean = word.replace(/[^a-zA-Z]/g, "");
                    const isHighlighted = sol.highlightWords.some(
                      (h) => clean.toLowerCase() === h.toLowerCase()
                    );
                    return (
                      <span
                        key={i}
                        className="sovereign-word inline-block mr-[0.28em] mb-1"
                        data-highlight={isHighlighted ? "true" : "false"}
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>

                <div className="mt-16 flex items-center gap-6">
                  <div className="sovereign-divider h-px flex-1 bg-zinc-100" />
                  <span className="sovereign-metric text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                    {sol.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outro bar */}
        <div className="mt-80 pt-20 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-zinc-200 flex items-center justify-center">
              <div className="w-2 h-2 bg-zinc-950" />
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase">
              Mission Critical
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Operational sovereignty guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
