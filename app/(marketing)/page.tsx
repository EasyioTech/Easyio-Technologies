import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { generateMetadata } from "@/lib/seo";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/home/Hero";
import EngineFeatures from "@/components/sections/home/EngineFeatures";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";

import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { CACHE_TAGS, CACHE_DURATION, cacheQuery } from "@/lib/cache";

// ISR caching strategy replaces force-dynamic for better TTFB
export const revalidate = 3600;

import Protocol from "@/components/sections/home/Protocol";
import Showcase from "@/components/sections/home/Showcase";
import Blogs from "@/components/sections/home/Blogs";
import LocalAdvantage from "@/components/sections/home/LocalAdvantage";
import GlobalAdvantage from "@/components/sections/home/GlobalAdvantage";
import Guarantees from "@/components/sections/home/Guarantees";
import ProjectEstimator from "@/components/sections/estimator/ProjectEstimator";

import MarqueeText from "@/components/sections/home/MarqueeText";

export const metadata = generateMetadata({
  title: "Easyio Technologies | Best Tech Company & Best Software Company in Kashmir",
  description:
    "Easyio Technologies is recognized as the best tech company and best software company in Kashmir. Headquartered in Sopore with Srinagar operations, we engineer custom enterprise ERPs, high-speed web apps, mobile apps, and cloud AI systems.",
  keywords: [
    "best tech company in kashmir",
    "best software company in kashmir",
    "top tech companies in kashmir",
    "best tech company in sopore",
    "best software company in sopore",
    "software company in sopore",
    "software development company in srinagar",
    "it company in kashmir",
    "custom erp software kashmir"
  ],
  canonicalUrl: "https://easyio.tech",
});

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center py-20">
    <div className="space-y-8 w-full max-w-4xl px-4">
      <Skeleton className="h-20 w-3/4 mx-auto rounded-full" />
      <Skeleton className="h-96 w-full rounded-[3.5rem]" />
    </div>
  </div>
);

// Cached query functions
const getCachedProjects = cacheQuery(
  async () => await db.select().from(projects).orderBy(desc(projects.createdAt)),
  [CACHE_TAGS.PROJECTS],
  CACHE_DURATION.MEDIUM
);

export default async function HomePage() {
  let allProjects: any[] = [];

  try {
    // Add a race to prevent hanging indefinitely in production
    const fetchWithTimeout = (promise: Promise<any>, ms: number) => {
      let timeout = new Promise((_, reject) => {
        const id = setTimeout(() => {
          clearTimeout(id);
          reject(new Error('Fetch timed out'));
        }, ms);
      });
      return Promise.race([promise, timeout]);
    };

    const results = await Promise.all([
      fetchWithTimeout(getCachedProjects(), 15000)
    ]).catch(err => {
      console.error("Home Page Data Fetch Timeout/Error:", err);
      return [[]]; // Fallback to empty projects
    });
    
    allProjects = (results as any[])[0] || [];
  } catch (error) {
    console.error("Home Page Data Fetch Crash:", error);
  }

  return (
    <PageWrapper>
      <main className="w-full relative overflow-hidden">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
            <EngineFeatures />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Services />
        </Suspense>

        <MarqueeText />

        <Suspense fallback={<SectionLoader />}>
            <GlobalAdvantage />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Protocol />
        </Suspense>
        
        <LocalAdvantage />

        <Guarantees />

        {/* Interactive Scope & Cost Calculator */}
        <section className="py-16 md:py-28 px-5 sm:px-6 relative bg-zinc-50/70 border-b border-zinc-100" id="estimator">
          <div className="max-w-7xl mx-auto mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Self-Service Cost Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-3">
              Instant Scope &amp; Cost Calculator
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-medium">
              Calculate software investment and timelines for custom ERPs, SaaS platforms, and mobile apps.
            </p>
          </div>
          <ProjectEstimator />
        </section>

        <Suspense fallback={<SectionLoader />}>
            <Showcase initialProjects={allProjects} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Blogs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <FAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <CTA />
        </Suspense>
      </main>
    </PageWrapper>
  );
}
