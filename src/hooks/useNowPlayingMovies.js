import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { GET_API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../config";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      fetch(NOW_PLAYING_MOVIES_API_URL, GET_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.results);
          dispatch(addNowPlayingMovies(response.results));
        })
        .catch((err) => console.error(err));
    }
  }, []);
};

export default useNowPlayingMovies;
