'use client';

import { m } from "framer-motion";
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

interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  summary?: string;
  url?: string;
}

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
    <section className="pt-14 pb-20 md:pt-24 md:pb-32 relative overflow-hidden bg-transparent mobile-section-content" id="work">
      {/* Hero-style Gradient Backdrop - desktop only */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full bg-[radial-gradient(circle_at_50%_100%,#FEF9C3_0%,transparent_50%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="mb-8 flex flex-col justify-between md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full mb-4 md:mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Our Portfolio</span>
            </div>
            <PremiumHeading 
              text="Recent Work"
              highlightWords={["Work"]}
              as="h2"
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-3 md:mb-6"
            />
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Explore how we help modern teams build and scale their ideas with custom software.
            </p>
          </div>
          <div className="mt-6 md:mt-8 flex shrink-0 items-center justify-start gap-3 md:gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!mounted || !canScrollPrev}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ArrowLeft className="size-4 md:size-6" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!mounted || !canScrollNext}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ArrowRight className="size-4 md:size-6" />
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
          <CarouselContent className="-ml-3 md:-ml-8 cursor-grab active:cursor-grabbing">
            {displayProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-3 md:pl-8 basis-[85%] sm:basis-[70%] md:basis-[520px]">
                <div 
                  className="group relative flex flex-col bg-white border border-zinc-100/50 rounded-[2rem] md:rounded-[3rem] p-4 sm:p-5 md:p-6 transition-all hover:shadow-xl hover:shadow-zinc-200/50 h-full"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-4 md:mb-8">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      fill 
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 z-20">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-900 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.metric && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                        <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-300/90 backdrop-blur-md rounded-full shadow-sm">
                          {project.metric}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="px-1 md:px-4 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-950 mb-2 md:mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed mb-4 md:mb-8 line-clamp-2 md:line-clamp-3">
                      {project.summary}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={project.url}
                        className="inline-flex items-center justify-between w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50 text-[11px] sm:text-xs font-black tracking-widest text-zinc-950 uppercase transition-all group-hover:bg-zinc-100 cursor-pointer relative z-50 border border-zinc-100"
                      >
                        Explore Case Study
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover:border-zinc-400">
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-zinc-950 group-hover:rotate-45 transition-all" />
                        </div>
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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-100">
        <p className="text-xs font-medium text-zinc-500">
          Want a similar high-performance system engineered for your operations?
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            className="px-5 py-2.5 rounded-full border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-50 transition-all"
          >
            All Case Studies
          </Link>
          <Link
            href="/project-estimator"
            className="px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-all shadow-md"
          >
            Calculate System Cost &rarr;
          </Link>
        </div>
      </div>

    </section>
  );
}
