import Image from "next/image";
import React, { useState } from "react";
import Project from "./Project";

export default function WebPortfolio() {
  const [color, setColor] = useState("[#171617]");

  const changeColor = () => {
    if (window.scrollY >= 900 && window.scrollY < 2000) {
      setColor("[red]");
    } else if (window.scrollY >= 2000 && window.scrollY < 3000) {
      setColor("[green]");
    } else if (window.scrollY >= 3000 && window.scrollY < 4000) {
      setColor("[orange]");
    } else {
      setColor("[#171617]");
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <section>
      <div
        className={
          color == "[red]"
            ? `pt-20 md:py-40 bg-[red] flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in`
            : color == "[green]"
            ? "pt-20 md:py-40 bg-[green]  flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
            : color == "[orange]"
            ? "pt-20 md:py-40 bg-[orange]  flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
            : "pt-20 md:py-40 bg-[#171617]   flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
        }
        id="web"
      >
        <h1 className="mb-20 text-5xl md:text-8xl font-extrabold ">
          WEB DEVELOPMENT PORTFOLIO
        </h1>
        <Project
          title="NETFLIX SOCIAL APP"
          img="/netflix.png"
          desc="Front-end development, user-interface design, firebase database, &
          stripe payments integration"
          credits="Engineered & designed // David Betancourt"
        />
        <Project
          title="FILM MAKER WEBSITE"
          img="/jared.png"
          desc="Front-end development, user-interface design, video edit, & social integration"
          credits="Developed & designed // David Betancourt"
        />
        <Project
          title="ROOFING HOME PAGE"
          img="/roofing.png"
          desc="Front-end development, user-interface design, video edit"
          credits="Developed & designed // David Betancourt"
        />
      </div>
    </section>
  );
}
