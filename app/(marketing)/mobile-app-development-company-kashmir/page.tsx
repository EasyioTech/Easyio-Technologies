import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Apple,
  TabletSmartphone,
  Figma,
  ArrowRight,
  Code
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Kashmir | Easyio",
  description: "Build iOS and Android applications with Easyio Technologies. We are the top mobile app development agency based in Srinagar and Sopore.",
  alternates: {
    canonical: "https://easyio.tech/mobile-app-development-company-kashmir",
  },
  openGraph: {
    title: "Mobile App Development Company in Kashmir",
    description: "Expert iOS and Android app development services.",
    url: "https://easyio.tech/mobile-app-development-company-kashmir",
    siteName: "Easyio Technologies",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile Application Development",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Jammu and Kashmir"
  },
  "description": "Native and cross-platform mobile application development for iOS and Android."
};

const benefits = [
  { title: "Cross-Platform Efficiency", desc: "Using technologies like React Native and Flutter, we build once and deploy to both Apple iOS and Google Android, saving you time and money.", icon: TabletSmartphone },
  { title: "Stunning UI/UX Design", desc: "Apps that people actually want to use. We design intuitive, modern interfaces that feel native to the device.", icon: Figma },
  { title: "Robust Backend APIs", desc: "A great app needs a powerful backend. We engineer secure APIs to handle user data, payments, and real-time syncing.", icon: Code },
  { title: "App Store Deployment", desc: "We handle the entire submission process, ensuring your app passes Apple and Google's strict review guidelines.", icon: Apple },
];

export default function MobileAppPage() {
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
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-purple-600/80">Mobile Engineering</span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Mobile App Development Company in Kashmir"
                highlightWords={["Mobile App"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-purple-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Reach your customers directly in their pockets. We design and build world-class iOS and Android applications right here in Kashmir."
                className="text-zinc-600 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your App Project
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
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Built for the App Store.</h2>
               <p className="text-lg text-zinc-600">From concept to launch, we handle the complete lifecycle of mobile application development for startups and established enterprises.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl flex gap-6 group hover:border-purple-200 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to launch on iOS & Android?</h2>
            <p className="text-zinc-400 mb-10 text-lg">Partner with Kashmir's leading <Link href="/software-development-company-in-kashmir" className="text-purple-400 hover:underline">mobile development team</Link> to bring your idea to life.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-zinc-950 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Contact our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
