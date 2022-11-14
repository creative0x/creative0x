import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Menu({ displayMenu, setDisplayMenu }) {
  const handleContactClick = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div
      className={
        displayMenu
          ? "fixed h-screen left-0 top-0   w-[50%]  z-30 bg-[#171617]  ease-in-out duration-1000 hidden md:flex flex-col items-center justify-center py-28 "
          : "fixed h-screen left-[-50%] top-0   w-[50%]  z-30 bg-[#171617]  ease-in-out duration-1000 hidden  md:flex flex-col items-center justify-center  py-28 "
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/comp.mp4"
          class="top-0 left-0 h-screen w-screen object-cover"
        />,
      `,
        }}
      ></div>
      <div className="absolute top-0 left-0 h-screen w-full  bg-black/80 text-white"></div>
      <AiOutlineClose
        onClick={handleContactClick}
        className="absolute top-10 left-10 text-[whitesmoke] text-5xl rounded-full border transition duration-200 hover:text-black hover:bg-[whitesmoke] cursor-pointer"
      />
    </div>
  );
}
