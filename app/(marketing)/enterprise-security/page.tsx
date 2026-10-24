import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Key,
  Database,
  ArrowRight,
  Server,
  CheckCircle2,
  PhoneCall,
  ShieldAlert,
  FileCheck,
  EyeOff,
  UserCheck
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Security & Data Protection | Bank-Grade Standards | Easyio",
  description: "Bank-grade cryptographic encryption, granular role-based access control, and zero-trust security architectures engineered in Sopore by Easyio Technologies.",
  alternates: {
    canonical: "https://easyio.tech/enterprise-security",
  },
  keywords: [
    "enterprise security",
    "bank-grade software encryption",
    "zero-trust security kashmir",
    "data sovereignty sopore",
    "role-based access control RBAC",
    "cybersecurity audits srinagar",
    "easyio enterprise security"
  ],
  openGraph: {
    title: "Enterprise Security & Data Protection | Easyio Technologies",
    description: "Bank-grade encryption & global standards, engineered in Sopore. Absolute data sovereignty with zero vendor lock-in.",
    url: "https://easyio.tech/enterprise-security",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Security - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Security & Data Governance",
  "serviceType": "Application Cybersecurity & Cryptographic Architecture",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "description": "Architecting bank-grade security protocols, end-to-end cryptographic encryption, paranoid access control, and absolute client data sovereignty.",
  "areaServed": "Global"
};

const securityPillars = [
  {
    title: "AES-256 & TLS 1.3 Cryptography",
    desc: "All sensitive customer records, financial ledgers, and API payloads are encrypted at rest using AES-256-GCM algorithms and encrypted in transit via forced TLS 1.3 with Perfect Forward Secrecy.",
    icon: Lock,
    badge: "Bank-Grade Encryption"
  },
  {
    title: "Granular Role-Based Access Control (RBAC)",
    desc: "Prevent unauthorized internal data exposure. Restrict user privileges down to specific ledger rows, customer columns, and operational actions with automated session timeout enforcement.",
    icon: UserCheck,
    badge: "Zero-Trust Privilege"
  },
  {
    title: "Immutable Cryptographic Audit Logs",
    desc: "Every record creation, modification, deletion, or export attempt is permanently logged with tamper-evident cryptographic hashes, timestamp telemetry, and originating IP addresses.",
    icon: FileCheck,
    badge: "100% Traceability"
  },
  {
    title: "Sovereign Private Hosting",
    desc: "Your data belongs to you—never third-party advertising algorithms or public SaaS clouds. We deploy on isolated private virtual servers with zero external telemetry and automated encrypted backups.",
    icon: Database,
    badge: "Absolute Data Sovereignty"
  }
];

const complianceProtocols = [
  {
    title: "Indian Digital Personal Data Protection (DPDP) Act",
    desc: "Full architectural alignment with national data localization and privacy mandates, including verifiable user consent flows and automated right-to-erasure workflows."
  },
  {
    title: "ABDM & Healthcare HIPAA Standards",
    desc: "Strict electronic medical record isolation, encrypted diagnostic attachments, and patient authorization mechanisms for clinical informatics platforms."
  },
  {
    title: "SQL Injection & XSS Immunity",
    desc: "Zero dynamic SQL string concatenation. All database interactions utilize type-safe parameterized object-relational mapping (ORM) and automatic input sanitization."
  },
  {
    title: "Daily Automated Penetration Scans",
    desc: "Automated vulnerability scanners inspect every production dependency, container layer, and exposed port, delivering immediate notifications if an outdated package is detected."
  }
];

const faqs = [
  {
    q: "How does Easyio protect our business data from unauthorized employee access?",
    a: "We implement granular Role-Based Access Control (RBAC). A billing cashier only sees the POS screen; a warehouse manager only views inventory manifests; while master financial margins, profit reports, and bank balances are strictly restricted to authenticated executive accounts requiring two-factor authentication."
  },
  {
    q: "Are custom software systems more secure than public SaaS tools like Zoho or QuickBooks?",
    a: "Yes. Public SaaS tools store your company's data in massive shared multi-tenant databases alongside tens of thousands of other companies, making them primary targets for global credential attacks. A custom system built by Easyio is hosted in your own private, isolated environment where only your organization has access."
  },
  {
    q: "What happens if a hardware drive fails on the server hosting our data?",
    a: "Our architectures utilize automated multi-region automated replication. Database transactions are mirrored to an isolated replica in real time. If the primary hardware fails, the system switches to the backup replica with zero data loss."
  },
  {
    q: "Can Easyio perform a security audit on our existing applications?",
    a: "Yes. We offer independent vulnerability assessments, code reviews, and penetration testing to identify security flaws, open ports, insecure API endpoints, and data leakage risks in your existing software."
  }
];

export default function EnterpriseSecurityPage() {
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
                <div className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-indigo-100/70 border border-indigo-300/80">
                   <div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-[0.25em] text-indigo-950">
                     Cybersecurity &amp; Cryptographic Architecture
                   </span>
                </div>
              </FadeIn>

              <PremiumHeading 
                text="Enterprise Security &amp; Data Sovereignty."
                highlightWords={["Enterprise Security", "Data Sovereignty."]}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-[#6366F1]"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Bank-grade encryption, zero-trust privilege boundaries, and absolute client data sovereignty. Engineered in Sopore to protect high-volume commercial enterprises against data theft, leakage, and ransomware."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Consult with Security Engineers
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="tel:+916005659527"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#6366F1]" />
                    Call +91 60056 59527
                  </a>
                </div>
              </FadeIn>

              {/* Security Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-200 text-left">
                <div>
                  <div className="text-2xl font-black text-zinc-950">AES-256</div>
                  <div className="text-xs text-zinc-500 font-medium">Bank-grade data encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">Zero Trust</div>
                  <div className="text-xs text-zinc-500 font-medium">Role-based access control</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">100%</div>
                  <div className="text-xs text-zinc-500 font-medium">Data sovereignty on private clouds</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">24/7</div>
                  <div className="text-xs text-zinc-500 font-medium">Automated threat telemetry</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Defense in Depth */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#6366F1] mb-3 block">
                  Fortress Architecture
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Your business data is your most valuable asset. Protect it with paranoid defense.
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  In an era where ransomware, unauthorized insider access, and data leakage threaten commercial enterprises, security cannot be an afterthought. We implement multi-layered cryptographic controls into every layer of software architecture.
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  From encrypting database columns storing bank accounts and customer phone numbers to enforcing multi-factor biometric authentication, our platforms guarantee that your sensitive commercial intelligence stays strictly within your organization.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Zero Third-Party Data Harvesting</h4>
                      <p className="text-sm text-zinc-600">We do not install invasive tracking pixels or send your proprietary company data to third-party ad networks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Encrypted Automated Daily Backups</h4>
                      <p className="text-sm text-zinc-600">Encrypted snapshots are stored in geographically isolated off-site locations to protect against accidental deletion or local hardware failure.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl border border-zinc-200">
                <Image src="/security_protocols.png" alt="Security Protocols Architecture" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Security */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400 mb-3 block">
                Security Engineering
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                Cryptographic Defense in Depth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPillars.map((p, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center text-[#6366F1]">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                        {p.badge}
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

        {/* Compliance and Standards */}
        <section className="py-24 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Compliance &amp; Defensive Coding Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceProtocols.map((c, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{c.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Security &amp; Data Protection FAQ
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
              Protect Your Enterprise with Bank-Grade Security
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential security and data sovereignty consultation with our senior cryptographic engineers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-[#6366F1] text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-indigo-500 transition-all gap-3"
              >
                Schedule Security Discovery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
