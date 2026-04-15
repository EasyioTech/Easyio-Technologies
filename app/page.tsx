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

import Logos from "@/components/sections/home/Logos";
import Protocol from "@/components/sections/home/Protocol";
import Showcase from "@/components/sections/home/Showcase";
import Connectivity from "@/components/sections/home/Connectivity";
import Pricing from "@/components/sections/home/Pricing";
import MarqueeText from "@/components/sections/home/MarqueeText";

export const metadata = generateMetadata({
  title: "Frontier Architecture Lab | Easyio Technologies",
  description:
    "Industrial-grade software engineering and architectural protocols. We build ultra-high-performance systems for global firms.",
  keywords: [
    "software engineering",
    "system architecture",
    "enterprise software",
    "performance protocols",
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

export default function HomePage() {
  return (
    <PageWrapper>
      <Navigation />
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
            <Showcase />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Connectivity />
        </Suspense>



        <Suspense fallback={<SectionLoader />}>
            <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <FAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <CTA />
        </Suspense>
      </main>
      <Footer />
    </PageWrapper>
  );
}
