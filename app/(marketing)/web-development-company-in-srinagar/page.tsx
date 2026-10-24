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
  Zap,
  Check,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  PhoneCall,
  MapPin,
  Building2,
  Code2,
  Layers,
  Cpu
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Company in Srinagar | Fast, SEO-Optimized Sites | Easyio",
  description: "Easyio Technologies is a top web development company in Srinagar. We build sub-second, SEO-optimized, and mobile-friendly business websites and e-commerce stores using Next.js.",
  alternates: {
    canonical: "https://easyio.tech/web-development-company-in-srinagar",
  },
  keywords: [
    "web development company in srinagar",
    "website design srinagar",
    "best web development company in kashmir",
    "web development kashmir",
    "ecommerce website development srinagar",
    "website designers in srinagar",
    "next.js development kashmir",
    "best tech company in kashmir",
    "software company in srinagar"
  ],
  openGraph: {
    title: "Web Development Company in Srinagar | Easyio Technologies",
    description: "Build incredibly fast, SEO-optimized, and mobile-friendly business websites in Srinagar, Kashmir with sub-second page loads.",
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
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://easyio.tech/#service-web-srinagar",
      "serviceType": "High-Performance Web Development & E-Commerce Engineering",
      "name": "Easyio Technologies - Web Development Company in Srinagar",
      "provider": {
        "@id": "https://easyio.tech/#organization"
      },
      "areaServed": [
        { "@type": "City", "name": "Srinagar" },
        { "@type": "City", "name": "Sopore" },
        { "@type": "City", "name": "Baramulla" },
        { "@type": "State", "name": "Jammu and Kashmir" }
      ],
      "description": "High-performance web development, e-commerce stores, and corporate websites built with Next.js in Srinagar with sub-500ms load speeds and technical SEO."
    },
    {
      "@type": "FAQPage",
      "@id": "https://easyio.tech/web-development-company-in-srinagar#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best web development company in Srinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies is recognized as the leading web development company in Srinagar and Kashmir. Utilizing modern Next.js 15 and React 19 architecture, Easyio engineers sub-500ms websites that rank #1 on Google and deliver superior conversion rates for local businesses and global exporters."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a business website cost in Srinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A modern, professional corporate website engineered on Next.js in Srinagar typically ranges from ₹25,000 to ₹60,000. Comprehensive e-commerce portals with multi-currency payment gateways and inventory tracking range between ₹60,000 and ₹1,50,000. Easyio provides fixed milestone pricing with zero hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "Why do slow WordPress websites fail in Kashmir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 75% of web visitors in Kashmir browse on mobile 4G networks. Traditional WordPress websites loaded with bulky plugins take 5 to 10 seconds to load, causing more than half of visitors to bounce before seeing your products. Google also penalizes slow loading times. Next.js websites built by Easyio load in under 500 milliseconds, ensuring instant engagement and higher search rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Can Easyio build an e-commerce website for Kashmiri handicrafts and dry fruits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Easyio specializes in high-concurrency international e-commerce platforms for Kashmiri artisans, Pashmina shawls, saffron, and dry fruit exporters, complete with multi-currency checkouts (USD, EUR, GBP, AED), automated shipping labels, and digital GI-tag provenance tracking."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide search engine optimization (SEO) for websites in Srinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website built by Easyio includes foundational technical SEO: schema markup (JSON-LD), automated XML sitemaps, openGraph social cards, canonical tags, semantic HTML5 structure, and Core Web Vitals optimization to help your business rank at the top of Google searches."
          }
        }
      ]
    }
  ]
};

const webFeatures = [
  { 
    name: "Sub-500ms Loading Speed", 
    desc: "Engineered on Next.js 15 Server Components and Edge Caching for instant page rendering that keeps mobile visitors engaged.", 
    icon: Zap 
  },
  { 
    name: "Mobile-Native Responsive UI", 
    desc: "Designed thumb-first for smartphones. Every button, menu, and checkout screen is optimized for seamless mobile interaction.", 
    icon: MonitorSmartphone 
  },
  { 
    name: "Deep Technical SEO Included", 
    desc: "Built-in structured data (JSON-LD), automated sitemaps, semantic HTML5, and Core Web Vitals optimized to dominate local Google search.", 
    icon: Search 
  },
  { 
    name: "Global E-Commerce Gateways", 
    desc: "Multi-currency checkout (USD, EUR, GBP, INR), automated international shipping labels, and real-time inventory management.", 
    icon: ShoppingCart 
  },
  { 
    name: "Bank-Grade Security", 
    desc: "Zero vulnerable WordPress plugins. Built on immutable TypeScript code with SSL/TLS encryption, CSRF protection, and daily cloud backups.", 
    icon: ShieldCheck 
  },
  { 
    name: "100% Client Code Ownership", 
    desc: "You own 100% of your source code, GitHub repository, and digital assets with zero recurring per-user agency lock-ins.", 
    icon: Code2 
  }
];

