import React from "react";
import SectionHeading from "../section-heading/section-heading";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 text-center mt-16 scroll-mt-[2rem] lg:scroll-mt-20"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-6">
        Hello, I'm Jason, and my passion lies in {" "}
        <span className="text-accent-color">crafting user-friendly,</span>{" "}
        <span className="text-accent-color">captivating websites</span> and{" "}
        <span className="text-accent-color">web applications.</span>
      </p>
      <p>
        Outside of making projects, I enjoy running, playing my beloved electric
        guitar, tinkering with computers, and discovering web technologies.
      </p>
    </section>
  );
}
