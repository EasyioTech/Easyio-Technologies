import { generateMetadata } from '@/lib/seo';
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Easyio Technologies: A frontier software lab building high-performance systems and next-generation business solutions.',
  canonicalUrl: 'https://easyiotech.com/about',
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-32">
            <h1 className="heading-1 mb-12">
              <TextReveal>FRONTIER</TextReveal> <br />
              <TextReveal delay={0.3} className="text-zinc-300 dark:text-zinc-800 italic">SOFTWARE LAB.</TextReveal>
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed italic">
                Easyio Technologies is a frontier software lab dedicated to building high-performance systems and next-generation business solutions. We specialize in custom software development, system architecture, performance optimization, and DevOps infrastructure.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <FadeIn delay={0.8}>
              <div className="card-base h-full">
                <h2 className="heading-3 mb-6 text-zinc-950 dark:text-white">OUR MISSION</h2>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  To empower businesses with elegant, high-performance software solutions that scale. We believe technology should be a strategic advantage, not a burden.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.0}>
              <div className="card-base h-full">
                <h2 className="heading-3 mb-6 text-zinc-950 dark:text-white">OUR APPROACH</h2>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  We combine deep technical expertise with pragmatic business thinking. Every solution is tailored, tested, and built to last. Performance and scalability are non-negotiable.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1.2}>
            <div className="card-base p-12 lg:p-20">
              <h2 className="heading-2 mb-16 text-zinc-950 dark:text-white">THE EASYIO EDGE</h2>
              <ul className="space-y-12">
                {[
                  { title: 'Performance First', desc: 'Every line of code is optimized. We measure, profile, and eliminate bottlenecks.' },
                  { title: 'Modular Architecture', desc: 'Systems designed to evolve. Add features, scale independently, adapt to change.' },
                  { title: 'Full Stack Expertise', desc: 'From frontend to infrastructure. We own the complete solution.' },
                  { title: 'Security by Design', desc: 'Data protection, encryption, compliance. Built in from day one.' },
                ].map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row gap-8 sm:items-start group">
                    <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center flex-shrink-0 font-bold text-2xl text-zinc-950 dark:text-white transition-all duration-700 group-hover:bg-zinc-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-2xl text-zinc-950 dark:text-white mb-4 uppercase tracking-tighter transition-colors">{item.title}</h3>
                      <p className="text-xl text-zinc-500 font-medium leading-relaxed italic">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
