import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h3 className="text-xl text-center xl:mt-0 mb-3 custom-transition font-semibold">
      {children}
    </h3>
  );
}
