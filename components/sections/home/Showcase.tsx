'use client';

import { m } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Image from "next/image";
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
        tags: Array.isArray(p.tags) && p.tags.length > 0 ? p.tags : ["Development"],
        url: `/case-studies/${p.slug}` || "#"
      }));
    }
    return [
      {
        id: "p1",
        title: "TechNurture Labs",
        summary: "THE ONLINE LEARNING PLATFORM STUDENTS ACTUALLY LOVE.",
        image: "https://itx-ali.netlify.app/technnurture.png",
        tags: ["EdTech", "Platform"],
        url: "#"
      },
      {
        id: "p2",
        title: "OruLabs",
        summary: "REAL-TIME LIVE TRAINING PLATFORM FOR EDUCATORS",
        image: "https://itx-ali.netlify.app/orulabs.png",
        tags: ["EdTech", "Live Streaming"],
        url: "#"
      },
      {
        id: "p3",
        title: "OruErp",
        summary: "Comprehensive ERP System for Agencies",
        image: "https://itx-ali.netlify.app/oruerp.png",
        tags: ["Enterprise", "ERP"],
        url: "#"
      },
      {
        id: "p4",
        title: "Easyio Technologies",
        summary: "Simplifying Complex Technology",
        image: "https://itx-ali.netlify.app/easyio.png",
        tags: ["Agency", "Web"],
        url: "#"
      },
      {
        id: "p5",
        title: "Serique Avenue",
        summary: "PREMIUM E-COMMERCE EXPERIENCE",
        image: "https://itx-ali.netlify.app/serique.png",
        tags: ["E-Commerce", "Shopify"],
        url: "#"
      },
      {
        id: "p8",
        title: "Hi Tech Teleprompter",
        summary: "Professional desktop teleprompter app",
        image: "https://itx-ali.netlify.app/teleprompter.jpeg",
        tags: ["Desktop App", "Electron"],
        url: "#"
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
    <section className="pt-24 pb-32 relative overflow-hidden bg-transparent" id="work">
      {/* Hero-style Gradient Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full bg-[radial-gradient(circle_at_50%_100%,#FEF9C3_0%,transparent_50%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 flex flex-col justify-between md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Our Portfolio</span>
            </div>
            <PremiumHeading 
              text="Recent Work"
              highlightWords={["Work"]}
              as="h2"
              className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-6"
            />
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Explore how we help modern teams build and scale their ideas with custom software.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!mounted || !canScrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ArrowLeft className="size-5 md:size-6" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!mounted || !canScrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
            >
              <ArrowRight className="size-5 md:size-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 px-6 lg:px-0 overflow-visible">
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
          <CarouselContent className="-ml-4 md:-ml-8 cursor-grab active:cursor-grabbing">
            {displayProjects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-4 md:pl-8 basis-[90%] md:basis-[520px]">
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="group relative flex flex-col bg-white border border-zinc-100/50 rounded-[2.5rem] md:rounded-[3rem] p-5 md:p-6 transition-all hover:shadow-xl hover:shadow-zinc-200/50 h-full"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.8rem] md:rounded-[2.5rem] mb-6 md:mb-8">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      fill 
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-2 md:px-4 flex flex-col flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3 md:mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                      {project.summary}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={project.url}
                        className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-zinc-50 text-xs font-black tracking-widest text-zinc-950 uppercase transition-all group-hover:bg-emerald-50 cursor-pointer relative z-50"
                      >
                        Visit Case Study
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover:border-emerald-200">
                          <ArrowUpRight className="w-4 h-4 group-hover:text-emerald-600 group-hover:rotate-45 transition-all" />
                        </div>
                      </a>
                    </div>
                  </div>
                </m.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

    </section>
  );
}
