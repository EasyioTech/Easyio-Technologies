'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal, FadeIn } from "@/components/shared/Animations";

const faqs = [
  {
    q: 'What is your core engineering philosophy?',
    a: 'We prioritize reliability and technical excellence. Our systems are built to be modular and scalable, ensuring they can handle your business growth without performance drops.',
  },
  {
    q: 'How do we start a project with you?',
    a: 'You can reach out through our contact page. We begin with a thorough audit of your current technology to identify improvements before designing a custom solution.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We use industry-leading tools like Rust and Go for backend systems, TypeScript for modern web interfaces, and PostgreSQL for robust data management.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Yes, we offer team augmentation services. Our senior engineers can integrate with your current workflow to help you meet deadlines and improve overall code quality.',
  },
  {
    q: 'What does your Typical timeline look like?',
    a: 'We work in focused sprints to deliver results quickly. From our initial meeting to a working system, we focus on moving fast without sacrificing stability.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-40 px-6 relative bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-32 text-center">
          <h2 className="heading-2">
            <TextReveal>COMMON QUESTIONS.</TextReveal>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${
                  open === i 
                  ? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-lg' 
                  : 'bg-white dark:bg-zinc-950 border-zinc-100 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-10 text-left flex items-center justify-between gap-6 group"
                >
                  <h3 className={`text-xl font-bold uppercase tracking-tight transition-colors ${
                    open === i ? 'text-zinc-950 dark:text-white' : 'text-zinc-500 dark:text-zinc-600'
                  }`}>
                    {faq.q}
                  </h3>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-700 ${
                      open === i 
                      ? 'bg-zinc-950 dark:bg-white border-zinc-950 dark:border-white text-white dark:text-black rotate-180' 
                      : 'bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 group-hover:border-zinc-400'
                  }`}>
                      <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-10 pb-10 border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-2">
                        <p className="text-xl text-zinc-500 font-medium italic leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
