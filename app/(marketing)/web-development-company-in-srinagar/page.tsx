import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Gauge,
  Smartphone,
  Search,
  ShoppingCart,
  ArrowRight,
  MonitorSmartphone,
  Zap
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Company in Srinagar | Fast, SEO-Optimized Sites",
  description: "Easyio Technologies is a top web development company in Srinagar. We build incredibly fast, SEO-optimized, and mobile-friendly business websites and e-commerce stores.",
  alternates: {
    canonical: "https://easyio.tech/web-development-company-in-srinagar",
  },
  openGraph: {
    title: "Web Development Company in Srinagar | Easyio Technologies",
    description: "Build incredibly fast, SEO-optimized, and mobile-friendly business websites in Kashmir.",
    url: "https://easyio.tech/web-development-company-in-srinagar",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/images/og-web-srinagar.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development in Srinagar - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Srinagar"
    },
    {
      "@type": "State",
      "name": "Jammu and Kashmir"
    }
  ],
  "description": "High-performance web development, e-commerce stores, and corporate websites built with Next.js in Srinagar."
};

const features = [
  { name: "Extreme Speed", desc: "Optimized for 99+ Lighthouse scores and instant loading.", icon: Zap },
  { name: "Mobile First", desc: "Perfectly responsive across all phones and tablets.", icon: MonitorSmartphone },
  { name: "Technical SEO", desc: "Built with structured data and proper semantic HTML.", icon: Search },
  { name: "E-commerce Ready", desc: "Secure payment gateways and inventory systems.", icon: ShoppingCart },
];

export default function WebCompanySrinagarPage() {
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
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600/80">Digital Presence</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Web Development Company in Srinagar"
                highlightWords={["Web Development"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-orange-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="We build business websites and e-commerce platforms that load instantly, rank higher on Google, and convert visitors into customers."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex gap-4 justify-center">
                   <a href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your Website
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                   </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Speed Matters */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8">Why slow websites fail in Kashmir.</h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Many businesses use bloated WordPress templates that take 10+ seconds to load on mobile data. Users abandon slow sites, and Google penalizes them. 
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  As a leading <Link href="/" className="text-orange-600 hover:underline">Easyio Technologies</Link> service, we engineer sites using modern frameworks like React and Next.js. This means your website loads in under 2 seconds, providing a massive advantage over local competitors. If you need complex backend systems or ERPs, view our <Link href="/software-development-company-in-kashmir" className="text-orange-600 hover:underline">custom software development</Link> services. You can also explore our <Link href="/case-studies" className="text-orange-600 hover:underline">recent engineering projects</Link> to see our full capabilities. If you're ready to start, <Link href="/contact" className="text-orange-600 hover:underline">contact our Srinagar office</Link>.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-12">
                   <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                      <Gauge className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="font-bold mb-2">Sub-2s Loading</h4>
                      <p className="text-sm text-zinc-500">Optimized for LCP and Core Web Vitals.</p>
                   </div>
                   <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                      <Smartphone className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="font-bold mb-2">Mobile Native</h4>
                      <p className="text-sm text-zinc-500">Designed for thumbs and small screens first.</p>
                   </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl">
                <Image src="/images/edge_caching.png" alt="Website performance metrics" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-16">Everything you need to grow online.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors text-left group">
                  <feat.icon className="w-8 h-8 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg mb-3">{feat.name}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
