'use client';

import HeroHighlight from '../ui/HeroHightlight/HeroHighlight';
import Highlight from '../ui/HeroHightlight/Highlight';
import ProfileAvatar from '../ui/ProfileAvatar';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <HeroHighlight containerClassName="h-screen">
        <ProfileAvatar />
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug "
        >
          {`Hi, I'm Aung Chan Oo`}
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug "
        >
          {`I'm a`}
          <Highlight className="ml-2 text-black dark:text-white">
            Full-Stack Developer
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </section>
  );
}
