import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
  Boxes,
  BarChart3,
  Check,
  PhoneCall,
  GitBranch,
  Activity,
  Workflow
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise-Grade Software Systems | Easyio Technologies",
  description: "Bespoke enterprise software, microservice orchestration, and mission-critical business systems engineered for extreme operational scale with zero downtime.",
  alternates: {
    canonical: "https://easyio.tech/enterprise-software-systems",
  },
  keywords: [
    "enterprise software systems",
    "custom enterprise software",
    "microservices architecture",
    "business automation software",
    "enterprise software development kashmir",
    "high-performance ERP systems",
    "easyio enterprise systems"
  ],
  openGraph: {
    title: "Enterprise-Grade Software Systems | Easyio Technologies",
    description: "Building smart, scalable software that solves complex business operations with high throughput, ACID compliance, and zero technical debt.",
    url: "https://easyio.tech/enterprise-software-systems",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enterprise-Grade Software Systems - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise-Grade Software Systems",
  "serviceType": "Enterprise Software Engineering & Architecture",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "description": "Architecting resilient, event-driven enterprise software systems, distributed database meshes, and mission-critical business automation.",
  "areaServed": "Global"
};

const architecturalPillars = [
  {
    title: "Decoupled Microservice Mesh",
    desc: "Monoliths become single points of failure. We architect independent, containerized services connected via asynchronous message queues (Kafka/Redis) so failure in one module never degrades your core operations.",
    icon: Boxes,
    metric: "Zero Cascading Failure"
  },
  {
    title: "ACID-Compliant Distributed Ledgers",
    desc: "Financial records and inventory transactions cannot afford eventual consistency. We engineer strict transactional boundaries using PostgreSQL partition clusters and row-level locking to guarantee audit integrity.",
    icon: Database,
    metric: "100% Data Precision"
  },
  {
    title: "Offline-Survivable Edge Nodes",
    desc: "External network disruptions should never stop a factory packaging line, warehouse barcode scanner, or retail billing counter. Our edge nodes process operations locally and synchronize automatically.",
    icon: Server,
    metric: "Continuous Execution"
  },
  {
    title: "Predictive Telemetry & Real-Time Auditing",
    desc: "Every API request, state transition, and user permission check is instrumented with immutable audit trails and real-time latency monitors, providing executive visibility into every business bottleneck.",
    icon: Activity,
    metric: "Sub-Millisecond Observability"
  }
];

const capabilities = [
  {
    domain: "Automated Supply Chain & Mandi Logistics",
    challenge: "High-volume commodity exchanges dealing with perishable lots, variable commission deductions, crate loans, and freight manifests.",
    solution: "Custom multi-tier ERP meshes that record grower consignments, automate weighbridge billing, and dispatch real-time digital manifests directly to drivers and recipients via WhatsApp APIs."
  },
  {
    domain: "High-Throughput Distribution & Wholesale",
    challenge: "Managing dozens of physical warehouses and retail counters where inventory discrepancies lead to delayed fulfillment and lost revenue.",
    solution: "Synchronous multi-warehouse inventory engines with automated reorder triggers, FIFO/LIFO batch accounting, and instant GST e-way billing."
  },
  {
    domain: "Manufacturing Execution & Yield Auditing",
    challenge: "Raw material intake variations, machine calibration drift, and unmonitored scrap loss eroding production profit margins.",
    solution: "Dynamic Bill of Materials (BOM) systems that calculate true per-unit production cost down to the fraction of a cent in real time as goods move along the floor."
  },
  {
    domain: "Healthcare Clinical Informatics & ABDM",
    challenge: "Disparate diagnostic lab systems, paper prescription records, and strict data privacy compliance hurdles.",
    solution: "HIPAA and ABDM-aligned patient core portals featuring offline clinic synchronization, secure digital prescription vaults, and automated SMS lab alerts."
  }
];

