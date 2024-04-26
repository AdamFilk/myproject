'use client';

import { Tabs } from '../ui/Tabs';
import { tabs } from './data';

export default function Navbar() {
  return (
    <nav className="fixed top-3 z-10 my-3 w-full">
      <Tabs
        tabs={tabs}
        containerClassName="flex-wrap justify-center px-2 py-2 glassBg mx-auto rounded-full"
        tabLabelClassName="text-white"
        activeTabClassName="bg-red-500 dark:bg-red-500"
        activeTabLabelClassName="font-semibold"
      />
    </nav>
  );
}
