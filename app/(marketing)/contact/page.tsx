import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Initialize communication with Easyio Technologies for mission-critical software engineering, architecture, and AI infrastructure projects in Kashmir and India.",
  keywords: ["contact easyio", "software engineering kashmir", "tech company srinagar", "project initialization", "easyio technologies contact"],
});

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section - Standardized with Homepage */}
      <section className="min-h-[70vh] pt-32 md:pt-48 pb-20 relative flex items-center overflow-hidden">


        <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">


            <PremiumHeading 
              text="Start your project."
              highlightWords={["project."]}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight text-zinc-900 mb-10 leading-[0.85]"
              highlightClassName="font-serif italic font-medium text-zinc-400 block mt-2"
            />

            <PremiumSubheading 
              delay={0.4}
              text="Have a big idea? We're ready to build your next great product. Send us a message below to get started."
              className="text-zinc-500 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium"
            />
          </div>
        </div>
      </section>

      {/* Main Contact Surface */}
      <section className="pb-32 relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Left Side: Technical Metadata Cards */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <FadeIn delay={0.6}>
                <div className="p-10 bg-white border border-zinc-100/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-full flex flex-col justify-between group hover:border-emerald-200/50 transition-colors duration-500">
                  <div className="space-y-12">
                    <div className="flex items-center justify-between border-b border-zinc-50 pb-6">
                      <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Project Details</div>
                      <Mail className="w-4 h-4 text-emerald-500/50" />
                    </div>
                    
                    <div className="space-y-10">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block mb-4">Direct Link</span>
                        <a href={`mailto:${siteConfig.email.contact}`} className="text-xl md:text-2xl font-black text-zinc-950 hover:text-emerald-600 transition-all tracking-tighter block group-hover:translate-x-2 duration-500 mb-2">
                          {siteConfig.email.contact}
                        </a>
                        <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-xl md:text-2xl font-black text-zinc-950 hover:text-emerald-600 transition-all tracking-tighter block group-hover:translate-x-2 duration-500">
                          {siteConfig.phone}
                        </a>
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block mb-4">Base Operations</span>
                        <div className="text-lg md:text-xl font-bold text-zinc-950 tracking-tight leading-tight max-w-[260px]">
                          {siteConfig.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 pt-8 border-t border-zinc-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600/60">Status: Operational</span>
                    <Globe className="w-5 h-5 text-zinc-200" />
                  </div>
                </div>
              </FadeIn>
              
              {/* Google Business Profile / Map Placeholder */}
              <FadeIn delay={0.7}>
                <div className="p-4 bg-white border border-zinc-100/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                  <div className="aspect-square md:aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden relative bg-zinc-50">
                    <iframe 
                      src="https://maps.google.com/maps?q=War%20complex,%20Block%20B,%20Main%20chowk%20Tehsil%20Road,%20Sopore,%20Jammu%20and%20Kashmir%20193201&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Easyio Technologies Location Sopore Kashmir"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: The Interactive Interface */}
            <div className="flex-1">
              <FadeIn delay={0.5}>
                <div className="bg-white border border-zinc-100/80 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] p-10 md:p-16 lg:p-20 relative overflow-hidden group">
                  {/* Internal Mesh Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-50/50 blur-[100px] rounded-full" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-16">
                      <div className="space-y-1">
                         <h2 className="text-3xl font-black text-zinc-950 tracking-tight uppercase">New Project</h2>
                         <p className="text-sm text-zinc-400 font-medium">Step 01: Tell us what you need</p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-zinc-300" />
                      </div>
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
