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
  PhoneCall,
  Check,
  Boxes,
  BarChart3,
  Sparkles,
  HelpCircle,
  Zap,
  Users,
  Award
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tech & Software Company in Sopore, Kashmir | Easyio Technologies",
  description: "Easyio Technologies is Sopore's premier software development company. Headquartered at War Complex Tehsil Road, Sopore, we engineer custom ERPs, fruit mandi accounting, cold storage systems, mobile apps, web applications, and AI systems.",
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
    "best software company in north kashmir",
    "apple mandi software sopore",
    "cold storage software sopore"
  ],
  openGraph: {
    title: "Best Tech & Software Development Company in Sopore | Easyio",
    description: "Headquartered in Sopore, Kashmir. We build custom ERP systems, fruit mandi logistics, modern web apps, and enterprise software for local businesses and global enterprises.",
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
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://easyio.tech/#localbusiness-sopore",
      "name": "Easyio Technologies - Software Development Company Sopore",
      "image": "https://easyio.tech/og-image.png",
      "url": "https://easyio.tech/software-development-company-in-sopore",
      "telephone": "+91-6005659527",
      "priceRange": "₹₹",
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
        { "@type": "City", "name": "Kupwara" },
        { "@type": "City", "name": "Bandipora" },
        { "@type": "State", "name": "Jammu and Kashmir" }
      ],
      "description": "Premier tech company and software engineering agency headquartered in Sopore, Kashmir. Custom ERPs, fruit mandi logistics, web design, app development, and AI software."
    },
    {
      "@type": "FAQPage",
      "@id": "https://easyio.tech/software-development-company-in-sopore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best tech company in Sopore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies is recognized as the best tech and software development company in Sopore. Headquartered at War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Easyio engineers custom ERP systems for fruit mandi traders and cold storages, high-performance web applications, cross-platform mobile apps, and enterprise software."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Easyio Technologies located in Sopore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies is located on the First Floor, War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Baramulla, Jammu & Kashmir (193201). The office is centrally positioned near Iqbal Market and the Main Bus Stand."
          }
        },
        {
          "@type": "Question",
          "name": "Can Easyio build software specifically for Sopore's apple mandi trade and cold storages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Easyio Technologies has deep domain specialization in North Kashmir's apple industry. We build custom ERPs managing commission agent (arath) accounts, grower biyana cash advances, lot-by-lot grading (Delicious, Kulu, American), wooden crate inventory, and cold-storage CA chamber temperature monitoring with instant automated WhatsApp delivery receipts."
          }
        },
        {
          "@type": "Question",
          "name": "How does Easyio software handle internet drops in Sopore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio builds with an offline-first architecture using Progressive Web App service workers and client-side database caching. Retail cashiers, warehouse staff, and mandi agents can continue recording transactions offline without interruption. Data reconciles automatically with the cloud server as soon as internet connectivity is restored."
          }
        },
        {
          "@type": "Question",
          "name": "How can I hire or consult with Easyio Technologies in Sopore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our engineering team directly at +91 60056 59527, email contact@easyio.tech, or visit our headquarters at War Complex, Main Chowk Tehsil Road, Sopore. We provide free initial strategy sessions and on-site discovery consultations."
          }
        }
      ]
    }
  ]
};

const localServices = [
  {
    title: "Custom Fruit Mandi & Cold Storage ERP",
    desc: "Purpose-built inventory, procurement, and arath ledger systems tailored to Sopore's apple trade, agro-business, crate accounting, and cold storage logistics.",
    icon: Boxes,
    tag: "Agro-Industry"
  },
  {
    title: "High-Performance Next.js Web Development",
    desc: "Modern web applications built with Next.js 15 for sub-500ms load times, seamless mobile experiences, and dominant Google search engine rankings.",
    icon: Code2,
    tag: "Web & E-Commerce"
  },
  {
    title: "Billing, POS & Retail Inventory Systems",
    desc: "Cloud-synchronized, offline-first billing and inventory software built for wholesalers, retail outlets, and pharmacies across Tehsil Road and Iqbal Market.",
    icon: Layers,
    tag: "Retail & Wholesale"
  },
  {
    title: "Cross-Platform Mobile Apps (iOS & Android)",
    desc: "Native-grade mobile applications with real-time GPS tracking, push notifications, and offline data persistence for delivery fleets and internal field agents.",
    icon: Cpu,
    tag: "Mobile Engineering"
  },
  {
    title: "School, College & Coaching SIS Portals",
    desc: "Modern educational administration software with biometric attendance, automated SMS/WhatsApp alerts, online fee collection, and digital report cards.",
    icon: Building2,
    tag: "Education"
  },
  {
    title: "AI Integration & Workflow Automation",
    desc: "Custom generative AI agents, automated WhatsApp transaction notifications, document parsing, and predictive stock forecasting for North Kashmir enterprises.",
    icon: Sparkles,
    tag: "Artificial Intelligence"
  }
];

