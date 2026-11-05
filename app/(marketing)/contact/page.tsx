import { Mail, ArrowUpRight, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { generateMetadata, generateJsonLd } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact Easyio Technologies | Software Lab in Sopore & Kashmir",
  description: "Get in touch with Easyio Technologies for custom software engineering, enterprise ERP architecture, mobile applications, and tech consulting in Sopore, Srinagar, and across Kashmir.",
  canonicalUrl: "https://easyio.tech/contact",
  keywords: [
    "Easyio Technologies contact",
    "contact Easyio",
    "software company in Sopore address",
    "Easyio phone number",
    "Kashmir software development contact"
  ]
});

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://easyio.tech/contact/#webpage",
      url: "https://easyio.tech/contact",
      name: "Contact Easyio Technologies",
      isPartOf: {
        "@id": "https://easyio.tech/#website",
      },
      about: {
        "@id": "https://easyio.tech/#organization",
      },
      mainEntity: {
        "@id": "https://easyio.tech/#localbusiness",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(CONTACT_PAGE_SCHEMA)}
      />
      {/* Editorial Hero Section */}
      <section className="pt-32 md:pt-44 pb-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end border-b border-zinc-200/70 pb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 mb-6 shadow-2xs">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-xs font-semibold text-zinc-700">Start a Project</span>
              </div>
              <PremiumHeading 
                text="Let's build something great."
                highlightWords={["great."]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.05]"
                highlightClassName="font-serif italic text-emerald-700 font-medium tracking-normal"
              />
            </div>
            
            <div className="pb-2">
              <PremiumSubheading 
                delay={0.2}
                text="Have a software project or ERP requirement in mind? Send us a message below and a senior systems architect will respond within 15–30 minutes during business hours."
                className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Surface */}
      <section className="py-16 md:py-20 relative bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              <div className="p-7 sm:p-8 bg-zinc-950 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-zinc-950/10">
                <div className="relative z-10">
                  <h2 className="text-xs font-mono font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                    Direct Contact
                  </h2>
                  <div className="space-y-5">
                    <a href={`mailto:${siteConfig.email.contact}`} className="group flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-all border border-white/10 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base break-all">{siteConfig.email.contact}</span>
                    </a>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-4 text-zinc-200 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-all border border-white/10 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base">{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-7 sm:p-8 bg-white border border-zinc-200/90 rounded-3xl shadow-2xs">
                <h2 className="text-xs font-mono font-bold text-zinc-500 mb-5 uppercase tracking-widest">
                  Headquarters
                </h2>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-zinc-100 flex items-center justify-center border border-zinc-200">
                    <MapPin className="w-4 h-4 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-zinc-900 text-sm sm:text-base font-semibold leading-relaxed mb-3">
                      {siteConfig.location}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Easyio+Technologies+Sopore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: The Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-zinc-200/90 rounded-3xl shadow-lg shadow-zinc-200/30 p-6 sm:p-10 md:p-12 relative overflow-hidden">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-2">
                    Send us a project inquiry
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600">
                    Tell us about your requirements and our engineering team will reply within 15–30 minutes.
                  </p>
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
