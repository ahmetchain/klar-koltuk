import React from "react";

export default function AboutSection({title, paragraph}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div className="text-center md:text-left">
        <div className="flex gap-x-3 items-center mb-2 justify-center md:justify-start">
          <h4 className="text-[#9e9ea0]">Hakkımızda</h4>
          <div className="bg-[#9e9ea0] px-10 h-1"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold w-full md:w-[320px]">
         {title}
        </h1>
      </div>
      <p className="text-lg md:text-2xl w-full md:w-[1000px] text-center md:text-left">
       {paragraph}
      </p>
    </div>
  );
}
