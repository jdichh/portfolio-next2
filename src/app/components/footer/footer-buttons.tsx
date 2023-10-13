import React from "react";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ['latin'], fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]})

export default function FooterButtons() {
  return (
    <a
      href="mailto:jpsdichoso21@gmail.com"
      aria-label="Button to send me an email"
      className={`icons text-sm sm:text-base ${gabarito.className}`}
    >
      jpsdichoso21@gmail.com
    </a>
  );
}
