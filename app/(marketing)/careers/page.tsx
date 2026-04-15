import { generateMetadata } from '@/lib/seo';
import { jobs } from '@/config/jobs';
import JobCard from '@/components/sections/careers/JobCard';
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = generateMetadata({
  title: 'Careers',
  description: 'Join Easyio Technologies. We\'re hiring talented engineers and builders.',
  canonicalUrl: 'https://easyiotech.com/careers',
});

export default function CareersPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-32">
            <h1 className="heading-1 mb-8">
              <TextReveal>WE'RE</TextReveal> <br />
              <TextReveal delay={0.3} className="text-zinc-300 dark:text-zinc-800 italic">HIRING.</TextReveal>
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-2xl text-zinc-500 font-medium italic max-w-2xl">
                Join our frontier software lab. We're looking for talented engineers and builders who thrive in deep technical waters.
              </p>
            </FadeIn>
          </div>

          {jobs.length > 0 ? (
            <div className="grid gap-8 mb-32">
              {jobs.map((job, i) => (
                <FadeIn key={job.id} delay={0.8 + i * 0.1}>
                  <JobCard job={job} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn delay={0.8}>
              <div className="card-base mb-32 text-center py-20">
                <p className="text-xl text-zinc-500 font-medium italic">
                  No open positions at the moment. Send us your profile anyway.
                </p>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={1.2}>
            <div className="card-base text-center p-20 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <h3 className="heading-2 mb-8">Want to join but no open role?</h3>
              <p className="text-xl text-zinc-500 font-medium italic mb-12 max-w-xl mx-auto">
                We're always interested in exceptional talent. If you have the edge, we have the space.
              </p>
              <a href="/contact" className="btn-primary inline-flex">
                Send your profile
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