const soporeComparison = [
  { feature: "Physical Office in Sopore", easyio: "War Complex, Tehsil Road (Local HQ)", competitors: "None (Remote or Srinagar only)" },
  { feature: "Mandi Arath & Biyana Logic", easyio: "Native built-in domain calculations", competitors: "Generic retail only / unworkable" },
  { feature: "Wooden & Box Crate Tracking", easyio: "Automated barcode & ledger sync", competitors: "Manual paper entries required" },
  { feature: "Offline-First Synchronization", easyio: "Native PWA & Local IndexedDB", competitors: "Software freezes during outages" },
  { feature: "Tech Stack Modernity", easyio: "Next.js 15, TypeScript, PostgreSQL", competitors: "Outdated PHP 5 / WordPress" },
  { feature: "Page Speed Benchmark", easyio: "Sub-500ms (< 0.5s)", competitors: "Sluggish (> 4-7 seconds)" },
  { feature: "Code & IP Ownership", easyio: "100% Client Code & IP Ownership", competitors: "Monthly recurring license fees" },
  { feature: "On-Site Staff Training", easyio: "Hands-on at your premises in Sopore", competitors: "Remote phone calls / untraceable" },
];

const faqs = [
  {
    q: "Which is the best tech and software company in Sopore?",
    a: "Easyio Technologies is widely recognized as the best tech and software development company in Sopore. Headquartered at War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Easyio builds tailored enterprise ERPs, fruit mandi logistics platforms, ultra-fast business websites, and cross-platform mobile apps for North Kashmir and beyond."
  },
  {
    q: "Where is Easyio Technologies located in Sopore?",
    a: "Easyio Technologies is centrally located on the First Floor, War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Baramulla, Jammu & Kashmir (193201). Our office is within minutes of the Sopore Fruit Mandi, Iqbal Market, and the Main Bus Stand."
  },
  {
    q: "Can Easyio build software specifically for apple mandi traders and cold storages?",
    a: "Yes! We specialize in custom software for apple growers, arathis, cold storages, and logistics providers in Sopore. Our platforms handle commission accounting, grower biyana advances, crate inventory, lot-by-lot grading (Delicious, Kulu, American), and automated dispatch manifests along NH44."
  },
  {
    q: "What happens if internet connectivity drops in Sopore?",
    a: "Easyio builds with an offline-first architecture using Progressive Web App service workers and client-side database caching (IndexedDB). Your cashiers, warehouse staff, and mandi agents can continue recording transactions offline. Data reconciles automatically with the central cloud server as soon as internet connectivity returns."
  },
  {
    q: "How much does custom software development cost in Sopore?",
    a: "Pricing in Sopore typically starts from ₹25,000 to ₹60,000 for high-performance business websites, ₹60,000 to ₹1,50,000 for e-commerce stores, and ₹1,20,000 to ₹3,50,000+ for enterprise Mandi ERPs and multi-branch inventory systems. Easyio offers transparent milestone-based billing with zero recurring per-user fees."
  },
  {
    q: "Do you offer in-person consultations and staff training in Sopore?",
    a: "Yes! Because our engineers work right here in Sopore, you can visit our office at War Complex, or our engineers can visit your business premises to conduct hands-on training for your staff in Kashmiri and Urdu."
  },
  {
    q: "How can I contact Easyio Technologies in Sopore?",
    a: "You can call our engineering team directly at +91 60056 59527, email contact@easyio.tech, or visit our office at War Complex, Block 'B', Main Chowk Tehsil Road, Sopore. You can also submit an online inquiry through our contact page."
  }
];

export default function SoporeSoftwareCompanyPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-zinc-50 text-zinc-950 font-sans pb-24">
        
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
                highlightWords={["Leading Tech", "Software Company", "Sopore"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1100px]"
                highlightClassName="text-blue-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="From our engineering headquarters at War Complex, Main Chowk Tehsil Road, Easyio Technologies delivers enterprise-grade software engineering, custom fruit mandi ERPs, cold storage logistics, modern web apps, and AI infrastructure to Sopore, Baramulla, and North Kashmir."
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
                    Call +91 60056 59527
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Office Details Cards */}
        <section className="py-12 bg-zinc-100 border-b border-zinc-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Local Sopore Office</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    First Floor, War Complex, Block &apos;B&apos;, Main Chowk Tehsil Road, Sopore, Baramulla, J&amp;K (193201)
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Office Hours</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Monday to Saturday: 9:00 AM – 6:00 PM<br />Direct on-site support across Sopore &amp; Baramulla
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/80 flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base mb-1">Why Choose Local?</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Face-to-face whiteboard sessions, native Arath context, hands-on staff training, and same-day support.
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
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                North Kashmir Specialization
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Engineered for High-Growth Businesses in Sopore
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Whether you run an apple mandi brokerage, a 5,000-metric-ton cold storage facility, a high-volume retail network along Tehsil Road, or a private coaching academy, Easyio Technologies builds robust software that gives you complete operational control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.map((svc, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <svc.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{svc.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                    <span>Built in Sopore</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Provider Comparison Table */}
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Sopore Market Benchmark
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Why Sopore Businesses Choose Easyio Over Outdated Alternatives
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                See how our enterprise engineering standard compares against generic freelancers and distant agencies.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm text-zinc-700 border-collapse">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase font-bold text-zinc-900">
                  <tr>
                    <th className="px-6 py-5">Operational Requirement</th>
                    <th className="px-6 py-5 text-blue-600 font-black bg-blue-50/50">Easyio Technologies (Sopore HQ)</th>
                    <th className="px-6 py-5">Generic Freelancers / Remote IT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {soporeComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-zinc-900">{row.feature}</td>
                      <td className="px-6 py-4 font-semibold text-blue-700 bg-blue-50/30 flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        {row.easyio}
                      </td>
                      <td className="px-6 py-4 text-zinc-500">{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep Dive: Apple Mandi & Cold Storage Operations */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                  Asia&apos;s 2nd Largest Fruit Mandi
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Software Purpose-Built for Sopore&apos;s Apple Trade &amp; Cold Stores
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  The fruit trade in Sopore processes billions of rupees in transactions every harvesting season. Standard accounting packages like Tally or Marg cannot handle the nuanced realities of commission agents (arathis), seasonal grower advances (biyana), crate recoveries, and cold-storage lot tracking.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Arath Commission &amp; Biyana Ledgers:</h4>
                      <p className="text-sm text-zinc-600">Automated calculation of grower advances, commission percentages, labor (palledari) deductions, and instant settlement notes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Wooden &amp; Cardboard Crate Inventory:</h4>
                      <p className="text-sm text-zinc-600">Eliminate lost crates with barcoded ledger tracking that reconciles containers loaned to growers and returned during harvest.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">CA Cold Storage Chamber Visualizer:</h4>
                      <p className="text-sm text-zinc-600">Interactive 2D floor plans of atmospheric chambers, automated storage rent accruals, and instant gate passes for highway dispatch.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-xl border border-zinc-200">
                <Image src="/images/compresto_ui_preview.png" alt="Custom software dashboard preview" fill className="object-cover" />
              </div>
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
                Finding the right technology company in Jammu &amp; Kashmir has traditionally meant dealing with unreliable third-party agencies or slow support from distant metropolitan cities. Easyio Technologies was founded right here in <strong>Sopore</strong> to change that standard.
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

        {/* FAQ Section */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Local Questions Answered
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Frequently Asked Questions in Sopore
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Clear answers for business owners and enterprise leaders across Sopore and North Kashmir.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-950 text-white text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Let&apos;s Build Your Next Project in Sopore
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Visit our engineering office at War Complex, Block &apos;B&apos;, Main Chowk Tehsil Road, Sopore, or schedule a free on-site discovery session with our software architects today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-14 px-10 bg-blue-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-blue-500 transition-all gap-3"
              >
                Schedule an In-Person Meeting <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+916005659527"
                className="inline-flex h-14 px-8 border border-white/20 bg-white/10 text-white font-bold text-sm items-center justify-center rounded-full hover:bg-white/20 transition-all gap-2"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                Call +91 60056 59527
              </a>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
