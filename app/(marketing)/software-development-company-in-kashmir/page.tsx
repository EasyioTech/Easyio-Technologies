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
  Server
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company in Kashmir | Custom ERP & SaaS | Easyio",
  description: "Looking for a reliable software development company in Kashmir? We build custom ERPs, SaaS applications, and scalable business software from our Srinagar office.",
  alternates: {
    canonical: "https://easyio.tech/software-development-company-in-kashmir",
  },
  openGraph: {
    title: "Software Development Company in Kashmir | Easyio Technologies",
    description: "Expert software engineering in Srinagar. We build custom ERPs, SaaS platforms, and enterprise software.",
    url: "https://easyio.tech/software-development-company-in-kashmir",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/images/og-software-kashmir.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development in Kashmir - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Jammu and Kashmir"
    },
    {
      "@type": "City",
      "name": "Srinagar"
    }
  ],
  "description": "Custom software development, ERP systems, and SaaS platform engineering for businesses in Kashmir."
};

const techStack = [
  { name: "Next.js & React", role: "Frontend UI", icon: Code2 },
  { name: "Node.js & Python", role: "Backend Logic", icon: Cpu },
  { name: "PostgreSQL", role: "Database Systems", icon: Database },
  { name: "AWS & Docker", role: "Infrastructure", icon: Server },
];

export default function SoftwareCompanyKashmirPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-zinc-50 text-zinc-950 font-sans pb-20">
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 relative overflow-hidden bg-white border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600/80">Software Engineering</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Custom Software Development in Kashmir"
                highlightWords={["Custom Software", "Development"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-blue-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="We engineer custom ERPs, internal tools, and scalable SaaS applications. No bloated legacy code—just clean, high-performance software built in Srinagar."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <a href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                  <span className="relative z-10 flex items-center gap-3">
                    Discuss Your Software Needs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Custom Software */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-xl">
                <Image src="/images/compresto_ui_preview.png" alt="Custom software dashboard preview" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8">Stop adapting to software. Let software adapt to you.</h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Off-the-shelf software often forces your business into unnatural workflows and comes with expensive per-user licensing fees. We build custom software that exactly matches your operational processes in Kashmir.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-zinc-900">Total Ownership</h4>
                      <p className="text-zinc-600 text-sm">You own the code and the data. No surprise price hikes from third-party vendors.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Layers className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-zinc-900">Seamless Integrations</h4>
                      <p className="text-zinc-600 text-sm">We connect your new software to your existing accounting, HR, and communication tools via APIs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Our Technology Stack</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">We use modern, enterprise-grade frameworks to ensure your software is fast, secure, and scalable.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                  <tech.icon className="w-8 h-8 text-blue-400 mb-6" />
                  <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
                  <p className="text-sm text-zinc-500">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Advantage */}
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-black tracking-tighter text-zinc-900 mb-6">Your Local Technology Partner in Srinagar</h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              When you hire a software development company in Kashmir, you gain the advantage of direct accountability. We meet with you, understand your business on the ground in Srinagar, and provide immediate post-launch support without the friction of extreme time zones. As a premier <Link href="/">technology company in Srinagar</Link>, we also offer <Link href="/web-development-company-in-srinagar">public-facing web development</Link> to complement your internal tools. View our <Link href="/case-studies">recent engineering projects</Link> to see our work in action.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Schedule a meeting at our office <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        
      </main>
    </PageWrapper>
  );
}
