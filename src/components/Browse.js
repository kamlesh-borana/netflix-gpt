import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroBanner from "./HeroBanner";
import { useSelector } from "react-redux";
import MovieSuggestion from "./MovieSuggestion";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    // const user = auth.currentUser;
    if (user && !user?.isLoggedIn) {
      navigate("/");
    }
  }, [user]);

  if (!user?.isLoggedIn) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      {/*
        Hero Banner
          - Trailer Video Background
          - Trailer Video Info

        Movie Suggestion
          - Movies List * N
            - Movie Card * N
       */}
      <HeroBanner />
      <MovieSuggestion />
    </div>
  );
};

export default Browse;
