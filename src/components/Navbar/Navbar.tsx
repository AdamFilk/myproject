'use client';

import { Tabs } from '../ui/Tabs';
import { tabs } from './data';

export default function Navbar() {
  return (
    <nav className="fixed top-3 my-3 w-full">
      <Tabs
        tabs={tabs}
        containerClassName="flex-wrap justify-center px-5 py-3 md:bg-black sm:bg-transparent mx-auto rounded-full"
        tabLabelClassName="text-white"
      />
    </nav>
  );
}
