import React from "react";

export default function BannerSection({ img, title, p, p1, p2, button }) {
  return (
    <>
      <div className="relative ">
        <img
          src={img}
          className="w-full mx-auto rounded-xl h-[800px] object-cover "
        />
        <div className="absolute top-[150px] sm:top-[100px] w-[370px] sm:w-[500px] text-center -translate-x-1/2 left-1/2 text-white lg:w-[1000px] lg:pr-20 lg:text-right lg:translate-x-0 lg:left-auto lg:right-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-7 text-sm sm:text-base sm:mt-10 w-full">{p}</p>
          <p className="text-sm sm:text-base">{p1}</p>
          <p className="text-sm sm:text-base">{p2}</p>
          <button className="mt-10">
            <a className="rounded-full px-5 py-2.5 sm:text-lg sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/10 font-semibold hover:bg-white/20  text-white lg:text-xl">
              {button}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
