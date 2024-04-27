import Contact from '@/components/Contact/Contact';
import Education from '@/components/Education/Education';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import TechStack from '@/components/TechStack/TechStack';
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
