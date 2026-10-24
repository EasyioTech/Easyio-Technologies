import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Gauge,
  Smartphone,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Activity,
  Layers,
  Cpu,
  Globe,
  TrendingUp,
  Server
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultra-Fast Speed & Performance Engineering | Sub-Millisecond Latency | Easyio",
  description: "We eliminate latency at the protocol and runtime level. Sub-500ms page loads, global edge caching, and optimized database queries engineered by Easyio Technologies.",
  alternates: {
    canonical: "https://easyio.tech/ultra-fast-speed",
  },
  keywords: [
    "ultra-fast speed",
    "web performance optimization",
    "sub-millisecond latency",
    "core web vitals optimization",
    "high-speed web development kashmir",
    "edge caching next.js",
    "easyio performance engineering"
  ],
  openGraph: {
    title: "Ultra-Fast Speed & Performance Engineering | Easyio Technologies",
    description: "Sub-millisecond data delivery for instant, seamless user experiences. Next.js 15, edge caching, and database query tuning.",
    url: "https://easyio.tech/ultra-fast-speed",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ultra-Fast Speed - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Engineering & Speed Optimization",
  "serviceType": "Web & Application Performance Engineering",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "description": "Architecting sub-second web applications, global edge caching pipelines, and microsecond database queries that maximize conversion rates and Google Core Web Vitals.",
  "areaServed": "Global"
};

const performancePillars = [
  {
    title: "Edge Network Distribution",
    desc: "Static assets, rendered HTML, and cached API responses are distributed across 300+ global edge nodes. Content is served from data centers physically closest to your user, dropping Time-to-First-Byte (TTFB) to under 40 milliseconds.",
    icon: Globe,
    badge: "< 40ms TTFB"
  },
  {
    title: "Zero-Jank React Server Components",
    desc: "By moving heavy computing and database fetching to the server with Next.js 15, we eliminate mega-byte JavaScript bundles. Clients download only lightweight, pre-rendered HTML and CSS.",
    icon: Cpu,
    badge: "99+ Lighthouse"
  },
  {
    title: "Microsecond In-Memory Caching",
    desc: "Expensive database queries are cached in ultra-fast Redis memory clusters with intelligent cache invalidation tags. Frequent reads execute in 0.12 milliseconds instead of hitting disk storage.",
    icon: Zap,
    badge: "0.12ms Read Latency"
  },
  {
    title: "Optimized Asset Compression & Delivery",
    desc: "Automated AVIF/WebP image transcoding, CSS bundle minification, and HTTP/3 multiplexing ensure that mobile visitors on fluctuating cellular networks experience instant visual rendering.",
    icon: Layers,
    badge: "Zero Mobile Friction"
  }
];

const businessImpacts = [
  {
    metric: "+32%",
    title: "Higher Conversion Rates",
    desc: "Every 100-millisecond reduction in checkout load time directly correlates with measurable sales increases for e-commerce and B2B lead generation."
  },
  {
    metric: "-65%",
    title: "Lower Mobile Bounce Rates",
    desc: "Over 53% of mobile users abandon a website that takes more than 3 seconds to load. Our sub-500ms loads keep visitors engaged from the first click."
  },
  {
    metric: "#1",
    title: "Dominant Google SEO Rankings",
    desc: "Google's search algorithm heavily prioritizes Core Web Vitals (LCP, INP, CLS). Fast sites rank higher than slow competitors with identical content."
  },
  {
    metric: "-50%",
    title: "Reduced Server Bandwidth Costs",
    desc: "Intelligent edge caching absorbs over 85% of traffic before requests ever touch your origin server, drastically cutting cloud computing overhead."
  }
];

