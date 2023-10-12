import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

export default function FooterButtons() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
        target="_blank"
        aria-label="Button to my LinkedIn profile"
        className="icons"
      >
        <BiLogoLinkedin size={22} />
      </a>
      <a
        href="mailto:jpsdichoso21@gmail.com"
        aria-label="Button to send me an email"
        className="icons"
      >
        <SiGmail size={22} />
      </a>
    </>
  );
}
