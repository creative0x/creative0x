import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project({ title, img, desc, credits, link }) {
  return (
    <div className="h-screen space-y-10  md:my-28 flex items-center justify-center flex-col">
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={img}
          alt=""
          width={1920}
          height={1080}
          className="w-[940px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] transition ease-in duration-200 hover:scale-105 cursor-pointer	"
        />
      </a>

      <div className="px-2 md:px-72 my-10 space-y-10 md:space-y-6  ">
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className=" text-5xl md:text-7xl font-extrabold drop-shadow-md ">
            {title}
          </h1>
        </a>

        <p className="text-xl md:text-3xl font-medium  tracking-wide  drop-shadow-sm ">
          {desc}
        </p>
        <p className=" text-xl md:text-2xl  tracking-wide  drop-shadow-sm ">
          {credits}
        </p>
      </div>
    </div>
  );
}
