'use client';

import ringzeroImage from '@/assets/images/ringzero.jpeg';
import baganImage from '@/assets/images/bagan.png';
import freshmoeImage from '@/assets/images/freshmoe.png';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useScroll } from '@/libs/providers/scroll-context-provider';

const experiences = [
  {
    company: 'Fresh Moe',
    job: 'Web Developer',
    experience:
      'Developed backend services for E-commerce, Inventory / Stock Management and Delivery apps, developed frontend web-app for E-commerce',
    duration: '2021 Jan 1 - 2022 July 31',
    logo: freshmoeImage,
  },
  {
    company: 'Bagan Innovation Technology',
    job: 'Web Developer',
    experience:
      'Develop new features and maintain existing features for Tharapa (Online Ecommerce Platform), Livechat and an outsource project for translating names from English to Burmese for banks',
    duration: '2022 July 1 - 2023 May 31',
    logo: baganImage,
  },
  {
    company: 'Ring Zero IT & Services',
    job: 'Full-Stack Developer',
    experience:
      'Develop new features and maintain existing features for DSLA POS, Back office panel. Developed the Gamespace project.',
    duration: '2023 June 12 - Present',
    logo: ringzeroImage,
  },
];

export default function WorkExperience() {
  const { workSectionRef } = useScroll();
  return (
    <section
      className="b my-20 flex flex-col items-center justify-center"
      ref={workSectionRef}
    >
      <h1 className="mt-5 max-w-4xl text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left md:text-4xl lg:text-5xl lg:leading-snug">
        Career
      </h1>
      <div className="mb-5 h-2 w-40 bg-gradient-to-r from-rose-500 to-red-500" />
      <VerticalTimeline lineColor="rgb(239 68 68)">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              date={exp.duration}
              iconClassName="bg-white flex justify-center items-center"
              icon={
                <Image
                  width={50}
                  height={50}
                  alt="company logo"
                  src={exp.logo}
                  className="rounded-full"
                />
              }
              contentStyle={{
                background: 'black',
                boxShadow: 'none',
                border: '1px solid rgb(255 255 255 / 0.2)',
                borderRadius: '16px',
              }}
              contentArrowStyle={{
                borderRightColor: 'rgb(239 68 68 / var(--tw-bg-opacity))',
              }}
            >
              <h3 className="text-xl font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left lg:leading-snug">
                {exp.job}
              </h3>
              <h4 className="text-lg font-bold leading-relaxed text-neutral-700 dark:text-white sm:text-left lg:leading-snug">
                {exp.company}
              </h4>
              <p>{exp.experience}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
