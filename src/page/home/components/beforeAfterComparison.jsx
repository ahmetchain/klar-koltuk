import React from "react";

export default function BeforeAfterComparison({ textb,texta, before, after }) {
  return (
    <>
      <div className="flex flex-col gap-y-10 lg:flex-row items-center justify-around px-20 mb-20 ">
        <div className="w-[350px] sm:w-[450px] md:w-[700px] lg:w-[400px] xl:w-[500px] dev_desktop:w-[650px]">
          <img className=" rounded-xl w-full  " src={before} />
          <p className="text-center mt-3 text-black/50 text-sm md:text-base font-semibold uppercase tracking-wide">
            {textb}
          </p>
        </div>
        <div className=" w-[350px] sm:w-[450px] md:w-[700px] lg:w-[400px] xl:w-[500px] dev_desktop:w-[650px]">
          <img className=" rounded-xl w-full  "  src={after} />
          <p className="text-center mt-3 font-semibold text-sm md:text-base uppercase tracking-wide">{texta}</p>
        </div>
      </div>
    </>
  );
}
