'use client';
import { cn } from '@/libs/utils/cn';
import { motion } from 'framer-motion';

export default function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block rounded-lg   bg-gradient-to-r from-rose-300 to-red-300 px-1 pb-1 dark:from-rose-500 dark:to-red-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
}
