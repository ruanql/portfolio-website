"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ruanqzlt@gmail.com">
          ruanqzlt@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <motion.form
        className="mt-10 flex flex-col dark:text-black"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 
          backdrop-blur-sm transition-all dark:bg-white dark:bg-opacity-90"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 
          backdrop-blur-sm transition-all dark:bg-white dark:bg-opacity-90"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
          bg-gray-900 text-white rounded-full outline-none transition-all 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 
          dark:bg-white dark:bg-opacity-10"
        >
          Submit
        </button>
      </motion.form>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 
        px-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex 
          items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 transition cursor-pointer borderBlack 
          dark:bg-white/10 dark:text-white/60"
          href="mailto:ruanqzlt@gmail.com"
          target="_blank"
        >
          <MdEmail />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex 
          items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 transition cursor-pointer borderBlack 
          dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ruanqueiroz/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 
          flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] active:scale-105 transition cursor-pointer 
          borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ruanql"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
} 