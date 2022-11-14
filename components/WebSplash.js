import React from "react";
import { motion as m } from "framer-motion";

export default function WebSplash({ splash }) {
  return (
    <div
      className={
        splash
          ? "fixed hidden md:flex right-0 top-0  px-20   h-screen w-full z-30 bg-black  flex-col items-center justify-center ease-in-out duration-1000"
          : "fixed hidden md:flex right-[-100%] top-0  px-20   h-screen w-full z-30 bg-black  flex-col items-center justify-center ease-in-out duration-1000"
      }
    >
      <m.h1
        className="text-2xl md:text-8xl  tracking-tight font-extrabold"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          },
        }}
      >
        WEB DEVELOPMENT
      </m.h1>
      <m.h1
        className="text-2xl md:text-5xl tracking-tight "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          },
        }}
      >
        PROJECTS
      </m.h1>
    </div>
  );
}
