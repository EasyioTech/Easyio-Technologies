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

        {/* Content Section / Comprehensive SEO Article */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 prose prose-zinc prose-lg">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8">Dominating the Mobile-First World from Kashmir</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              In today's hyper-connected digital landscape, a website is no longer enough to maintain a competitive edge. Over 80% of digital traffic now originates from mobile devices, and users spend an average of 4.8 hours a day interacting with mobile applications. If your business isn't accessible via a tap on a smartphone screen, you are missing out on the most direct, engaging, and personalized way to connect with your audience. As the premier mobile app development company based in Srinagar, Kashmir, Easyio Technologies helps visionary startups and established enterprises bridge this critical gap.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We specialize in engineering robust, highly interactive mobile applications that drive customer loyalty, automate complex internal operations, and generate new revenue streams. Whether you are building the next big consumer social platform, an on-demand delivery service tailored for the unique geography of Kashmir, or a sophisticated internal enterprise management tool, our elite engineering team has the deep technical expertise required to bring your vision to life.
            </p>

            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mt-12 mb-6">The Easyio Advantage: Local Presence, Global Standards</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Many local businesses and entrepreneurs make the mistake of outsourcing their app development to massive, faceless agencies overseas or hiring unverified freelance developers. This often results in communication breakdowns, blown budgets, and a substandard product that gets rejected by the App Store.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              By partnering with Easyio Technologies, you get the best of both worlds. We are an in-house team based right here in Jammu & Kashmir. This means you get clear communication, face-to-face strategy sessions, and a localized understanding of the market dynamics. Simultaneously, our engineering standards are world-class. We write clean, test-driven code, implement rigorous CI/CD pipelines, and architect backend systems that can scale to millions of users, ensuring you receive an enterprise-grade application without the exorbitant Silicon Valley price tag.
            </p>

            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mt-12 mb-6">Cross-Platform (React Native) vs. Native Development</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              One of the first critical decisions in mobile app development is choosing the right technology stack. We guide our clients through this technical labyrinth to choose the most cost-effective and performant solution for their specific use case.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              <strong>Cross-Platform Mastery (React Native):</strong> For 90% of business applications, on-demand services, and e-commerce platforms, we highly recommend React Native. This powerful framework allows us to write a single, unified codebase that deploys natively to both Apple iOS and Google Android. This strategy drastically cuts development time and reduces costs by up to 40% while delivering a user interface that feels 100% native. You only have to maintain one codebase, making future updates significantly faster and cheaper.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              <strong>Deep Native Engineering (Swift / Kotlin):</strong> If your application requires intense graphic processing (like a 3D game), relies heavily on deep hardware integration (like complex Bluetooth LE protocols, ARKit augmented reality, or sophisticated camera filtering), or demands the absolute maximum frame rate possible, we drop down to Native development. Our engineers write Swift for iOS and Kotlin for Android, extracting every ounce of performance from the device's CPU and GPU.
            </p>

            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mt-12 mb-6">Architecting the Backend Engine</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              A beautiful mobile app is essentially an empty shell without a powerful backend architecture driving it. The backend is the "brain" of your application, responsible for securely authenticating users, processing complex business logic, managing real-time databases, and handling payment transactions.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              At Easyio, we architect highly scalable backend APIs using Node.js, Express, and PostgreSQL, deployed on reliable cloud infrastructure like AWS or Google Cloud. We implement robust JWT (JSON Web Token) authentication flows and encrypt all data in transit and at rest. If your app requires real-time features—such as a live chat system, driver tracking on a map, or instant notifications—we implement WebSocket protocols to ensure instantaneous data synchronization across all connected devices.
            </p>

            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mt-12 mb-6">Designing for Retention: UI/UX Excellence</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              The App Store is a ruthless environment. If a user downloads your app and cannot immediately figure out how to use it, they will delete it within 60 seconds. User Interface (UI) and User Experience (UX) design are not just about making things look pretty; they are about designing intuitive workflows that guide the user to the "aha!" moment as quickly as possible.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Our in-house design team creates high-fidelity prototypes and wireframes in Figma before a single line of code is written. We study user psychology, apply Apple's Human Interface Guidelines and Google's Material Design principles, and obsess over micro-interactions. The result is an application that users find delightful, intuitive, and, most importantly, indispensable.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-12">
              Building a successful mobile application is a complex journey, but you don't have to navigate it alone. From the initial napkin sketch and wireframing, to coding the backend, and finally navigating the complex App Store review processes, Easyio Technologies is your dedicated engineering partner in Kashmir.
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
