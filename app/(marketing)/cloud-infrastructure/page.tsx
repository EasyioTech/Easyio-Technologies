import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Server,
  Zap,
  ShieldCheck,
  ArrowRight,
  Database,
  CheckCircle2,
  PhoneCall,
  Activity,
  Layers,
  Network,
  RefreshCw,
  Cpu
} from "lucide-react";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps | High-Availability Architecture | Easyio",
  description: "Resilient, auto-scaling cloud deployments with multi-region backups, zero downtime, and edge orchestration. Engineered by Easyio Technologies.",
  alternates: {
    canonical: "https://easyio.tech/cloud-infrastructure",
  },
  keywords: [
    "cloud infrastructure",
    "cloud devops kashmir",
    "auto-scaling cloud architecture",
    "high-availability cloud",
    "docker kubernetes deployments",
    "cloud migration srinagar",
    "easyio cloud infrastructure"
  ],
  openGraph: {
    title: "Cloud Infrastructure & DevOps | Easyio Technologies",
    description: "Resilient, auto-scaling cloud deployments with multi-region backup and zero downtime. Engineered for enterprise uptime and extreme cost-efficiency.",
    url: "https://easyio.tech/cloud-infrastructure",
    siteName: "Easyio Technologies",
    images: [
      {
        url: "https://easyio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud Infrastructure - Easyio Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Infrastructure & DevOps",
  "serviceType": "Cloud Architecture & High-Availability Engineering",
  "provider": {
    "@id": "https://easyio.tech/#organization"
  },
  "description": "Architecting resilient, multi-region cloud infrastructure, containerized deployments, automated disaster recovery, and 99.99% uptime systems.",
  "areaServed": "Global"
};

const infrastructurePillars = [
  {
    title: "Multi-Region Automated Failover",
    desc: "Single-data-center deployments are fragile. We configure active-passive and active-active geographic routing so if an AWS, Google Cloud, or DigitalOcean region suffers an outage, traffic reroutes in seconds with zero data loss.",
    icon: Network,
    badge: "99.99% Uptime"
  },
  {
    title: "Predictive Auto-Scaling",
    desc: "Traffic spikes shouldn't crash your servers or inflate your cloud bills. We implement horizontal pod auto-scalers that provision container resources dynamically during demand peaks and scale down to zero waste during off-hours.",
    icon: Zap,
    badge: "Elastic Compute"
  },
  {
    title: "Immutable Infrastructure as Code (IaC)",
    desc: "Every VPC, firewall rule, load balancer, and container configuration is documented in version-controlled Terraform and Docker Compose scripts, allowing complete environment recreation in minutes.",
    icon: Layers,
    badge: "Audited & Versioned"
  },
  {
    title: "Automated Continuous Backups & Snapshots",
    desc: "Daily automated database dumps with cryptographic checksums stored in geographically isolated S3 cold storage. Point-in-time recovery ensures your business can restore to any second of any day.",
    icon: RefreshCw,
    badge: "Zero Data Loss"
  }
];

const cloudServices = [
  {
    title: "Private VPS & Hybrid Cloud Deployment",
    desc: "Save up to 65% compared to bloated public cloud bills. We architect high-performance bare-metal and private VPS clusters tailored for local and national enterprises."
  },
  {
    title: "Containerization & CI/CD Pipelines",
    desc: "Standardize your runtime environments with Docker. We build automated GitHub Actions pipelines that test, lint, and deploy code with zero human intervention."
  },
  {
    title: "Database Replication & Read Replicas",
    desc: "Offload intensive reporting and analytics queries to dedicated asynchronous read-replica databases, keeping master transactional write pools instantaneous."
  },
  {
    title: "DDoS Mitigation & Edge Firewalls",
    desc: "Implement enterprise Cloudflare web application firewalls (WAF), rate-limiting, and bot management at the edge, blocking malicious attacks before they ever reach your servers."
  }
];

const faqs = [
  {
    q: "Why is a multi-region cloud setup better than a single cloud server?",
    a: "A single cloud server is vulnerable to hardware failures, regional fiber cuts, and provider-level downtime. A multi-region architecture distributes traffic and mirrors databases across geographically distinct data centers, guaranteeing that your application remains fully operational even if an entire region goes offline."
  },
  {
    q: "How does Easyio prevent massive, unexpected cloud bills from AWS or Google Cloud?",
    a: "Many companies suffer from 'cloud bill shock' due to unoptimized egress bandwidth, oversized virtual machines, and unmanaged database instances. We right-size compute instances, implement aggressive Redis caching, utilize private VPS and bare-metal nodes where appropriate, and set up hard automated spending limits."
  },
  {
    q: "What is your Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
    a: "For critical enterprise deployments, we target an RPO of under 60 seconds (maximum possible data lag in a catastrophic disaster) and an RTO of under 5 minutes for full automated failover to replica infrastructure."
  },
  {
    q: "Can you manage and monitor our cloud infrastructure 24/7?",
    a: "Yes. Easyio provides comprehensive infrastructure management SLAs, including real-time Prometheus and Datadog monitoring, automated incident alerting, security vulnerability patch updates, and guaranteed response times."
  }
];

export default function CloudInfrastructurePage() {
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
              <PremiumHeading 
                text="Resilient Cloud Infrastructure."
                highlightWords={["Resilient", "Cloud Infrastructure."]}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-zinc-950 mb-8 leading-tight max-w-[1000px]"
                highlightClassName="text-[#1AB896]"
              />

              <PremiumSubheading 
                delay={0.2}
                text="Auto-scaling cloud architectures, containerized Docker microservices, and multi-region automated failovers. Engineered for enterprises that cannot afford a single second of operational downtime."
                className="text-zinc-600 text-base md:text-xl max-w-3xl leading-relaxed font-medium mb-12"
              />
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex h-14 px-10 bg-zinc-950 text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Discuss Cloud Architecture
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="tel:+916005659527"
                    className="inline-flex h-14 px-8 border border-zinc-300 bg-white text-zinc-800 font-bold text-sm items-center justify-center rounded-full hover:bg-zinc-100 transition-all gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#1AB896]" />
                    Call +91 60056 59527
                  </a>
                </div>
              </FadeIn>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-200 text-left">
                <div>
                  <div className="text-2xl font-black text-zinc-950">99.99%</div>
                  <div className="text-xs text-zinc-500 font-medium">Uptime SLA guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">&lt; 60s</div>
                  <div className="text-xs text-zinc-500 font-medium">Recovery Point Objective</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">Zero</div>
                  <div className="text-xs text-zinc-500 font-medium">Downtime deployments</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">65%</div>
                  <div className="text-xs text-zinc-500 font-medium">Average cloud cost savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Architecture Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1AB896] mb-3 block">
                  High-Availability Mesh
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                  Stop worrying about server crashes. We engineer cloud systems that heal themselves.
                </h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  When servers go down during a critical business day, the financial losses and reputational damage are severe. We replace fragile single-server setups with resilient, containerized multi-node topologies.
                </p>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Our DevOps engineers configure automated health checks, automated restart policies, and seamless blue-green deployments so that updating your software never requires kicking active users off the platform.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Zero-Downtime Rolling Deployments</h4>
                      <p className="text-sm text-zinc-600">Ship new features and security patches in the middle of a business day without taking your servers offline.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900">Automated Multi-Cloud Snapshots</h4>
                      <p className="text-sm text-zinc-600">Your entire database and file storage is replicated across isolated cloud providers with point-in-time recovery.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl border border-zinc-200">
                <Image src="/cloud_mesh.png" alt="Cloud Infrastructure Mesh" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Resilient Cloud */}
        <section className="py-24 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400 mb-3 block">
                Infrastructure Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                Engineered for 99.99% Availability
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We combine industry-standard containerization, geographic redundancy, and proactive monitoring to ensure uninterrupted service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructurePillars.map((p, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-[#1AB896]">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
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

        {/* Cloud Offerings */}
        <section className="py-24 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1AB896] mb-3 block">
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                Full-Spectrum Cloud &amp; DevOps Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((svc, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{svc.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{svc.desc}</p>
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
                Cloud Infrastructure FAQ
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
              Scale Your Cloud with Confidence
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let our certified cloud architects audit your infrastructure, optimize costs, and build a high-availability deployment plan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 px-10 bg-[#1AB896] text-white font-bold text-sm items-center justify-center rounded-full shadow-lg hover:bg-emerald-500 transition-all gap-3"
              >
                Schedule Infrastructure Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
