import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section
      id="about"
      className="  bg-[#0d0c0d]  w-full  flex md:flex-row flex-col items-center justify-center text-white px-4 md:px-20 py-20 space-y-20   "
    >
      <div className="md:w-[50%] flex flex-col space-y-5 items-center justify-center">
        <h3 className="font-bold text-6xl">About Me</h3>
        <h4 className="font-light text-4xl">David Betancourt</h4>
        <p className="md:text-xl">
          I am an innovative and talented visual creator with a passion for web
          development, film production, motion design, and fitness. I gain my
          inspiration from visually appealing and outstanding work and look to
          improve, redesign, and reimagine those ideas into something fresh,
          user-friendly, and remunerative.
        </p>
        <p className="md:text-xl">
          I have 4 years of experience in digital media. I&apos;ve been
          responsible for managing over 12 business clients and contributed
          directly to website development, social media ad copywriting, UI/UX
          design, video and static media production, live streaming production,
          as well as directing promotional advertisements.
        </p>
        <p className="md:text-xl">
          Clients that I worked with include festivals, concerts, parades,
          videographers, entertainment centers, restaurants, bars, medical
          facilities, roofing contractors, home builders and others.
        </p>
        <p className="md:text-xl">
          I look forward to building something amazing for you and hope to
          hearing from you soon.
        </p>
      </div>
      <div className="md:w-[50%] flex flex-col items-center justify-center space-y-10 ">
        <div className="w-[300px] md:w-[400px]">
          <Link href="/">
            <Image src="/logo.png" alt="" width={1620} height={312} />
          </Link>
        </div>
        <div className="flex items-center flex-col space-y-2">
          <h3 className="text-4xl ">Lets Connect? </h3>
          <div className="flex items-center text-4xl space-x-4">
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
        <h5 className="pt-20">CREATIVE0X ALL RIGHTS RESERVED © 2022</h5>
      </div>
    </section>
  );
}
