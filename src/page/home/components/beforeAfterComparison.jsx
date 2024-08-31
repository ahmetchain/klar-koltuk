import React from "react";

export default function BeforeAfterComparison({ textb, texta, before, after }) {
  return (
    <>
      <div className="flex flex-col gap-y-10 lg:flex-row items-center justify-around px-20 mb-20">
        <div className="w-[350px] sm:w-[450px] md:w-[700px] lg:w-[400px] xl:w-[500px] dev_desktop:w-[650px]">
          <div className="relative">
            <img
              className="rounded-xl w-full hover:scale-105 transition-transform duration-300"
              src={before}
              alt="Before Image"
            />
            {/* <p className="absolute bottom-0 left-0 right-0 text-center text-white/90 bg-black/70 py-2 rounded-b-xl text-sm md:text-base font-medium">
              {textb}
            </p> */}
          </div>
        </div>
        <div className="w-[350px] sm:w-[450px] md:w-[700px] lg:w-[400px] xl:w-[500px] dev_desktop:w-[650px]">
          <div className="relative">
            <img
              className="rounded-xl w-full hover:scale-105 transition-transform duration-300"
              src={after}
              alt="After Image"
            />
            {/* <p className="absolute bottom-0 left-0 right-0 text-center text-white/90 bg-black/70 py-2 rounded-b-xl text-sm md:text-base font-medium">
              {texta}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
