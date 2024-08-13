import React from "react";
import Header from "./components/header";
import KlarWhite from "../../png/klar-logo-beyaz.png";
import Klar from "../../png/klarwalpaper.jpeg";
export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="relative w-full h-[calc(100%-100px)] rounded-lg">
        <div className="absolute w-[calc(100%-50px)] mx-auto inset-0 bg-gradient-to-b from-black/30 to-transparent rounded-lg"></div>
        <img
          src={Klar}
          className="w-[calc(100%-50px)] h-full mx-auto rounded-xl object-cover"
        />
        <img
          className="absolute top-20 flex animate-fadeInDown left-[40%]"
          src={KlarWhite}
        />
      </div>
    </div>
  );
}
