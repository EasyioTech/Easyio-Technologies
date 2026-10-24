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
  PhoneCall,
  Clock,
  Zap,
  Check,
  MonitorSmartphone,
  Truck,
  Briefcase,
  HelpCircle,
  FileCode,
  Users,
  Award,
  Sparkles,
  BarChart3,
  Boxes
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tech & Software Company in Kashmir | Custom ERP, Web & Mobile | Easyio",
  description: "Easyio Technologies is recognized as the best tech and software company in Kashmir. Headquartered in Sopore with Srinagar operations, we engineer custom ERPs, SaaS platforms, high-speed web apps, and enterprise software.",
  keywords: [
    "best tech company in kashmir",
    "best software company in kashmir",
    "top tech companies in kashmir",
    "software development company in kashmir",
    "it company in kashmir",
    "software company in sopore",
    "top it companies in srinagar",
    "web development kashmir",
    "custom erp kashmir",
    "software development company in sopore kashmir",
    "best software company in north kashmir",
    "mobile app development company kashmir"
  ],
  alternates: {
    canonical: "https://easyio.tech/software-development-company-in-kashmir",
  },
  openGraph: {
    title: "Best Tech & Software Company in Kashmir | Easyio Technologies",
    description: "The leading tech company in Kashmir. Custom ERPs, web & mobile applications, and enterprise AI engineering with physical offices in Sopore and operations across Srinagar.",
    url: "https://easyio.tech/software-development-company-in-kashmir",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easyio Technologies - Best Tech Company in Kashmir",
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
      "@type": "ProfessionalService",
      "@id": "https://easyio.tech/#organization",
      "name": "Easyio Technologies - Best Tech Company in Kashmir",
      "serviceType": "Custom Software Development, ERP Systems, Web & Mobile Engineering",
      "url": "https://easyio.tech/software-development-company-in-kashmir",
      "image": "https://easyio.tech/og-image.png",
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
      "areaServed": [
        { "@type": "State", "name": "Jammu and Kashmir" },
        { "@type": "City", "name": "Sopore" },
        { "@type": "City", "name": "Srinagar" },
        { "@type": "City", "name": "Baramulla" },
        { "@type": "City", "name": "Anantnag" }
      ],
      "description": "Ranked among the best tech companies in Kashmir, specializing in custom software development, cold storage ERP systems, fruit mandi logistics, mobile apps, and Next.js web applications."
    },
    {
      "@type": "FAQPage",
      "@id": "https://easyio.tech/software-development-company-in-kashmir#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best tech and software company in Kashmir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies is recognized as the leading tech and software development company in Kashmir. Headquartered at War Complex, Main Chowk Tehsil Road in Sopore with operations in Srinagar, Easyio engineers custom enterprise ERPs, Next.js web applications, mobile apps, and cloud software for businesses across Jammu and Kashmir."
          }
        },
        {
          "@type": "Question",
          "name": "What software services does Easyio Technologies provide in Kashmir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies delivers custom enterprise ERP platforms, fruit mandi and cold storage management systems, ultra-fast Next.js business websites, native-grade Android and iOS mobile apps, offline-first POS software, cloud architecture, and AI workflow automation."
          }
        },
        {
          "@type": "Question",
          "name": "Why should businesses in Kashmir choose custom software over off-the-shelf software like Tally or Zoho?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Off-the-shelf software forces businesses to change their operational workflows to match rigid templates, and it charges recurring per-user monthly subscription fees that escalate over time. Custom software built by Easyio is tailored to your exact business logic (such as mandi arath accounts, crate tracking, or cold storage manifests), includes offline data synchronization, and provides 100% intellectual property ownership with zero recurring user fees."
          }
        },
        {
          "@type": "Question",
          "name": "How does Easyio Technologies handle internet disruptions in Kashmir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio engineers software with an offline-first architecture using Progressive Web App service workers and client-side database caching (IndexedDB/SQLite). Your team can continue issuing bills, scanning inventory, and recording transactions without internet. The system automatically reconciles and syncs data to the cloud the moment connection is restored."
          }
        },
        {
          "@type": "Question",
          "name": "How much does custom software development cost in Kashmir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom software development in Kashmir typically starts from ₹25,000 to ₹60,000 for high-performance business websites, ₹60,000 to ₹1,50,000 for e-commerce platforms, and ₹1,20,000 to ₹4,00,000+ for enterprise ERPs, cold-storage suites, and cross-platform mobile apps. Easyio offers transparent milestone-based billing with zero hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Easyio Technologies located, and do you offer in-person consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easyio Technologies is located on the First Floor, War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Baramulla, Jammu and Kashmir (193201). We welcome in-person visits and regularly conduct on-site discovery sessions and staff training across Sopore, Srinagar, and North Kashmir. Call us at +91 60056 59527 to schedule an appointment."
          }
        }
      ]
    }
  ]
};

