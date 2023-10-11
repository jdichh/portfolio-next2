import React from "react";
import Link from "next/link";
import { DM_Serif_Display } from "next/font/google";
import { links } from "@/lib/data";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="z-[99] fixed w-full max-w-[1440px] top-0 header-color">
      <nav className="flex justify-between items-center py-4 px-8">
        <a
          href="#home"
          className={`${dmSerifDisplay.className} hover:text-accent-color text-2xl custom-transition`}
        >
          jd.
        </a>
        <ul className="flex flex-row text-lg gap-12 sm:gap-24">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className="hover:text-accent-color custom-transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