const webVerticals = [
  {
    title: "Handicrafts & Luxury Pashmina E-Commerce",
    desc: "Reach affluent international buyers across the US, UK, and GCC with ultra-fast digital storefronts, multi-currency pricing, and verifiable GI-tag artisan provenance.",
    tag: "Export E-Commerce"
  },
  {
    title: "Hotels, Houseboats & Tourism Booking",
    desc: "Eliminate expensive OTA commissions (MakeMyTrip, Booking.com) with direct reservation engines for properties along Dal Lake, Gulmarg, and Pahalgam.",
    tag: "Hospitality & Travel"
  },
  {
    title: "Corporate & Professional Service Portals",
    desc: "Establish high-trust authority for law firms, architectural consultancies, educational academies, and healthcare clinics across Srinagar.",
    tag: "Corporate & B2B"
  },
  {
    title: "Agro-Trade & Dry Fruit Storefronts",
    desc: "Direct-to-consumer digital storefronts for premium Kashmiri saffron, walnuts, and apples with automated courier integrations and WhatsApp order notifications.",
    tag: "Agro & Retail"
  }
];

const pricingTiers = [
  {
    tier: "Tier 1: Starter Business",
    price: "₹25,000 – ₹45,000",
    desc: "Ideal for local service companies, consultancies, and retailers seeking high-authority online presence.",
    features: [
      "Custom Next.js 15 & React 19 architecture",
      "Sub-500ms load times on mobile 4G",
      "Up to 5 custom-designed pages",
      "Technical SEO & Google Business integration",
      "WhatsApp direct click-to-chat integration",
      "100% Client code and asset ownership"
    ]
  },
  {
    tier: "Tier 2: E-Commerce Storefront",
    price: "₹60,000 – ₹1,20,000",
    popular: true,
    desc: "Engineered for exporters, handicraft brands, dry fruit merchants, and high-volume online retailers.",
    features: [
      "Full digital storefront with product catalog",
      "Multi-currency checkout (INR, USD, EUR, AED)",
      "Payment gateway integration (Razorpay, Stripe)",
      "Automated shipping rate calculation & labels",
      "Customer accounts & order tracking dashboard",
      "Admin inventory management panel"
    ]
  },
  {
    tier: "Tier 3: Custom Web Portal",
    price: "₹1,20,000 – ₹2,50,000+",
    desc: "For enterprises needing complex backend integrations, booking engines, or customer self-service portals.",
    features: [
      "Custom dynamic database workflows (PostgreSQL)",
      "User authentication & role-based dashboards",
      "Direct API integrations with existing software",
      "Automated PDF invoice generation",
      "Offline Progressive Web App (PWA) caching",
      "Dedicated Service Level Agreement (SLA)"
    ]
  }
];

const faqs = [
  {
    q: "Which is the best web development company in Srinagar?",
    a: "Easyio Technologies is recognized as the best web development company in Srinagar and Kashmir. We build modern, sub-second websites and e-commerce platforms using Next.js, React, and TypeScript. Our websites are optimized for Google search rankings and designed to turn visitors into paying customers."
  },
  {
    q: "Why do WordPress websites perform poorly for businesses in Srinagar?",
    a: "Many web agencies in Srinagar use bloated WordPress themes loaded with dozens of third-party plugins. On regional mobile networks, these websites often take 6 to 10 seconds to load. Research shows that over 53% of mobile users abandon a website that takes longer than 3 seconds to render. Google also heavily penalizes slow sites in search rankings. Easyio builds custom Next.js websites that load in under 500 milliseconds, giving you a massive advantage over local competitors."
  },
  {
    q: "How long does it take to develop a business website in Srinagar?",
    a: "A standard corporate business website typically takes 2 to 4 weeks from initial discovery to live deployment. Complex e-commerce platforms or custom booking portals generally take 4 to 8 weeks. We provide clear milestone schedules and progress demos throughout development."
  },
  {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Yes. Every website we build is designed thumb-first for mobile devices. We test rigorously across Android smartphones, iPhones, iPads, and desktop monitors to ensure flawless layout, rapid navigation, and legible typography."
  },
  {
    q: "Do I own my website and code after completion?",
    a: "Yes! Unlike agencies that charge monthly fees to keep your website live or withhold access, Easyio Technologies transfers 100% intellectual property, domain configuration, and source code ownership to you upon final payment."
  },
  {
    q: "Can Easyio help my website rank on Google in Kashmir and India?",
    a: "Yes. We implement comprehensive technical SEO on every page: semantic HTML5 tags, structured data schema (JSON-LD), fast Core Web Vitals, canonical links, descriptive OpenGraph tags, and clean URLs. We also optimize for key search queries across Srinagar, Kashmir, and India."
  },
  {
    q: "How can I schedule a consultation for my website project?",
    a: "You can call our engineering team directly at +91 60056 59527, email contact@easyio.tech, or submit an inquiry through our contact page. We regularly conduct in-person consultations across Srinagar (including Lal Chowk, Rajbagh, and Sanat Nagar) and at our headquarters in Sopore."
  }
];