const industrySolutions = [
  {
    title: "Apple Mandi & Cold Storage ERP",
    desc: "Purpose-engineered for North Kashmir's fruit trade. Manage arath commission khatas, seasonal grower biyana advances, lot-by-lot grading (Delicious, Kulu, American), crate inventory, and CA chamber pallet manifests with automated WhatsApp delivery receipts.",
    icon: Boxes,
    tag: "Agro-Horticulture"
  },
  {
    title: "High-Volume Wholesale & Retail POS",
    desc: "Built for busy trading hubs in Srinagar and Sopore. Features offline-first barcode scanning, automated GST e-way billing, multi-branch stock reconciliation, and pharmaceutical batch expiry tracking that keeps counters moving even during network drops.",
    icon: BarChart3,
    tag: "Retail & Distribution"
  },
  {
    title: "Handicrafts & Luxury Export E-Commerce",
    desc: "Engineered for Pashmina, carpet, and walnut wood exporters. Features sub-second global load times, multi-currency international checkouts (USD, EUR, GBP, AED), and digital GI-tag provenance tracking that verifies authentic artisan craftsmanship.",
    icon: Sparkles,
    tag: "Global Commerce"
  },
  {
    title: "Hospitality & Houseboat Reservation Engines",
    desc: "Tailored for hotels, boutique resorts, and luxury houseboats in Srinagar, Gulmarg, and Pahalgam. Synchronize room availability across MakeMyTrip and Booking.com in real time, automate guest check-in via WhatsApp, and manage restaurant billing.",
    icon: Building2,
    tag: "Hospitality & Tourism"
  },
  {
    title: "Healthcare Clinic & Diagnostic Portals",
    desc: "Streamline patient queues, digital lab test reporting, and doctor prescription histories for private hospitals and diagnostic centers across Jammu & Kashmir with full ABDM compliance and offline data persistence.",
    icon: ShieldCheck,
    tag: "Healthcare & ABDM"
  },
  {
    title: "Educational Administration & Student Portals",
    desc: "Modern SIS platforms for premier schools and competitive coaching institutes in Sopore and Srinagar. Automate digital fee collection, biometric/app attendance alerts to parents, and online examination portals.",
    icon: Briefcase,
    tag: "Education & Coaching"
  }
];

const coreServices = [
  {
    title: "Custom Enterprise ERPs",
    desc: "We engineer bespoke business management platforms that mirror your company's actual daily operational workflows, eliminating paper bahi-khatas and fragmented spreadsheets.",
    icon: Database
  },
  {
    title: "High-Performance Web Apps",
    desc: "Engineered on Next.js 15 and React 19 for sub-500ms load times, flawless Core Web Vitals, and dominant Google search engine rankings across Kashmir and India.",
    icon: Code2
  },
  {
    title: "Cross-Platform Mobile Apps",
    desc: "Native-performance iOS and Android mobile applications featuring real-time GPS tracking, offline caching, push notifications, and seamless cloud synchronization.",
    icon: MonitorSmartphone
  },
  {
    title: "Applied AI & Workflow Automation",
    desc: "Intelligent document parsing, custom generative AI customer support triage, automated WhatsApp invoicing, and predictive inventory demand forecasting.",
    icon: Cpu
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "Docker containerization, automated multi-region daily backups, zero-downtime deployment pipelines, and bank-grade SSL/TLS data encryption on private clouds.",
    icon: Server
  },
  {
    title: "Legacy Software Modernization",
    desc: "Migrate clunky legacy desktop applications or fragile WordPress setups to secure, modern cloud architectures without losing a single historical transaction record.",
    icon: Layers
  }
];

