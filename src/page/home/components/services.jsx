import React from "react";
import Repair from "../../../png/repair.jpg";
export default function Services() {
  return (
    <div className="flex items-center justify-between">
      <div className=" w-[700px] ">
        <img className="w-full  rounded-2xl" src={Repair} />
      </div>
      <div className="w-[750px] pr-12 ">
        <h1 className="text-5xl font-semibold">
          Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz.
        </h1>
        <p className="mt-5 mb-3 text-xl">
          We believe that the future of urban living is in creating a sense of
          community and a sense of home. We are committed to creating spaces
          that are not only beautiful, but also functional and sustainable.
        </p>
        <button className=" mt-5 rounded-full font-semibold px-8 py-4 border-black border-2    hover:bg-black/20 hover:border-white  text-xl">
          İletişime Geçin
        </button>
      </div>
    </div>
  );
}
