import { ArrowUpRight, Cpu, Zap, Globe, Shield, Box, Calculator } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading, PremiumSubheading } from "@/components/shared/PremiumHeading";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Case Studies & Portfolio | Easyio Technologies",
  description: "Concrete technical outcomes for ambitious organizations. Explore our production deployments in enterprise ERP software, cloud commerce, and EdTech systems.",
  keywords: "software case studies kashmir, it projects srinagar, easyio portfolio, enterprise automation results"
};

const iconMap: Record<string, any> = {
  INDUSTRIAL_LOGIC: Cpu,
  DISTRIBUTED_SYSTEMS: Globe,
  FINTECH_SECURITY: Shield,
  AI_INFRASTRUCTURE: Zap,
  CLOUD_ARCHITECTURE: Box,
};

const categoryLabelMap: Record<string, string> = {
  INDUSTRIAL_LOGIC: "Hospitality & Automation",
  DISTRIBUTED_SYSTEMS: "Enterprise ERP",
  FINTECH_SECURITY: "FinTech & Billing",
  AI_INFRASTRUCTURE: "EdTech & Streaming",
  CLOUD_ARCHITECTURE: "Global E-Commerce",
};

const getCachedProjects = cacheQuery(
  async () => await db.select().from(projects).orderBy(desc(projects.createdAt)),
  [CACHE_TAGS.PROJECTS],
  CACHE_DURATION.MEDIUM
);

export default async function CaseStudiesPage() {
  let deployments: any[] = [];
  try {
    deployments = await getCachedProjects();
  } catch (e) {
    console.error("Failed to fetch case studies:", e);
  }

  if (!deployments || deployments.length === 0) {
    deployments = [
      {
        slug: "enterprise-resource-protocol",
        title: "Enterprise Resource Protocol (ERP)",
        description: "Custom operational software engineered for apple cold storage and fruit mandi distribution networks across Sopore & Kashmir.",
        category: "DISTRIBUTED_SYSTEMS",
        image: "https://itx-ali.netlify.app/oruerp.png"
      },
      {
        slug: "global-commerce-gateway",
        title: "Global Commerce Gateway",
        description: "Headless Next.js international e-commerce platform exporting luxury Kashmir handicrafts & saffron to clients in the USA, UK & UAE.",
        category: "CLOUD_ARCHITECTURE",
        image: "https://itx-ali.netlify.app/serique.png"
      },
      {
        slug: "institutional-learning-management",
        title: "Institutional Learning Management (LMS)",
        description: "Scalable live learning and testing infrastructure supporting 14,000+ active students with sub-second video sync.",
        category: "AI_INFRASTRUCTURE",
        image: "https://itx-ali.netlify.app/technnurture.png"
      },
      {
        slug: "financial-management-suite",
        title: "Financial Management Suite",
        description: "Instant UPI and ledger reconciliation engine processing over ₹1.4Cr in daily wholesale transactions with zero latency.",
        category: "FINTECH_SECURITY",
        image: "https://itx-ali.netlify.app/orulabs.png"
      },
      {
        slug: "hotel-management-platform",
        title: "Hotel Management Platform",
        description: "Automated booking and reservation pipeline for luxury hospitality chains with real-time payment gateway settlement.",
        category: "INDUSTRIAL_LOGIC",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
      }
    ];
  }

  return (
    <PageWrapper>
      <section className="pt-32 md:pt-44 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Selected Deployments</span>
            </div>

            <PremiumHeading
              text="Proven outcomes in production."
              highlightWords={["outcomes", "production."]}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.06]"
              highlightClassName="font-serif italic text-emerald-700 font-medium"
            />

            <PremiumSubheading
              delay={0.2}
              text="Explore how we transform complex operational bottlenecks into reliable, high-speed software platforms for businesses in Kashmir and worldwide."
              className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed"
            />
          </div>

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 md:mb-28">
            {deployments.map((p, i) => {
              const Icon = iconMap[p.category || ''] || Cpu;
              const categoryLabel = categoryLabelMap[p.category || ''] || p.category || 'Case Study';
              return (
                <FadeIn key={p.slug} delay={60 * i}>
                  <Link
                    href={`/case-studies/${p.slug}`}
                    className="group border border-zinc-200/90 rounded-3xl p-6 sm:p-7 bg-white hover:border-zinc-950 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-5">
                        <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center group-hover:bg-zinc-950 transition-colors">
                          <Icon className="w-5 h-5 text-zinc-700 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full">
                          {categoryLabel}
                        </span>
                      </div>

                      {p.image && (
                        <div className="mb-6 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-100 bg-zinc-100 relative">
                          <Image
                            src={p.image}
                            alt={p.title}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            fill
                          />
                        </div>
                      )}

                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5 text-zinc-950 group-hover:text-emerald-700 transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-sm sm:text-base text-zinc-600 mb-6 leading-relaxed line-clamp-3">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-800 group-hover:text-zinc-950 transition-colors">
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <FadeIn>
            <div className="p-8 sm:p-12 md:p-16 border border-zinc-200/90 rounded-3xl text-center bg-white shadow-sm max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-zinc-950">
                Ready to build your next flagship system?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mb-8 max-w-xl mx-auto leading-relaxed">
                These platforms were architected by our senior{' '}
                <Link href="/software-development-company-in-kashmir" className="text-emerald-700 font-semibold hover:underline">
                  software engineering
                </Link>{' '}
                and{' '}
                <Link href="/web-development-company-in-srinagar" className="text-emerald-700 font-semibold hover:underline">
                  web development
                </Link>{' '}
                teams. Let&apos;s discuss what we can build for your organization.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="h-12 px-7 rounded-full bg-zinc-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/project-estimator"
                  className="h-12 px-6 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-emerald-600" />
                  <span>Calculate System Cost</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
