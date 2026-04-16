import { generateMetadata } from '@/lib/seo';
import PageWrapper from "@/components/layout/PageWrapper";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceGrid } from "@/components/sections/marketing/ServiceGrid";
import { services } from "@/config/site";
import { FadeIn } from "@/components/shared/Animations";

export const metadata = generateMetadata({
  title: 'Technical Services | Easyio Technologies',
  description: 'Industrial-grade software engineering, system architecture, and performance protocols. The leading software development company in Kashmir.',
  keywords: [
    'software development kashmir',
    'it services srinagar',
    'custom software solutions',
    'system architecture',
    'easyio technologies services'
  ],
  canonicalUrl: 'https://easyiotech.com/services',
});

const extendedServices = [
  ...services,
  {
    title: "Sovereign Cloud Protocols",
    description: "Distributed infrastructure designed for high-availability in volatile network conditions.",
    icon: "ShieldCheck",
  },
  {
    title: "Web Ecosystems",
    description: "Next-generation web applications with sub-millisecond interaction latency.",
    icon: "Globe",
  },
  {
    title: "Embedded Systems",
    description: "Optimized firmware and localized hardware integration for industrial automation.",
    icon: "Cpu"
  }
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <PageHeader 
            title="ARCHITECTURAL"
            italicTitle="VELOCITY."
            description="We don't just build features. We engineer sovereign protocols that define the future of software infrastructure in the region."
          />

          <ServiceGrid services={extendedServices} />

          {/* SEO Focus Section */}
          <FadeIn delay={1.0}>
            <div className="card-base p-12 lg:p-20 bg-zinc-50 dark:bg-zinc-900/50 border-none relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/20 dark:bg-zinc-400/5 blur-[80px] rounded-full -mr-20 -mt-20" />
                
                <h2 className="heading-2 mb-8 text-zinc-950 dark:text-white">
                  DOMINATING THE <br />
                  <span className="italic text-zinc-400 dark:text-zinc-600 font-light">KASHMIR FRONTIER.</span>
                </h2>
                
                <p className="max-w-3xl text-xl text-zinc-500 font-medium leading-relaxed italic mb-12">
                  As the premier software development company in Srinagar, Easyio Technologies is committed to scaling local talent and businesses to global standards. We provide the architectural backbone for the region's most ambitious digital transformations.
                </p>

                <div className="grid sm:grid-cols-2 gap-12 text-zinc-900 dark:text-zinc-100">
                    <div className="space-y-4">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-950 dark:text-white">Industrial Expertise</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">From ERP systems for local enterprise to cryptographic protocols for global fintech, our range is unmatched in the valley.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-950 dark:text-white">Talent Sourcing</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">We employ the brightest minds in Kashmir, fostering a Culture of Excellence that rivals Silicon Valley labs.</p>
                    </div>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
