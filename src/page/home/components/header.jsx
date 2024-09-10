import React from "react";
import Klar from "../../../png/klar.jpg";
import Logo from "../../../png/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
export default function Header() {
  return (
    <>
      <div className="py-5 border-black flex justify-between mx-auto items-center lg:px-32 md:px-16 px-4">
        <div className=" flex items-center gap-x-3">
          <img
            className="border border-black rounded-full w-[22.5px] md:w-[30px] lg:w-[44px] "
            src={Klar}
          />
          <img className="w-[35px] md:w-[50px] lg:w-[80px]" src={Logo} />
        </div>
        <div>
          <ul className="flex gap-x-5">
            <li className=" cursor-pointer text-[11px] md:text-sm lg:text-base font-semibold text-black">
              ANASAYFA
            </li>
            <a href="https://www.instagram.com/klarkoltuk/" target="_blank">
              <li className=" flex  cursor-pointer text-[11px] md:text-sm lg:text-base font-semibold text-black opacity-80">
                INSTAGRAM <FaInstagram className="h-5 ml-1" />
              </li>
            </a>
            <a href="https://wa.me/905333709349" target="_blank">
              <li className=" flex items-center cursor-pointer  text-[11px] md:text-sm lg:text-base font-semibold text-black opacity-80">
                İLETİŞİM <FaWhatsapp className="h-5 ml-1 " />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
