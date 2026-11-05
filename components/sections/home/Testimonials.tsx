"use client";

import { PremiumHeading } from "@/components/shared/PremiumHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Easyio developed a custom inventory system for our retail chain in Srinagar. It completely removed our manual bottlenecks and increased efficiency.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tariq Ahmad",
    name: "Tariq Ahmad",
    role: "Director, Valley Retail Solutions",
  },
  {
    text: "The e-commerce platform they built helped our authentic Kashmiri handicrafts reach a global audience. The load times are incredible.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha Qazi",
    name: "Ayesha Qazi",
    role: "Founder, Kashmir Artisans",
  },
  {
    text: "We needed a robust booking system for our hotel in Gulmarg. Easyio delivered a seamless solution that integrated perfectly with our payment gateways.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muneeb Shah",
    name: "Muneeb Shah",
    role: "Operations Manager, Highland Resorts",
  },
  {
    text: "Their team in Srinagar understands the local market constraints but delivers world-class software. Highly recommend them for MVP development.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Iqra Jan",
    name: "Iqra Jan",
    role: "Co-Founder, TechValley Logistics",
  },
  {
    text: "Our educational institute needed a custom LMS. Easyio built a platform that handles thousands of students without a hitch.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dr Fayaz",
    name: "Dr. Fayaz",
    role: "Director, Apex Academy",
  },
  {
    text: "The migration to a cloud-native architecture was handled brilliantly. We haven't had a single hour of downtime since.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal Bhat",
    name: "Bilal Bhat",
    role: "IT Head, Kashmir Healthcare",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-28 bg-zinc-50/60 border-y border-zinc-200/70 relative overflow-hidden mobile-section-content" id="testimonials">
      <div className="max-w-7xl relative z-10 mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold shadow-2xs mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Client Outcomes</span>
          </div>
          <PremiumHeading
            text="Trusted by Industry Leaders"
            highlightWords={["Leaders"]}
            as="h2"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 mb-4 leading-tight"
          />
          <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            See how modern organizations transform their operations and ship faster using our custom software solutions.
          </p>
        </div>

        {/* Clean, Readable Static Grid on Desktop & Snap Carousel on Mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map(({ text, image, name, role }, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[85%] sm:w-[340px] md:w-auto p-6 sm:p-8 rounded-3xl border border-zinc-200/80 bg-white shadow-2xs hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;{text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 mt-auto">
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
    </section>
  );
};

export default Testimonials;
