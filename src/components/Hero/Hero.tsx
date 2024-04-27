'use client';

import { SocialIcon } from 'react-social-icons';
import Button from '../ui/Buttons/Button';
import HeroHighlight from '../ui/HeroHightlight/HeroHighlight';
import Highlight from '../ui/HeroHightlight/Highlight';
import ProfileAvatar from '../ui/ProfileAvatar';
import { motion } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <HeroHighlight
        containerClassName="h-full w-full"
        className="h-full w-full"
      >
        <motion.div
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
          className="mt-[100px] flex w-full flex-col items-center justify-start md:mt-[200px]"
        >
          <ProfileAvatar />
          <div className="my-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
            <h1 className="text-center">{`Hi, I'm Aung Chan Oo`}</h1>
            <h1 className="text-center">
              {`I'm a`}
              <Highlight className="ml-2 text-black dark:text-white">
                Full-Stack Developer
              </Highlight>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-full p-2 md:hidden">
            <SocialIcon
              url="https://twitter.com/danielfaux0308"
              bgColor="transparent"
              network="x"
              className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-black"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/aung-chan-o-868983152/"
              bgColor="transparent"
              className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-sky-700"
            />
            <SocialIcon
              url="https://github.com/AdamFilk"
              bgColor="transparent"
              className="transition-color h-10 w-10 rounded-full bg-red-500 duration-150 hover:bg-black"
            />
          </div>
          <Button onClick={() => {}} label="Contact" className="mt-4" />
        </motion.div>
      </HeroHighlight>
      <motion.div
        className="absolute bottom-5 flex w-full items-center justify-center"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        <LuChevronDown className="stroke-red-500" size={50} />
      </motion.div>
    </section>
  );
}
