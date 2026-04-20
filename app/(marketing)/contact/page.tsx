import { Mail, MapPin, Terminal, Phone, Globe } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Contact | Easyio Engineering",
  description: "Initialize your project with Easyio. High-fidelity architectural consultation for enterprise-scale software solutions.",
  keywords: "software consultation srinagar, it support kashmir, build software srinagar, custom project estimation"
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="min-h-[50vh] pt-32 md:pt-48 pb-12 relative bg-white flex items-center">
        {/* Stylish Hero-style Background */}
        <div className="absolute inset-0 z-0 pointer-events-none mesh-gradient overflow-visible">
          {/* Subtle Image Backdrop - Extended Height */}
          <div className="absolute top-0 left-0 w-full h-[140%] z-0 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-[0.2] grayscale contrast-125 brightness-110"
               alt=""
             />
             {/* Gradient Fades for Text Readability & Bottom Blend */}
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white" />
          </div>
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] contrast-150" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-3 bg-emerald-50 px-4 py-1.5 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-900 leading-none">We're Online</span>
              </div>
            </FadeIn>

            <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[100px] font-bold tracking-tight text-zinc-950 mb-8 leading-[0.85] text-left">
              Let's Build <br />
              <span className="font-serif italic font-medium text-zinc-400">your Vision.</span>
            </h1>

            <FadeIn delay={0.2}>
              <p className="text-zinc-600 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                Have a project in mind? We'd love to hear from you.
                Our team is ready to help you build your next big idea.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* Left Side: Contact Cards */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <FadeIn delay={0.4}>
                <div className="p-10 bg-white border border-zinc-100 rounded-3xl h-full flex flex-col justify-center shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-50 pb-4">Contact Protocol</div>
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">Email Address</span>
                      <a href={`mailto:${siteConfig.email.contact}`} className="text-xl md:text-2xl font-bold text-zinc-950 hover:text-emerald-600 transition-colors tracking-tight block">
                        {siteConfig.email.contact}
                      </a>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">Our Office</span>
                      <div className="text-xl md:text-2xl font-bold text-zinc-950 tracking-tight leading-tight">
                        {siteConfig.location}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: The Form */}
            <div className="flex-1">
              <FadeIn delay={0.3}>
                <div className="bg-white border border-zinc-200 rounded-[3rem] shadow-2xl shadow-zinc-200/40 p-10 md:p-16 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">Send a message</h2>
                      <Globe className="w-8 h-8 text-zinc-100" />
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
