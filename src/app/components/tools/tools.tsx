import React from "react";
import SectionHeading from "../section-heading/section-heading";
import { tools } from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  const ICON_DIMENSIONS = 40;

  return (
    <section className="px-4 w-full mt-16 scroll-mt-20 " id="tools">
      <SectionHeading>Tools</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-center items-center m-1 p-3 rounded-sm highlighted custom-transition"
          >
            <Image
              src={tool.imageUrl}
              alt={tool.alt}
              height={ICON_DIMENSIONS}
              width={ICON_DIMENSIONS}
              className="mb-2"
            />
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
