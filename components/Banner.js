import Image from "next/image";
import React, { useState } from "react";

import { motion as m } from "framer-motion";

export default function Banner({ displayMenu, setDisplayMenu }) {
  const [splash, setSplash] = useState(true);

  const handleContactClick = () => {
    setDisplayMenu(!displayMenu);
  };

  setTimeout(() => {
    setSplash(false);
  }, 3000);

  return (
    <section className="bg-[#171617] h-screen fixed flex  items-center justify-center">
      <div
        className={
          splash
            ? "fixed  flex right-0 top-0 space-y-2  w-full  h-screen  z-30 bg-black  flex-col items-center justify-center ease-in-out duration-1000"
            : "fixed  flex right-0 top-[-115%] space-y-2  h-screen w-full z-30 bg-black  flex-col items-center justify-center ease-in-out duration-1000"
        }
      >
        <m.div
          className="w-[300px] md:w-[800px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 1,
            },
          }}
        >
          <Image src="/logo.png" alt="" width={1620} height={312} />
        </m.div>
        <m.h1
          className="text-2xl md:text-4xl tracking-widest font-oswald"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 2,
            },
          }}
        >
          BY DAVID BETANCOURT
        </m.h1>
      </div>

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
      <div className="h-screen w-screen absolute top-0 left-0 bg-black/60 "></div>
      <div className="absolute text-center  flex items-center justify-center flex-col w-[95%]  h-[90%] ">
        <div className="md:-space-y-2">
          <m.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 3.5,
              },
            }}
            viewport={{ once: true }}
            className="w-[350px] md:w-[800px]"
          >
            <Image src="/logo.png" alt="" width={1620} height={312} />
          </m.div>

          <m.h2
            initial={{ opacity: 0, x: 100 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 3.5,
              },
            }}
            viewport={{ once: true }}
            className="font-light text-xl md:text-4xl text-white/80 tracking-wider"
          >
            PRODUCER. DEVELOPER. DESIGNER.
          </m.h2>
        </div>

        <button
          onClick={handleContactClick}
          className="text-xl font-medium uppercase px-6 py-2  md:px-8 md:py-4 mt-10  text-[black] tracking-widest bg-white/80 transition duration-300 hover:scale-110 "
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}
