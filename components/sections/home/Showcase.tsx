'use client';

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/Animations";
import { PremiumHeading } from "@/components/shared/PremiumHeading";
import Magnetic from "@/components/shared/Magnetic";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  summary?: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Global Finance App",
    summary: "A powerful banking platform built for speed and security, helping businesses manage money across the globe without borders.",
    image: "https://images.unsplash.com/photo-1616077168712-fc6c788bc4ee?auto=format&fit=crop&q=80",
    tags: ["Banking", "Security"],
    url: "#"
  },
  {
    id: "02",
    title: "Smart Learning Hub",
    summary: "Helping schools and universities use data to create personalized learning paths for every student.",
    image: "https://images.unsplash.com/photo-1551288049-bb848a55a175?auto=format&fit=crop&q=80",
    tags: ["AI", "Education"],
    url: "#"
  },
  {
    id: "03",
    title: "Health & Research",
    summary: "Advanced AI tools that help medical researchers find patterns in complex data to discover new treatments faster.",
    image: "https://images.unsplash.com/photo-1579154341098-ec40089e9f19?auto=format&fit=crop&q=80",
    tags: ["Healthcare", "AI"],
    url: "#"
  },
  {
    id: "04",
    title: "Modern Factory",
    summary: "Industrial automation that connects machines and software to make manufacturing smoother and more efficient.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    tags: ["Smart Tech", "Automation"],
    url: "#"
  }
];

export default function Showcase({ initialProjects = projects }: { initialProjects?: any[] }) {
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
        summary: p.summary || "Custom software solutions built to solve real-world business challenges.",
        image: p.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        tags: p.tags || ["Development"],
        url: "#"
      }));
    }
    return projects;
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
    <section className="pt-24 pb-8 relative overflow-hidden select-none" id="work">
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
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-6"
            />
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-lg">
              Explore how we help modern teams build and scale their ideas with custom software.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-4">
            <Magnetic>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!mounted || !canScrollPrev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
              >
                <ArrowLeft className="size-5 md:size-6" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!mounted || !canScrollNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-zinc-200 hover:bg-white hover:border-zinc-950 transition-all disabled:opacity-30 flex items-center justify-center p-0"
              >
                <ArrowRight className="size-5 md:size-6" />
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 px-6 lg:px-0">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="relative lg:left-[calc((100vw-1280px)/2)]"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {displayProjects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-4 md:pl-8 md:basis-[520px]">
                <motion.div 
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="group relative flex flex-col bg-white border border-zinc-100/50 rounded-[3rem] p-6 transition-all hover:shadow-2xl hover:shadow-zinc-200/60"
                >
                  <div className="aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-3 mb-6">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-50 border border-zinc-100 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-zinc-950 mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-500 leading-relaxed mb-10 line-clamp-2 font-medium">
                      {project.summary}
                    </p>
                    
                    <a 
                      href={project.url}
                      className="inline-flex items-center text-[10px] font-black tracking-[0.3em] text-zinc-950 hover:text-emerald-600 transition-colors uppercase group/link"
                    >
                      View Case Study
                      <ArrowUpRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
