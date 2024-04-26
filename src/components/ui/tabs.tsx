'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/libs/utils/cn';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={cn(
        'no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
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
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
              className={cn(
                'absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800 ',
                activeTabClassName
              )}
            />
          )}

          <span className="relative block text-black dark:text-white">
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  );
};
