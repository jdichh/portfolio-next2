import React from "react";
import Head from "next/dist/shared/lib/head";
import { Gabarito } from "next/font/google";

import RouteHeader from "@/app/components/route-components/route-header";
import BlogsContainer from "@/app/components/route-components/blog-components/blogs-container";
import Footer from "@/app/components/footer/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Head>
        <title>Jason Dichoso | Blogs</title>
      </Head>
      <main className={`flex flex-col items-start w-full p-4 ${gabarito.className}`}>
        <RouteHeader />
        <div className="mt-48" />
        <div className="mb-8">
          <h1 className="mb-3 text-xl sm:text-2xl custom-transition">
            <span className="font-bold">
              Kamusta! I'm Jason, and this is where you can read just about any
              of my ramblings—
            </span>
            be it about web development, music, books, or just life in general.
          </h1>
        </div>
        <BlogsContainer/>
      </main>
      <Footer/>
    </>
  );
}
