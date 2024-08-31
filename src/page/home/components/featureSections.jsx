import React from "react";

export default function FeatureSections({Title, Paragraph, Button, Img, Reverse,bg}) {   
  return (
    <>
    <div className={`flex flex-col h-full gap-y-10 lg:flex-row items-center justify-between ${Reverse ? "lg:flex-row-reverse" : "flex-row"} ${bg ? "lg:bg-black/5" : ""} mt-10 rounded-2xl`}>
    <div className=" w-[350px]  md:w-[600px] desktop_table:w-[400px] xl:w-[500px] desktop:w-[700px] ">
          <img loading="lazy" className="w-full  rounded-2xl" src={Img} />
        </div>
        <div className="text-center md:text-left w-[350px]  md:w-[580px] desktop_table:w-[450px] xl:w-[550px] desktop:w-[750px] md:pl-6 xl:pl-8 desktop:pl-12  ">
          <h1 className="text-xl md:text-4xl desktop_table:text-2xl xl:text-3xl desktop:text-5xl font-semibold">
            {Title}
          </h1>
          <p className="text-sm mt-5 mb-2 md:text-lg desktop_table:mt-5 desktop_table:mb-3  xl:text-lg desktop:text-xl">
           {Paragraph}  
          </p>
          <button className="text-sm px-4 py-2 md:px-8 md:py-4 md:text-lg  xl:text-lg xl:px-6 xl:py-3 desktop_table:px-5 deskto_table:py-2.5   mt-5 rounded-full font-semibold desktop:px-8 desktop:py-4 border-black border-2    hover:bg-black/20 hover:border-white  desktop:text-xl">
            {Button}
          </button>
        </div>
      </div>
    </>
  );
}
