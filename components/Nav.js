import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

export default function Nav({ displayMenu, setDisplayMenu }) {
  const handleContactClick = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div className="absolute flex items-center justify-end md:justify-between w-full md:px-20 px-10 py-10 z-30">
      <div className="hidden md:flex w-[100px] md:w-[250px]">
        <Image src="/logo.png" alt="" width={1620} height={312} />
      </div>
      <ul className="flex items-center justify-center md:space-x-10 space-x-4 md:font-bold  text-xl tracking-wider uppercase ">
        <Link to="web" spy={true} smooth={true} offset={50} duration={500}>
          <li className="hidden md:flex cursor-pointer">Web Portfolio</li>
        </Link>
        <Link to="film" spy={true} smooth={true} offset={50} duration={500}>
          <li className="hidden md:flex cursor-pointer">Film Portfolio</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <li className="hidden md:flex cursor-pointer">About</li>
        </Link>

        <li
          onClick={handleContactClick}
          className=" cursor-pointer md:rounded-full border-2 px-2 py-1 md:px-4 md:py-2  "
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
}
