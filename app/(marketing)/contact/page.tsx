import { Mail, MapPin, Terminal, Phone, Globe } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/config/site";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Contact | Easyio Engineering",
  description: "Initialize your project with Easyio. High-fidelity architectural consultation for enterprise-scale software solutions.",
  keywords: "software consultation srinagar, it support kashmir, build software srinagar, custom project estimation"
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Side: Context & Info */}
            <div className="lg:w-1/3 xl:w-2/5">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Comm_Channel</span>
                </div>
              </FadeIn>

              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
                <TextReveal>Initialize</TextReveal> <br />
                <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">The Tunnel</TextReveal>
              </h1>

              <FadeIn delay={0.4}>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed italic mb-16 max-w-md">
                  We don't do "general inquiries." We engage in technical discourse. Use this channel to start your transition to sovereign engineering infrastructure.
                </p>
              </FadeIn>

              <div className="space-y-12">
                <FadeIn delay={0.6}>
                  <div className="group border-l-2 border-zinc-100 dark:border-zinc-900 pl-8 transition-colors hover:border-zinc-950 dark:hover:border-white">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-700 mb-2 italic">Global Registry</div>
                    <a href={`mailto:${siteConfig.email.contact}`} className="text-2xl font-black text-zinc-950 dark:text-white uppercase transition-all tracking-tighter">
                      {siteConfig.email.contact}
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="group border-l-2 border-zinc-100 dark:border-zinc-900 pl-8 transition-colors hover:border-zinc-950 dark:hover:border-white">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-700 mb-2 italic">Ops Command Central</div>
                    <div className="text-2xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter">
                      {siteConfig.location}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <div className="mt-12 opacity-40">
                     <div className="flex items-center gap-4 px-4 py-2 rounded-lg border border-zinc-100 dark:border-zinc-900 w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white animate-pulse" />
                        <span className="text-[8px] font-mono tracking-widest uppercase font-bold italic">REGISTRY_STREAM_CONNECTED</span>
                     </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="flex-1">
              <FadeIn delay={0.5}>
                <div className="border border-zinc-100 dark:border-zinc-900 rounded-3xl lg:rounded-[3rem] bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm p-8 md:p-16 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100/50 dark:bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="relative z-10">
                    <ContactForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
