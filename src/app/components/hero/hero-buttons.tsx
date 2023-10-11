import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function HeroButtons() {
  const ICON_SIZE = 22;

  return (
    <>
      <a
        className="icons"
        href="https://github.com/jdichh/"
        target="_blank"
        aria-label="Button to my GitHub profile"
      >
        <AiFillGithub size={ICON_SIZE} />
      </a>
      <a
        className="icons"
        href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
        target="_blank"
        aria-label="Button to my LinkedIn profile"
      >
        <BiLogoLinkedin size={ICON_SIZE} />
      </a>
      <a
        className="icons"
        href="mailto:jpsdichoso21@gmail.com"
        aria-label="Button to send me an email"
      >
        <SiGmail size={ICON_SIZE} />
      </a>
    </>
  );
}
