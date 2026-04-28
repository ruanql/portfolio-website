"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 
          backdrop-blur-[0.5rem] border border-white/40 rounded-full flex items-center 
          justify-center hover:scale-[1.15] active:scale-105 transition-all 
          dark:bg-gray-950 z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsArrowUp className="text-gray-800 dark:text-gray-200" />
        </motion.button>
      )}
    </>
  );
} 