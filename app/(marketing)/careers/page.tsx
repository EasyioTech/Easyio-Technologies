import { Terminal, Users, Cpu, ArrowUpRight, Zap } from "lucide-react";
import { jobs } from "@/config/jobs";
import JobCard from "@/components/sections/careers/JobCard";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Careers | Easyio Frontier",
  description: "Join the elite engineering signal at Easyio. We are recruiting architects for the next generation of sovereign software.",
  keywords: "jobs srinagar, it jobs kashmir, software engineer srinagar, easyio careers, work in kashmir"
};

const perks = [
  { title: "Deep Work Culture", desc: "No meetings for the sake of meetings. Pure engineering focus.", icon: Zap },
  { title: "Sovereign Growth", desc: "Total ownership over your stacks and architectural paths.", icon: Cpu },
  { title: "Regional Impact", desc: "Building the digital crown of Kashmir for the global stage.", icon: Users }
];

export default function CareersPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Signal_Hub</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Enter The</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Frontier Arena</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                We aren't looking for employees. We're looking for operatives who treat code as craft and systems as legacy. 
              </p>
            </FadeIn>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {perks.map((p, i) => (
              <FadeIn key={p.title} delay={0.2 * i}>
                <div className="p-10 border border-zinc-100 dark:border-zinc-900 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/10">
                  <p.icon className="w-8 h-8 text-zinc-950 dark:text-white mb-6" />
                  <h3 className="text-lg font-black uppercase tracking-tighter italic mb-4 text-zinc-950 dark:text-white">{p.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Job Listings */}
          <div className="mb-40">
            <FadeIn>
               <h2 className="text-3xl font-black uppercase tracking-tighter italic text-zinc-950 dark:text-white mb-16 px-4 py-2 border-l-4 border-zinc-950 dark:border-white">
                 Open Signal Streams
               </h2>
            </FadeIn>

            {jobs.length > 0 ? (
              <div className="grid gap-6">
                {jobs.map((job, i) => (
                  <FadeIn key={job.id} delay={0.1 * i}>
                    <JobCard job={job} />
                  </FadeIn>
                ))}
              </div>
            ) : (
              <FadeIn>
                <div className="p-20 border border-zinc-100 dark:border-zinc-900 rounded-3xl text-center">
                  <p className="text-xl text-zinc-400 font-bold italic uppercase tracking-widest">
                    No Active Channels. Check Back Soon.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="p-12 md:p-24 border border-zinc-950 dark:border-white rounded-[3rem] text-center bg-zinc-950 dark:bg-white text-white dark:text-black">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-8">Out of alignment?</h3>
              <p className="text-xl opacity-60 font-medium italic mb-12 max-w-xl mx-auto uppercase tracking-tight">
                If you have elite capabilities not listed above, bypass the queue and send your manifesto directly.
              </p>
              <a href="/contact" className="inline-flex items-center gap-4 text-2xl font-black uppercase italic tracking-tighter group">
                Initialize Direct Channel <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
