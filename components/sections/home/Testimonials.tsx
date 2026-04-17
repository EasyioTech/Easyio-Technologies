'use client';

import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/shared/Animations";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: any[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-colors max-w-xs w-full group"
                key={i}
              >
                <div className="text-zinc-600 dark:text-zinc-400 font-medium italic leading-relaxed text-sm md:text-base">
                  "{text}"
                </div>
                <div className="flex items-center gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  {image && image.trim() !== "" ? (
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-9 w-9 md:h-11 md:w-11 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-200 dark:border-zinc-800 object-cover"
                    />
                  ) : (
                    <div className="h-9 w-9 md:h-11 md:w-11 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-black uppercase text-zinc-500 dark:text-zinc-500">
                      {name.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="font-black uppercase tracking-tight leading-none text-foreground text-xs md:text-sm">{name}</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-40 mt-1 dark:text-zinc-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials({ initialTestimonials }: { initialTestimonials: any[] }) {
  const testimonials = (initialTestimonials || []).map(t => ({
    text: t.content,
    image: t.avatar,
    name: t.name,
    role: t.role
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="py-16 md:py-40 bg-transparent relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 md:mb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-6 md:mb-8">
             Testimonials
          </div>

          <h2 className="heading-2 md:text-6xl mb-0">
            <TextReveal>Trusted by global teams.</TextReveal>
          </h2>
          <p className="text-base md:text-xl text-zinc-500 font-medium italic mt-6 md:mt-8 max-w-lg">
            Our platform powers operations across the globe. Here is what our partners have to say.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] md:max-h-[700px] lg:max-h-[800px] overflow-hidden w-full px-6 md:px-0">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden sm:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
