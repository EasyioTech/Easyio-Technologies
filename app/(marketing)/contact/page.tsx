import { generateMetadata } from '@/lib/seo';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/sections/contact/ContactForm';
import { siteConfig } from '@/config/site';
import PageWrapper from "@/components/layout/PageWrapper";
import { TextReveal, FadeIn } from "@/components/shared/Animations";

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Easyio Technologies. We\'d love to discuss your next project.',
  canonicalUrl: 'https://easyiotech.com/contact',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pt-40 pb-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h1 className="heading-1 mb-12">
              <TextReveal>LET'S</TextReveal> <br />
              <TextReveal delay={0.3} className="text-zinc-300 dark:text-zinc-800 italic">BUILD.</TextReveal>
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-2xl text-zinc-500 max-w-2xl mx-auto font-medium italic">
                Have a project in mind? Our team at Easyio Technologies is ready to help scale your operations.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.8}>
                <div className="card-base p-10 lg:p-16">
                  <ContactForm />
                </div>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={1.0}>
                <div className="card-base p-10 lg:p-12">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600 mb-12">
                    Reach Out Directly
                  </h3>
                  <div className="space-y-12">
                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-950 dark:group-hover:bg-white transition-all duration-700">
                        <Mail className="w-6 h-6 text-zinc-500 group-hover:text-white dark:group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-700 mb-2">Email</p>
                        <a href={`mailto:${siteConfig.email.contact}`} className="text-2xl font-bold text-zinc-950 dark:text-white hover:italic transition-all">
                          {siteConfig.email.contact}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-950 dark:group-hover:bg-white transition-all duration-700">
                        <MapPin className="w-6 h-6 text-zinc-500 group-hover:text-white dark:group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-700 mb-2">Location</p>
                        <p className="text-2xl font-bold text-zinc-950 dark:text-white">{siteConfig.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={1.2}>
                <div className="card-base p-8 text-center flex flex-col items-center justify-center gap-6">
                  <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-zinc-100 dark:border-zinc-900">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Global Online Status</span>
                  </div>
                  <p className="text-xl text-zinc-500 font-medium italic">
                    Typical response time: &lt; 24 hours
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
