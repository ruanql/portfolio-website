"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <div className="max-w-[45rem] text-center leading-8 sm:mb-40">
        <p className="mb-3">
          I am a <span className="font-medium">full-stack developer</span> with{" "}
          <span className="font-medium">8 years</span> of experience. I have worked
          with various technologies and frameworks, always focusing on{" "}
          <span className="italic">delivering high-quality solutions</span>.
        </p>
      </div>
      <div className="max-w-[45rem] text-center leading-8 sm:mb-40">
        {experiencesData.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-2xl">{experience.icon}</div>
              <h3 className="text-xl font-semibold">{experience.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              {experience.location}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
              {experience.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 max-w-[40rem]">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 