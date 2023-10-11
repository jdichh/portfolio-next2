import React from "react";
import FooterButtons from "./footer-buttons";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="mt-3 border-t w-full max-w-[97.75%] border-accent-color mx-auto">
      <div className="grid grid-cols-3 items-center my-6 mx-3">
        <span className={`${dmSerifDisplay.className} text-center flex justify-center text-xl `}>Contact Me</span>
        <div className="border-t-[3px] border-dotted mx-3 border-accent-color" />
        <div className="flex gap-2 justify-center">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}
