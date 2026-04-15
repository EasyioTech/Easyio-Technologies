import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-zinc-200 bg-zinc-100 text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white',
        primary: 'border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950',
        destructive: 'border-red-200 bg-red-100 text-red-900 dark:border-red-800 dark:bg-red-900 dark:text-red-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
