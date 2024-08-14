import React from "react";
import Header from "./components/header";
import KlarWhite from "../../png/klar-logo-beyaz.png";
import Klar from "../../png/klarwalpaper.jpeg";
import Repair from "../../png/repair.jpg";
export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="relative w-full h-[calc(100%-100px)] rounded-lg mb-20">
        <div className="absolute w-[calc(100%-15px)] mx-auto inset-0 bg-gradient-to-b from-black/35 to-transparent rounded-lg"></div>
        <img
          src={Klar}
          className="w-[calc(100%-15px)] h-full mx-auto rounded-xl object-cover"
        />
        <div className=" absolute top-[150px] left-1/2 -translate-x-1/2">
          <img width={300} src={KlarWhite} />
        </div>
        <div className=" absolute -translate-y-1/2 top-[40%] -translate-x-1/2 left-1/2 w-[30%]">
          <h1 className="text-5xl text-white  text-center mt-10 mb-10 ">
            Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz.
          </h1>
          <nav className="flex items-center justify-center gap-x-20 mt-5 ">
            <a
              className=" rounded-full px-8 py-5 bg-black/10 font-normal tracking-tight hover:bg-black/20 text-white  text-xl"
              href="#"
            >
              Şimdi İletişime Geçin
            </a>
            <a
              className=" rounded-full px-8 py-5 bg-black/10 font-normal tracking-tight hover:bg-black/20 text-white text-xl"
              href="#"
            >
              Hizmetlerimize Göz at
            </a>
          </nav>
        </div>
      </main>
      <div className="flex  items-center">
        <div>
          <img className=" rounded-xl" width={600} height={600} src={Repair} />
        </div>
        <div>
          <h1>Onarım</h1>
          <p>qeqeqweqweqe</p>
        </div>
      </div>
    </div>
  );
}
