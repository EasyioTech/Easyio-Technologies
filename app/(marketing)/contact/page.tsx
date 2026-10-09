import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Initialize communication with Easyio Technologies for mission-critical software engineering, architecture, and AI infrastructure projects in Kashmir and India.",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 md:pt-48 pb-16 relative flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 relative w-full">
          <div className="max-w-3xl">
            <PremiumHeading 
              text="Let's build something great."
              highlightWords={["great."]}
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]"
              highlightClassName="text-emerald-600 block mt-2"
            />
            <PremiumSubheading 
              delay={0.4}
              text="Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours."
              className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Main Contact Surface */}
      <section className="pb-32 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:w-1/3 flex flex-col gap-12 pt-4">
              <FadeIn delay={0.6}>
                <div className="space-y-12">
                  
                  {/* Direct Contact */}
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider">Contact Details</h3>
                    <div className="space-y-4">
                      <a href={`mailto:${siteConfig.email.contact}`} className="group flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition-colors text-lg">
                        <Mail className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500" />
                        {siteConfig.email.contact}
                      </a>
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition-colors text-lg">
                        <span className="w-5 h-5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Office Location</h3>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-[260px]">
                      {siteConfig.location}
                    </p>
                    <a href="https://maps.google.com/?q=Easyio+Technologies+Sopore" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-600 font-medium mt-4 hover:text-emerald-700 transition-colors">
                      View on Maps
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </FadeIn>
            </div>

            {/* Right Side: The Contact Form */}
            <div className="flex-1 w-full">
              <FadeIn delay={0.5}>
                <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm p-8 md:p-12 relative overflow-hidden">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-zinc-900 mb-2">Send us a message</h2>
                    <p className="text-zinc-500">We'll get back to you as soon as possible.</p>
                  </div>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
