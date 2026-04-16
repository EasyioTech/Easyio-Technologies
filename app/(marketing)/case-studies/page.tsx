import { generateMetadata } from '@/lib/seo';
import PageWrapper from "@/components/layout/PageWrapper";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectCard } from "@/components/sections/marketing/ProjectCard";

export const metadata = generateMetadata({
  title: 'Case Studies | Easyio Technologies',
  description: 'Proof of execution. Explore how we scale businesses in Kashmir and beyond through superior software engineering.',
  keywords: [
    'software projects kashmir',
    'it case studies srinagar',
    'easyio technologies portfolio',
    'enterprise automation jammu and kashmir'
  ],
  canonicalUrl: 'https://easyiotech.com/case-studies',
});

const projects = [
  {
    title: "Sovereign ERP Protocol",
    category: "Enterprise Software",
    description: "Digital transformation for a leading regional manufacturer, reducing operational lag by 45%.",
    metrics: [
        { label: "Performance Boost", value: "+45%" },
        { label: "Deployment Cycle", value: "2w" }
    ],
    href: "/case-studies/sovereign-erp",
  },
  {
    title: "Global Supply Distribution",
    category: "Infrastructure",
    description: "Go-based backend infrastructure for international logistics management.",
    metrics: [
        { label: "Request Latency", value: "14ms" },
        { label: "System Uptime", value: "99.9%" }
    ],
    href: "/case-studies/supply-distribution",
  },
  {
    title: "Next-Gen Fintech Core",
    category: "Fintech",
    description: "High-security cryptographic ledger for secure value transfer in the valley.",
    metrics: [
        { label: "Security Audit", value: "100/100" },
        { label: "Throughput", value: "5k tps" }
    ],
    href: "/case-studies/fintech-core",
  }
];

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <PageHeader 
            title="PROOF OF"
            italicTitle="EXECUTION."
            description="Concrete outcomes for ambitious organizations. We transform operational noise into architectural clarity."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
