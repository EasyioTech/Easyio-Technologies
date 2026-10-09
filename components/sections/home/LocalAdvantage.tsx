import { FadeIn } from "@/components/shared/Animations";
import { CheckCircle2, Clock, Briefcase, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LocalAdvantage() {
  return (
    <>
      {/* Why Choose Easyio Technologies */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wider">Local Partner</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Why partner with a technology company in Kashmir?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 h-full hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-8 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-zinc-900">Local Understanding</h4>
                <p className="text-zinc-600 leading-relaxed">
                  We understand the unique infrastructural challenges of operating in Jammu and Kashmir. Our software is engineered to handle intermittent connectivity and perform exceptionally well on all networks.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 h-full hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-8 shadow-sm">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-zinc-900">Direct Communication</h4>
                <p className="text-zinc-600 leading-relaxed">
                  Working with a local team means no extreme time-zone differences. We offer transparent project updates and face-to-face meetings when your business requires hands-on support.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 h-full hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-8 shadow-sm">
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-zinc-900">Global Standards</h4>
                <p className="text-zinc-600 leading-relaxed">
                  We do not rely on outdated legacy systems. We utilize modern enterprise frameworks like Next.js, Node.js, and Python to ensure your digital solutions are future-proof and globally scalable.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Local Business Information */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                  Easyio Technologies Headquarters
                </h3>
                <div className="space-y-4 text-zinc-300 font-medium">
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    First floor, War complex, Block B, Main chowk Tehsil Road, Sopore, J&K 193201
                  </p>
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <Clock className="w-5 h-5 text-emerald-500" />
                    Monday - Saturday, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 relative z-10">
                 <Link 
                   href="/contact" 
                   className="inline-flex h-14 px-8 bg-emerald-500 text-white font-bold text-sm items-center justify-center rounded-full hover:bg-emerald-400 hover:scale-105 transition-all gap-2 shadow-lg shadow-emerald-500/20"
                 >
                    Visit Our Office
                    <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