export default function WebCompanySrinagarPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-white text-zinc-950 font-sans pb-24">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 relative overflow-hidden bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <PremiumHeading 
                text="Web Development Company in Srinagar"
                highlightWords={["Web Development", "Srinagar"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1100px]"
                highlightClassName="text-orange-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="We engineer business websites and e-commerce platforms that load in under 500 milliseconds, rank at the top of Google searches, and convert visitors into loyal customers. No bloated WordPress templates—just clean, custom Next.js engineering built for Kashmir."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <a 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your Website Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a
                    href="tel:+916005659527"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-orange-600" />
                    Call +91 60056 59527
                  </a>
                </div>
              </FadeIn>

              {/* Performance Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-200 text-left">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-orange-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">&lt; 500ms</div>
                    <div className="text-xs text-zinc-500 font-medium">Sub-second load times</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-orange-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">99+ Score</div>
                    <div className="text-xs text-zinc-500 font-medium">Google Lighthouse rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="w-6 h-6 text-orange-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">Rank #1 SEO</div>
                    <div className="text-xs text-zinc-500 font-medium">Structured schema built-in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">100% IP</div>
                    <div className="text-xs text-zinc-500 font-medium">Full client code ownership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Speed Matters */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-600 mb-3 block">
                  The Performance Advantage
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Why slow WordPress websites fail in Kashmir.
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Many businesses in Srinagar pay agencies for bloated WordPress templates loaded with 30+ plugins. On mobile 4G networks, these sites take 6 to 10 seconds to load. Research shows that over 53% of mobile visitors abandon a website that takes longer than 3 seconds to appear.
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  As the premier engineering service by <Link href="/" className="text-orange-600 font-bold hover:underline">Easyio Technologies</Link>, we build websites using React 19 and Next.js 15. This means your website loads in under 500 milliseconds, giving you a decisive advantage over local competitors. If you need complex internal enterprise software or cold-storage systems, explore our <Link href="/software-development-company-in-kashmir" className="text-orange-600 font-bold hover:underline">custom software development</Link> or visit our <Link href="/software-development-company-in-sopore" className="text-orange-600 font-bold hover:underline">Sopore headquarters</Link>.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                   <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                      <Gauge className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="font-bold mb-2 text-zinc-900">Sub-500ms Loading</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Optimized for Core Web Vitals and LCP metrics.</p>
                   </div>
                   <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                      <Smartphone className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="font-bold mb-2 text-zinc-900">Mobile Native</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Designed thumb-first for small smartphone screens.</p>
                   </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl border border-zinc-200">
                <Image src="/images/edge_caching.png" alt="Website performance metrics" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Web Verticals */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-600 mb-3 block">
                Tailored Digital Solutions
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Websites Built for Kashmir’s Key Industries
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We design purpose-driven websites tailored to the exact commercial goals of your industry vertical in Srinagar and across Jammu & Kashmir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webVerticals.map((vert, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-md inline-block mb-4">
                    {vert.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{vert.title}</h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{vert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-400 mb-3 block">
              Full-Stack Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Everything Your Business Needs to Dominate Online
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">
              We engineer complete digital experiences designed to generate high-intent inquiries and sales for your enterprise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {webFeatures.map((feat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group">
                  <feat.icon className="w-8 h-8 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg mb-3">{feat.name}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-24 bg-white border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-600 mb-3 block">
                Clear &amp; Transparent
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Web Development Pricing in Srinagar (2026)
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Predictable, milestone-based pricing with zero hidden fees. You own 100% of your website code upon completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 rounded-3xl flex flex-col justify-between ${
                    tier.popular 
                      ? 'bg-white border-2 border-orange-600 shadow-xl relative' 
                      : 'bg-zinc-50 border border-zinc-200/80'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-md shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{tier.tier}</h3>
                    <p className="text-xs text-zinc-500 mb-4">{tier.desc}</p>
                    <div className="text-2xl font-black text-zinc-900 mb-6">{tier.price}</div>
                    <ul className="space-y-3 text-sm text-zinc-600 mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact" 
                    className={`w-full py-3 rounded-full text-center text-xs font-bold transition-colors ${
                      tier.popular 
                        ? 'bg-orange-600 text-white hover:bg-orange-700' 
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-600 mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Frequently Asked Questions in Srinagar
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Everything you need to know about developing a high-performance business website with Easyio Technologies.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-950 text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Build a Website That Truly Grows Your Business
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Schedule an in-person meeting in Srinagar or visit our Sopore engineering headquarters to review live prototypes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-orange-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-orange-500 transition-all gap-3"
              >
                Schedule a Project Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+916005659527" 
                className="inline-flex h-14 px-8 border border-white/20 bg-white/10 text-white font-bold text-sm items-center justify-center rounded-full hover:bg-white/20 transition-all gap-2"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                Call +91 60056 59527
              </a>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
