import { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const directionMap = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { y: 0, x: 48 },
  right: { y: 0, x: -48 },
  fade: { y: 0, x: 0 },
};

export default function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : { opacity: 0, ...directionMap[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom ease — similar to power3.out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
