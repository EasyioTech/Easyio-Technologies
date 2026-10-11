import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  MapPin,
  Building2,
  Clock,
  PhoneCall
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tech & Software Company in Sopore, Kashmir | Easyio Technologies",
  description: "Easyio Technologies is Sopore's premier software development company. Headquartered at War Complex Tehsil Road, Sopore, we engineer custom ERPs, mobile apps, web applications, and AI systems.",
  alternates: {
    canonical: "https://easyio.tech/software-development-company-in-sopore",
  },
  keywords: [
    "best tech company in sopore",
    "software company in sopore",
    "IT company in sopore",
    "web development in sopore",
    "software development company in sopore kashmir",
    "custom ERP software sopore",
    "mobile app development sopore",
    "best software company in north kashmir"
  ],
  openGraph: {
    title: "Best Tech & Software Development Company in Sopore | Easyio",
    description: "Headquartered in Sopore, Kashmir. We build custom ERP systems, modern web apps, and enterprise software for local businesses and global enterprises.",
    url: "https://easyio.tech/software-development-company-in-sopore",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easyio Technologies - Premier Tech Company in Sopore Kashmir",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://easyio.tech/#localbusiness-sopore",
  "name": "Easyio Technologies - Software Development Company Sopore",
  "image": "https://easyio.tech/og-image.png",
  "url": "https://easyio.tech/software-development-company-in-sopore",
  "telephone": "+91-6005659527",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, War Complex, Block 'B', Main Chowk Tehsil Road",
    "addressLocality": "Sopore",
    "addressRegion": "Jammu and Kashmir",
    "postalCode": "193201",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.2987,
    "longitude": 74.4728
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Sopore" },
    { "@type": "City", "name": "Baramulla" },
    { "@type": "City", "name": "Srinagar" },
    { "@type": "State", "name": "Jammu and Kashmir" }
  ],
  "description": "Premier tech company and software engineering agency headquartered in Sopore, Kashmir. Custom ERPs, web design, app development, and AI software."
};

const localServices = [
  {
    title: "Custom ERP & Cold Storage / Fruit Mandi Management",
    desc: "Purpose-built inventory, procurement, and billing systems tailored to Sopore's apple trade, agro-business, and cold storage logistics.",
    icon: Database
  },
  {
    title: "High-Performance Web & Mobile Apps",
    desc: "Modern Next.js web applications, Android, and iOS apps with ultra-fast page speed and seamless user experiences.",
    icon: Code2
  },
  {
    title: "Billing, POS & Retail Inventory Systems",
    desc: "Cloud-enabled, offline-first billing and inventory software built for retailers, distributors, and pharmacies across North Kashmir.",
    icon: Layers
  },
  {
    title: "AI Integration & Workflow Automation",
    desc: "Automate administrative workflows, customer queries, and business reporting with custom intelligent LLM systems.",
    icon: Cpu
  }
];

export default function SoporeSoftwareCompanyPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-zinc-50 text-zinc-950 font-sans pb-20">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 relative overflow-hidden bg-white border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60">
                   <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                   <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">
                     Headquartered in Sopore, Jammu & Kashmir
                   </span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="The Leading Tech & Software Company in Sopore"
                highlightWords={["Tech & Software", "Company in Sopore"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1050px]"
                highlightClassName="text-blue-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="From War Complex, Main Chowk Tehsil Road, Easyio Technologies delivers enterprise-grade software engineering, custom business ERPs, modern web apps, and AI infrastructure to North Kashmir and beyond."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Meet Our Sopore Engineering Team
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="tel:+916005659527"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    Call +91 6005659527
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Office Details Card */}
        <section className="py-12 bg-zinc-100 border-b border-zinc-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Local Sopore Office</h4>
                  <p className="text-sm text-zinc-600">
                    War Complex, Block B, Main Chowk Tehsil Road, Sopore, Baramulla, J&K (193201)
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Office Hours</h4>
                  <p className="text-sm text-zinc-600">
                    Monday to Saturday: 9:00 AM – 6:00 PM<br />Direct on-site support across Sopore & Baramulla
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Why Choose Local?</h4>
                  <p className="text-sm text-zinc-600">
                    Face-to-face meetings, zero timezone delays, local contracts, and immediate same-day response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Built for Sopore */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Engineered for High-Growth Businesses in Sopore
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Whether you run a large cold storage facility, an apple export business, an educational institution, or a fast-scaling startup, Easyio Technologies builds robust software that gives you complete control over your operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {localServices.map((svc, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <svc.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{svc.title}</h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Advantage & SEO Authority */}
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-[1000px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-6 text-center">
              Why Easyio is Ranked Among the Best Tech Companies in Kashmir
            </h2>
            <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6 text-base leading-relaxed">
              <p>
                Finding the right technology company in Jammu & Kashmir has traditionally meant dealing with unreliable third-party agencies or slow support from distant metropolitan cities. Easyio Technologies was founded right here in <strong>Sopore</strong> to change that standard.
              </p>
              <p>
                Our core team combines world-class full-stack software architecture with deep local context. We understand the specific regional network conditions, commercial cycles of North Kashmir, and the need for <strong>offline-first synchronization</strong>, high data security, and zero ongoing dependency on rigid third-party subscriptions.
              </p>
              <p>
                Explore our dedicated services across Jammu and Kashmir:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0 font-medium text-blue-600">
                <li>
                  <Link href="/software-development-company-in-kashmir" className="hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Software Development Company in Kashmir
                  </Link>
                </li>
                <li>
                  <Link href="/web-development-company-in-srinagar" className="hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Web Development in Srinagar
                  </Link>
                </li>
                <li>
                  <Link href="/custom-erp-software-development-kashmir" className="hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Custom ERP Systems in Kashmir
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-app-development-company-kashmir" className="hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Mobile App Development Kashmir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-950 text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Let&apos;s Build Your Next Project in Sopore
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Visit our office at War Complex, Main Chowk Tehsil Road, Sopore, or book a consultation online today.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-14 px-10 bg-blue-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-blue-500 transition-all gap-3"
            >
              Get In Touch With Easyio Sopore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
