'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Provides framer-motion's animation feature set once, so components can use the
 * lightweight `m` component instead of the full `motion` component. Visual behavior
 * is identical; it just keeps unused features (drag, layout) out of the bundle.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
