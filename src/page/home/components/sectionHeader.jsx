import React from "react";

export default function SectionHeader({ text, bg }) {
  return (
    <>
      <div
        className={`text-center text-2xl sm:text-3xl md:text-6xl font-semibold md:mt-10  md:mb-10 ${
          bg ? "bg-black/5" : ""
        }  md:py-10 py-3 sm:py-5 rounded-xl`}
      >
        {text}
      </div>
    </>
  );
}
