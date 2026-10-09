"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FadeIn } from "@/components/shared/Animations";

const testimonials = [
  {
    text: "Easyio developed a custom inventory system for our retail chain in Srinagar. It completely removed our manual bottlenecks and increased efficiency.",
    image: "/images/avatar_1.jpg",
    name: "Tariq Ahmad",
    role: "Director, Valley Retail Solutions",
  },
  {
    text: "The e-commerce platform they built helped our authentic Kashmiri handicrafts reach a global audience. The load times are incredible.",
    image: "/images/avatar_2.jpg",
    name: "Ayesha Qazi",
    role: "Founder, Kashmir Artisans",
  },
  {
    text: "We needed a robust booking system for our hotel in Gulmarg. Easyio delivered a seamless solution that integrated perfectly with our payment gateways.",
    image: "/images/avatar_3.jpg",
    name: "Muneeb Shah",
    role: "Operations Manager, Highland Resorts",
  },
  {
    text: "Their team in Srinagar understands the local market constraints but delivers world-class software. Highly recommend them for MVP development.",
    image: "/images/avatar_4.jpg",
    name: "Iqra Jan",
    role: "Co-Founder, TechValley Logistics",
  },
  {
    text: "Our educational institute needed a custom LMS. Easyio built a platform that handles thousands of students without a hitch.",
    image: "/images/avatar_1.jpg",
    name: "Dr. Fayaz",
    role: "Director, Apex Academy",
  },
  {
    text: "The migration to a cloud-native architecture was handled brilliantly. We haven't had a single hour of downtime since.",
    image: "/images/avatar_2.jpg",
    name: "Bilal Bhat",
    role: "IT Head, Kashmir Healthcare",
  },
  {
    text: "Professional, communicative, and technically brilliant. They built our mobile delivery app from scratch in just three months.",
    image: "/images/avatar_3.jpg",
    name: "Sameer Dar",
    role: "CEO, QuickDeliver Srinagar",
  },
  {
    text: "We shifted from generic SaaS to a custom ERP built by Easyio. It fits our local supply chain needs perfectly.",
    image: "/images/avatar_4.jpg",
    name: "Umer Farooq",
    role: "Operations Lead, J&K Distributors",
  },
  {
    text: "Their UI/UX design is unmatched in the valley. They gave our brand a modern, international feel.",
    image: "/images/avatar_1.jpg",
    name: "Zainab Wani",
    role: "Marketing Director, Alpine Travels",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

import { PremiumHeading } from "@/components/shared/PremiumHeading";

const Testimonials = () => {
  return (
    <section className="pt-8 pb-32 md:pt-12 md:pb-48 bg-transparent relative overflow-hidden" id="testimonials">
      <div className="container relative z-10 mx-auto px-6">
        {/* Stylish Hero-style Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full bg-[radial-gradient(circle_at_50%_0%,#FEF9C3_0%,transparent_50%)] opacity-20" />
        </div>

        {/* Header - Hero Style Hierarchy */}
        <div className="text-center mb-24 relative z-10">
          <PremiumHeading 
            text="Trusted by Industry Leaders"
            highlightWords={["Leaders"]}
            as="h2"
            className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-950 mb-8 leading-tight"
          />
          <p className="text-zinc-500 max-w-xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            See how modern teams transform their business and ship faster 
            using our custom software solutions.
          </p>
        </div>

        {/* Animated 3-Column Layout */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          {/* Column 1 */}
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          
          {/* Column 2 */}
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={22} 
          />
          
          {/* Column 3 */}
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={18} 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
