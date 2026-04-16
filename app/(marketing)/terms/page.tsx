import { Terminal, Scale, FileText, Pocket } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Terms of Service | Easyio Protocol",
  description: "Operational terms and technical engagement guidelines for Easyio Engineering lab.",
  keywords: "easyio terms, software development agreement, it services kashmir legal"
};

const terms = [
  {
    title: "1.0 Engagement Protocol",
    content: "Engagement with Easyio Technologies signifies acceptance of our 'Sovereign Engineering' standards. We deliver industrial-grade solutions under strict technical protocols."
  },
  {
    title: "2.0 Intellectual Dominion",
    content: "Unless specified in an 'Enterprise_Vault' retainer, all architectural prototypes developed for partners remain the sovereign property of the client upon final transmission settlement."
  },
  {
    title: "3.0 System Integrity",
    content: "Users of our cloud protocols agree not to disrupt the recursive integrity of the network. Any attempts to breach cryptographic shields will result in immediate channel termination."
  }
];

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Scale className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Service_Framework</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Terms of</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">The Tunnel</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                Operational guidelines for the maintenance of technical order and architectural excellence.
              </p>
            </FadeIn>
          </div>

          {/* Terms Sections */}
          <div className="max-w-4xl space-y-24 mb-40">
             {terms.map((t, i) => (
               <FadeIn key={t.title} delay={0.1 * i}>
                  <div className="group border-t border-zinc-100 dark:border-zinc-900 pt-12">
                     <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 text-zinc-950 dark:text-white group-hover:translate-x-4 transition-transform duration-700">
                        {t.title}
                     </h3>
                     <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                        {t.content}
                     </p>
                  </div>
               </FadeIn>
             ))}
          </div>

          {/* Footer */}
          <FadeIn>
             <div className="p-8 border border-zinc-100 dark:border-zinc-900 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 italic opacity-40">
                <span className="text-zinc-400 uppercase font-black text-[10px] tracking-widest">Protocol_Established_2026</span>
                <span className="text-sm font-black text-zinc-950 dark:text-white uppercase tracking-tighter">Last_Update: 16_04_26</span>
             </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
