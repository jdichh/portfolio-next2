"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const HOVER_SCALE = 1.1;
  const TAP_SCALE = 0.9;

  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  useEffect(() => {
    setCurrentTheme(theme as Theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      className="icons"
      onClick={switchTheme}
      aria-label="Theme switcher"
      whileHover={{ scale: HOVER_SCALE }}
      whileTap={{ scale: TAP_SCALE }}
    >
      {currentTheme === "light" ? (
        <PiSunFill size={22} />
      ) : (
        <PiMoonFill size={22} />
      )}
    </motion.button>
  );
}
