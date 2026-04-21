'use client';

import { useState } from 'react';
import { Plus, Minus, Search, ArrowDown } from 'lucide-react';
import { FadeIn, TextReveal } from "@/components/shared/Animations";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
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
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden" id="faq">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Header */}
          <div className="lg:col-span-5">
             <div className="sticky top-40">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">Infrastructure Support</span>
                </div>
                <PremiumHeading 
                  text="Frequently Asked."
                  highlightWords={["Asked."]}
                  as="h2"
                  className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-950 leading-[0.8] mb-10"
                />
                <p className="text-lg md:text-xl text-zinc-500 max-w-sm leading-relaxed border-l-2 border-zinc-100 pl-8 font-medium">
                   Technical parameters and operational protocols for our high-velocity engineering deployments. 
                </p>
             </div>
          </div>

          {/* List */}
          <div className="lg:col-span-7 space-y-2">
             {faqs.map((faq, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className={`rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 overflow-hidden ${openIndex === i ? 'bg-[#FEF9C3]/80 border-transparent shadow-2xl shadow-yellow-200/20' : 'bg-transparent border-transparent hover:bg-[#D1FAE5]/30'}`}
               >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 md:py-12 px-6 md:px-10 text-left flex items-center justify-between group"
                  >
                     <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-[10px] md:text-xs font-mono text-zinc-300 font-bold">0{i+1}</span>
                        <h3 className="text-lg md:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-zinc-600 transition-colors">
                           {faq.question}
                        </h3>
                     </div>
                     <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-[#D1FAE5] border-[#D1FAE5] text-zinc-950 rotate-180' : 'bg-white border-zinc-100 text-zinc-400 group-hover:border-zinc-200'}`}>
                        <ArrowDown className="w-5 h-5" />
                     </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                         <div className="px-6 md:px-10 pb-10 md:pb-12 pl-[calc(24px+2.5rem)] md:pl-[calc(40px+4.5rem)]">
                            <p className="text-base md:text-xl text-zinc-500 leading-relaxed max-w-2xl">
                               {faq.answer}
                            </p>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
