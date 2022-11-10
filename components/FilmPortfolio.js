import Image from "next/image";
import React, { useState } from "react";
import FilmProject from "./FilmProject";

export default function FilmPortfolio() {
  const [color, setColor] = useState("[#171617]");

  const changeColor = () => {
    if (window.scrollY >= 4500 && window.scrollY < 5500) {
      setColor("[pink]");
    } else if (window.scrollY >= 5500 && window.scrollY < 6500) {
      setColor("[black]");
    } else if (window.scrollY >= 6500 && window.scrollY < 7500) {
      setColor("[yellow]");
    } else if (window.scrollY >= 7500 && window.scrollY < 8500) {
      setColor("[purple]");
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
          color == "[pink]"
            ? `pt-20 md:py-40 bg-[pink] flex flex-col items-center text-center justify-center text-black  z-10 transition duration-500 ease-in`
            : color == "[black]"
            ? "pt-20 md:pt-40 bg-red-600  flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
            : color == "[yellow]"
            ? "pt-20 md:pt-40 bg-[yellow] text-black  flex flex-col items-center text-center justify-center  z-10 transition duration-500 ease-in"
            : color == "[purple]"
            ? "pt-20 md:pt-40 bg-[purple]  flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
            : "pt-20 md:pt-40 bg-[#171617]  flex flex-col items-center text-center justify-center text-white  z-10 transition duration-500 ease-in"
        }
        id="film"
      >
        <h1 className="mb-20 text-6xl md:text-8xl font-extrabold">
          FILM PORTFOLIO
        </h1>
        <FilmProject
          title="I.O.U. ONE"
          vid="/iou.mp4"
          desc="Thriller-drama short film written by Jared Carver"
          credits="Film Production Assistant/Coordinator // David B"
          link="https://www.youtube.com/watch?v=CaiDQ4CYDv8&t=2s"
        />
        <FilmProject
          title="NETFLIX SOCIAL PROMO"
          vid="/netflix.mp4"
          desc="Promotional advertisment for Netflix Social application"
          credits="Edited/Produced/Written // David Betancourt"
          link="https://www.youtube.com/watch?v=B8-51bFHnsA"
        />
        <FilmProject
          title="BOWL EL PASO AD"
          vid="/bowl.mp4"
          desc="Promotional advertisment for Bowl El Paso's Pool Hall"
          credits="Production Assistant // David Betancourt"
          link="https://vimeo.com/769278251"
        />
        <FilmProject
          title="ROLLER BOMB AD"
          vid="/roller.mp4"
          desc="Promotional advertisment for Roller Bomb skating rink"
          credits="Production Assistant // David Betancourt"
          link="https://vimeo.com/769278272"
          color={color}
        />
      </div>
    </section>
  );
}
