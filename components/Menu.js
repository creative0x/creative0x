import React, { useState } from "react";

import { GrMail } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiStripe,
  SiPython,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

export default function Menu({
  displayMenu,
  displayPopUp,
  setDisplayPopUp,
  vidUrl,
  setVidUrl,
  setPlaying,
  setDisplayMenu,
}) {
  const handleContactClick = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleIouClick = () => {
    setVidUrl("https://www.youtube.com/watch?v=CaiDQ4CYDv8");
    setDisplayPopUp(true);
    console.log(vidUrl);
    setPlaying(true);
  };

  const handleNetflixClick = () => {
    setVidUrl("https://www.youtube.com/watch?v=B8-51bFHnsA&t");
    setDisplayPopUp(true);
    console.log(displayPopUp);
    setPlaying(true);
  };

  const handleBowlClick = () => {
    setVidUrl("https://www.youtube.com/watch?v=nwasFa9lwkM");
    setDisplayPopUp(true);
    console.log(displayPopUp);
    setPlaying(true);
  };

  return (
    <div
      className={
        displayMenu
          ? "absolute right-0  space-y-10 px-4 md:px-20 overflow-y-hidden   w-full md:w-[50%]  z-30 bg-[whitesmoke] text-[#171617]  ease-in-out duration-1000  flex flex-col items-center pt-10 pb-20"
          : "fixed right-[-100%]  space-y-10 px-4 md:px-20  overflow-y-hidden w-full  md:w-[50%]  z-30 bg-[whitesmoke] text-[#171617]  ease-in-out duration-1000  flex flex-col items-center  pt-10 pb-20 "
      }
    >
      <AiOutlineClose
        onClick={handleContactClick}
        className="absolute flex md:hidden top-3 left-3  text-5xl rounded-full border border-black transition duration-200 hover:text-black hover:bg-[whitesmoke] cursor-pointer"
      />
      <h1 className="text-7xl font-extrabold tracking-tighter font-oswald">
        ABOUT ME
      </h1>
      <div className="border-l border-[#171617] h-16"></div>
      <div className="text-center space-y-2 ">
        <p className="text-2xl tracking-widest !leading-[3rem] ">
          I am an innovative and talented visual creator with a passion for web
          development, film production, motion design, and fitness. I gain my
          inspiration from visually appealing and outstanding work and look to
          improve, redesign, and reimagine those ideas into something{" "}
          <span className="text-[red] font-medium">
            fresh, user-friendly, and remunerative.
          </span>
        </p>
      </div>

      <h1 className="pt-10 text-center text-7xl font-extrabold tracking-tighter font-oswald">
        RECENT WORK
      </h1>
      <div className="border-l border-[#171617] h-16 text-center"></div>
      <div className=" space-x-10 space-y-20">
        <div className="space-y-20">
          {/* Project 1 */}

          <div className="md:w-[600px] flex flex-col items-center  text-center tracking-tighter transition duration-200 hover:scale-110 cursor-pointer">
            <a
              href="https://netflix-social.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/netflix.png"
                alt=""
                width={1620}
                height={312}
                className="w-full"
              />
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
                Netflix Social Web App
              </h3>
              <h4 className="text-lg md:text-xl">
                Front-end Dev / UI Design / Database / Stripe{" "}
              </h4>
            </a>
          </div>

          {/* Project 2 */}
          <div
            onClick={handleIouClick}
            className="w-[600px] flex flex-col items-center  text-center tracking-tighter transition duration-200 hover:scale-110  cursor-pointer"
          >
            <Image
              src="/iouthumb.jpg"
              alt=""
              width={1620}
              height={312}
              className="w-full"
            />
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              I.O.U. One (Short Film)
            </h3>
            <h4 className="text-xl">Audio Engineer / Film Coordinator</h4>
          </div>
          {/* Project 3 */}

          <div className="w-[600px] flex flex-col items-center  text-center tracking-tighter transition duration-200 hover:scale-110  cursor-pointer">
            <a
              href="https://roofing-sepia.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/roofing.png" alt="" width={1620} height={312} />
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
                Roofing Co. Home Page
              </h3>
              <h4 className="text-xl">Front-end Dev / Responsive Design</h4>
            </a>
          </div>

          {/* Project 4 */}
          <div
            onClick={handleNetflixClick}
            className="w-[600px] flex flex-col items-center  tracking-tighter transition duration-200 hover:scale-110  cursor-pointer"
          >
            <Image src="/netflixthumb.jpg" alt="" width={1620} height={312} />
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              Netflix Social Promo Ad
            </h3>
            <h4 className="text-xl">Written / Edited / Produced</h4>
          </div>
          {/* Project 5 */}
          <div
            onClick={handleBowlClick}
            className="w-[600px] flex flex-col items-center  tracking-tighter transition duration-200 hover:scale-110  cursor-pointer"
          >
            <Image src="/bowlthumb.jpg" alt="" width={1620} height={312} />
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              Bowl El Paso Promo
            </h3>
            <h4 className="text-xl">Film Production assistant</h4>
          </div>
          {/* Project 6 */}

          <div className="w-[600px] flex flex-col items-center  text-center tracking-tighter transition duration-200 hover:scale-110  cursor-pointer">
            <a
              href="https://jared-portfolio-rosy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/jared.png" alt="" width={1620} height={312} />
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
                Film Maker Website
              </h3>
              <h4 className="text-xl">Front-end Dev / Responsive Design</h4>
            </a>
          </div>
        </div>
      </div>
      <h1 className="pt-20 text-center  text-7xl font-extrabold tracking-tighter font-oswald">
        WHAT I CAN DO
      </h1>
      <div className="border-l border-[#171617] h-16"></div>

      <div className="flex space-x-6 md:space-x-16">
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiAdobephotoshop className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Photoshop</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiAdobepremierepro className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Premiere</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiAdobeaftereffects className="text-6xl md:text-8xl" />
          <h3 className="text-sm">After Effects</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiHtml5 className="text-6xl md:text-8xl" />
          <h3 className="text-sm">HTML5</h3>
        </div>
      </div>
      <div className="flex space-x-8 md:space-x-16">
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiCss3 className="text-6xl md:text-8xl" />
          <h3 className="text-sm">CSS3</h3>
        </div>
        <div className="flex flex-col items-center justify-center font-medium text-lg">
          <SiJavascript className="text-6xl md:text-8xl" />
          <h3 className="text-sm">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiReact className="text-6xl md:text-8xl" />
          <h3 className="text-sm">React.Js</h3>
        </div>
        <div className="flex flex-col items-center justify-center font-medium text-lg">
          <SiNextdotjs className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Next.Js</h3>
        </div>
      </div>
      <div className="flex space-x-8 md:space-x-16">
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiTailwindcss className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Tailwind</h3>
        </div>
        <div className="flex flex-col items-center justify-center font-medium text-lg">
          <SiMongodb className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Mongo DB</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiStripe className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Stripe</h3>
        </div>
        <div className="flex flex-col items-center  justify-center font-medium text-lg">
          <SiPython className="text-6xl md:text-8xl" />
          <h3 className="text-sm">Python</h3>
        </div>
      </div>

      <h1 className="pt-20 text-center text-6xl font-extrabold tracking-tighter font-oswald">
        4 YEARS OF EXPERIENCE IN DIGITAL MEDIA
      </h1>
      <div className="border-l border-[#171617] h-16"></div>
      <p className="text-2xl text-center !leading-[3rem]">
        I&apos;ve been responsible for managing over 12 business clients and
        contributed directly to{" "}
        <span className="text-[red] font-medium">
          website development & design, social media ad copywriting, UI/UX
          design, video and static media production, live streaming production,
        </span>{" "}
        as well as coordinating promotional advertisements.
      </p>
      <h1 className="pt-20 text-center text-6xl font-extrabold tracking-tighter font-oswald">
        CONTACT ME
      </h1>
      <div className="border-l border-[#171617] h-16"></div>
      <div className="flex space-x-6 text-4xl md:text-5xl">
        <a href="mailto: creative0xproduction@gmail.com">
          <GrMail className="hover:scale-125 duration-200 cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/creative0x"
          target="_blank"
          rel="noreferrer"
        >
          <ImFacebook className="hover:scale-125 duration-200 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/Creative0x1"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="hover:scale-125 duration-200 cursor-pointer" />
        </a>
        <a
          href="https://instagram.com/creative0x1"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill className="hover:scale-125 duration-200 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
