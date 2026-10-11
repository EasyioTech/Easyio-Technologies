'use client';

import { useState } from 'react';
import { Plus, Minus, Search, ArrowDown } from 'lucide-react';
import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import { m, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why is Easyio Technologies considered the best tech company in Kashmir?",
    answer: "Easyio Technologies combines Silicon Valley engineering standards with deep regional expertise. Headquartered in Sopore with active operations across Srinagar, we build custom business ERPs, high-performance web applications, iOS/Android mobile apps, and enterprise AI integrations with full source-code ownership and zero vendor lock-in.",
    category: "Recognition"
  },
  {
    question: "Do you offer support after the project is done?",
    answer: "Yes, we provide 3 months of priority support once your project is live. This ensures everything runs smoothly during the launch. We also offer long-term maintenance plans if you need ongoing help.",
    category: "Support"
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects take between 4 and 12 weeks. We move fast to hit your deadlines but we never cut corners on quality or security.",
    category: "Timeline"
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We can join your internal developers as a specialized team to help finish complex features faster and improve your overall system design.",
    category: "Collaboration"
  },
  {
    question: "How do you keep our data secure?",
    answer: "We use modern security standards, including advanced encryption and secure access controls, to make sure your sensitive information is always protected.",
    category: "Security"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-32 bg-transparent relative overflow-hidden mobile-section-content" id="faq">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-5">
             <div className="lg:sticky lg:top-40">
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-zinc-500">Infrastructure Support</span>
                </div>
                <PremiumHeading 
                  text="Frequently Asked."
                  highlightWords={["Asked."]}
                  as="h2"
                  className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-zinc-950 leading-tight md:leading-[0.8] mb-4 md:mb-10"
                />
                <p className="text-sm sm:text-base md:text-xl text-zinc-500 max-w-sm leading-relaxed border-l-2 border-zinc-100 pl-4 md:pl-8 font-medium">
                   Technical parameters and operational protocols for our high-velocity engineering deployments. 
                </p>
             </div>
          </div>

          {/* List */}
          <div className="lg:col-span-7 space-y-2">
             {faqs.map((faq, i) => (
               <div 
                 key={i} 
                 className={`rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-[#FEF9C3]/80 border-transparent shadow-xl md:shadow-2xl shadow-yellow-200/20' : 'bg-transparent border-transparent hover:bg-[#D1FAE5]/30'}`}
               >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-5 sm:py-8 md:py-12 px-4 sm:px-6 md:px-10 text-left flex items-center justify-between gap-4 group"
                  >
                     <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-mono text-zinc-300 font-bold">0{i+1}</span>
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-zinc-600 transition-colors leading-snug">
                           {faq.question}
                        </h3>
                     </div>
                     <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#D1FAE5] border-[#D1FAE5] text-zinc-950 rotate-180' : 'bg-white border-zinc-100 text-zinc-400 group-hover:border-zinc-200'}`}>
                        <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
                     </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <m.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                         <div className="px-4 sm:px-6 md:px-10 pb-6 sm:pb-10 md:pb-12 pl-12 sm:pl-[calc(24px+2.5rem)] md:pl-[calc(40px+4.5rem)]">
                            <p className="text-sm sm:text-base md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                               {faq.answer}
                            </p>
                         </div>
                      </m.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
