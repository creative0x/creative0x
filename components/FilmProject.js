import React from "react";

export default function Project({ title, vid, desc, credits, link }) {
  return (
    <div className="h-screen space-y-10 md:my-28 flex items-center justify-center flex-col">
      <div>
        <a target="_blank" rel="noreferrer" href={link}>
          <video
            loop
            autoPlay
            muted
            src={vid}
            className="shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] w-full md:w-[1200px] md:h-[500px] md:rounded-3xl top-0 left-0  object-cover transition ease-in duration-200 hover:scale-105 cursor-pointer"
          />
        </a>
      </div>

      <div className="px-2 md:px-72 my-10 space-y-10 md:space-y-4">
        <a target="_blank" rel="noreferrer" href={link}>
          <h1 className=" text-5xl md:text-8xl font-extrabold drop-shadow-md  ">
            {title}
          </h1>
        </a>

        <p className="text-xl md:text-3xl font-medium  tracking-wide  drop-shadow-sm ">
          {desc}
        </p>
        <p className="text-xl md:text-2xl  tracking-wide  drop-shadow-sm ">
          {credits}
        </p>
      </div>
    </div>
  );
}
