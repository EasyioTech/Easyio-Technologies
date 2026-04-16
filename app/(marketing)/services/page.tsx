import { Terminal, Code2, Layers, Zap, ShieldCheck, Globe, Cpu, ArrowUpRight } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Technical Services | Easyio Engineering",
  description: "High-fidelity software engineering and architectural protocols. From distributed systems to recursive AI infrastructure, we dominate the technical frontier in Kashmir.",
  keywords: "technical services srinagar, software architecture kashmir, erp systems srinagar, it consulting jammu kashmir"
};

const serviceStreams = [
  {
    title: "Custom Systems",
    desc: "Industrial-grade software tailored for high-throughput enterprise operations. Zero technical debt.",
    icon: Code2,
    tag: "STABLE_BUILD"
  },
  {
    title: "System Architecture",
    desc: "Recursive, modular infrastructure designed to scale into the next decade without regression.",
    icon: Layers,
    tag: "DEEP_ARCH"
  },
  {
    title: "Performance Ops",
    desc: "Eliminating latency at the protocol level. We optimize for millisecond-critical business logic.",
    icon: Zap,
    tag: "ZERO_LATENCY"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Sovereign, distributed cloud protocols that ensure 99.99% availability in any region.",
    icon: Globe,
    tag: "SOVEREIGN_OPS"
  },
  {
    title: "Embedded & IoT",
    desc: "Local-first hardware integration and optimized firmware for industrial automation.",
    icon: Cpu,
    tag: "HARD_WIRE"
  },
  {
    title: "Security Shield",
    desc: "Cryptographic security audits and paranoid defensive programming for sensitive data.",
    icon: ShieldCheck,
    tag: "FORTRESS_LOGIC"
  }
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="py-16 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 w-fit bg-zinc-50 dark:bg-white/5">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Service_Manifest</span>
              </div>
            </FadeIn>

            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white mb-12 uppercase italic leading-[0.85]">
              <TextReveal>Operational</TextReveal> <br />
              <TextReveal delay={0.2} className="text-zinc-400 dark:text-zinc-800">Elite Grade</TextReveal>
            </h1>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed italic">
                We don't provide "IT support." We engineer sovereign digital infrastructure that serves as the backbone for regional and global leadership.
              </p>
            </FadeIn>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 rounded-3xl md:rounded-[2rem] overflow-hidden mb-20 md:mb-40">
            {serviceStreams.map((s, i) => (
              <FadeIn key={s.title} delay={0.1 * i} className="bg-white dark:bg-zinc-950 p-6 md:p-10 group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                     <s.icon className="w-10 h-10 text-zinc-400 dark:text-zinc-600 transition-colors group-hover:text-zinc-950 dark:group-hover:text-white" />
                     <span className="text-[8px] font-mono font-bold tracking-[0.3em] opacity-40 uppercase">{s.tag}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 text-zinc-950 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-12 flex-grow">
                    {s.desc}
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-all">
                    INITIATE_SERVICE <ArrowUpRight className="w-3 h-3 translate-x-1" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Regional Impact Section */}
          <FadeIn>
            <div className="p-8 md:p-24 border border-zinc-100 dark:border-zinc-900 rounded-3xl md:rounded-[3rem] bg-zinc-50/30 dark:bg-zinc-900/10 backdrop-blur-sm">
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic mb-8 md:mb-12 leading-none text-zinc-950 dark:text-white">
                  Kashmir's Frontier <br />
                  <span className="text-zinc-400 dark:text-zinc-800">Technological Hub.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-24 italic font-medium">
                   <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
                     Based in Srinagar, Easyio is building the future of the region's digital economy. We provide high-performance solutions for local governments, healthcare, and enterprise, ensuring that Kashmir remains at the forefront of global software engineering standards.
                   </p>
                   <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
                     Our commitment extends beyond code. We take a holistic approach to system design, considering the unique socio-economic landscape of the valley to build software that is resilient, accessible, and world-class.
                   </p>
                </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
