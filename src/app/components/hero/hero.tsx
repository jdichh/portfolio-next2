import React from "react";
import { DM_Serif_Display } from "next/font/google";
import HeroButtons from "./hero-buttons";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="flex flex-col items-center my-32 scroll-mt-[100rem]" id="home">
      <div className="flex flex-col items-end p-2">
        <h1
          className={`${dmSerifDisplay.className} text-4xl sm:text-6xl text-accented-text tracking-tight`}
        >
          Jason Dichoso
        </h1>
        <h2 className="uppercase">Web Developer</h2>
        <div className="my-2 flex gap-2">
          <HeroButtons />
        </div>
      </div>
    </section>
  );
}
