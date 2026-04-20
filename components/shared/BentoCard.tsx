import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({
  icon: Icon,
  title,
  description,
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  return (
    <div
      className={`card-base card-hover group p-10 md:p-12 ${className}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        {Icon && (
          <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center mb-10 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-all duration-500 shadow-inner">
            <Icon className="w-8 h-8 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-500" />
          </div>
        )}
        <h3 className="text-3xl font-bold text-zinc-950 dark:text-white mb-6 uppercase tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic mb-8">
          {description}
        </p>
        <div className="flex-1">
          {children}
        </div>
      </div>

      {/* Background Accent Icon */}
      {Icon && (
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.01] group-hover:opacity-10 dark:group-hover:opacity-10 transition-all duration-1000 rotate-12 group-hover:rotate-0">
          <Icon className="w-40 h-40" />
        </div>
      )}
    </div>
  );
}
