import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MovieSuggestion = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
  return (
    <div className="bg-black pl-8">
      <div className="-mt-48 relative z-10">
        <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
        <MoviesList title={"Trending"} movies={nowPlayingMovies} />
        <MoviesList title={"Fan Fav"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default MovieSuggestion;
