import { generateMetadata, generateJsonLd } from "@/lib/seo";
import PageWrapper from "@/components/layout/PageWrapper";
import ProjectEstimator from "@/components/sections/estimator/ProjectEstimator";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { ShieldCheck, Clock, Zap, CheckCircle2, ArrowUpRight, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Interactive Software Cost & Timeline Estimator | Easyio Technologies",
  description:
    "Calculate instant development costs and timelines for custom ERPs, SaaS web apps, mobile applications, and AI systems. Transparent pricing for clients in Kashmir, India, and the USA.",
  canonicalUrl: "https://easyio.tech/project-estimator",
  keywords: [
    "software development cost calculator",
    "project cost estimator kashmir",
    "custom erp price india",
    "hire software developers kashmir",
    "offshore web development usa",
    "mobile app development cost sopore",
    "easyio pricing calculator"
  ],
});

const ESTIMATOR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://easyio.tech/project-estimator/#app",
      name: "Easyio Software Cost & Timeline Estimator",
      url: "https://easyio.tech/project-estimator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "75000",
        highPrice: "600000",
      },
    },
  ],
};

const FAQS = [
  {
    q: "How accurate is this online estimator?",
    a: "This calculator provides a high-confidence ballpark based on over 50+ enterprise systems, custom ERPs, and web platforms we have built. Following your submission, a senior systems architect reviews your exact requirements and delivers a binding, fixed-price milestone quote within 24 hours.",
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes, absolutely. Upon completion of each milestone and project delivery, all source code, database schemas, CI/CD configs, and documentation are pushed directly to your private GitHub organization. We claim zero proprietary lock-in.",
  },
  {
    q: "How do you handle projects for clients in the USA or overseas?",
    a: "We work directly with US and international founders using asynchronous sprint planning on Linear/Jira, automated CI/CD staging environments, and 4–5 hours of synchronous daily overlap with EST/PST for real-time video standups and Slack collaboration.",
  },
  {
    q: "What post-launch support and warranty is included?",
    a: "Every single deployment from Easyio Technologies includes a complimentary 30-day bug-free warranty and stability monitoring period. We ensure zero runtime errors before handing over maintenance or rolling into a long-term retainer.",
  },
  {
    q: "Can you meet us in-person in Kashmir?",
    a: "Yes! Our primary engineering headquarters is in War Complex, Tehsil Road, Sopore, and we regularly hold on-site architecture workshops and onboarding sessions across Srinagar, Baramulla, and throughout Jammu & Kashmir.",
  },
];

export default function ProjectEstimatorPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(ESTIMATOR_SCHEMA)}
      />

      {/* Hero Header */}
      <section className="pt-32 md:pt-48 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Transparent Investment Architecture</span>
          </div>

          <PremiumHeading
            text="Estimate Your Project Cost & Timeline in 60 Seconds"
            highlightWords={["Cost", "Timeline", "Seconds"]}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-950 mb-6 leading-tight max-w-4xl mx-auto"
            highlightClassName="text-emerald-600"
          />

          <PremiumSubheading
            delay={0.2}
            text="No hidden fees. No guesswork. Whether you need an enterprise ERP in Kashmir or a dedicated offshore engineering team for a US startup, calculate your ballpark investment below."
            className="text-zinc-500 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          />
        </div>
      </section>

      {/* The Interactive Calculator Component */}
      <section className="pb-24 px-4 sm:px-6 relative z-20">
        <ProjectEstimator />
      </section>

      {/* Trust & Guarantees Bar */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-950 mb-1">100% IP Ownership</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Every commit and asset belongs to you. Zero vendor lock-in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-950 mb-1">Guaranteed Sprints</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Bi-weekly milestone deliveries with live test links at every stage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-950 mb-1">30-Day Warranty</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Free post-launch support and bug fixes to ensure flawless operation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-950 mb-1">Mutual NDA Signed</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Your business logic, proprietary data, and ideas remain strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Clear & Honest Answers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Frequently Asked Pricing Questions
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs"
            >
              <h3 className="text-base font-bold text-zinc-950 mb-2">{faq.q}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 text-white text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2">Have a custom architectural challenge?</h3>
          <p className="text-zinc-400 text-sm max-w-md mb-6">
            Book a 1-on-1 technical discovery call with our Lead Architect to scope out complex enterprise systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all"
            >
              Book Discovery Call
            </Link>
            <a
              href="https://wa.me/916005659527?text=Hi%20Easyio%20team,%20I'd%20like%20to%20schedule%20a%20technical%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-700 transition-all"
            >
              WhatsApp Us (+91 60056 59527)
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
