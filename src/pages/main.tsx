'use client';

import Contact from '@/components/Contact/Contact';
import Education from '@/components/Education/Education';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Projects from '@/components/Projects/Projects';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import TechStack from '@/components/TechStack/TechStack';
import { TracingBeam } from '@/components/ui/TracingBeam/TracingBeam';
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import {
  ScrollProvider,
  useScroll,
} from '@/libs/providers/scroll-context-provider';
import { Toaster } from 'react-hot-toast';

export default function MainPage() {
  return (
    <ScrollProvider>
      <Toaster />
      <Navbar />
      <SocialLinks />
      <Hero />
      <TechStack />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}