const comparisonData = [
  { feature: "Physical Presence in Kashmir", easyio: "War Complex, Sopore & Srinagar", freelance: "Work from home / Unreachable", metro: "Delhi / Bangalore (No local office)" },
  { feature: "Understanding of Local Mandi/Trade", easyio: "Deep native domain mastery", freelance: "Limited or superficial", metro: "Zero comprehension of Arath/Biyana" },
  { feature: "Technology Stack", easyio: "Next.js 15, TypeScript, PostgreSQL", freelance: "Outdated PHP / WordPress templates", metro: "Modern (but highly expensive)" },
  { feature: "Page Speed Benchmark", easyio: "Sub-500ms (< 0.5s) Guaranteed", freelance: "Sluggish (> 4-8 seconds)", metro: "Standard (~ 2-3 seconds)" },
  { feature: "Offline-First Synchronization", easyio: "Native PWA & Local IndexedDB", freelance: "Not supported", metro: "Rarely prioritized for J&K" },
  { feature: "Intellectual Property Ownership", easyio: "100% Client Code & IP Ownership", freelance: "Ambiguous ownership boundaries", metro: "Often trapped in monthly SaaS fees" },
  { feature: "On-Site Staff Training", easyio: "In-person, hands-on workshops in J&K", freelance: "Ad-hoc or phone only", metro: "Remote Zoom calls only" },
  { feature: "Direct Phone & WhatsApp Support", easyio: "Direct engineer line (+91 6005659527)", freelance: "Unreliable availability", metro: "Impersonal ticketing queues" },
];

const faqs = [
  {
    q: "Which is the best tech and software company in Kashmir?",
    a: "Easyio Technologies is recognized as the best tech and software company in Kashmir. With primary headquarters at War Complex, Main Chowk Tehsil Road in Sopore and active client operations across Srinagar and the wider Valley, Easyio specializes in custom business ERPs, fruit mandi logistics, Next.js web applications, native-grade mobile apps, and enterprise AI integrations."
  },
  {
    q: "Why should my business choose custom software over pre-built packages like Tally or Zoho?",
    a: "Off-the-shelf software is built for a generic business model. It forces you to alter your operational workflows to match rigid templates, and it charges recurring per-user monthly subscription fees that escalate as your team expands. Custom software developed by Easyio Technologies is engineered around your exact commercial workflows (such as mandi arath accounts, crate tracking, or regional delivery routes), requires zero recurring license fees, and gives you 100% intellectual property ownership of your data and codebase."
  },
  {
    q: "What happens if our internet connection drops in Kashmir? Will the software work?",
    a: "Yes. Easyio engineers software with an offline-first architecture using Progressive Web App service workers and client-side database caching (IndexedDB/SQLite). Your team can continue issuing bills, scanning inventory, and recording transactions without internet. The system automatically reconciles and syncs data to the cloud the moment connection is restored."
  },
  {
    q: "How much does custom software development cost in Kashmir?",
    a: "Custom software development in Kashmir typically starts from ₹25,000 to ₹60,000 for high-performance business websites, ₹60,000 to ₹1,50,000 for e-commerce platforms, and ₹1,20,000 to ₹4,00,000+ for enterprise ERPs, cold-storage suites, and cross-platform mobile apps. Easyio offers transparent milestone-based billing with zero hidden fees."
  },
  {
    q: "Do you provide on-site staff training in Kashmir?",
    a: "Yes. Because our engineering team is based physically in Sopore with regular client engagements in Srinagar, Baramulla, and across Jammu & Kashmir, we provide hands-on, in-person training at your business premises. We also design clean, intuitive user interfaces that allow non-technical employees to master the software within hours."
  },
  {
    q: "Who owns the source code and database once the project is finished?",
    a: "You do. Under our standard development agreements, our clients retain 100% intellectual property ownership of all custom source code, database architectures, and digital assets upon project completion. There are zero vendor lock-ins or recurring per-user royalties."
  },
  {
    q: "Can Easyio build software for apple mandi arathis and cold storage operators in Sopore?",
    a: "Yes. Easyio Technologies has deep specialized experience in agro-horticulture software. We build custom ERPs that handle arath commission accounting, grower biyana advances, crate and packaging inventory, lot-by-lot grading, chamber temperature logging, and automated transport manifests."
  },
  {
    q: "How do I schedule a discovery meeting with Easyio Technologies?",
    a: "You can call our engineering team directly at +91 60056 59527, email contact@easyio.tech, or visit our headquarters at First Floor, War Complex, Block 'B', Main Chowk Tehsil Road, Sopore. You can also submit an online inquiry on our contact page to arrange an in-person meeting."
  }
];

