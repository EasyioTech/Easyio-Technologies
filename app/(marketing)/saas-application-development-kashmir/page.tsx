import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Code2,
  Lock,
  Layers,
  ArrowRight,
  Server,
  Zap
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Application Development in Kashmir | Easyio",
  description: "Turn your startup idea into a scalable SaaS product. Easyio provides expert SaaS application development and cloud architecture in Srinagar, Kashmir.",
  alternates: {
    canonical: "https://easyio.tech/saas-application-development-kashmir",
  },
  openGraph: {
    title: "SaaS Application Development in Kashmir",
    description: "Launch your next SaaS product with Kashmir's top engineering team.",
    url: "https://easyio.tech/saas-application-development-kashmir",
    siteName: "Easyio Technologies",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SaaS Application Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Jammu and Kashmir"
  },
  "description": "Software as a Service (SaaS) product development and cloud infrastructure engineering."
};

const benefits = [
  { title: "Multi-Tenant Architecture", desc: "Built correctly from day one. We engineer databases and backend systems that safely isolate user data while scaling globally.", icon: Layers },
  { title: "Modern Tech Stack", desc: "We utilize React, Next.js, Node.js, and PostgreSQL to ensure your web app is fast, modern, and easy to maintain.", icon: Code2 },
  { title: "Cloud Infrastructure", desc: "Expert deployment on AWS, Vercel, or custom VPS to guarantee 99.9% uptime for your users.", icon: Cloud },
  { title: "Enterprise Security", desc: "Authentication, authorization, and data encryption implemented according to industry best practices.", icon: Lock },
];

export default function SaaSPage() {
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
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600/80">Product Engineering</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="SaaS Application Development in Kashmir"
                highlightWords={["SaaS Application"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-blue-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Transform your vision into a scalable, revenue-generating software product. We build world-class SaaS applications right here in Srinagar."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                      Discuss Your SaaS Idea
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
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Engineered for growth.</h2>
               <p className="text-lg text-zinc-600">Building a SaaS product is entirely different from building a standard website. It requires complex state management, subscription billing, and flawless security.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl flex gap-6 group hover:border-blue-200 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Let's build your product.</h2>
            <p className="text-zinc-400 mb-10 text-lg">Partner with Kashmir's premier <Link href="/software-development-company-in-kashmir" className="text-blue-400 hover:underline">software engineering team</Link> to launch your startup successfully.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-zinc-950 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Contact our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
