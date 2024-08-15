import React from "react";
import Klar from "../../../png/klar.jpg";
import Logo from "../../../png/logo.png"
export default function Header() {
  return (
    < >
      <div className="py-5 border-black flex justify-between mx-auto items-center px-32  ">
        <div className=" flex items-center gap-x-3">
          <img className="border border-black rounded-full" width={44} src={Klar} />
          <img width={80} src={Logo} />
        </div>
        <div>
          <ul className="flex gap-x-5">
            <li className="text- font-semibold text-black">ANASAYFA</li>
            <li className=" font-semibold text-black opacity-80">HİZMETLERİMİZ</li>
            <li className="font-semibold text-black opacity-80">İLETİŞİM</li>
          </ul> 
        </div>
      </div>
    </>
  );
}
