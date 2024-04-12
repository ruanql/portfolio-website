"use client";

import { motion } from 'framer-motion';
import React from 'react'
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Internet Systems at FATEC</span>, I decided to pursue my
        passion for programming. I enrolled in a coding course and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Redux, Next.js, Node.js, Javascript, TypeScript and MongoDB
        </span>
        . I am also familiar with Vue.js and Angular. I am always looking to
        learn new technologies. 
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, biking, gym, capoeira and travel. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Go and C#</span>.
      </p>
    </motion.section>
  );
}
