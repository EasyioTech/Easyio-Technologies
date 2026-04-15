import { generateMetadata } from '@/lib/seo';
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = generateMetadata({
  title: 'Blog',
  description: 'Insights on software development, system architecture, and technology trends.',
  canonicalUrl: 'https://easyiotech.com/blog',
});

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-32">
            <h1 className="heading-1 mb-12">
              <TextReveal>INSIGHTS &</TextReveal> <br />
              <TextReveal delay={0.3} className="text-zinc-300 dark:text-zinc-800 italic">ARTICLES.</TextReveal>
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-2xl text-zinc-500 font-medium italic">
                Thoughts on deep software development, modular system architecture, and frontier technology trends.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.8}>
            <div className="card-base p-16 text-center border-dashed border-zinc-200 dark:border-zinc-800">
              <h3 className="heading-3 mb-6">ARCHIVE INITIALIZING</h3>
              <p className="text-xl text-zinc-500 font-medium italic">Our editorial protocol is currently offline. Subscribers will be notified upon activation.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
