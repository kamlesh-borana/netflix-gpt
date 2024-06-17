import React from "react";
import { IMG_CDN_URL } from "../config";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-28 flex-shrink-0">
      <img alt="Movie Card" src={`${IMG_CDN_URL}${movie?.poster_path}`} />
    </div>
  );
};

export default MovieCard;
