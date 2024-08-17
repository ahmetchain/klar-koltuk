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
import Tasarim from "../../png/tasarım.jpeg";
import Tasarim1 from "../../png/tasarım1.jpeg";
import Tasarim2 from "../../png/tasarım2.jpeg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import FooterVideo from "../../video/footerstock.mp4";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="relative w-full h-[calc(100%-100px)] rounded-lg mb-20">
        <div className="absolute w-[calc(100%-10px)] mx-auto inset-0 bg-gradient-to-b from-black/35 to-transparent rounded-lg"></div>
        <img
          src={Klar}
          className="w-[calc(100%-10px)] h-full mx-auto rounded-xl object-cover"
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
        <div className="text-center text-6xl font-semibold mt-10 mb-10 bg-black/5 py-10 rounded-xl">
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
      <div className="relative ">
        <img
          src={ForYou}
          className="w-full mx-auto rounded-xl h-[800px] object-cover"
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
      <div className=" px-20 mt-10  flex flex-col gap-y-20">
        <AboutSection />
        <div className=" overflow-hidden">
          <Parallax translateX={[80, -80]}>
            <h1 className="text-[175px] -mb-28 text-banner font-[900] tracking-widest text-stroke">
              KLARKLARKLAR
            </h1>
          </Parallax>
          <Parallax translateX={[-80, 80]}>
            <h1 className=" text-[175px] text-banner font-[900] tracking-widest text-stroke">
              KOLTUKKOLTUKKOLTUK
            </h1>
          </Parallax>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className=" w-[700px] ">
            <img className="w-full  rounded-2xl" src={Tasarim} />
          </div>
          <div className="w-[750px] pr-12 ">
            <h1 className="text-5xl font-semibold">
              Siz İsteyin Biz Gerçekleştirelim
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
        <div className="flex items-center flex-row-reverse justify-between mt-10">
          <div className=" w-[700px] ">
            <img className="w-full  rounded-2xl" src={Tasarim2} />
          </div>
          <div className="w-[750px] pr-12 ">
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
      <footer className="relative mt-20 h-[800px]  ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
          src={FooterVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute  mx-auto inset-0 bg-gradient-to-t from-black/35 to-transparent rounded-lg"></div>
        <div className=" absolute z-20 flex flex-col text-white items-center justify-center w-full h-full gap-y-20">
          <h1 className="text-4xl font-semibold">
            Hayalinizdeki Tasarım Parmaklarınızın Ucunda
          </h1>
          <a className="p-5 border-2 border-white text-lg font-semibold hover:bg-white hover:text-black duration-300 ">
            Şimdi teklif alın
          </a>
        </div>
        <div className=" absolute h-[80px] bg-black w-full bottom-0 flex justify-center ">
          <div className="flex items-center gap-x-10 text-white">
            <a href="#">Klar-Koltuk</a>
            <a href="#">Hizmetler</a>
            <a href="#">Konum</a>
            <a href="#">İletişim</a>
            <a href="#">İletişim</a>
            <a className="flex items-center gap-x-5">
              <FaInstagram size={20} />
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
