'use client';

import { Check } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

const testimonials = [
  {
    quote: 'Easyio transformed our core infrastructure. Operational performance improved 3x in the first quarter post-deployment.',
    author: 'CEO, Fintech Group',
    company: 'Institutional Portfolio',
  },
  {
    quote: 'Their architects designed a system that scales seamlessly across jurisdictions. The precision is unmatched.',
    author: 'CTO, Quantum AI',
    company: 'Enterprise Infrastructure',
  },
  {
    quote: 'The most capable engineering collective we\'ve worked with. They don\'t just build; they architect for destiny.',
    author: 'VP Engineering, SaaS Flow',
    company: 'High-Growth Sector',
  },
];

export default function Testimonials() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <h2 className="heading-2 mb-8">
            <TextReveal>TRUSTED BY THE FRONTIER.</TextReveal>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-base card-hover p-12 flex flex-col h-full group">
                <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <Check className="w-3 h-3 text-emerald-500" />
                  Verified Partner
                </div>
                <p className="text-xl md:text-2xl text-zinc-500 font-medium italic mb-12 leading-relaxed flex-grow">
                  "{t.quote}"
                </p>
                <div className="pt-8 border-t border-zinc-50 dark:border-zinc-900 mt-auto">
                  <p className="text-lg font-bold text-zinc-950 dark:text-white uppercase tracking-tight">{t.author}</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-[0.3em]">{t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
