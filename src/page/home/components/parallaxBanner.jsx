import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxBanner({ title, title2 }) {
  return (
    <>
      <div className=" overflow-hidden">
        <Parallax translateX={[80, -80]}>
          <h1 className="text-[60px] -mb-8 sm:text-[120px] font-montserrat sm:-mb-16 lg:text-[150px] xl:text-[200px] lg:-mb-24 xl:-mb-28 text-banner  tracking-widest text-stroke">
            {title}
          </h1>
        </Parallax>
        <Parallax translateX={[-80, 80]}>
          <h1 className="text-[60px] sm:text-[120px] font-montserrat  lg:text-[150px] xl:text-[200px] text-banner  tracking-widest text-stroke">
            {title2}
          </h1>
        </Parallax>
      </div>
    </>
  );
}
