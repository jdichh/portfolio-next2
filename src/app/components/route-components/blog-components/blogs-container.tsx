import React from "react";
import { blogs } from "@/lib/data";
import BlogItems from "./blog";

export default function BlogsContainer() {
  return (
    <section className="px-0 w-full" id="blogs">
      {blogs.map((blog, index) => (
        <React.Fragment key={index}>
          <BlogItems {...blog} />
        </React.Fragment>
      ))}
    </section>
  );
}
