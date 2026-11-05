"use client";

import React from "react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <div
        style={{
          animationDuration: `${props.duration || 25}s`,
        }}
        className="flex flex-col gap-6 pb-6 animate-[ testimonial-scroll_linear_infinite ] hover:[animation-play-state:paused]"
      >
        {[...props.testimonials, ...props.testimonials].map(({ text, image, name, role }, i) => (
          <div
            className="p-7 sm:p-8 rounded-3xl border border-zinc-200/80 bg-white shadow-sm hover:border-zinc-300 transition-colors max-w-sm w-full"
            key={i}
          >
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6">
              &ldquo;{text}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
              <img
                width={40}
                height={40}
                src={image}
                alt={name}
                className="h-10 w-10 rounded-full border border-zinc-200 object-cover bg-zinc-50"
              />
              <div className="flex flex-col">
                <div className="font-bold text-zinc-950 tracking-tight leading-snug text-sm">
                  {name}
                </div>
                <div className="text-xs font-medium text-zinc-500">
                  {role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
