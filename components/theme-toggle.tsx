"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white/40 rounded-full flex items-center 
      justify-center hover:scale-[1.15] active:scale-105 transition-all 
      dark:bg-gray-950"
      onClick={handleThemeChange}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? (
        <BsMoon className="text-gray-800 dark:text-gray-200" />
      ) : (
        <BsSun className="text-gray-800 dark:text-gray-200" />
      )}
    </motion.button>
  );
} 