'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export default function Showcase({ initialProjects = [] }: { initialProjects?: any[] }) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayProjects = useMemo(() => {
    if (initialProjects && initialProjects.length > 0) {
      return initialProjects.map((p, idx) => ({
        id: p.id || `p-${idx}`,
        title: p.title,
        summary: p.description || "Custom software solutions built to solve real-world business challenges.",
        image: p.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        tags: Array.isArray(p.tags) && p.tags.length > 0 ? p.tags : ["Engineering"],
        metric: p.metadata?.metric || "99.99% Uptime",
        url: p.slug ? `/case-studies/${p.slug}` : "/case-studies"
      }));
    }
    return [
      {
        id: "p1",
        title: "Enterprise Resource Protocol (ERP)",
        summary: "High-throughput operational ERP system for cold storage and multi-branch distribution.",
        image: "https://itx-ali.netlify.app/oruerp.png",
        tags: ["ERP", "Supply Chain"],
        metric: "₹1.4Cr/mo Volume",
        url: "/case-studies/enterprise-resource-protocol"
      },
      {
        id: "p2",
        title: "Global Commerce Gateway",
        summary: "Headless Next.js international storefront connecting artisan exports to the USA & Europe.",
        image: "https://itx-ali.netlify.app/serique.png",
        tags: ["Next.js", "Global E-Com"],
        metric: "1.1s Page Speed",
        url: "/case-studies/global-commerce-gateway"
      },
      {
        id: "p3",
        title: "TechNurture Labs & LMS",
        summary: "Real-time educational platform handling 14,000+ active learners with live stream pipelines.",
        image: "https://itx-ali.netlify.app/technnurture.png",
        tags: ["EdTech", "Streaming"],
        metric: "14,000+ Students",
        url: "/case-studies/institutional-learning-management"
      },
      {
        id: "p4",
        title: "Financial Management Suite",
        summary: "Instant ledger and billing reconciliation processing thousands of daily transactions.",
        image: "https://itx-ali.netlify.app/orulabs.png",
        tags: ["FinTech", "Ledger"],
        metric: "0% Error Rate",
        url: "/case-studies/financial-management-suite"
      },
      {
        id: "p5",
        title: "Hotel Management Platform",
        summary: "Multi-property booking engine with integrated payment gateway and channel management.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
        tags: ["Hospitality", "Booking"],
        metric: "+68% Direct Bookings",
        url: "/case-studies/hotel-management-platform"
      }
    ];
  }, [initialProjects]);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 md:py-28 relative overflow-hidden bg-transparent mobile-section-content" id="work">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="mb-10 flex flex-col justify-between md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-zinc-200/80 px-3.5 py-1.5 rounded-full mb-4 shadow-2xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-zinc-700">Selected Case Studies</span>
            </div>
            <PremiumHeading 
              text="Recent Work"
              highlightWords={["Work"]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 mb-3"
            />
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Explore how we help modern teams build and scale their operations with custom software.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex shrink-0 items-center justify-start gap-3">
            <Button
              size="icon"
              variant="outline"
              aria-label="Previous project"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!mounted || !canScrollPrev}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border-zinc-200 bg-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all disabled:opacity-35 flex items-center justify-center p-0"
            >
              <ArrowLeft className="size-4 md:size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="Next project"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!mounted || !canScrollNext}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border-zinc-200 bg-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all disabled:opacity-35 flex items-center justify-center p-0"
            >
              <ArrowRight className="size-4 md:size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 px-5 sm:px-6 lg:px-0 overflow-visible">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="relative lg:left-[calc((100vw-1280px)/2)]"
        >
          <CarouselContent className="-ml-4 md:-ml-6 cursor-grab active:cursor-grabbing">
            {displayProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:pl-6 basis-[88%] sm:basis-[68%] md:basis-[460px]">
                <div className="group relative flex flex-col bg-white border border-zinc-200/90 hover:border-zinc-950 rounded-3xl p-4 sm:p-5 transition-all hover:shadow-xl hover:shadow-zinc-200/40 h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-zinc-100 border border-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      fill 
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900 bg-white/95 backdrop-blur-md rounded-full shadow-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.metric && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-950 bg-emerald-300/95 backdrop-blur-md rounded-full shadow-xs">
                          {project.metric}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="px-1 sm:px-2 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-2 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-2">
                      {project.summary}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={project.url}
                        className="inline-flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-zinc-50 group-hover:bg-zinc-950 text-xs font-bold tracking-wider text-zinc-900 group-hover:text-white uppercase transition-colors border border-zinc-200/70 group-hover:border-zinc-950"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Bottom Showcase CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-200/70">
        <p className="text-xs sm:text-sm font-medium text-zinc-600">
          Want a similar high-performance system engineered for your operations?
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-50 transition-all"
          >
            All Case Studies
          </Link>
          <Link
            href="/project-estimator"
            className="px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-all shadow-sm"
          >
            Calculate System Cost &rarr;
          </Link>
        </div>
      </div>

    </section>
  );
}
