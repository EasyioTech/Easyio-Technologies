"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FadeIn } from "@/components/shared/Animations";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="px-4 py-1.5 bg-white border border-zinc-100 rounded-full shadow-sm">
                <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest ">Customer Stories</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-950 mb-8 leading-tight">
              Trusted by <br />
              <span className="font-serif italic font-medium text-zinc-400">Industry Leaders</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
              See how modern teams transform their business and ship faster 
              using our custom software solutions.
            </p>
          </FadeIn>
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
