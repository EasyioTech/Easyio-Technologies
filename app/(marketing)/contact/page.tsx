import { Mail, ArrowUpRight, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Initialize communication with Easyio Technologies for mission-critical software engineering, architecture, and AI infrastructure projects in Kashmir and India.",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Editorial Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end border-b border-zinc-100 pb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Start a Project</span>
              </div>
              <PremiumHeading 
                text="Let's build something great."
                highlightWords={["great."]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-6 leading-[1.05]"
                highlightClassName="font-serif italic text-emerald-600 font-medium tracking-normal"
              />
            </div>
            
            <div className="pb-4">
              <PremiumSubheading 
                delay={0.2}
                text="Have a complex project in mind? We'd love to hear about it. Send us a message and our engineering team will get back to you within 24 hours."
                className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Surface */}
      <section className="py-20 relative bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-4 flex flex-col gap-12">
              
              <div className="p-8 bg-zinc-950 rounded-[2rem] text-white relative overflow-hidden shadow-xl shadow-zinc-950/10">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xs font-black text-emerald-500 mb-8 uppercase tracking-[0.2em]">Contact Details</h3>
                  <div className="space-y-6">
                    <a href={`mailto:${siteConfig.email.contact}`} className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all border border-white/10">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-lg">{siteConfig.email.contact}</span>
                    </a>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all border border-white/10">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-lg">{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white border border-zinc-200 rounded-[2rem] shadow-sm">
                <h3 className="text-xs font-black text-zinc-400 mb-6 uppercase tracking-[0.2em]">Headquarters</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-zinc-900 font-semibold leading-relaxed mb-4">
                      {siteConfig.location}
                    </p>
                    <a href="https://maps.google.com/?q=Easyio+Technologies+Sopore" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest">
                      View on Maps
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: The Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] shadow-xl shadow-zinc-200/20 p-8 md:p-14 relative overflow-hidden">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">Send us a message</h2>
                  <p className="text-zinc-500 font-medium">We usually respond within a few hours.</p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
