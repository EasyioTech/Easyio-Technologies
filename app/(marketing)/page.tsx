import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { generateMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Hero from "@/components/sections/home/Hero";
import BentoFeatures from "@/components/sections/home/BentoFeatures";
import Stats from "@/components/sections/home/Stats";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";

export const metadata = generateMetadata({
  title: "Frontier Software Lab",
  description:
    "Easyio Technologies: Building high-performance, modular systems and next-generation business solutions. From custom software to system architecture.",
  keywords: [
    "software development",
    "system architecture",
    "DevOps",
    "custom software",
    "technology consulting",
  ],
  canonicalUrl: "https://easyiotech.com",
});

const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center py-20">
    <div className="space-y-4 w-full max-w-4xl px-4">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-950 dark:selection:text-white overflow-x-hidden">
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <SectionWrapper className="w-full">
          <BentoFeatures />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SectionWrapper>
          <Stats />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SectionWrapper>
          <FAQ />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SectionWrapper>
          <CTA />
        </SectionWrapper>
      </Suspense>
    </div>
  );
}
