"use client";

import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.hash.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none 
        border border-white border-opacity-40 bg-white bg-opacity-80
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        dark:bg-gray-950 dark:border-white/5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 
        py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center
        gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] 
        sm:flex-nowrap sm:gap-5 dark:text-gray-300">
          {links.map((link) => (
            <motion.li className="h-3/4 flex items-center justify-center relative" 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            key={link.hash}>
              <Link 
                className={`flex w-full items-center justify-center px-3 py-3
                hover:text-gray-950 transition-colors dark:hover:text-gray-300
                ${activeSection === link.hash.slice(1) 
                  ? "text-gray-950 dark:text-gray-100" 
                  : "text-gray-500 dark:text-gray-400"}`}
                href={link.hash}
                aria-current={activeSection === link.hash.slice(1) ? "page" : undefined}
              >
                {link.name}
                {activeSection === link.hash.slice(1) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
