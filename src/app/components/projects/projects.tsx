import React from "react";
import SectionHeading from "../section-heading/section-heading";
import { projects } from "@/lib/data";
import Project from "./project";
import OtherProjects from "./other-projects";

export default function Projects() {
  return (
    <section className="px-4 w-full leading-8 scroll-mt-20 mt-16" id="works">
      <SectionHeading>Works</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
      <OtherProjects />
    </section>
  );
}