const faqs = [
  {
    q: "Why does website and software speed matter so much for my business?",
    a: "Speed directly impacts both revenue and visibility. Users expect websites and apps to respond instantaneously. Slow sites frustrate users, lower conversion rates, and cause high bounce rates on mobile devices. Furthermore, Google's search algorithm strictly penalizes slow sites in search results."
  },
  {
    q: "How does Easyio achieve sub-500ms load times when other agencies' sites take 5-8 seconds?",
    a: "Most traditional agencies build on bloated WordPress themes loaded with dozens of plugins and uncompressed assets. Easyio writes custom code using Next.js 15, React 19, TypeScript, and TailwindCSS. We use server components, edge caching, and optimized database queries to deliver lean, instantaneous experiences."
  },
  {
    q: "Can you optimize our existing slow website or ERP system without rebuilding it from scratch?",
    a: "In many cases, yes. We perform comprehensive performance audits to identify bottlenecks—such as unindexed database queries, oversized images, bloated third-party scripts, and missing CDN caching—and implement targeted optimizations that cut load times in half."
  },
  {
    q: "How do you test and measure speed?",
    a: "We measure real-world performance using Google PageSpeed Insights, Chrome User Experience Report (CrUX) field data, WebPageTest, and custom telemetry that measures Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)."
  }
];

export default function UltraFastSpeedPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-white text-zinc-950 font-sans pb-24">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-20 relative overflow-hidden bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-pink-100/70 border border-pink-300/80">
                   <div className="w-2 h-2 rounded-full bg-[#F272B6] animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-[0.25em] text-pink-900">
                     Performance &amp; Latency Engineering
                   </span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Ultra-Fast Speed &amp; Sub-Millisecond Latency."
                highlightWords={["Ultra-Fast Speed", "Sub-Millisecond"]}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-[#F272B6]"
              />

              <PremiumSubheading 
                delay={0.2}
                text="We eliminate latency at the protocol and runtime level. Sub-500ms page loads, global edge distribution, and microsecond query caching engineered to maximize user engagement and Google search rankings."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Optimize Your Software Speed
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="tel:+916005659527"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F272B6]" />
                    Call +91 60056 59527
                  </a>
                </div>
              </FadeIn>

              {/* Real Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-200 text-left">
                <div>
                  <div className="text-2xl font-black text-zinc-950">&lt; 350ms</div>
                  <div className="text-xs text-zinc-500 font-medium">Average LCP on mobile</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">0.12ms</div>
                  <div className="text-xs text-zinc-500 font-medium">Redis in-memory read latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">99+</div>
                  <div className="text-xs text-zinc-500 font-medium">Google Lighthouse score</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">300+</div>
                  <div className="text-xs text-zinc-500 font-medium">Global edge locations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Milliseconds Matter */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F272B6] mb-3 block">
                  The Revenue Multiplier
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Speed isn&apos;t just a technical metric. It is your strongest sales advantage.
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Every extra second a user spends waiting for your page to render is another second they have to reconsider, close the tab, or click on a competitor. On mobile networks in Kashmir and across India, bloated websites suffer catastrophic drop-offs.
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Easyio Technologies treats performance as a foundational engineering constraint. We inspect every kilobyte of JavaScript, stream server-rendered components, and configure intelligent cache hierarchies so your application feels instantaneous.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Google Core Web Vitals Dominance</h4>
                      <p className="text-sm text-zinc-600">Perfect scores for Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) to unlock premier search rankings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Smooth 60FPS UI Micro-Interactions</h4>
                      <p className="text-sm text-zinc-600">Hardware-accelerated CSS animations and lean event listeners that ensure buttery-smooth touch navigation on all smartphones.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl border border-zinc-200">
                <Image src="/edge_caching.png" alt="Edge Caching & Performance Metrics" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Performance */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-pink-400 mb-3 block">
                Engineering Stack
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                How We Engineer Sub-Millisecond Speed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {performancePillars.map((p, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center text-[#F272B6]">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full border border-pink-400/20">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact Grid */}
        <section className="py-24 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Measurable Business ROI of Extreme Speed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessImpacts.map((b, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm text-left">
                  <div className="text-4xl font-black text-[#F272B6] mb-3">{b.metric}</div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Speed &amp; Performance FAQ
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">{faq.q}</h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Make Your Platform Blazing Fast
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Request a free technical performance audit. We will analyze your site and show you exact bottlenecks with actionable fixes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-[#F272B6] text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-pink-500 transition-all gap-3"
              >
                Request Free Performance Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