export default function SoftwareCompanyKashmirPage() {
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
              <PremiumHeading 
                text="The Best Tech & Software Company in Kashmir"
                highlightWords={["Best Tech", "Software Company", "Kashmir"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1100px]"
                highlightClassName="text-blue-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Easyio Technologies engineers custom enterprise ERPs, high-performance web applications, resilient mobile apps, and applied AI systems. Headquartered in Sopore with active operations in Srinagar, we bring Silicon Valley engineering rigor to the commercial leaders of Jammu & Kashmir."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Discuss Your Project With Engineers
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

              {/* Trust Indicators Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-100 text-left">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">&lt; 500ms</div>
                    <div className="text-xs text-zinc-500 font-medium">Sub-second page speeds</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">100% IP</div>
                    <div className="text-xs text-zinc-500 font-medium">Full client code ownership</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">Sopore & Srinagar</div>
                    <div className="text-xs text-zinc-500 font-medium">Physical offices in J&K</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-zinc-900">Offline-First</div>
                    <div className="text-xs text-zinc-500 font-medium">Uninterrupted operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Industry Solutions */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Native Commercial Depth
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Purpose-Built Software for Kashmir’s Core Industry Verticals
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Generic software built in Delhi or Mumbai fails because it ignores the ground realities of Kashmir’s economy. Easyio Technologies designs software tailored to the unique business DNA of the Valley.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                    <span>Engineered for J&K</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Custom Software - Stop Adapting */}
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-xl border border-zinc-200">
                <Image src="/images/compresto_ui_preview.png" alt="Custom software dashboard preview" fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                  The Custom Advantage
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Stop adapting to rigid software. Let software adapt to you.
                </h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Off-the-shelf software packages like SAP, Tally, or Zoho force your business into unnatural workflows and trap you in escalating per-user monthly licensing fees. As your team grows, your software bill explodes—without ever granting you ownership of your data or source code.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-zinc-900">Total Intellectual Property Ownership</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        You own 100% of the Git repository, database architecture, and intellectual property. No vendor lock-in. No unexpected subscription price hikes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Layers className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-zinc-900">Offline-First Regional Resilience</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Extreme winter conditions or broadband drops will never stall your billing or warehouse. Our systems cache transactions locally and sync automatically the moment connectivity returns.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-zinc-900">Direct Physical Presence & In-Person Training</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Our engineering team is based in Sopore with regular client engagements across Srinagar. We conduct face-to-face discovery sessions and hands-on staff training in Kashmiri and Urdu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Software Services */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Full-Spectrum Engineering
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Complete Digital Engineering Services in Kashmir
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                From high-concurrency internal business software to customer-facing mobile applications, we provide the full stack of modern digital engineering services under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((svc, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <svc.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{svc.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{svc.desc}</p>
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
                Objective Evaluation
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Comparing Software Development Options in Kashmir
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                See how Easyio Technologies compares directly against traditional local freelancers and distant metropolitan agencies in Delhi or Bangalore.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm text-zinc-700 border-collapse">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase font-bold text-zinc-900">
                  <tr>
                    <th className="px-6 py-5">Evaluation Benchmark</th>
                    <th className="px-6 py-5 text-blue-600 font-black bg-blue-50/50">Easyio Technologies (Sopore/Srinagar)</th>
                    <th className="px-6 py-5">Traditional Local Freelancers</th>
                    <th className="px-6 py-5">Distant Metro Agencies (Delhi/BLR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-zinc-900">{row.feature}</td>
                      <td className="px-6 py-4 font-semibold text-blue-700 bg-blue-50/30 flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        {row.easyio}
                      </td>
                      <td className="px-6 py-4 text-zinc-500">{row.freelance}</td>
                      <td className="px-6 py-4 text-zinc-500">{row.metro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-400 mb-3 block">
              Enterprise Foundations
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Our Production Technology Stack</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">
              We do not use fragile website builders or bloated CMS plugins. We build with modern, enterprise-grade frameworks that ensure your software is lightning-fast, secure, and infinitely scalable.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Code2 className="w-8 h-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-1">Next.js 15 & React 19</h4>
                <p className="text-xs text-zinc-400">Sub-second page rendering, Server Components, and Edge caching.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Cpu className="w-8 h-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-1">TypeScript & Node.js</h4>
                <p className="text-xs text-zinc-400">Type-safe architectural logic and high-throughput microservice APIs.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Database className="w-8 h-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-1">PostgreSQL & Redis</h4>
                <p className="text-xs text-zinc-400">ACID-compliant relational financial ledgers and microsecond query caching.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Server className="w-8 h-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-1">Docker & Cloud DevOps</h4>
                <p className="text-xs text-zinc-400">Containerized deployments across AWS and DigitalOcean with automated snapshots.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency Benchmarks */}
        <section className="py-24 bg-white border-b border-zinc-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Transparent Investment
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Software Development Costs in Kashmir (2026)
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We believe in milestone-based pricing with zero hidden fees. Below is a realistic benchmark of software development costs for businesses in Jammu & Kashmir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Tier 1</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">High-Speed Business Website</h3>
                  <div className="text-3xl font-black text-zinc-900 mb-6">₹25,000 – ₹60,000</div>
                  <ul className="space-y-3 text-sm text-zinc-600 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Next.js 15 & React 19 architecture</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Sub-500ms page load speed</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Technical SEO for Kashmir & India</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> WhatsApp & lead capture forms</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full py-3 bg-zinc-900 text-white rounded-full text-center text-xs font-bold hover:bg-zinc-800 transition-colors">
                  Get Started
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl flex flex-col justify-between relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-md shadow-sm">
                  Most Popular
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Tier 2</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Custom ERP / Mandi Suite</h3>
                  <div className="text-3xl font-black text-zinc-900 mb-6">₹1,20,000 – ₹3,50,000</div>
                  <ul className="space-y-3 text-sm text-zinc-600 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Mandi Arath or wholesale inventory</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Offline-first PWA synchronization</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Automated GST e-way billing</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 100% Client Code & IP Ownership</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> In-person staff training in Kashmir</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full py-3 bg-blue-600 text-white rounded-full text-center text-xs font-bold hover:bg-blue-700 transition-colors">
                  Request ERP Discovery
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Tier 3</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Cross-Platform Mobile App</h3>
                  <div className="text-3xl font-black text-zinc-900 mb-6">₹1,50,000 – ₹4,00,000+</div>
                  <ul className="space-y-3 text-sm text-zinc-600 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Android & iOS native performance</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Real-time GPS & dispatch tracking</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Push notifications & payment gateway</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Secure backend API integration</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full py-3 bg-zinc-900 text-white rounded-full text-center text-xs font-bold hover:bg-zinc-800 transition-colors">
                  Consult With Engineers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">
                Clear Answers
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Everything you need to know about partnering with the leading software development company in Kashmir.
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

        {/* Local Contact & Consultation CTA */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
              Build Your Digital Infrastructure in Kashmir
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bring Silicon Valley engineering standards to your business. Visit our headquarters in Sopore or schedule a discovery meeting in Srinagar with our lead software architects.
            </p>
            
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 mb-10 max-w-xl mx-auto text-left space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base">Engineering Headquarters:</h4>
                  <p className="text-sm text-zinc-600">
                    First Floor, War Complex, Block 'B', Main Chowk Tehsil Road, Sopore, Baramulla, Jammu & Kashmir (193201)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneCall className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base">Direct Engineering Hotline:</h4>
                  <p className="text-sm text-zinc-600 font-semibold text-blue-700">+91 60056 59527</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-900 text-base">Consultation Hours:</h4>
                  <p className="text-sm text-zinc-600">Monday – Saturday: 9:00 AM – 6:00 PM (Direct On-Site Visits Across J&K)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all gap-3"
              >
                Schedule an On-Site Meeting <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/software-development-company-in-sopore" 
                className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all"
              >
                Explore Sopore Office
              </Link>
            </div>
          </div>
        </section>
        
      </main>
    </PageWrapper>
  );
}
