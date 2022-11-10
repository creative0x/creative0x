import Image from "next/image";
import React, { useState } from "react";
import { GrMail, GrClose } from "react-icons/gr";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m } from "framer-motion";

export default function Banner({ displayMenu, setDisplayMenu }) {
  const handleContactClick = () => {
    setDisplayMenu(!displayMenu);
  };

  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 3000);

  return (
    <section className="bg-[#171617] h-screen flex  items-center justify-center">
      <div
        className={
          splash
            ? "fixed right-0 top-0 space-y-2 px-10   h-screen w-full z-30 bg-black flex flex-col items-center justify-center ease-in-out duration-1000"
            : "fixed right-0 top-[-100%] space-y-2 px-10   h-screen w-full z-30 bg-black flex flex-col items-center justify-center ease-in-out duration-1000"
        }
      >
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 1,
            },
          }}
          className="w-[400px] md:w-[800px]"
        >
          <Image src="/logo.png" alt="" width={1620} height={312} />
        </m.div>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 2,
            },
          }}
          className="text-2xl md:text-4xl tracking-widest font-oswald"
        >
          BY DAVID BETANCOURT
        </m.h1>
      </div>
      <div
        className={
          displayMenu
            ? "fixed right-0 top-0 space-y-10 px-10   h-screen w-[30vw] z-30 bg-[#171617] flex-col items-center justify-center ease-in-out duration-1000 "
            : "fixed right-[-100%] top-0 space-y-10 px-10   h-screen w-[30vw] z-30 bg-[#171617] flex-col items-center justify-center ease-in-out duration-1000 "
        }
      >
        <AiOutlineClose
          onClick={handleContactClick}
          className=" cursor-pointer text-6xl absolute top-10 left-10"
        />
        <div className="flex">
          <div className="w-[250px]">
            <Image src="/logo.png" alt="" width={1620} height={312} />
          </div>
        </div>

        <h1 className="font-bold text-5xl text-center">
          REACH ME VIA EMAIL OR SOCIAL MEDIA
        </h1>
        <div className="flex space-x-6 text-5xl">
          <GrMail className="hover:scale-125 duration-200 cursor-pointer" />
          <ImFacebook className="hover:scale-125 duration-200 cursor-pointer" />
          <ImTwitter className="hover:scale-125 duration-200 cursor-pointer" />
          <RiInstagramFill className="hover:scale-125 duration-200 cursor-pointer" />
        </div>
      </div>
      <div>
        <video
          loop
          muted
          autoPlay
          src="/comp.mp4"
          className=" top-0 left-0 h-screen w-screen object-cover "
        />
      </div>
      <div className="absolute  flex items-center flex-col md:-space-y-6">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 3.5,
            },
          }}
          viewport={{ once: true }}
          className="font-extrabold text-center text-white/90 text-6xl md:text-[150px] tracking-tighter "
        >
          VISUAL CREATIVE
        </m.h1>
        <m.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 3.5,
            },
          }}
          viewport={{ once: true }}
          className="font-medium text-xl md:text-6xl text-white/80 tracking-wider"
        >
          PRODUCER. DEVELOPER. DESIGNER.
        </m.h2>
      </div>
    </section>
  );
}
