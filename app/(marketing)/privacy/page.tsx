import { Terminal, Shield, Lock, EyeOff } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Privacy Protocol | Easyio Engineering",
  description: "Our commitment to data sovereignty and cryptographic privacy. High-fidelity data protection for the modern enterprise.",
  keywords: "easyio privacy, data protection srinagar, software legal jammu kashmir"
};

const sections = [
  {
    title: "Data Sovereignty",
    content: "We believe you own your data. Easyio does not sell, lease, or trade your operational metrics. We architect systems that keep you in total control of your digital assets."
  },
  {
    title: "Encryption Protocol",
    content: "All sensitive data transmission is protected by industrial-grade cryptographic protocols. We prioritize 'Defensive Programming' to ensure zero leakage at the architectural level."
  },
  {
    title: "Recursive Auditing",
    content: "Our systems undergo internal recursive audits to identify and eliminate potential privacy bottlenecks before they manifest in production environments."
  }
];

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Shield className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Legal_Protocol</span>
              </div>
            </FadeIn>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Privacy</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Sovereignty</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                A mathematical commitment to your digital independence and architectural security.
              </p>
            </FadeIn>
          </div>

          {/* Policy Sections */}
          <div className="max-w-4xl space-y-24 mb-40">
             {sections.map((s, i) => (
               <FadeIn key={s.title} delay={0.1 * i}>
                  <div className="group border-t border-zinc-100 dark:border-zinc-900 pt-12">
                     <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 text-zinc-950 dark:text-white group-hover:translate-x-4 transition-transform duration-700">
                        {s.title}
                     </h3>
                     <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                        {s.content}
                     </p>
                  </div>
               </FadeIn>
             ))}
          </div>

          {/* Contact for Legal */}
          <FadeIn>
             <div className="p-8 border border-zinc-100 dark:border-zinc-900 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 italic">
                <span className="text-zinc-400 uppercase font-black text-[10px] tracking-widest">Questions_on_Protocol?</span>
                <a href="mailto:legal@easyiotech.com" className="text-xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter hover:italic transition-all">
                  legal@easyiotech.com
                </a>
             </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
