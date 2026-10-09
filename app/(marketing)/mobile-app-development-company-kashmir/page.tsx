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
  Code,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Activity
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Kashmir | Easyio",
  description: "Build iOS and Android applications with Easyio Technologies. We are the top mobile app development agency based in Srinagar and Sopore, building cross-platform apps.",
  alternates: {
    canonical: "https://easyio.tech/mobile-app-development-company-kashmir",
  },
  openGraph: {
    title: "Mobile App Development Company in Kashmir",
    description: "Expert iOS and Android app development services. From concept to App Store.",
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
  "description": "Native and cross-platform mobile application development for iOS and Android devices, focusing on UI/UX, performance, and security."
};

const benefits = [
  { title: "Cross-Platform Efficiency", desc: "Using advanced frameworks like React Native, we build your app once and deploy it to both Apple iOS and Google Android, saving up to 40% in development time and costs.", icon: TabletSmartphone },
  { title: "Stunning UI/UX Design", desc: "Apps that users refuse to delete. We design intuitive, modern, and engaging interfaces that feel completely native to the device, prioritizing user retention.", icon: Figma },
  { title: "Robust Backend APIs", desc: "A great app needs a powerful brain. We engineer secure, highly-scalable backend APIs to handle user authentication, payments, and real-time data syncing seamlessly.", icon: Code },
  { title: "App Store Deployment", desc: "We handle the entire complex submission process, ensuring your application strictly adheres to Apple's and Google's rigorous review guidelines.", icon: Apple },
];

const features = [
  { title: "High-Performance Native Modules", desc: "When performance matters, we drop down to native Swift or Kotlin code to ensure smooth 60fps animations and access to native device features like Bluetooth, GPS, or ARKit.", icon: Cpu },
  { title: "Offline-First Capabilities", desc: "Knowing the connectivity challenges in regions like Kashmir, we architect apps with robust offline caching so users can keep working even when they lose internet connection.", icon: Activity },
  { title: "Enterprise-Grade Security", desc: "We implement secure storage, biometric authentication (FaceID/TouchID), and encrypted data transmission to protect your sensitive user data from threats.", icon: ShieldCheck },
  { title: "Scalable Architecture", desc: "From day one, we build your app's architecture to handle thousands of concurrent users, utilizing modern cloud infrastructure like AWS or Firebase.", icon: Layers }
];

const faqs = [
  { q: "Should I build a Native app or a Cross-Platform app?", a: "For 90% of businesses, Cross-Platform (React Native) is the best choice as it provides near-native performance while cutting development time and costs almost in half. Native development is only recommended for high-end graphic games or apps requiring deep, intense hardware integration." },
  { q: "How much does it cost to build a mobile app in Kashmir?", a: "The cost varies significantly based on complexity. A simple informational app will cost much less than a complex on-demand delivery app with real-time tracking and payment integrations. Contact us for a precise quote based on your specific requirements." },
  { q: "Do you design the app UI/UX as well?", a: "Yes, we have an in-house design team that creates high-fidelity prototypes and UI/UX designs before any coding begins, ensuring the final product looks stunning and provides a flawless user experience." },
  { q: "Who owns the code once the app is finished?", a: "You do. Upon project completion and final payment, we transfer 100% of the Intellectual Property (IP) and source code over to your business." },
  { q: "Will you maintain the app after it's launched on the App Store?", a: "Yes, we offer post-launch maintenance packages to handle OS updates, bug fixes, and new feature development as your user base grows." }
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
                highlightWords={["Mobile App", "Kashmir"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-purple-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Reach your customers directly in their pockets. Easyio Technologies designs and builds world-class, high-performance iOS and Android applications right here in Srinagar, transforming your mobile strategy."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-purple-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-purple-700 transition-all">
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

        {/* Content Section: Why Mobile Apps Matter */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 prose prose-zinc prose-lg">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-6">Dominating the Mobile-First World</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              In today's digital landscape, a website is no longer enough. Over 80% of digital traffic now originates from mobile devices. If your business isn't accessible via a tap on a smartphone screen, you are missing out on the most direct and engaging way to connect with your audience. As the leading mobile app development agency in Kashmir, we help businesses bridge this gap.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We specialize in creating robust, highly interactive mobile applications that drive customer loyalty and streamline internal operations. Whether you are building the next big consumer social platform, an on-demand delivery service, or an internal enterprise management tool, our engineering team has the expertise to bring it to life.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-12">
              Unlike freelance developers or offshore agencies, we offer a dedicated, in-house team right here in Jammu & Kashmir. This means clear communication, localized understanding of the market, and enterprise-grade software development standards without the massive agency price tag.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Built for the App Store. Engineered for Scale.</h2>
               <p className="text-lg text-zinc-600">From initial concept to final deployment, we handle the complete lifecycle of mobile application development for startups and established enterprises.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-white border border-zinc-200 rounded-3xl flex flex-col gap-6 group hover:border-purple-300 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <feat.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-zinc-900">{feat.title}</h4>
                      <p className="text-zinc-600 leading-relaxed text-sm">{feat.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-16 text-center">Under the Hood</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 p-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex flex-shrink-0 items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Lifecycle */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Our App Development Lifecycle</h2>
              <p className="text-lg text-zinc-400">
                A transparent, step-by-step process ensuring quality from wireframe to deployment.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Wireframing</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">We map out user journeys, plan feature sets, and create wireframes to define the app's structure and core functionalities before any design work begins.</p>
                </div>
              </div>
              <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Our designers craft pixel-perfect mockups and interactive prototypes, ensuring the app is not only beautiful but intuitively functional.</p>
                </div>
              </div>
              <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Engineering & API Integration</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Our developers write clean, maintainable code, integrating necessary backend services, third-party APIs, and cloud databases.</p>
                </div>
              </div>
              <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 text-purple-400 font-bold flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & App Store Launch</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Rigorous QA testing across multiple devices ensures a bug-free experience. We then handle the strict Apple App Store and Google Play Store submission processes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-zinc-200 rounded-2xl">
                  <h4 className="text-lg font-bold text-zinc-900 mb-3">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to launch on iOS & Android?</h2>
            <p className="text-purple-100 mb-10 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Partner with Kashmir's leading mobile development team to bring your idea to life. We engineer digital experiences that captivate users.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-purple-600 bg-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-transform">
              Discuss Your App Idea <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
