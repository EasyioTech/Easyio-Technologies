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
      <div className="flex flex-col gap-6 pb-6">
        {props.testimonials.map(({ text, image, name, role }, i) => (
          <div className="p-10 rounded-3xl border border-zinc-100 bg-white shadow-xl shadow-zinc-950/5 max-w-xs w-full" key={i}>
            <div className="text-zinc-600 leading-relaxed font-medium italic mb-6">"{text}"</div>
            <div className="flex items-center gap-3 mt-5">
              <img
                width={40}
                height={40}
                src={image}
                alt={name}
                className="h-10 w-10 rounded-full border border-zinc-100 object-cover"
              />
              <div className="flex flex-col">
                <div className="font-bold text-zinc-950 tracking-tight leading-none mb-1">{name}</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
