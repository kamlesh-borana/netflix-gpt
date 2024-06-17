import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const trailerVideo = useTrailerVideo();
  const bannerTrailerVideo = useSelector(
    (store) => store.movies.bannerTrailerVideo
  );
  const { title, overview } = bannerTrailerVideo || {};

  return (
    <>
      <div className="w-full">
        <div className="relative">
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
        <div className="text-white w-4/12 ml-24 absolute z-10 top-1/2">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-sm">{overview}</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-white text-black text-sm py-2 rounded-lg w-[40%] flex-1 hover:bg-opacity-80">
              Play
            </button>
            <button className="bg-slate-500 bg-opacity-50 text-white text-sm py-2 rounded-lg w-[40%] flex-1 hover:bg-opacity-80">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
