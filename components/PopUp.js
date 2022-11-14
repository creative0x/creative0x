import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

export default function PopUp({
  setDisplayPopUp,
  displayPopUp,
  vidUrl,
  playing,
  setPlaying,
}) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const handleCloseClick = () => {
    setDisplayPopUp(false);
    console.log(displayPopUp);
    setPlaying(false);
  };
  return (
    <div
      className={
        displayPopUp
          ? "flex fixed bg-black/90 top-0 h-screen z-50 w-full items-center justify-center"
          : "hidden absolute bg-black/90 top-0 h-screen z-50 w-full items-center justify-center"
      }
    >
      <AiOutlineClose
        onClick={handleCloseClick}
        className="absolute top-10 left-10 md:top-40 md:left-40 text-[whitesmoke] text-6xl rounded-full border transition duration-200 hover:text-black hover:bg-[whitesmoke] cursor-pointer"
      />
      <div className="w-full h-full md:w-[60%] md:h-[60%]">
        {hasWindow && (
          <ReactPlayer
            url={vidUrl}
            width="100%"
            height="100%"
            playing={playing}
            controls={true}
          />
        )}
      </div>
    </div>
  );
}
