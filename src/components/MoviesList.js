import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="text-white pt-2">
      <h3 className="text-lg md:text-xl mb-2">{title}</h3>
      <div className="flex overflow-x-scroll gap-x-3 no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
