import { FadeIn } from "@/components/shared/Animations";
import Image from "next/image";
import { CheckCircle2, Clock, Briefcase, MapPin } from "lucide-react";

export default function LocalAdvantage() {
  return (
    <>
      {/* Why Choose Easyio Technologies */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Local Partner</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-white">Why partner with a technology company in Srinagar?</h3>
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-zinc-100">Local Understanding</h4>
                      <p className="text-zinc-400 leading-relaxed">We understand the unique infrastructural challenges of operating in Jammu and Kashmir. Our software is engineered to handle intermittent connectivity and perform exceptionally well on 3G and 4G networks.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-zinc-100">Direct Communication</h4>
                      <p className="text-zinc-400 leading-relaxed">Working with a local team means no extreme time-zone differences. We offer transparent project updates and face-to-face meetings when your business requires hands-on support.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-zinc-100">Global Standards</h4>
                      <p className="text-zinc-400 leading-relaxed">We do not rely on outdated legacy systems. We utilize modern enterprise frameworks like Next.js, Node.js, and Python to ensure your digital solutions are future-proof and globally scalable.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            <FadeIn delay={0.4}>
              <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent mix-blend-overlay z-10" />
                <Image src="/images/about_lab.png" alt="Software development laboratory in Srinagar" fill className="object-cover opacity-80" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Local Business Information */}
      <section className="py-24 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto px-6">
          <FadeIn>
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-12 shadow-sm">
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-zinc-950 mb-4">Easyio Technologies Headquarters</h3>
                <div className="space-y-4 text-zinc-600 font-medium">
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    Rangreth STPI, Srinagar, Jammu and Kashmir, 191132
                  </p>
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    Monday - Saturday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                 <a href="/contact" className="inline-flex h-14 px-10 bg-emerald-600 text-white font-bold text-sm items-center justify-center rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 transition-all">
                    Visit Our Office
                 </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
