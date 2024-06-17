import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MovieSuggestion = () => {
  const { nowPlaying, popular, topRated, upcoming } = useSelector(
    (store) => store.movies
  );
  return (
    <div className="bg-black pl-8">
      <div className="-mt-48 relative z-10">
        <MoviesList title={"Now Playing"} movies={nowPlaying} />
        <MoviesList title={"Popular"} movies={popular} />
        <MoviesList title={"Top Rated"} movies={topRated} />
        <MoviesList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
};

export default MovieSuggestion;
