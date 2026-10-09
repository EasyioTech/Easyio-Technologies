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
  Users,
  Briefcase,
  Box,
  Truck,
  CheckCircle2,
  LineChart
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
  { title: "No Monthly Licensing Fees", desc: "Stop paying per-user subscriptions for software like Zoho or SAP. You own the custom code, saving you thousands of dollars annually as your team grows.", icon: Zap },
  { title: "Exact Workflow Match", desc: "Off-the-shelf software forces you to adapt your business to their software. We build systems that adapt exactly to how your team already works, minimizing training time.", icon: Settings },
  { title: "Bank-Grade Security", desc: "Your customer and financial data is encrypted and completely under your control, hosted securely on private cloud infrastructure.", icon: ShieldCheck },
  { title: "Local Support & Training", desc: "When you need training, system modifications, or immediate technical help, our team in Kashmir is just a phone call away.", icon: Users },
];

const erpModules = [
  { title: "Inventory & Warehouse Management", desc: "Track stock levels in real-time, automate reordering, manage multiple warehouses, and prevent stockouts with intelligent forecasting.", icon: Box },
  { title: "Human Resources & Payroll", desc: "Automate employee onboarding, attendance tracking, performance reviews, and complex payroll calculations tailored to local tax laws.", icon: Briefcase },
  { title: "Supply Chain & Logistics", desc: "Monitor your entire supply chain, track shipments, manage vendor relationships, and optimize delivery routes for maximum efficiency.", icon: Truck },
  { title: "Financial Accounting & Reporting", desc: "Generate automated balance sheets, P&L statements, and cash flow reports. Seamlessly handle invoicing, expenses, and tax compliance.", icon: LineChart },
  { title: "Customer Relationship Management (CRM)", desc: "Consolidate customer data, track sales pipelines, manage support tickets, and improve customer retention with actionable insights.", icon: Users },
  { title: "Business Intelligence & Analytics", desc: "Transform raw data into visual dashboards. Make informed, data-driven decisions based on real-time KPIs across all departments.", icon: BarChart3 }
];

const faqs = [
  { q: "What is an ERP system and why do I need one?", a: "ERP (Enterprise Resource Planning) is software that integrates all your business processes—inventory, HR, finance, sales—into a single, unified system. You need it if you are relying on multiple disconnected spreadsheets, facing data silos, or struggling to scale operations smoothly." },
  { q: "Custom ERP vs. Off-the-shelf ERP (like SAP or Zoho): Which is better?", a: "Off-the-shelf ERPs are built for the 'average' business. They often have bloated features you don't need and lack specific features you do need. They also charge per-user monthly fees. A custom ERP is built exactly for your workflow, you own the IP, and there are no recurring per-user licenses." },
  { q: "How much does a custom ERP cost to develop in Kashmir?", a: "The cost depends entirely on the modules required (e.g., just inventory vs. full suite). While the upfront development cost is higher than a first-month subscription of a SaaS product, a custom ERP typically pays for itself within 1-2 years through saved licensing fees and increased operational efficiency." },
  { q: "Will you provide training to our staff?", a: "Yes. As a local firm based in Kashmir, we provide hands-on training sessions for your staff, ensuring a smooth transition. We also design our systems with modern, intuitive user interfaces that require very little technical expertise to operate." },
  { q: "Can the ERP be accessed on mobile devices?", a: "Absolutely. We develop responsive web applications that work perfectly on desktops, tablets, and smartphones, allowing your field staff or warehouse managers to input data on the go." }
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
                highlightWords={["Custom ERP", "Software", "Kashmir"]}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-emerald-600"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Tired of managing your growing business on fragmented spreadsheets? We engineer custom inventory, HR, and operations systems that automate your workflow and eliminate expensive recurring software licenses."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center">
                   <Link href="/contact" className="group relative inline-flex h-14 px-10 bg-emerald-600 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-emerald-700 transition-all">
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

        {/* Introduction */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 prose prose-zinc prose-lg">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-6">Digital Transformation for Kashmir's Enterprises</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              As businesses in Jammu & Kashmir expand across manufacturing, retail, horticulture, and logistics, traditional management methods are breaking down. Relying on disconnected Excel sheets, paper ledgers, or generic accounting software creates massive inefficiencies, data silos, and prevents leadership from getting a clear, real-time view of company performance.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              At Easyio Technologies, we specialize in Custom ERP (Enterprise Resource Planning) software development. Instead of forcing your unique business processes into a rigid, off-the-shelf software box, we build the software around your exact operations. 
            </p>
            <p className="text-zinc-600 leading-relaxed mb-12">
              A custom ERP acts as the digital nervous system of your company. It connects inventory management, human resources, payroll, customer relationships, and financial reporting into one secure, unified platform. The result? Reduced human error, massive time savings, and the ability to scale your operations without friction.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Why Custom Software Beats Off-The-Shelf</h2>
               <p className="text-lg text-zinc-600">Most growing businesses in Kashmir are stuck paying expensive monthly subscriptions for software that only does 50% of what they need. Here is why custom is the smarter investment.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {benefits.map((feat, idx) => (
                 <div key={idx} className="p-8 bg-white border border-zinc-200 rounded-3xl flex flex-col gap-6 group hover:border-emerald-300 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
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

        {/* Modules Section */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">Core ERP Modules We Develop</h2>
              <p className="text-lg text-zinc-600">Build exactly what you need. Start with core modules and add more as your business expands.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {erpModules.map((module, idx) => (
                <div key={idx} className="p-8 border border-zinc-200 rounded-2xl hover:border-emerald-500 transition-colors bg-white">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{module.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center">How We Build Your ERP</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-zinc-800 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-zinc-700 text-xl">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Process Mapping & Audit</h3>
                  <p className="text-zinc-400 leading-relaxed">We don't write a single line of code until we fully understand your business. We map out your existing workflows, identify bottlenecks, and design a digital architecture that streamlines operations.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-zinc-800 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-zinc-700 text-xl">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Modular Development</h3>
                  <p className="text-zinc-400 leading-relaxed">We develop the ERP in modules (e.g., Inventory first, then HR). This agile approach allows you to start using parts of the system and seeing ROI while the rest is still being built.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-zinc-800 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-zinc-700 text-xl">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Data Migration & Training</h3>
                  <p className="text-zinc-400 leading-relaxed">We safely migrate your historical data from Excel or legacy software into the new secure database. We then conduct comprehensive, on-site training for your staff in Kashmir.</p>
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
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Ready to Digitize Your Operations?</h2>
            <p className="text-zinc-400 mb-10 text-lg">As a leading software engineering firm based in Kashmir, we help local enterprises scale without limits. Stop fighting your software and start growing.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-zinc-950 bg-emerald-400 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
