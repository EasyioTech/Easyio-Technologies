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
  Zap,
  Box,
  Truck,
  ShieldCheck,
  Search,
  BarChart
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Website Development in Srinagar | Easyio",
  description: "Launch your online store with Kashmir's premier e-commerce developers. We build high-conversion Shopify and custom Next.js storefronts that drive global sales.",
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
  "description": "High-performance e-commerce website development, Shopify store design, and custom Next.js storefronts in Kashmir."
};

const benefits = [
  { title: "Lightning Fast Checkouts", desc: "Every second counts in e-commerce. A 1-second delay can cost you 7% in conversions. Our headless Next.js and optimized Shopify stores load instantly, drastically reducing cart abandonment.", icon: Zap },
  { title: "Mobile-First Shopping", desc: "Over 80% of online shopping traffic now comes from mobile devices. We design seamless, thumb-friendly mobile experiences that make buying on a smartphone effortless.", icon: Smartphone },
  { title: "Secure Payment Integrations", desc: "We provide secure, seamless integration with major payment gateways like Razorpay, Stripe, and Cashfree, supporting credit cards, UPI, and Net Banking.", icon: CreditCard },
  { title: "SEO & Growth Built-In", desc: "A beautiful store is useless if nobody visits it. We structure your product catalogs, meta tags, and site architecture exactly how Google wants them, driving organic, high-intent traffic.", icon: TrendingUp },
];

const features = [
  { title: "Advanced Inventory Management", desc: "Keep track of your stock across multiple locations. We integrate automated alerts for low inventory to prevent stockouts of your best-selling items.", icon: Box },
  { title: "Automated Shipping & Logistics", desc: "We integrate with leading logistics providers (Delhivery, BlueDart, Shiprocket) to automate shipping label generation and provide customers with real-time tracking.", icon: Truck },
  { title: "Robust Data Security", desc: "SSL encryption, secure checkout processes, and PCI compliance ensure that your customers' sensitive data and credit card information are always safe.", icon: ShieldCheck },
  { title: "Advanced Analytics & Reporting", desc: "Integrate Google Analytics 4 (GA4) and Facebook Pixel. Know exactly where your customers are coming from, what they click, and why they buy.", icon: BarChart }
];

const faqs = [
  { q: "Should I choose Shopify, WooCommerce, or a Custom Store?", a: "It depends on your scale. Shopify is fantastic for quickly launching standard retail stores with minimal maintenance. WooCommerce is good for WordPress users. However, if you need extreme customization, very specific workflows, or blistering speed, a custom Next.js Headless E-commerce solution is best. We help you choose during our consultation." },
  { q: "Can you integrate local payment gateways that support UPI?", a: "Yes, absolutely. We integrate leading Indian payment gateways like Razorpay, Cashfree, and PayU, which perfectly support UPI, Paytm, Net Banking, and all major Credit/Debit cards." },
  { q: "Will I be able to manage the products myself after launch?", a: "Yes! We provide you with an easy-to-use admin dashboard (whether it's Shopify admin or a custom Sanity CMS) and full training so your team can easily add new products, update prices, and process orders without writing any code." },
  { q: "How long does it take to develop an e-commerce website?", a: "A standard Shopify setup with a premium theme can take 2-4 weeks. A fully custom, headless e-commerce store with complex integrations typically takes 8-12 weeks." },
  { q: "Do you provide SEO services for the e-commerce store?", a: "We build technical SEO into the foundation of the site (schema markup, fast load times, mobile optimization). We also offer ongoing monthly SEO and digital marketing retainers to actively grow your traffic." }
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
                highlightWords={["E-Commerce", "Website", "Srinagar"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-orange-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Take your Kashmiri business global. Easyio Technologies builds high-conversion online stores that look stunning, load instantly, and turn casual visitors into loyal, paying customers."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-orange-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-orange-700 transition-all">
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

        {/* Content Section: Taking Kashmir Global */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 prose prose-zinc prose-lg">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-6">Taking Kashmiri Craft and Commerce Global</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Kashmir is home to some of the world's finest craftsmanship—from Pashmina and Carpets to Saffron and organic produce. Yet, many local businesses are restricted to local foot traffic. An e-commerce website breaks down these geographical barriers, allowing you to sell your products to customers in Mumbai, London, or New York, 24/7.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              However, simply putting up a website is not enough. The modern consumer expects a flawless shopping experience. If your website is slow, hard to navigate on a phone, or has a confusing checkout process, customers will abandon their carts and buy from competitors.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-12">
              At Easyio Technologies, based right here in Srinagar, we don't just build websites; we build scalable digital storefronts. We focus obsessively on UI/UX design, site performance, and Conversion Rate Optimization (CRO) to ensure that every marketing rupee you spend yields the highest possible return on investment.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Built for Scale and Revenue</h2>
               <p className="text-lg text-zinc-600">A beautiful store means nothing if it doesn't sell. We focus on conversion rate optimization and technical performance to maximize your ROI.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-white border border-zinc-200 rounded-3xl flex flex-col gap-6 group hover:border-orange-300 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <feat.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-zinc-900">{feat.title}</h4>
                      <p className="text-zinc-600 leading-relaxed text-sm">{feat.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* E-Commerce Features */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-16 text-center">Essential E-Commerce Features We Integrate</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 p-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex flex-shrink-0 items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Approaches */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Our E-Commerce Solutions</h2>
              <p className="text-lg text-zinc-400">
                We don't believe in one-size-fits-all. We choose the platform that fits your business stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-orange-500/50 transition-colors">
                <ShoppingCart className="w-10 h-10 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Shopify Store Development</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Perfect for most retail brands looking to get to market quickly. We provide premium Shopify theme customization, app integration, and setup. It's easy to manage and comes with powerful built-in tools.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Fast Time-to-Market</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Huge App Ecosystem</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-orange-400" /> Excellent for standard retail</li>
                </ul>
              </div>

              <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-colors">
                <Code className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Headless Commerce (Next.js)</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  For brands pushing $1M+ in revenue or requiring extreme customization. We decouple the frontend (using Next.js) from the backend (Shopify Plus or Medusa), resulting in unparalleled speed and unlimited design freedom.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> Blistering sub-second page loads</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> 100% Custom Design control</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> Better technical SEO capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-zinc-200 rounded-2xl">
                  <h4 className="text-lg font-bold text-zinc-900 mb-3">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-orange-600 text-white relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to Launch Your Storefront?</h2>
            <p className="text-orange-100 mb-10 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Work with the leading e-commerce development company in Srinagar to build a brand that stands out and drives sales globally.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-orange-600 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-transform">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
