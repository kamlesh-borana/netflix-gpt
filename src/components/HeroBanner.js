import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const trailerVideo = useTrailerVideo();
  const bannerMovie = useSelector((store) => store.movies.bannerMovie);
  const { title, overview } = bannerMovie || {};

  return (
    <>
      <div className="w-full pt-24 md:pt-0 bg-black relative md:static">
        <div className="relative top-0">
          <iframe
            className="aspect-video"
            width="100%"
            // height="100%"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&playlist=${trailerVideo?.key}&loop=1&disablekb=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10"></div>
        </div>
        <div className="text-white w-4/12 ml-6 md:ml-8 lg:ml-16 xl:ml-24 absolute z-10 top-[70%] md:top-[40%] lg:top-1/2">
          <h2 className="text-lg md:text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-sm hidden xl:block">{overview}</p>
          <div className="mt-1 md:mt-4 flex gap-4">
            <button className="bg-white text-black text-sm py-1 md:py-2 rounded-lg w-[60%] md:w-[40%] md:flex-1 hover:bg-opacity-80">
              Play
            </button>
            <button className="bg-slate-500 bg-opacity-50 text-white text-sm py-2 rounded-lg w-[40%] flex-1 hover:bg-opacity-80 hidden md:block">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
