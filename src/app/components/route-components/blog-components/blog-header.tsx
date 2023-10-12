import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import ThemeSwitcher from "../../theme-switcher/theme-switcher";

export default function BlogHeader() {
  return (
    <header className="z-[99] fixed w-full -left-1/2 translate-x-[50%] top-0">
      <nav className="flex justify-between items-center p-4 max-w-[800px] mx-auto">
        <ul>
          <li className="flex flex-row gap-2">
            <Link href="/blogs" aria-label="Back button">
              <button className="icons" aria-label="Back button">
                <IoMdArrowRoundBack size={22} />
              </button>
            </Link>
            <Link href="/" aria-label="Home button">
              <button className="icons" aria-label="Home button">
                <AiFillHome size={22} />
              </button>
            </Link>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
