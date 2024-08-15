import React from "react";
import Header from "./components/header";
import KlarWhite from "../../png/klar-logo-beyaz.png";
import Klar from "../../png/klarwalpaper.jpeg";
import Repair from "../../png/koltukyeni.png";
import AboutSection from "./components/aboutSection";
import Services from "./components/services";
import Before_1 from "../../png/1.jpg";
import After_2 from "../../png/2.jpg";
import Before_3 from "../../png/3.jpg";
import After_4 from "../../png/4.jpg";
import Before_5 from "../../png/5.jpg";
import After_6 from "../../png/6.jpg";
import ForYou from "../../png/foryou.jpeg";
import NewForYou from "../../png/newfor.png";
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
        <div className=" absolute top-[120px] left-1/2 -translate-x-1/2">
          <img width={300} src={KlarWhite} />
        </div>
        <div className=" absolute -translate-y-1/2 top-[40%] -translate-x-1/2 left-1/2 w-[40%]">
          <h1 className="text-5xl text-white  text-center mt-10 mb-10 font-thin ">
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
      <div className="px-20 flex flex-col gap-y-20">
        <AboutSection />
        <div className="text-center text-6xl font-semibold mt-10 mb-10 bg-black/5 py-10">
          HİZMETLERİMİZ
        </div>
        <Services />
        <div className="flex items-center justify-between flex-row-reverse mt-10 bg-black/5 rounded-2xl">
          <div className=" w-[700px] ">
            <img className="w-full  rounded-2xl" src={Repair} />
          </div>
          <div className="w-[750px] pl-12  ">
            <h1 className="text-5xl font-semibold">
              Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz.
            </h1>
            <p className="mt-5 mb-3 text-xl">
              We believe that the future of urban living is in creating a sense
              of community and a sense of home. We are committed to creating
              spaces that are not only beautiful, but also functional and
              sustainable.
            </p>
            <button className=" mt-5 rounded-full font-semibold px-8 py-4 border-black border-2    hover:bg-black/20 hover:border-white  text-xl">
              İletişime Geçin
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-6xl font-semibold mt-10 mb-10 py-10">
        BEFORE AFTER
      </div>
      <div className="flex items-center justify-around px-20 mb-20 ">
        <div>
          <img className=" rounded-xl" width={700} src={Before_1} />
          <p className="text-center mt-3 text-black/50 text-sm">
            Solmuş ve kirli halde
          </p>
        </div>
        <div>
          <img className=" rounded-xl" width={700} src={After_2} />
          <p className="text-center">Yenilenmiş ve sıfır tarzında</p>
        </div>
      </div>
      <div className="flex items-center justify-around px-20 mb-20 mt-10 ">
        <div>
          <img className=" rounded-xl" width={700} src={Before_3} />
          <p className="text-center">Solmuş ve kirli halde</p>
        </div>
        <div>
          <img className=" rounded-xl" width={700} src={After_4} />
          <p className="text-center">Yenilenmiş ve sıfır tarzında</p>
        </div>
      </div>
      <div className="flex items-center justify-around px-20 mb-20 mt-10 ">
        <div>
          <img className=" rounded-xl" width={700} src={Before_5} />
          <p className="text-center">Solmuş ve kirli halde</p>
        </div>
        <div>
          <img className=" rounded-xl" width={700} src={After_6} />
          <p className="text-center">Yenilenmiş ve sıfır tarzında</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={ForYou}
          className="w-[calc(100%-15px)] mx-auto rounded-xl h-[800px] object-cover"
        />
        <div className="absolute top-[100px] right-0 text-white w-[1000px] text-right pr-32">
          <h1 className="text-7xl">SİZİN İÇİN ÖZENLE TASARLANDI</h1>
          <p className="mt-10 w-full">
            Hayalinizdeki tasarımları gerçeğe dönüştürüyoruz.
          </p>
          <p className="">Haylleriniz kavuşmak sadece bir adım zuağınız</p>
          <p>şimdi bizimle iletişime geçin ve hayalinizdeki tasarıma kavuşun</p>
          <button className="mt-10">
            <a className="rounded-full px-8 py-4 bg-white/10 font-semibold hover:bg-white/20  text-white text-xl">
              Şimdi Teklif Alın
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
