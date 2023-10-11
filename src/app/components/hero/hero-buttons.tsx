"use client";

import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function HeroButtons() {
  const ICON_SIZE = 22;
  const HOVER_SCALE = 1.1;
  const TAP_SCALE = 0.9;

  return (
    <>
      <motion.a
        className="icons"
        href="https://github.com/jdichh/"
        target="_blank"
        aria-label="Button to my GitHub profile"
        whileHover={{ scale: HOVER_SCALE }}
        whileTap={{ scale: TAP_SCALE }}
      >
        <AiFillGithub size={ICON_SIZE} />
      </motion.a>
      <motion.a
        className="icons"
        href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
        target="_blank"
        aria-label="Button to my LinkedIn profile"
        whileHover={{ scale: HOVER_SCALE }}
        whileTap={{ scale: TAP_SCALE }}
      >
        <BiLogoLinkedin size={ICON_SIZE} />
      </motion.a>
      <motion.a
        className="icons"
        href="mailto:jpsdichoso21@gmail.com"
        aria-label="Button to send me an email"
        whileHover={{ scale: HOVER_SCALE }}
        whileTap={{ scale: TAP_SCALE }}
      >
        <SiGmail size={ICON_SIZE} />
      </motion.a>
    </>
  );
}
