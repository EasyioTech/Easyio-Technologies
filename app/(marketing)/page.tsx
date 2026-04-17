export const dynamic = 'force-dynamic';
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { generateMetadata } from "@/lib/seo";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/home/Hero";
import BentoFeatures from "@/components/sections/home/BentoFeatures";

import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";

import { db } from "@/lib/db";
import { projects, testimonials } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

import Logos from "@/components/sections/home/Logos";
import Protocol from "@/components/sections/home/Protocol";
import Showcase from "@/components/sections/home/Showcase";
import Connectivity from "@/components/sections/home/Connectivity";
import Pricing from "@/components/sections/home/Pricing";
import MarqueeText from "@/components/sections/home/MarqueeText";

export const metadata = generateMetadata({
  title: "Easyio Technologies | Best Software Engineering Company in Kashmir",
  description:
    "The premier high-performance software engineering firm in Srinagar, Kashmir. We deliver industrial-grade ERP, AI, and enterprise automation protocols for global impact. Architecting the future of technical sovereignty.",
  keywords: [
    "best software company in kashmir",
    "software engineering srinagar",
    "it services jammu and kashmir",
    "enterprise software kashmir",
    "easyio technologies kashmir",
    "custom ai applications srinagar",
    "high performance software firm"
  ],
  canonicalUrl: "https://easyiotech.com",
});

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center py-20">
    <div className="space-y-8 w-full max-w-4xl px-4">
      <Skeleton className="h-20 w-3/4 mx-auto rounded-full" />
      <Skeleton className="h-96 w-full rounded-[3.5rem]" />
    </div>
  </div>
);

export default async function HomePage() {
  let allProjects: any[] = [];
  let allTestimonials: any[] = [];

  try {
    const results = await Promise.all([
      db.select().from(projects).orderBy(desc(projects.createdAt)),
      db.select().from(testimonials).orderBy(desc(testimonials.createdAt))
    ]);
    allProjects = results[0];
    allTestimonials = results[1];
  } catch (error) {
    console.error("Home Page Data Fetch Error:", error);
  }

  return (
    <PageWrapper>
      <main className="w-full">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
            <Logos />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <BentoFeatures />
        </Suspense>

        <MarqueeText />

        <Suspense fallback={<SectionLoader />}>
            <Protocol />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Showcase initialProjects={allProjects} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Connectivity />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Testimonials initialTestimonials={allTestimonials} />
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
