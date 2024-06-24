import React from "react";
import { IMG_CDN_URL } from "../config";

const MovieCard = ({ movie }) => {
  return movie?.poster_path ? (
    <div className="w-24 md:w-28 flex-shrink-0">
      <img alt="Movie Card" src={`${IMG_CDN_URL}${movie?.poster_path}`} />
    </div>
  ) : null;
};

export default MovieCard;
