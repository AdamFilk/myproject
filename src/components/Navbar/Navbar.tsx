'use client';
import { CSSProperties, useEffect, useState } from 'react';
import { Tabs } from '../ui/Tabs';
import { tabs } from './data';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navbarStyle: CSSProperties = {
    transform: visible ? 'translateY(0)' : 'translateY(-300%)',
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: '1rem',
    zIndex: 30,
    width: '100%',
  };

  return (
    <nav style={navbarStyle}>
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
