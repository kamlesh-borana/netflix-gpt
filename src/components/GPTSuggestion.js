import React, { useEffect } from "react";
import { GET_API_OPTIONS, SEARCH_MOVIE_API_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addGPTMovieSuggestions } from "../redux/gptSearchSlice";
import MoviesList from "./MoviesList";

const GPTSuggestion = () => {
  const dispatch = useDispatch();

  const { gptMovieSuggestions, gptSuggestedMovieNames } = useSelector(
    (store) => store.gptSearch
  );

  useEffect(() => {
    if (!gptMovieSuggestions) {
      const suggestedMoviesPromises = gptSuggestedMovieNames?.map(
        (movieName) => {
          return fetch(SEARCH_MOVIE_API_URL(movieName, false), GET_API_OPTIONS)
            .then((response) => response.json())
            .then((response) => {
              console.log(response.results);
              //   if (response.results?.length === 1) {
              //     console.log(response.results[0]);
              //     return response.results[0];
              //   } else {
              //     const searchedMovie = response.results?.filter(
              //       (movie) => movie?.title === movieName
              //     )[0];
              //     console.log(searchedMovie);
              //     return searchedMovie;
              //   }
              return response.results;
            });
        }
      );
      Promise.all(suggestedMoviesPromises).then((suggestedMovies) => {
        dispatch(addGPTMovieSuggestions(suggestedMovies));
      });
    }
  }, []);

  return (
    <div className="bg-black text-white bg-opacity-70 mt-16 w-full pl-6 md:pl-8 pb-6 md:pb-8 pt-6">
      <h2 className="text-xl md:text-2xl mb-2">GPT Suggested Movie Names</h2>
      {gptSuggestedMovieNames?.map((movieName, index) => {
        return (
          <div key={index} className="">
            {gptMovieSuggestions && (
              <MoviesList
                title={movieName}
                movies={gptMovieSuggestions[index]}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GPTSuggestion;
