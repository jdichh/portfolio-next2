"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

export default function ThemeSwitcher() {
  const HOVER_SCALE = 1.1;
  const TAP_SCALE = 0.9;

  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="icons"
      onClick={switchTheme}
      aria-label="Theme switcher"
      whileHover={{ scale: HOVER_SCALE }}
      whileTap={{ scale: TAP_SCALE }}
    >
      {resolvedTheme === "light" ? (
        <PiSunFill size={22} />
      ) : (
        <PiMoonFill size={22} />
      )}
    </motion.button>
  );
}
