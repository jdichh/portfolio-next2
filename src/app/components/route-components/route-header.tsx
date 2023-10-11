import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

export default function RouteHeader() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;

  return (
    <header
      className="z-[99] fixed w-full -left-1/2 translate-x-[50%] top-0"
    >
      <nav className="flex justify-between items-center p-4 max-w-[850px] mx-auto">
        <Link href="/" aria-label="Back button">
          <motion.button
            className="icons"
            aria-label="Back button"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <IoMdArrowRoundBack size={22} />
          </motion.button>
        </Link>

        <ThemeSwitcher />
      </nav>
    </header>
  );
}