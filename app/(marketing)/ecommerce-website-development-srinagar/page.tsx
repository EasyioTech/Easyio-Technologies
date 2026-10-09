import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  TrendingUp,
  CreditCard,
  Smartphone,
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Website Development in Srinagar | Easyio",
  description: "Launch your online store with Kashmir's premier e-commerce developers. We build high-conversion Shopify and custom Next.js storefronts that drive sales.",
  alternates: {
    canonical: "https://easyio.tech/ecommerce-website-development-srinagar",
  },
  openGraph: {
    title: "E-Commerce Website Development in Srinagar",
    description: "Launch a high-conversion online store and sell globally from Kashmir.",
    url: "https://easyio.tech/ecommerce-website-development-srinagar",
    siteName: "Easyio Technologies",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "E-Commerce Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Srinagar"
  },
  "description": "High-performance e-commerce website development and Shopify store design."
};

const benefits = [
  { title: "Lightning Fast Checkouts", desc: "Every second counts in e-commerce. Our stores load instantly, dramatically reducing cart abandonment rates.", icon: Zap },
  { title: "Mobile-First Shopping", desc: "Over 80% of local traffic is on mobile. We design seamless thumb-friendly experiences.", icon: Smartphone },
  { title: "Secure Payment Gateways", desc: "Integration with major Indian payment gateways like Razorpay, Stripe, and Cashfree for smooth transactions.", icon: CreditCard },
  { title: "SEO & Growth Built-In", desc: "We structure your product catalogs exactly how Google wants them, driving organic traffic to your store.", icon: TrendingUp },
];

export default function EcommercePage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-white text-zinc-950 font-sans pb-20">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 relative overflow-hidden bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600/80">Digital Commerce</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="E-Commerce Website Development in Srinagar"
                highlightWords={["E-Commerce", "Website"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-orange-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Take your Kashmir business global. We build high-conversion online stores that look stunning, load instantly, and turn visitors into paying customers."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                      Start Selling Online
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                   </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
             <div className="text-center max-w-2xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Built for scale and revenue.</h2>
               <p className="text-lg text-zinc-600">A beautiful store means nothing if it doesn't sell. We focus on conversion rate optimization (CRO) and technical performance to maximize your ROI.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl flex gap-6 group hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <feat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-zinc-900">{feat.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{feat.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to launch your storefront?</h2>
            <p className="text-zinc-400 mb-10 text-lg">Work with the leading <Link href="/web-development-company-in-srinagar" className="text-orange-400 hover:underline">web development company in Srinagar</Link> to build a brand that stands out.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-zinc-950 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Contact our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