const faqs = [
  {
    q: "What differentiates an enterprise-grade software system from standard business software?",
    a: "Standard business software is typically a one-size-fits-all package (like generic Tally or off-the-shelf SaaS) that forces you to alter your business processes to fit its rigid templates. Enterprise-grade software systems engineered by Easyio are tailored to your exact operational logic, built on resilient microservices, feature high-throughput database design, survive network outages, and grant your business 100% intellectual property ownership."
  },
  {
    q: "How does Easyio ensure that enterprise systems don't experience downtime during peak traffic?",
    a: "We decouple compute, caching, and database storage. By utilizing containerized Docker services, horizontal auto-scaling, in-memory Redis caching, and edge routing, our systems distribute incoming traffic loads seamlessly, handling thousands of concurrent transactions without latency spikes."
  },
  {
    q: "Can our existing legacy databases and accounting tools be migrated to your system?",
    a: "Yes. We specialize in zero-data-loss migrations. Our engineering team builds automated data sanitation and transformation pipelines that import your historical customer records, inventory ledgers, and transaction logs without interrupting your ongoing daily operations."
  },
  {
    q: "Who owns the code and intellectual property of the enterprise software you build?",
    a: "Your organization retains 100% full intellectual property and source code ownership. Easyio Technologies delivers complete Git repositories, database schema definitions, and cloud deployment pipelines upon project handover, freeing you from recurring per-user monthly licensing fees."
  }
];

export default function EnterpriseSoftwareSystemsPage() {
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
                <div className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-yellow-100/70 border border-yellow-300/80">
                   <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-900">
                     Core Systems Architecture
                   </span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Enterprise-Grade Software Systems."
                highlightWords={["Enterprise-Grade", "Software Systems."]}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-yellow-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="We engineer bespoke business management platforms, decoupled microservices, and mission-critical operational architectures. Designed to solve complex logistical friction, eliminate paper dependencies, and scale with uncompromising speed."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Consult with Systems Architects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    View Deployed Case Studies
                  </Link>
                </div>
              </FadeIn>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-200 text-left">
                <div>
                  <div className="text-2xl font-black text-zinc-950">98.4%</div>
                  <div className="text-xs text-zinc-500 font-medium">Process efficiency gain</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">&lt; 15ms</div>
                  <div className="text-xs text-zinc-500 font-medium">Database query latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">100%</div>
                  <div className="text-xs text-zinc-500 font-medium">Proprietary IP ownership</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">Zero</div>
                  <div className="text-xs text-zinc-500 font-medium">Monthly per-user fees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: Why Off-the-Shelf Packages Break Down */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-600 mb-3 block">
                  The Operational Reality
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Generic software forces you to compromise. We build software that fits your exact workflow.
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Most organizations hit a plateau when attempting to scale with generic accounting software or disconnected spreadsheets. Traditional ERPs like SAP or NetSuite cost millions, require years of consulting, and fail to accommodate real-world trade dynamics.
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Easyio Technologies builds custom enterprise software from the ground up. Whether you manage thousands of agricultural consignment accounts, multi-warehouse wholesale distribution, or private healthcare diagnostics, our systems match your operational reality down to the smallest detail.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Total Data Sovereignty</h4>
                      <p className="text-sm text-zinc-600">Your customer data, ledgers, and transactions remain hosted securely on private cloud infrastructure with automated daily snapshots.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Sub-Second Execution Velocity</h4>
                      <p className="text-sm text-zinc-600">Engineered with Next.js, TypeScript, and PostgreSQL for instantaneous search, filtering, and reporting across millions of records.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl border border-zinc-200">
                <Image src="/enterprise_engine.png" alt="Enterprise Architecture Engine" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Architectural Pillars */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400 mb-3 block">
                Engineering Foundations
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                Engineered for High-Concurrency Resilience
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We design enterprise systems with defensive programming, zero single points of failure, and strict transaction isolation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {architecturalPillars.map((p, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                        {p.metric}
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

        {/* Real-World Industry Deployments */}
        <section className="py-24 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-600 mb-3 block">
                Practical Execution
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Where Our Enterprise Systems Are Deployed
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Explore real industrial and commercial domains where Easyio systems replace manual friction with automated clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((c, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-4">{c.domain}</h3>
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">Operational Friction:</div>
                      <p className="text-sm text-zinc-600 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Easyio System Architecture:</div>
                      <p className="text-sm text-zinc-700 font-medium leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-600 mb-3 block">
                Clear Answers
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Enterprise Systems FAQ
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
              Modernize Your Operational Nervous System
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a discovery call with our lead systems architects to map out a resilient digital platform for your enterprise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-yellow-400 text-zinc-950 font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-yellow-300 transition-all gap-3"
              >
                Schedule Technical Discovery <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+916005659527" 
                className="inline-flex h-14 px-8 border border-white/20 bg-white/10 text-white font-bold text-sm items-center justify-center rounded-full hover:bg-white/20 transition-all gap-2"
              >
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                Call +91 60056 59527
              </a>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
