import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Dichoso | Portfolio",
  description: "The portfolio website of Jason Dichoso, a web developer from the Philippines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} relative max-w-[1440px] w-full my-0 mx-auto theme`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
