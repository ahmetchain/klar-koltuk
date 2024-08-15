import React from "react";

export default function AboutSection() {
  return (
    <div className="flex items-center justify-between  ">
      <div>
        <div className="flex gap-x-3 items-center mb-2">
          <h4 className=" text-[#9e9ea0]">Hakkımızda</h4>
          <div className=" bg-[#9e9ea0] px-10 h-1"></div>
        </div>
        <h1 className="text-6xl font-semibold w-[320px]">For Urban Living.</h1>
      </div>
      <p  className="  text-2xl w-[1000px]">
        We believe that the future of urban living is in creating a sense of
        community and a sense of home. We are committed to creating spaces that
        are not only beautiful, but also functional and sustainable. Our goal is
        to create spaces that are designed to be lived in, not just looked at.
      </p>
    </div>
  );
}
