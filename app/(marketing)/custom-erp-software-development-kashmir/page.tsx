import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
  Settings,
  Users
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP Software Development in Kashmir | Easyio",
  description: "Scale your Kashmir-based business with a custom ERP system. We build tailored inventory, HR, and operations software that perfectly fits your workflow.",
  alternates: {
    canonical: "https://easyio.tech/custom-erp-software-development-kashmir",
  },
  openGraph: {
    title: "Custom ERP Software Development in Kashmir",
    description: "Tailored business management software for enterprises in Jammu & Kashmir.",
    url: "https://easyio.tech/custom-erp-software-development-kashmir",
    siteName: "Easyio Technologies",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom ERP Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Jammu and Kashmir"
  },
  "description": "Custom Enterprise Resource Planning (ERP) software and internal business tool development."
};

const benefits = [
  { title: "No Monthly Licensing Fees", desc: "Stop paying per-user subscriptions for software like Zoho or SAP. You own the code.", icon: Zap },
  { title: "Exact Workflow Match", desc: "Off-the-shelf software forces you to adapt. We build systems that adapt to how your team already works.", icon: Settings },
  { title: "Bank-Grade Security", desc: "Your customer and financial data is encrypted and completely under your control.", icon: ShieldCheck },
  { title: "Local Support", desc: "When you need training or immediate technical help, our Sopore/Srinagar team is here.", icon: Users },
];

export default function CustomERPPage() {
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
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600/80">Enterprise Systems</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Custom ERP Software Development in Kashmir"
                highlightWords={["Custom ERP", "Software"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-emerald-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Tired of managing your growing business on spreadsheets? We engineer custom inventory, HR, and operations systems that automate your workflow."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                      Book a Free System Audit
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
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Why custom software beats off-the-shelf.</h2>
               <p className="text-lg text-zinc-600">Most Kashmir businesses are stuck using messy spreadsheets or paying expensive monthly subscriptions for software that only does 50% of what they need.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl flex gap-6 group hover:border-emerald-200 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to digitize your operations?</h2>
            <p className="text-zinc-400 mb-10 text-lg">As a leading <Link href="/software-development-company-in-kashmir" className="text-emerald-400 hover:underline">software engineering firm</Link> based in Sopore, we help local businesses scale without limits. Let's discuss your requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-zinc-950 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Contact our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
