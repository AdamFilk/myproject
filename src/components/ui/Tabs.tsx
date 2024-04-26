'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/libs/utils/cn';

export type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  activeTabLabelClassName,
  tabClassName,
  tabLabelClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  activeTabLabelClassName?: string;
  tabClassName?: string;
  tabLabelClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [isAnimating, setIsAnimating] = useState(true);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      animate="open"
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{ ease: 'easeOut', duration: 1 }}
      initial="closed"
      variants={variants}
      className={cn(
        'no-visible-scrollbar relative flex  w-max max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
        containerClassName
      )}
    >
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn('relative rounded-full px-4 py-2', tabClassName)}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {active.value === tab.value ? (
            <>
              <motion.div
                layoutId="clickedbutton"
                transition={{
                  type: 'spring',
                  bounce: 0.3,
                  duration: 0.6,
                }}
                className={cn(
                  'absolute inset-0 flex h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-800',
                  activeTabClassName
                )}
              />
              <span
                className={cn(
                  'relative block text-black dark:text-white',
                  activeTabLabelClassName
                )}
              >
                {tab.title}
              </span>
            </>
          ) : (
            <span
              className={cn(
                'relative block text-black dark:text-white',
                tabLabelClassName
              )}
            >
              {tab.title}
            </span>
          )}
        </button>
      ))}
    </motion.div>
  );
};
