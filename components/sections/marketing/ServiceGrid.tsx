'use client';

import { FadeIn } from "@/components/shared/Animations";
import { ArrowRight, Code2, Layers, Server, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Code: Code2,
  Layers: Layers,
  Zap: Zap,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Cpu: Cpu,
};

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServiceGridProps {
  services: ServiceItem[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || Code2;
        return (
          <FadeIn key={service.title} delay={0.1 * i}>
            <div className="group card-base h-full border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 p-8 flex flex-col transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 transition-colors group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-white dark:group-hover:text-black">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-4 tracking-tighter uppercase">
                {service.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-8 flex-grow italic">
                {service.description}
              </p>
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0"
              >
                Initialize Protocol <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};
