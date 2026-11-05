import { Code2, Layers, Zap, ShieldCheck, Globe, Cpu, ArrowUpRight, Calculator } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import Link from "next/link";

export const metadata = {
  title: "Technical Services & System Architecture | Easyio Technologies",
  description: "High-reliability software engineering and enterprise system architecture. From custom ERPs and SaaS platforms to cloud infrastructure, built in Kashmir for global scale.",
  keywords: "technical services srinagar, software architecture kashmir, erp systems srinagar, it consulting jammu kashmir"
};

const serviceStreams = [
  {
    title: "Custom Enterprise Systems",
    desc: "Bespoke ERP, inventory, billing, and multi-branch operational software tailored for high-throughput businesses with zero technical debt.",
    icon: Code2,
    tag: "Core ERP & Ops",
    href: "/enterprise-software-systems"
  },
  {
    title: "SaaS & Web Applications",
    desc: "Modular, multi-tenant cloud platforms engineered with Next.js, TypeScript, and PostgreSQL to scale smoothly from MVP to enterprise load.",
    icon: Layers,
    tag: "Full-Stack Web",
    href: "/saas-application-development-kashmir"
  },
  {
    title: "Performance Engineering",
    desc: "Eliminating latency across database queries, APIs, and edge networks to deliver sub-second page loads and instant user interactions.",
    icon: Zap,
    tag: "Sub-Second Speed",
    href: "/ultra-fast-speed"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Resilient, auto-scaling cloud deployments with automated CI/CD pipelines, multi-region backups, and 99.99% uptime availability.",
    icon: Globe,
    tag: "Cloud & DevOps",
    href: "/cloud-infrastructure"
  },
  {
    title: "Mobile App Development",
    desc: "Native-grade iOS and Android applications featuring offline-first local data synchronization, real-time alerts, and biometric security.",
    icon: Cpu,
    tag: "iOS & Android",
    href: "/mobile-app-development-company-kashmir"
  },
  {
    title: "Enterprise Security",
    desc: "End-to-end encryption, role-based access control, granular audit logs, and comprehensive security hardening for sensitive business data.",
    icon: ShieldCheck,
    tag: "Zero-Trust Security",
    href: "/enterprise-security"
  }
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="pt-32 md:pt-44 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Engineering Capabilities</span>
            </div>

            <PremiumHeading
              text="Software engineered for mission-critical operations."
              highlightWords={["mission-critical", "operations."]}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.06]"
              highlightClassName="font-serif italic text-emerald-700 font-medium"
            />

            <PremiumSubheading
              delay={0.2}
              text="We don't rely on fragile templates. We architect custom digital systems that serve as the long-term operational backbone for ambitious organizations."
              className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed"
            />
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 md:mb-28">
            {serviceStreams.map((s, i) => (
              <FadeIn key={s.title} delay={60 * i}>
                <Link
                  href={s.href}
                  className="bg-white border border-zinc-200/90 hover:border-zinc-950 rounded-3xl p-7 sm:p-8 group hover:shadow-xl hover:shadow-zinc-200/40 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center group-hover:bg-zinc-950 transition-colors">
                        <s.icon className="w-5 h-5 text-zinc-800 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full uppercase">
                        {s.tag}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight mb-3 text-zinc-950 group-hover:text-emerald-700 transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-700 group-hover:text-zinc-950 transition-colors">
                    <span>Explore Capability</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Regional Impact & CTA Section */}
          <FadeIn>
            <div className="p-8 sm:p-12 md:p-16 border border-zinc-200/90 rounded-3xl bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700">
                  Sopore &bull; Srinagar &bull; Global Delivery
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 leading-tight">
                  Kashmir&apos;s Premier Software Engineering Partner
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Headquartered in Sopore with operations across Srinagar, Easyio Technologies builds high-performance software for retail chains, cold storage logistics, healthcare providers, educational institutions, and international startups.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
                <Link
                  href="/project-estimator"
                  className="h-12 px-6 rounded-full bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Estimate Cost</span>
                </Link>
                <Link
                  href="/contact"
                  className="h-12 px-6 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
