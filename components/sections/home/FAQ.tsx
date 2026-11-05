'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import { m, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why is Easyio Technologies considered the best tech company in Kashmir?",
    answer: "Easyio Technologies combines Silicon Valley engineering standards with deep regional expertise. Headquartered in Sopore with active operations across Srinagar, we build custom business ERPs, high-performance web applications, iOS/Android mobile apps, and enterprise AI integrations with full source-code ownership and zero vendor lock-in.",
    category: "Recognition"
  },
  {
    question: "Do you offer support after the project is launched?",
    answer: "Yes, every deployment includes a complimentary 30-day bug-free warranty plus 3 months of priority launch support. We also offer dedicated long-term SLA maintenance plans as your user base grows.",
    category: "Support"
  },
  {
    question: "How long does a typical software project take?",
    answer: "Most projects take between 4 and 10 weeks, structured in transparent two-week milestone sprints. You test live staging previews at the end of every sprint before moving to the next phase.",
    category: "Timeline"
  },
  {
    question: "Can you integrate with our existing internal engineering team?",
    answer: "Absolutely. Our senior engineers can embed directly into your Slack, GitHub, and Linear/Jira workflows to accelerate complex feature delivery and modernize system architecture.",
    category: "Collaboration"
  },
  {
    question: "How do you protect our intellectual property and sensitive data?",
    answer: "We sign a legally binding mutual NDA before any technical discovery, enforce role-based access control and encryption, and push 100% of code directly to your private repository.",
    category: "Security"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-28 bg-transparent relative overflow-hidden mobile-section-content" id="faq">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Answers &amp; Clarity</span>
              </div>
              <PremiumHeading 
                text="Frequently Asked Questions."
                highlightWords={["Questions."]}
                as="h2"
                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-tight mb-4"
              />
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-sm leading-relaxed">
                Clear answers about our engineering process, timelines, IP ownership, and post-launch support.
              </p>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div 
                  key={i} 
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-zinc-950 shadow-lg shadow-zinc-200/50'
                      : 'bg-white/80 border-zinc-200/90 hover:border-zinc-300'
                  }`}
                >
                  <h3>
                    <button 
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full py-5 sm:py-6 px-5 sm:px-7 text-left flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                        <span className="text-xs font-mono text-emerald-700 font-bold pt-1 sm:pt-0">
                          0{i + 1}
                        </span>
                        <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-950 group-hover:text-emerald-700 transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? 'bg-zinc-950 border-zinc-950 text-white rotate-180'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-600 group-hover:border-zinc-300'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div 
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-6 sm:pb-7 pl-12 sm:pl-16">
                          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
